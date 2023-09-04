package mainproject.musicforecast.domain.member.service;

import mainproject.musicforecast.domain.member.auth.utils.CustomAuthorityUtils;
import mainproject.musicforecast.domain.member.dto.MemberResponseDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.global.exception.BusinessLogicException;
import mainproject.musicforecast.global.exception.ExceptionCode;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;
    public MemberService(MemberRepository memberRepository,PasswordEncoder passwordEncoder, CustomAuthorityUtils customAuthorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.customAuthorityUtils = customAuthorityUtils;
    }
    public Member createMember(Member member) {

        verifyExistsEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = customAuthorityUtils.createRoles();
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

        return savedMember;
    }

    public Member updateMember(Member member, Member user) {
        //수정하려는 멤버가 가입된 회원인지 확인
        Member findMember = findVerifiedMember(member.getMemberId());

        //수정하려는 멤버와 로그인된 멤버가 같은지 확인, 다를 경우 권한 없음
        if(findMember.getMemberId() != user.getMemberId()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_PERMISSION_DENIED);
        }

        Optional.ofNullable(member.getIntro())
                .ifPresent(intro -> findMember.setIntro(intro));
        Optional.ofNullable(member.getNickname())
                .ifPresent(nickname -> findMember.setNickname(nickname));

        return memberRepository.save(findMember);
    }

    public Member findMemberIntro(long memberId) {

        Member findMember = findVerifiedMember(memberId);

        return findMember;
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

        Member findMember = findVerifiedMember(memberId);

        //TODO 삭제 할 때 본인이 맞는지 확인하는 로직 구현하기

        memberRepository.delete(findMember);
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

    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_IS_EXIST);
        }
    }
    @Transactional(readOnly = true)
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

}
