package mainproject.musicforecast.domain.member.mapper;

import mainproject.musicforecast.domain.member.dto.MemberPatchDto;
import mainproject.musicforecast.domain.member.dto.MemberPostDto;
import mainproject.musicforecast.domain.member.dto.MemberResponseDto;
import mainproject.musicforecast.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponseDto(Member member);
}
