package mainproject.musicforecast.domain.post.dto;

import lombok.Getter;
import mainproject.musicforecast.domain.member.entity.Member;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class PostPostDto {
    @Positive
    private Long memberId;

    @NotBlank(message = "글을 작성해 주세요.")
    private String title;

    @NotBlank(message = "글을 작성해 주세요.")
    private String text;

    public Long getMemberId() {
        return memberId;
    }

    public String getTitle() {
        return title;
    }

    public String getText() {
        return text;
    }

    public Member getMember(){
        Member member = new Member();
        member.setMemberId(memberId);
        return member;
    }
}