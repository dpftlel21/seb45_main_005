package mainproject.musicforecast.domain.recommend.mubti;

import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;
import mainproject.musicforecast.domain.playlistTag.repository.PlaylistTagRepository;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MubtiService {

    private final PlaylistTagRepository playlistTagRepository;

    public MubtiService(PlaylistTagRepository playlistTagRepository) {
        this.playlistTagRepository = playlistTagRepository;
    }

    public Page<Playlist> findBySearchTags(int page, int size, int a, int b) {
        if (setSearchTags(a, b).get(0) == "redirect") return null;

        Page<PlaylistTag> playlistTags = playlistTagRepository.findByTags(PageRequest.of(page, size, Sort.by("playlist").descending()), setSearchTags(a, b));

        List<Playlist> playlistList = playlistTags.stream().map(playlistTag -> playlistTag.getPlaylist()).collect(Collectors.toList());

        Pageable pageable = PageRequest.of(page, size);

        return new PageImpl<>(playlistList, pageable, playlistList.size());
    }

    public List<String> setSearchTags(int a, int b) {
        List<String> genre = new ArrayList<>();

        if (a == 1) {
            switch (b) {
                case 1:
                    genre.add("신나는");
                    break;
                case 2:
                    genre.add("발라드");
                    break;
                case 3:
                    genre.add("신나는");
                    break;
                case 4:
                    genre.add("신나는");
                    break;
                default:
                    break;
            }
        } else if (a == 2) {
            switch (b) {
                case 1:
                    genre.add("신나는");
                    break;
                case 2:
                    genre.add("신나는");
                    break;
                case 3:
                    genre.add("신나는");
                    break;
                case 4:
                    genre.add("신나는");
                    break;
                default:
                    break;
            }
        } else if (a == 3) {
            switch (b) {
                case 1:
                    genre.add("신나는");
                    break;
                case 2:
                    genre.add("신나는");
                    break;
                case 3:
                    genre.add("신나는");
                    break;
                case 4:
                    genre.add("신나는");
                    break;
                default:
                    break;
            }
        } else {
            genre.add("redirect");
        }
        return genre;
    }
}
