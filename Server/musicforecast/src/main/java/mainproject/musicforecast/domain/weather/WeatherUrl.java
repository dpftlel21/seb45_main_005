package mainproject.musicforecast.domain.weather;

import org.springframework.beans.factory.annotation.Value;

public class WeatherUrl {

//    @Value("weather.key")
    public static String WEATHER_API="";

    public String accessUrl(String cityId) {
        String apiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + WEATHER_API;
        return apiUrl;
    }
}
