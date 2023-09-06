package mainproject.musicforecast.domain.recommend.mubti;

import mainproject.musicforecast.domain.playlist.Utils;
import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.playlist.mapper.PlaylistMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mubti")
public class MubtiController {

    private final MubtiService mubtiService;
    private final PlaylistMapper mapper;

    public MubtiController(MubtiService mubtiService, PlaylistMapper mapper) {
        this.mubtiService = mubtiService;
        this.mapper = mapper;
    }

    @GetMapping("/result")
    public ResponseEntity recommendPlaylist(@RequestParam(required = false, defaultValue = "1") int page,
                                            @RequestParam(required = false, defaultValue = "10") int size,
                                            @RequestParam int a, @RequestParam int b) {
        Page<Playlist> playlistPage = mubtiService.findBySearchTags(page - 1, size, a, b);
        List<Playlist> playlists = playlistPage.getContent();
        return new ResponseEntity<>(
                new Utils.MultiResponseDto<>(mapper.playlistToPlaylistResponseDtos(playlists), playlistPage), HttpStatus.OK
        );
    }


}
