package mainproject.musicforecast.domain.member.controller;

import mainproject.musicforecast.domain.member.dto.FindMemberDto;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.mapper.MemberMapper;
import mainproject.musicforecast.domain.member.service.FindMemberService;
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
    @PatchMapping("/pw")
    public ResponseEntity searchPw(@RequestBody FindMemberDto findMemberDto) {

        Member member = mapper.findMemberDto(findMemberDto);

        Member response = findMemberService.searchPw(member);

        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/{email}")
    public ResponseEntity findQuestion(@PathVariable("email") String email) {
        Member member = findMemberService.findQuestion(email);
        return new ResponseEntity<>(mapper.memberToFindMemberDto(member), HttpStatus.OK);
    }
}
