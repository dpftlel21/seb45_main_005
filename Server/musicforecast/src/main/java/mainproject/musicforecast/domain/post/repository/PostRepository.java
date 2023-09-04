package mainproject.musicforecast.domain.post.repository;

import mainproject.musicforecast.domain.post.entity.Post;
import mainproject.musicforecast.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    Post findByPostId(Long postId);
    List<Post> findAllByMember(Member member);
}