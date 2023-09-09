package mainproject.musicforecast.domain.member.service;

import mainproject.musicforecast.domain.member.auth.utils.CustomAuthorityUtils;
import mainproject.musicforecast.domain.member.dto.MemberResponseDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.domain.provider.ProviderRepository;
import mainproject.musicforecast.global.exception.BusinessLogicException;
import mainproject.musicforecast.global.exception.ExceptionCode;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final ProviderRepository providerRepository;
    public MemberService(MemberRepository memberRepository,PasswordEncoder passwordEncoder, CustomAuthorityUtils customAuthorityUtils, ProviderRepository providerRepository) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.customAuthorityUtils = customAuthorityUtils;
        this.providerRepository = providerRepository;
    }
    public Member createMember(Member member) {

        verifyExistsEmail(member.getEmail());

        if (member.getProvider().getProviderName() == "MusicForecast"){
            String encryptedPassword = passwordEncoder.encode(member.getPassword());
            member.setPassword(encryptedPassword);
            member.setProvider(providerRepository.findByProviderName("MusicForecast"));

            List<String> roles = customAuthorityUtils.createRoles(member.getEmail());
            member.setRoles(roles);
        }else {
            List<String> roles = customAuthorityUtils.createRoles(member.getEmail());
            member.setRoles(roles);
        }

        Member savedMember = memberRepository.save(member);

        return savedMember;
    }
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
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
        Optional.ofNullable(member.getImage())
                .ifPresent(image -> findMember.setImage(image));

        return memberRepository.save(findMember);
    }
    @Transactional(readOnly = true)
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

        //회원 존재 여부 확인
        Member findMember = findVerifiedMember(memberId);

//        //본인이 맞는지 확인
//        if(findMember.getMemberId() != user.getMemberId()){
//            throw new BusinessLogicException(ExceptionCode.MEMBER_PERMISSION_DENIED);
//        }

        //TODO 지금은 완전 삭제라 재가입 가능, 회원 상태를 만든다면 탈퇴계정인걸 알면 같은 이메일로 재가입 불가

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
