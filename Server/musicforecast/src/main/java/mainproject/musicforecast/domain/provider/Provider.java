package mainproject.musicforecast.domain.provider;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long providerId;

    @Column(nullable = false)
    private String providerName;
}
