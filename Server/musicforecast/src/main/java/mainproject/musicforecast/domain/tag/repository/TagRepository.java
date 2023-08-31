package mainproject.musicforecast.domain.tag.repository;

import mainproject.musicforecast.domain.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
}
