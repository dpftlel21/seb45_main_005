package mainproject.musicforecast.domain.member.dto;

import lombok.Getter;
import lombok.Setter;
import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.post.entity.Post;
import mainproject.musicforecast.domain.provider.Provider;
import mainproject.musicforecast.domain.question.Question;

import java.util.List;

@Getter
@Setter
public class FindMemberDto {
        private String email;
        private long questionNumber;
        private String auth_answer;
        private Question question;
}
