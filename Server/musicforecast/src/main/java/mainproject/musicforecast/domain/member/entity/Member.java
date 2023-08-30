package mainproject.musicforecast.domain.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column
    private Long questionId;

    @Column
    private String Id;

    @Column
    private String email;

    @Column
    private String nickname;

    @Column
    private String password;

    @Column
    private Long birthdate;

    @Column
    private String auth_answer;

    @Column
    private String intro;

    @Column
    private String image;


}
