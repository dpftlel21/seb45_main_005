package mainproject.musicforecast.domain.member.dto;

import lombok.Getter;
import lombok.Setter;
import mainproject.musicforecast.domain.provider.Provider;
import mainproject.musicforecast.domain.question.Question;

@Getter
@Setter
public class FindMemberDto {
        private String email;
        private long questionNumber;
        private String auth_answer;
        private Question question;
}
