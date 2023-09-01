package mainproject.musicforecast.domain.song.mapper;

import mainproject.musicforecast.domain.keyword.entity.Keyword;
import mainproject.musicforecast.domain.song.dto.SongDto;
import mainproject.musicforecast.domain.song.entity.Song;
import mainproject.musicforecast.domain.spotify.SpotifySearchResponseDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SongMapper {

    Song spotifySearchResponseDtoToSong(SpotifySearchResponseDto spotifySearchResponseDto);
    /*default Song spotifySearchResponseDtoToSong(SpotifySearchResponseDto spotifySearchResponseDto) {
        Song song = new Song();

        song.set
    }*/

    default Keyword keywordDtoToKeyword(SongDto.KeywordResponse keywordResponse) {
        Keyword keyword = new Keyword();
        keyword.setSongKeyword(keywordResponse.getKeyword());
        return keyword;
    }
}
