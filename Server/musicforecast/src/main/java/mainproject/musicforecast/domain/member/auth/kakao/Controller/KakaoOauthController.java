package mainproject.musicforecast.domain.member.auth.kakao.Controller;

import mainproject.musicforecast.domain.member.auth.kakao.Service.KakaoOauthService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/oauth")
public class KakaoOauthController {
    public KakaoOauthService kakaoOauthService;
    public KakaoOauthController(KakaoOauthService kakaoOauthService) {
        this.kakaoOauthService = kakaoOauthService;
    }

    @GetMapping("/kakao")
    public ResponseEntity kakaoCallback(@RequestParam("code") String code) {
        System.out.println(code);
        String token = kakaoOauthService.getKakaoAccessToken(code);
        MultiValueMap map = kakaoOauthService.createKakaoUser(token);

        HttpHeaders tokenHeader = new HttpHeaders(map);

//        String jsonResponse = (String) map.get("nickname");
//
//        map.remove("nickname");
        //String jsonResponse = "성공";

        Object jsonResponse = map.get("nickname");

        return ResponseEntity.ok().headers(tokenHeader).body(jsonResponse);
    }
}
