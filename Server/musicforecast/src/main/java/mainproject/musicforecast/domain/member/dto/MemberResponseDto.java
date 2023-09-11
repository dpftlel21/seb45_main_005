package mainproject.musicforecast.domain.member.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberResponseDto {
    private long memberId;
    private String nickname;
}
