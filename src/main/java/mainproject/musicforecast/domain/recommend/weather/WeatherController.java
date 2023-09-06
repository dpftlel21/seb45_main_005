package mainproject.musicforecast.domain.recommend.weather;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/weather")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/result")
    public ResponseEntity recommendSong(@RequestParam("q") String weather) {
        String genre = "";
        
        switch (weather) {
            case "Thunderstorm":
                genre = "신나는";
                break;
            case "Drizzle":
                genre = "신나는";
                break;
            case "Rain":
                genre = "신나는";
                break;
            case "Snow":
                genre = "신나는";
                break;
            case "Mist":
                genre = "신나는";
                break;
            case "Smoke":
                genre = "신나는";
                break;
            case "Haze":
                genre = "신나는";
                break;
            case "Dust":
                genre = "신나는";
                break;
            case "Fog":
                genre = "신나는";
                break;
            case "Sand":
                genre = "신나는";
                break;
            case "Ash":
                genre = "신나는";
                break;
            case "Squall":
                genre = "신나는";
                break;
            case "Tornado":
                genre = "신나는";
                break;
            case "Clear":
                genre = "신나는";
                break;
            case "Clouds":
                genre = "신나는";
                break;
            default:
                break;

        }

        return null;
    }


    @GetMapping("/data")
    public ResponseEntity getWeatherData() {
        String jsonString = weatherService.getWeatherString("1835848"); //seoul

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(jsonString);

            double temperature = jsonNode.get("main").get("temp").asDouble();
            double cTemperature = temperature - 273.15;
            String weatherDescription = jsonNode.get("weather").get(0).get("main").asText();

            WeatherDto.WeatherResponseDto weatherResponseDto = new WeatherDto.WeatherResponseDto(/*cityName, */Math.round(cTemperature), weatherDescription);

            return new ResponseEntity<>(weatherResponseDto, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
