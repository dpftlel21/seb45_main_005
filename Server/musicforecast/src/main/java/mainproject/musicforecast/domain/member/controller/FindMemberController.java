package mainproject.musicforecast.domain.member.controller;

import mainproject.musicforecast.domain.member.dto.FindMemberDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.mapper.MemberMapper;
import mainproject.musicforecast.domain.member.service.FindMemberService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/find")
public class FindMemberController {
    private final MemberMapper mapper;
    private final FindMemberService findMemberService;
    public FindMemberController(MemberMapper mapper,
                                FindMemberService findMemberService) {
        this.mapper = mapper;
        this.findMemberService = findMemberService;
    }

    @GetMapping("/username")
    public ResponseEntity findId(@RequestBody FindMemberDto findMemberDto) {

        Member member = mapper.findMemberDto(findMemberDto);

        Member response = findMemberService.findId(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }
//    @PatchMapping("/pw")
//    public ResponseEntity searchPw(@RequestBody FindMemberDto findMemberDto) {
//
//        Member member = mapper.findMemberDto(findMemberDto);
//
//        Member response = findMemberService.searchPw(member);
//
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    @GetMapping("/user")
//    public ResponseEntity findQuestion(@PathVariable("email") String email) {
//        Member member = findMemberService.findQuestion(email);
//        return new ResponseEntity<>(mapper.memberToFindMemberDto(member), HttpStatus.OK);
//    }
}
