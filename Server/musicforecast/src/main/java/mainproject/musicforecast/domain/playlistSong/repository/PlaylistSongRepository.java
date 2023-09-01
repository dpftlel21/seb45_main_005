package mainproject.musicforecast.domain.playlistSong.repository;

import mainproject.musicforecast.domain.playlistSong.entity.PlaylistSong;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PlaylistSongRepository extends JpaRepository<PlaylistSong, Long> {

//    @Modifying
//    @Query("DELETE FROM PlaylistSong p WHERE p.playlist.playlistId=:playlistId AND p.song.songId=:songId")
//    public void deleteByPlaylistIdAndSongId(@Param("playlistId") long playlistId, @Param("songId") long songId);
}
