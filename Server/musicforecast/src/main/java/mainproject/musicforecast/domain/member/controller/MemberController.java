package mainproject.musicforecast.domain.member.controller;

import mainproject.musicforecast.domain.member.dto.MemberPatchDto;
import mainproject.musicforecast.domain.member.dto.MemberPostDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.mapper.MemberMapper;
import mainproject.musicforecast.domain.member.service.MemberService;
import mainproject.musicforecast.global.exception.response.ErrorResponse;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    //회원가입
    @PostMapping ("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member member = mapper.memberPostDtoToMember(memberPostDto);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    //회원정보 수정
    @PatchMapping("/profile/edit/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") @Positive long memberId,
                                      @Valid @RequestBody MemberPatchDto memberPatchDto) {

        memberPatchDto.setMemberId(memberId);

        Member member = mapper.memberPatchDtoToMember(memberPatchDto);

        Member response = memberService.updateMember(member);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    //회원 자기소개글 목록 조회 기능
    @GetMapping("/profile/{memberId}")
    public ResponseEntity getMemberIntro(@PathVariable("memberId") @Positive long memberId){

        Member response = memberService.findMemberIntro(memberId);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    //회원 플레이리스트 목록 조회 기능
    @GetMapping("/profile/{memberId}/playlist")
    public ResponseEntity getMemberPlaylist(@PathVariable("memberId") @Positive long memberId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
    //회원 게시글 목록 조회 기능
    @GetMapping("/profile/{memberId}/post")
    public ResponseEntity getMemberPost(@PathVariable("memberId") @Positive long memberId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
    //회원 탈퇴 기능
    @DeleteMapping("/delete/{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId") @Positive long memberId) {

        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
