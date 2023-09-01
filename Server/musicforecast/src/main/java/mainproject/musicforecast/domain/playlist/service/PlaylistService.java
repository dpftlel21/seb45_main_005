package mainproject.musicforecast.domain.playlist.service;

import mainproject.musicforecast.domain.playlist.dto.PlaylistDto;
import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.playlist.repository.PlaylistRepository;
import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;
import mainproject.musicforecast.domain.playlistTag.service.PlaylistTagService;
import mainproject.musicforecast.domain.tag.entity.Tag;
import mainproject.musicforecast.domain.tag.repository.TagRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import javax.swing.text.html.Option;
import java.net.URI;
import java.util.*;

@Service
@Transactional
public class PlaylistService {

    private final PlaylistRepository playlistRepository;
    private final TagRepository tagRepository;
    private final PlaylistTagService playlistTagService;

    public PlaylistService(PlaylistRepository playlistRepository, TagRepository tagRepository, PlaylistTagService playlistTagService) {
        this.playlistRepository = playlistRepository;
        this.tagRepository = tagRepository;
        this.playlistTagService = playlistTagService;
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

    private Playlist findVerifiedPlaylist(long playlistId) {
        Optional<Playlist> optionalPlaylist = playlistRepository.findById(playlistId);
        Playlist findPlaylist = optionalPlaylist.orElseThrow(() -> new NullPointerException());
        return findPlaylist;
    }

    public Playlist updatePlaylistWithTags(PlaylistDto.PatchTag playlistPatchDto) {
        Playlist playlist = playlistRepository.findById(playlistPatchDto.getPlaylistId()).orElse(null);


        Optional.ofNullable(playlistPatchDto.getPlaylistId()).ifPresent(playlistId -> playlist.setPlaylistId(playlistId));
        Optional.ofNullable(playlistPatchDto.getTitle()).ifPresent(title -> playlist.setTitle(title));
        Optional.ofNullable(playlistPatchDto.isPublic()).ifPresent(isPublic -> playlist.setPublic(isPublic));

        if (playlist != null) {
            playlistTagService.clearPlaylistTag(playlist);
            playlist.getPlaylistTags().clear();

            Set<PlaylistTag> newTags = new HashSet<>();
            for (String tags : playlistPatchDto.getTag()) {
                Tag tag = tagRepository.findByTagName(tags).orElse(null);
                if (tag != null) {
                    PlaylistTag playlistTag = new PlaylistTag();
                    playlistTag.setPlaylist(playlist);
                    playlistTag.setTag(tag);
                    newTags.add(playlistTag);
                }
            }

            playlist.updateTags(newTags);
        }
        return playlistRepository.save(playlist);
    }

    public void deletePlaylist(long playlistId) {
        Playlist playlist = findVerifiedPlaylist(playlistId);
        playlistRepository.delete(playlist);
    }

    public Optional<Playlist> findPlaylistById(long playlistId) {
        return playlistRepository.findById(playlistId);
    }
}
