package mainproject.musicforecast.oauth2_jwt.auth.handler;

import mainproject.musicforecast.domain.member.auth.jwt.JwtTokenizer;
import mainproject.musicforecast.domain.member.auth.utils.CustomAuthorityUtils;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.service.MemberService;
import mainproject.musicforecast.domain.provider.Provider;
import mainproject.musicforecast.domain.provider.ProviderRepository;
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
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//OAuth2 인증에 성공하면 호출되는 핸들러
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private final ProviderRepository providerRepository;

    public OAuth2MemberSuccessHandler(JwtTokenizer jwtTokenizer,
                                      CustomAuthorityUtils authorityUtils,
                                      MemberService memberService,
                                      ProviderRepository providerRepository) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
        this.providerRepository = providerRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User)authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email")); // (3)
        List<String> authorities = authorityUtils.createRoles(email);           // (4)

        Member member = saveMember(email);  // (5)
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
        getRedirectStrategy().sendRedirect(request, response, uri);   // (6-4)
    }

    private String delegateAccessToken(Member member, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
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

        return UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("localhost")
//                .port(80)
                .path("/receive-token.html")
                .queryParams(queryParams)
                .build()
                .toUri();
    }

}
