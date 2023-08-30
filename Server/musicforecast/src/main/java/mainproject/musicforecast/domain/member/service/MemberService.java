package mainproject.musicforecast.domain.member.service;

import mainproject.musicforecast.domain.member.entity.Member;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    public Member createMember(Member member) {
        return member;
    }

    public Member updateMember(Member member) {
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
}
