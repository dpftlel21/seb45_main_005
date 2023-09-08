package mainproject.musicforecast.domain.mainpage.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.Objects;

@RestController
@RequestMapping("/main")
public class MainpageController {

    @GetMapping("/weather")
    public ResponseEntity clickWeather(HttpServletRequest request) {
        HttpHeaders headers = new HttpHeaders();

        String authorization = request.getHeader("Authorization");

        if (Objects.equals(authorization, null)) {
            headers.setLocation(URI.create("/auth/login"));
            return new ResponseEntity(headers, HttpStatus.MOVED_PERMANENTLY);
        }
        headers.setLocation(URI.create("/weather"));
        return new ResponseEntity(headers, HttpStatus.MOVED_PERMANENTLY);
    }

//    @GetMapping("/mubti")
//    public ResponseEntity clickMubti() {
//
//    }
//
//    @GetMapping("/posts")
//    public ResponseEntity clickCommunity() {
//
//    }
}