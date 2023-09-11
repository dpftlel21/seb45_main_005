package mainproject.musicforecast.domain.member.controller;

import mainproject.musicforecast.domain.member.dto.MemberPatchDto;
import mainproject.musicforecast.domain.member.dto.MemberPostDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.mapper.MemberMapper;
import mainproject.musicforecast.domain.member.service.MemberService;
import mainproject.musicforecast.domain.post.entity.Post;
import mainproject.musicforecast.domain.provider.Provider;
import mainproject.musicforecast.domain.provider.ProviderRepository;
import mainproject.musicforecast.global.exception.response.ErrorResponse;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final ProviderRepository providerRepository;
    public MemberController(MemberService memberService, MemberMapper mapper, ProviderRepository providerRepository) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.providerRepository = providerRepository;
    }

    //회원가입
    @PostMapping ("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member member = mapper.memberPostDtoToMember(memberPostDto);

        Provider provider = providerRepository.findByProviderName("MusicForecast");

        member.setProvider(provider);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.CREATED);
    }
    //회원정보 수정
    @PatchMapping("/my_page/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto,
                                      @AuthenticationPrincipal Member user) {

        memberPatchDto.setMemberId(memberId);

        Member member = mapper.memberPatchDtoToMember(memberPatchDto);

        Member response = memberService.updateMember(member, user);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }
    //회원 자기소개글 조회 기능
    @GetMapping("/my_page/intro")
    public ResponseEntity getMemberIntro(@AuthenticationPrincipal Member user){

        Member response = memberService.findMemberIntro(user.getMemberId());

        return new ResponseEntity<>(mapper.memberToMemberIntroResponseDto(response), HttpStatus.OK);
    }
//    회원 플레이리스트 목록 조회 기능, playlist controller에 있음
//    @GetMapping("/mypage/playlist")
//    public ResponseEntity getMemberPlaylist(@AuthenticationPrincipal Member user) {
//
//        Member response = memberService.findMember(user.getMemberId());
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }

    //회원 게시글 목록 조회 기능
    @GetMapping("/my_page/post")
    public ResponseEntity getMemberPost(@AuthenticationPrincipal Member user) {

        List<Post> response = memberService.findMemberPost(user);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    //회원 탈퇴 기능
    @DeleteMapping("/delete/{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId") @Positive long memberId
                                       /*@AuthenticationPrincipal Member user*/) {

        memberService.deleteMember(memberId);
//        memberService.deleteMember(memberId, user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
