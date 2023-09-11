package mainproject.musicforecast.domain.member.mapper;

import mainproject.musicforecast.domain.member.dto.*;
import mainproject.musicforecast.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
    MemberIntroResponseDto memberToMemberIntroResponseDto(Member member);
    Member findMemberDto(FindMemberDto findMemberDto);
    FindMemberDto memberToFindMemberDto(Member member);
}
