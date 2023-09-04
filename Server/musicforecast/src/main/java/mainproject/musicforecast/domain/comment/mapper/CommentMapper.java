package mainproject.musicforecast.domain.comment.mapper;

import mainproject.musicforecast.domain.comment.dto.CommentPatchDto;
import mainproject.musicforecast.domain.comment.dto.CommentPostDto;
import mainproject.musicforecast.domain.comment.dto.CommentResponseDto;
import mainproject.musicforecast.domain.comment.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentPostDto commentPostDto);
    Comment commentPatchDtoToComment(CommentPatchDto commentPatchDto);
    CommentResponseDto CommentToCommentResponseDto(Comment comment);
}
