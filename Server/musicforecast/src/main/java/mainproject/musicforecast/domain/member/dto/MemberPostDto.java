package mainproject.musicforecast.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
@Getter
public class MemberPostDto {
    @NotBlank
    private String id;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$", message = "비밀번호 양식에 부합하지 않습니다.")
    private String password;
    @NotBlank
    private String nickname;
    @NotBlank
    private String auth_answer;
}
