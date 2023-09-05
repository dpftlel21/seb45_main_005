package mainproject.musicforecast.domain.recommend.weather;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class WeatherService {

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
}
