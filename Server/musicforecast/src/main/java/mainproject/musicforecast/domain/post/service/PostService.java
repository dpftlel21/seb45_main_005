package mainproject.musicforecast.domain.post.service;

import mainproject.musicforecast.global.exception.ExceptionCode;
import mainproject.musicforecast.global.exception.BusinessLogicException;
import mainproject.musicforecast.domain.post.entity.Post;
import mainproject.musicforecast.domain.post.repository.PostRepository;
import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.member.repository.MemberRepository;
import mainproject.musicforecast.domain.member.service.MemberService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    public PostService(PostRepository postRepository, MemberService memberService, MemberRepository memberRepository) {
        this.postRepository = postRepository;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }


    public Post createPost(Post post) {
        Member member = memberRepository.findByMemberId(post.getMember().getMemberId());
        post.setMember(member);
        return postRepository.save(post);
    }

    public Post updatePost(Post post, Member loggedInMember) {
        Post findPost = postRepository.findByPostId(post.getPostId());

        if (findPost.getMember().getMemberId().equals(loggedInMember.getMemberId())) {
            Optional.ofNullable(post.getText())
                    .ifPresent(text -> findPost.setText(text));

            return postRepository.save(findPost);
        } else {
            throw new BusinessLogicException(ExceptionCode.MEMBER_PERMISSION_DENIED);
        }
    }
//
//    public Post votePost(Post post, Boolean vote) {
//        Post findPost = postRepository.findByPostId(post.getPostId());
//        if (vote.equals(true)) {
//            findPost.setVoteCount(findPost.getVoteCount() + 1);
//        } else {
//            findPost.setVoteCount(findPost.getVoteCount() - 1);
//        }
//        Post post1 = postRepository.save(findPost);
//        return post1;
//    }

    public Post findPost(Long postId) {
        return findVerifyPost(postId);
    }

    public Post findGetPost(Long postId) {
        Post post = findVerifyPost(postId);
        post.setViewCount(post.getViewCount() + 1);
        postRepository.save(post);
        return post;
    }

    public Page<Post> findPosts(int page, int size) {
        return postRepository.findAll(PageRequest.of(page, size, Sort.by("postId").descending()));
    }

    @Transactional(readOnly = true)
    public Post findVerifyPost(Long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post post = optionalPost.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return post;
    }

    public Post VerifyPostId(Long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost = optionalPost.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findPost;
    }

    public void deletePost(Long postId, Member loggedInMember) {
        Post post = findVerifyPost(postId);

        if (!post.getMember().getMemberId().equals(loggedInMember.getMemberId())) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_PERMISSION_DENIED);
        }
        postRepository.delete(post);
    }

    public Page<Post> searchPostsByKeyword(int page, int size, String keyword) {
        Pageable pageable = PageRequest.of(page, size);
        return postRepository.findByTitleContainingIgnoreCase(keyword, pageable);
    }

}
