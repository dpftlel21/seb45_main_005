package mainproject.musicforecast.domain.member.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberIntroResponseDto {
    private long memberId;
    private String nickname;
    private String intro;
    private String image;
}
