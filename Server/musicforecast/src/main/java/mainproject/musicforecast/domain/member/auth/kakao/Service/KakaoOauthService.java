package mainproject.musicforecast.domain.member.auth.kakao.Service;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import mainproject.musicforecast.domain.member.auth.jwt.JwtTokenizer;
import mainproject.musicforecast.domain.member.auth.utils.CustomAuthorityUtils;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.domain.member.service.MemberService;
import mainproject.musicforecast.domain.provider.Provider;
import mainproject.musicforecast.domain.provider.ProviderRepository;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.sound.midi.MetaMessage;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.security.Principal;
import java.util.*;

@Service
public class KakaoOauthService extends SimpleUrlAuthenticationSuccessHandler {
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final ProviderRepository providerRepository;
    private final CustomAuthorityUtils authorityUtils;
    private final JwtTokenizer jwtTokenizer;
    public KakaoOauthService(MemberService memberService,
                             MemberRepository memberRepository,
                             ProviderRepository providerRepository,
                             CustomAuthorityUtils authorityUtils,
                             JwtTokenizer jwtTokenizer) {
        this.memberService = memberService;
        this.memberRepository = memberRepository;
        this.providerRepository = providerRepository;
        this.authorityUtils = authorityUtils;
        this.jwtTokenizer = jwtTokenizer;
    }

    public String getKakaoAccessToken (String code) {
        String access_Token = "";
        String refresh_Token = "";
        String reqURL = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            //POST 요청을 위해 기본값이 false인 setDoOutput을 true로
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            //POST 요청에 필요로 요구하는 파라미터 스트림을 통해 전송
            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=a71f4198d53e651595dadeace7f63fef"); // TODO REST_API_KEY 입력
            sb.append("&redirect_uri=http://localhost:8080/oauth/kakao"); // TODO 인가코드 받은 redirect_uri 입력
            sb.append("&code=" + code);
            bw.write(sb.toString());
            bw.flush();

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리에 포함된 클래스로 JSON파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            access_Token = element.getAsJsonObject().get("access_token").getAsString();
            refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("access_token : " + access_Token);
            System.out.println("refresh_token : " + refresh_Token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return access_Token;
    }

    public MultiValueMap createKakaoUser(String token){

        String reqURL = "https://kapi.kakao.com/v2/user/me";
        MultiValueMap<String, String> map = new LinkedMultiValueMap<>();

        //access_token을 이용하여 사용자 정보 조회
        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

            //결과 코드가 200이라면 성공
            int responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);

            //요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body : " + result);

            //Gson 라이브러리로 JSON파싱
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            long id = element.getAsJsonObject().get("id").getAsLong();
            boolean hasEmail = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("has_email").getAsBoolean();
            String email = "";
            String nickname = element.getAsJsonObject().get("properties").getAsJsonObject().get("nickname").getAsString();;
            if(hasEmail){
                email = element.getAsJsonObject().get("kakao_account").getAsJsonObject().get("email").getAsString();
            }

            System.out.println("id : " + id);
            System.out.println("email : " + email);
            System.out.println("nickname : " + nickname);

            br.close();

            Optional<Member> optionalMember = memberRepository.findByEmail(email);

            Member member = null;

            if(optionalMember.isPresent()) {
                member = optionalMember.get();
            }else {
                member = saveMember(email, nickname);
            }

            List<String> authorities = authorityUtils.createRoles(email);

            String accessToken = delegateAccessToken(member, authorities);
            String refreshToken = delegateRefreshToken(member.getEmail());

            map.put("Authorization", Collections.singletonList("Bearer " + accessToken));
            map.put("Refresh", Collections.singletonList(refreshToken));
            map.put("memberId", Collections.singletonList(Long.toString(member.getMemberId())));
            map.put("nickname", Collections.singletonList(nickname));

        } catch (IOException e) {
            e.printStackTrace();
        }

        return map;
    }

    private Member saveMember(String email, String nickname) {
        Member member = new Member();

        member.setEmail(email);
        member.setNickname(nickname);
        member.setIntro("자기소개를 입력해주세요.");
        member.setImage("https://cdn-icons-png.flaticon.com/512/1361/1361876.png");

        Provider provider = providerRepository.findByProviderName("KaKao");
        member.setProvider(provider);

        //memberService.findExistsEmail(email);
        memberService.createMember(member);

        return member;
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
}
