package mainproject.musicforecast.domain.song.dto;

import lombok.Builder;
import lombok.Getter;

public class SongDto {


    @Builder
    @Getter
    public static class KeywordResponse {
        String keyword;
    }
}
