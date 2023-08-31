package mainproject.musicforecast.domain.member.repository;

import mainproject.musicforecast.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
