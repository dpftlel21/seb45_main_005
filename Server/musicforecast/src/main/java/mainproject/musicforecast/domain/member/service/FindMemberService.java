package mainproject.musicforecast.domain.member.service;

import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.global.exception.BusinessLogicException;
import mainproject.musicforecast.global.exception.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FindMemberService {
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    public FindMemberService(MemberService memberService,
                             MemberRepository memberRepository) {
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }
    public Member searchPw(Member user) {
    return user;
    }

    public Member findId(Member user) {
        String nickname = user.getNickname();
        long birthdate = user.getBirthdate();

        Optional<Member> optionalMember = memberRepository.findByNicknameAndBirthdate(nickname, birthdate);

        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        if(user.getQuestionNumber() != findMember.getQuestionNumber()) {
            new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
        if(user.getAuth_answer() != findMember.getAuth_answer()) {
            new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }

        return findMember;
    }

    public Member findQuestion(String email) {
        Member member = memberService.findExistsEmail(email);

        return member;
    }

}
