package mainproject.musicforecast.domain.recommend.weather;

import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;
import mainproject.musicforecast.domain.playlistTag.repository.PlaylistTagRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeatherService {

    private final PlaylistTagRepository playlistTagRepository;

    public WeatherService(PlaylistTagRepository playlistTagRepository) {
        this.playlistTagRepository = playlistTagRepository;
    }

    @Value("${weather.api.key}")
    public String WEATHER_API;

    public String accessUrl(String cityId) {
        String apiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + WEATHER_API;
        return apiUrl;
    }

    public String getWeatherString(String cityId){
        String apiUrl = accessUrl(cityId);

        try {
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");
            int responseCode = connection.getResponseCode();

            BufferedReader br;
            if(responseCode == 200){
                br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            }else{
                br = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
            }

            String inputLine;
            StringBuilder response = new StringBuilder();

            while((inputLine = br.readLine()) != null){
                response.append(inputLine);
            }
            br.close();
            return response.toString();
        } catch (Exception e) {
            return "failed to get response!";
        }
    }

//    public Page<Playlist> findBySearchTag(int page, int size, String weather) {
//        Page<PlaylistTag> playlistTags = playlistTagRepository.findByTag(PageRequest.of(page, size, Sort.by("playlist").descending()), setSearchTag(weather));
//
//        List<Playlist> playlistList = playlistTags.stream().map(playlistTag -> playlistTag.getPlaylist()).collect(Collectors.toList());
//
//        Pageable pageable = PageRequest.of(page, size);
//
//        return new PageImpl<>(playlistList, pageable, playlistList.size());
//    }

//    public String setSearchTag(String weather) {
//        String genre = "";
//
//        switch (weather) {
//            case "Thunderstorm":
//                genre = "신나는";
//                break;
//            case "Drizzle":
//                genre = "신나는";
//                break;
//            case "Rain":
//                genre = "신나는";
//                break;
//            case "Snow":
//                genre = "신나는";
//                break;
//            case "Mist":
//                genre = "신나는";
//                break;
//            case "Smoke":
//                genre = "신나는";
//                break;
//            case "Haze":
//                genre = "신나는";
//                break;
//            case "Dust":
//                genre = "신나는";
//                break;
//            case "Fog":
//                genre = "신나는";
//                break;
//            case "Sand":
//                genre = "신나는";
//                break;
//            case "Ash":
//                genre = "신나는";
//                break;
//            case "Squall":
//                genre = "신나는";
//                break;
//            case "Tornado":
//                genre = "신나는";
//                break;
//            case "Clear":
//                genre = "신나는";
//                break;
//            case "Clouds":
//                genre = "신나는";
//                break;
//            default:
//                break;
//        }
//        return genre;
//    }

    public Page<Playlist> findBySearchTags(int page, int size, String weather) {
        Page<PlaylistTag> playlistTags = playlistTagRepository.findByTags(PageRequest.of(page, size, Sort.by("playlist").descending()), setSearchTags(weather));

        List<Playlist> playlistList = playlistTags.stream().map(playlistTag -> playlistTag.getPlaylist()).collect(Collectors.toList());

        Pageable pageable = PageRequest.of(page, size);

        return new PageImpl<>(playlistList, pageable, playlistList.size());
    }

    public List<String> setSearchTags(String weather) {
        List<String> genre = new ArrayList<>();

        switch (weather) {
            case "Thunderstorm":
                genre.add("신나는");
                break;
            case "Drizzle":
                genre.add("신나는");
                break;
            case "Rain":
                genre.add("신나는");
                break;
            case "Snow":
                genre.add("신나는");
                break;
            case "Mist":
                genre.add("신나는");
                break;
            case "Smoke":
                genre.add("신나는");
                break;
            case "Haze":
                genre.add("신나는");
                genre.add("발라드");
                break;
            case "Dust":
                genre.add("신나는");
                break;
            case "Fog":
                genre.add("신나는");
                break;
            case "Sand":
                genre.add("신나는");
                break;
            case "Ash":
                genre.add("신나는");
                break;
            case "Squall":
                genre.add("신나는");
                break;
            case "Tornado":
                genre.add("신나는");
                break;
            case "Clear":
                genre.add("신나는");
                break;
            case "Clouds":
                genre.add("신나는");
                break;
            default:
                break;
        }
        return genre;
    }
}
