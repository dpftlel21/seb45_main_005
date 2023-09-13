package mainproject.musicforecast.domain.member.auth.kakao;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/oauth")
public class KakaoOauthController {

    @GetMapping("/kakao")
    public void kakaoCallback(@RequestParam("code") String code) {
        System.out.println(code);
    }
}
