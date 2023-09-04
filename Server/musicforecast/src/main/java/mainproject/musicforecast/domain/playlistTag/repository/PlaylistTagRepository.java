package mainproject.musicforecast.domain.playlistTag.repository;

import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaylistTagRepository extends JpaRepository<PlaylistTag, Long> {

}
