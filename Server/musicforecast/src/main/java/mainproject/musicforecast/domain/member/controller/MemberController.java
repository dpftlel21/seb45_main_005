package mainproject.musicforecast.domain.member.controller;

import mainproject.musicforecast.domain.member.dto.MemberPatchDto;
import mainproject.musicforecast.domain.member.dto.MemberPostDto;
import mainproject.musicforecast.domain.member.entity.Member;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/members")
public class MemberController {

    //회원가입
    @PostMapping ("/signup")
    public ResponseEntity postMember(@RequestBody MemberPostDto memberPostDto) {
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    //회원정보 수정
    @PatchMapping("/profile/edit/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") @Positive long memberId,
                                      @RequestBody MemberPatchDto memberPatchDto) {
        return new ResponseEntity<>(HttpStatus.OK);
    }
    //회원 자기소개글 목록 조회 기능
    @GetMapping("/profile/{memberId}")
    public ResponseEntity getMemberIntro(@PathVariable("memberId") @Positive long memberId){
        return new ResponseEntity<>(HttpStatus.OK);
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
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
