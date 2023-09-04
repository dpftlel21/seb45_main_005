package mainproject.musicforecast.domain.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mainproject.musicforecast.domain.playlist.entity.Playlist;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.List;

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
    @Email
    private String email;

    @Column
    private String nickname;

    @Column(length = 100, nullable = false)
    private String password;

    @Column
    private Long birthdate;

    @Column
    private String auth_answer;

    @Column
    private String intro;

    @Column
    private String image;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Playlist> playlists;

    @OneToMany(mappedBy = "member")
    private List<PlaylistLike> playlistLikes;


}
