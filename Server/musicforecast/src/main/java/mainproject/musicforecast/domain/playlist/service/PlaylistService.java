package mainproject.musicforecast.domain.playlist.service;

import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.playlist.repository.PlaylistRepository;
import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;
import mainproject.musicforecast.domain.tag.entity.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import javax.swing.text.html.Option;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PlaylistService {

    private final PlaylistRepository playlistRepository;

    public PlaylistService(PlaylistRepository playlistRepository) {
        this.playlistRepository = playlistRepository;
    }

    public Playlist createPlaylist(Playlist playlist) {
        return playlistRepository.save(playlist);
    }

    public Playlist findPlaylist(long playlistId) {
        Playlist findPlaylist = findByPlaylistId(playlistId);
        findPlaylist.setView(findPlaylist.getView() + 1);
        return findPlaylist;
    }

    private Playlist findByPlaylistId(long playlistId) {
        Optional<Playlist> optionalPlaylist = playlistRepository.findById(playlistId);
        Playlist findPlaylist = optionalPlaylist.orElseThrow(() -> new NullPointerException());
        return findPlaylist;
    }

    public Page<Playlist> findPlaylists(int page, int size) {
        return playlistRepository.findAll(
                PageRequest.of(page, size, Sort.by("playlistId").descending())
        );
    }

    public Playlist updatePlaylist(Playlist playlist) {
        Playlist findPlaylist = findVerifiedPlaylist(playlist.getPlaylistId());

        Optional.ofNullable(playlist.getTitle()).ifPresent(title -> findPlaylist.setTitle(title));
        Optional.ofNullable(playlist.isPublic()).ifPresent(isPublic -> findPlaylist.setPublic(isPublic));

        return playlistRepository.save(findPlaylist);
    }

    private PlaylistTag findPlaylistTagByTag(Playlist playlist, Tag tag) {
        for (PlaylistTag playlistTag : playlist.getPlaylistTags()) {
            if (playlistTag.getTag().equals(tag)) {
                return playlistTag;
            }
        }
        return null;
    }

    private Playlist findVerifiedPlaylist(long playlistId) {
        Optional<Playlist> optionalPlaylist = playlistRepository.findById(playlistId);
        Playlist findPlaylist = optionalPlaylist.orElseThrow(() -> new NullPointerException());
        return findPlaylist;
    }

    public void deletePlaylist(long playlistId) {
        Playlist playlist = findVerifiedPlaylist(playlistId);
        playlistRepository.delete(playlist);
    }
}
