package mainproject.musicforecast.domain.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;


import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class CommentResponseDto {
    private long commentId;
    private long memberId;
    private String nickname;
    private long postId;
    private String text;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
