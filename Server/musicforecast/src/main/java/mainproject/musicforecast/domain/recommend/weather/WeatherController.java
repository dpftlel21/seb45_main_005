package mainproject.musicforecast.domain.recommend.weather;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping("/weather")
    public ResponseEntity<?> getWeatherData() {
        String jsonString = weatherService.getWeatherString("1835848"); //seoul

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(jsonString);

            double temperature = jsonNode.get("main").get("temp").asDouble();
            double cTemperature = temperature - 273.15;
            String weatherDescription = jsonNode.get("weather").get(0).get("description").asText();

            WeatherResponseDto weatherResponseDto = new WeatherResponseDto(/*cityName, */Math.round(cTemperature), weatherDescription);

            return new ResponseEntity<>(weatherResponseDto, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
