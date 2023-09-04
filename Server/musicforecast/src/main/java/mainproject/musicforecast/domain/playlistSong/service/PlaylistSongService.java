package mainproject.musicforecast.domain.playlistSong.service;

import mainproject.musicforecast.domain.playlistSong.entity.PlaylistSong;
import mainproject.musicforecast.domain.playlistSong.repository.PlaylistSongRepository;
import mainproject.musicforecast.domain.song.entity.Song;
import org.springframework.stereotype.Service;

@Service
public class PlaylistSongService {

    private final PlaylistSongRepository playlistSongRepository;

    public PlaylistSongService(PlaylistSongRepository playlistSongRepository) {
        this.playlistSongRepository = playlistSongRepository;
    }

    public void addToPlaylistSong(PlaylistSong playlistSong) {
        playlistSongRepository.save(playlistSong);
    }

//    public void deleteFromPlaylistSong(long playlistId, long songId) {
//        playlistSongRepository.deleteByPlaylistIdAndSongId(playlistId, songId);
//    }

    public void deleteFromPlaylistSong(long playlistId, long songId) {
        PlaylistSong playlistSong = playlistSongRepository.findByPlaylistIdAndSongId(playlistId, songId);
        playlistSongRepository.deleteById(playlistSong.getPlaylistSongId());
    }
}
