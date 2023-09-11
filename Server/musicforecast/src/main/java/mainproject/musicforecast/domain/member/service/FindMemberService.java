package mainproject.musicforecast.domain.member.service;

import mainproject.musicforecast.domain.member.entity.Member;
import org.springframework.stereotype.Service;

@Service
public class FindMemberService {
    private MemberService memberService;
    public FindMemberService(MemberService memberService) {
        this.memberService = memberService;
    }
    public Member searchPw(Member user) {
    return user;
    }

    public Member findQuestion(String email) {
        Member member = memberService.findExistsEmail(email);

        return member;
    }

}
