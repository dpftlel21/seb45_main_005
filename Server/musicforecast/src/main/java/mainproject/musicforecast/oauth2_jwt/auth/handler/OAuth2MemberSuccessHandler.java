package mainproject.musicforecast.oauth2_jwt.auth.handler;

import mainproject.musicforecast.domain.member.auth.jwt.JwtTokenizer;
import mainproject.musicforecast.domain.member.auth.utils.CustomAuthorityUtils;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.domain.member.service.MemberService;
import mainproject.musicforecast.domain.provider.Provider;
import mainproject.musicforecast.domain.provider.ProviderRepository;
import mainproject.musicforecast.global.exception.BusinessLogicException;
import mainproject.musicforecast.global.exception.ExceptionCode;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.*;

//OAuth2 인증에 성공하면 호출되는 핸들러
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private final ProviderRepository providerRepository;
    private final MemberRepository memberRepository;

    public OAuth2MemberSuccessHandler(JwtTokenizer jwtTokenizer,
                                      CustomAuthorityUtils authorityUtils,
                                      MemberService memberService,
                                      ProviderRepository providerRepository,
                                      MemberRepository memberRepository) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
        this.providerRepository = providerRepository;
        this.memberRepository = memberRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User)authentication.getPrincipal();

        String email = String.valueOf(oAuth2User.getAttributes().get("email")); // (3)
        List<String> authorities = authorityUtils.createRoles(email);           // (4)

        Member member = saveMember(email);  // (5)
//TODO Oauth 인증 후 email이 존재하는 email인지 확인한다.
// 그러면 그 이메일이 구글이라면 구글로 로그인 성공한 걸로 치고 리다이렉트 해주고 싶은데..
// Optional이라 객체가 있냐 없냐만 확인할 수 있고 그 안에 Provider가 뭔지 확인할 수 없다.
// 자체 로그인으로 가입된 회원이면 그걸로 로그인하라 하고 구글회원이면 로그인 성공으로 치고 리다이렉트해주고 싶은데 방법이 없을까
// findByEamil을 Member로 하나 더 만들지 못하고 그렇다고 Member로 새로 만들면 이전에 Optional을 쓰는 로직을 다 갈아엎어야한다. 자신이 없다. 생각해보자.
//        Member findMember = memberRepository.findByEmail(email);
//        private void verifyExistsEmail(String email) {
//            Optional<Member> member = memberRepository.findByEmail(email);
//            if(member.isPresent()) {
//                throw new BusinessLogicException(ExceptionCode.MEMBER_IS_EXIST);
//            }
//        }
        redirect(request, response, member, authorities);  // (6)
    }

    private Member saveMember(String email) {
        Member member = new Member();
        member.setEmail(email);
        Provider provider = providerRepository.findByProviderName("Google");
        member.setProvider(provider);
        memberService.createMember(member);
        return member;
    }

    private void redirect(HttpServletRequest request, HttpServletResponse response, Member member, List<String> authorities) throws IOException {
        String accessToken = delegateAccessToken(member, authorities);  // (6-1)
        String refreshToken = delegateRefreshToken(member.getEmail());     // (6-2)

        String uri = createURI(accessToken, refreshToken).toString();   // (6-3)

        //헤더에 토큰 넣기
        response.setHeader("Authorization", "Bearer " + accessToken);
        response.setHeader("Refresh", refreshToken);

        getRedirectStrategy().sendRedirect(request, response, uri);   // (6-4)
    }

    private String delegateAccessToken(Member member, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>(); //토큰에 넣고싶은 member 정보
        claims.put("memberId", member.getMemberId());
        claims.put("roles", authorities);

        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }

    private URI createURI(String accessToken, String refreshToken) {
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("access_token", accessToken);
        queryParams.add("refresh_token", refreshToken);

        //TODO Oauth2 성공 후 리다이렉트 할 주소 넣기
        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
//                .port(80)
                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();

//        return UriComponentsBuilder
//                .newInstance()
//                .scheme("http")
//                .host("seb008stockholm.s3-website.ap-northeast-2.amazonaws.com")
////                .port(8080)
//                .path("/")
//                .queryParams(queryParams)
//                .build()
//                .toUri();
    }

}
