package mainproject.musicforecast.domain.playlist.repository;

import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.playlist.entity.Playlist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {

    @Query("SELECT s FROM Playlist s WHERE s.isPublic = :isPublic")
    Page<Playlist> findAllPublic(Pageable pageable, boolean isPublic);

    @Query("SELECT s FROM Playlist s WHERE s.member.memberId = :memberId")
    Page<Playlist> findMyAll(Pageable pageable, long memberId);
}
