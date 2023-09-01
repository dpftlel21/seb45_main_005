package mainproject.musicforecast.domain.spotify;

import com.wrapper.spotify.SpotifyApi;
import org.springframework.stereotype.Service;

@Service
public class SpotifyService {

    public SpotifyApi setSpotifyApi() {
        return new SpotifyApi.Builder()
                .setAccessToken(SpotifyToken.accessToken())
                .build();
    }
}
