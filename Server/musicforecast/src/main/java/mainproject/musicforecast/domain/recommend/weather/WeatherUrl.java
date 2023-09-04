package mainproject.musicforecast.domain.recommend.weather;

public class WeatherUrl {
    
    public static String WEATHER_API="";

    public String accessUrl(String cityId) {
        String apiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + WEATHER_API;
        return apiUrl;
    }
}
