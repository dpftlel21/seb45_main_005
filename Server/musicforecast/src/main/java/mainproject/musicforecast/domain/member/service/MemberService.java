package mainproject.musicforecast.domain.member.service;

import mainproject.musicforecast.domain.member.dto.MemberResponseDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.global.exception.BusinessLogicException;
import mainproject.musicforecast.global.exception.ExceptionCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    public Member createMember(Member member) {

        memberRepository.save(member);

        return member;
    }

    public Member updateMember(Member member) {

        Member findMember = findVerifiedMember(member.getMemberId());

        return member;
    }

    public Member findMemberIntro(long memberId) {
        Member member = new Member();
        return member;
    }

    public Member findMemberPlaylist(long memberId) {
        Member member = new Member();
        return member;
    }

    public Member findMemberPost(long memberId) {
        Member member = new Member();
        return member;
    }

    public void deleteMember(long memberId) {
        // 지금은 void
        // 탈퇴 회원 정보를 삭제하지 않고 상태만 변경할 경우 return 타입 변경 필요
    }

    @Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//멤버 상태가 있을 경우 사용
//        if(findMember.getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT))
//            throw new BusinessLogicException(ExceptionCode.MEMBER_STATUS_DELETE);

        return findMember;
    }
}
