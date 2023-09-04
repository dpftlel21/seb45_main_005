package mainproject.musicforecast.domain.comment.dto;

import lombok.AllArgsConstructor;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
public class CommentPatchDto {
    private long commentId;
    @NotBlank(message = "입력하세요.")
    private String text;

    public long getCommentId() {
        return commentId;
    }

    public void setCommentId(long commentId) {
        this.commentId = commentId;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}