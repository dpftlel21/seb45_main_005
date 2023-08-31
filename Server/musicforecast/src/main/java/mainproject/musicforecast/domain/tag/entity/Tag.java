package mainproject.musicforecast.domain.tag.entity;

import lombok.Getter;
import lombok.Setter;
import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column(nullable = false)
    private String tagName;

    @OneToMany(mappedBy = "playlist")
    private List<PlaylistTag> playlistTags;
}
