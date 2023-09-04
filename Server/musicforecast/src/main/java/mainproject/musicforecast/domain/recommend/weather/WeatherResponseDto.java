package mainproject.musicforecast.domain.recommend.weather;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class WeatherResponseDto {

    double temperature;
    String weatherDescription;
}
