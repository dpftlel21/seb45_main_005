package mainproject.musicforecast.domain.post.controller;

import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.comment.mapper.CommentMapper;
import mainproject.musicforecast.domain.post.dto.MultiResponseDto;
import mainproject.musicforecast.domain.post.dto.SingleResponseDto;
import mainproject.musicforecast.domain.post.dto.PostPatchDto;
import mainproject.musicforecast.domain.post.dto.PostPostDto;
import mainproject.musicforecast.domain.post.dto.PostResponseDto;
import mainproject.musicforecast.domain.post.dto.PostVoteDto;
import mainproject.musicforecast.domain.post.entity.Post;
import mainproject.musicforecast.domain.post.mapper.PostMapper;
import mainproject.musicforecast.domain.post.service.PostService;
import mainproject.musicforecast.domain.member.mapper.MemberMapper;
import mainproject.musicforecast.domain.member.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/posts")
@Validated
public class PostController {

    private final PostService postService;
    private final PostMapper mapper;
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    private final CommentMapper commentMapper;

    public PostController(PostService postService, PostMapper mapper, MemberService memberService, MemberMapper memberMapper, CommentMapper commentMapper) {
        this.postService = postService;
        this.mapper = mapper;
        this.memberService = memberService;
        this.memberMapper = memberMapper;
        this.commentMapper = commentMapper;
    }

    // 글 등록
    @PostMapping
    public ResponseEntity postPost(@Valid @RequestBody PostPostDto PostPostDto) {

        Post post = postService.createPost(mapper.postPostToPost(memberService, PostPostDto));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.postToPostResponse(memberMapper, post, commentmapper))
                , HttpStatus.CREATED);
    }

    // 글 수정
    @PatchMapping("/{post-id}")
    public ResponseEntity patchPost(@PathVariable("post-id") @Positive long postId,
                                        @Valid @RequestBody PostPatchDto requestBody,
                                        @AuthenticationPrincipal Member member) {
        requestBody.setPostId(postId);

        Post post = postService.updatePost(
                mapper.postPatchDtoToPost(requestBody), member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.postToPostResponseDto(post)),
                HttpStatus.OK);
    }

    // 투표하기 Vote=true +1, 투표 취소하기 Vote=false -1
    @PatchMapping("/{post-id}/vote")
    public ResponseEntity patchVote(@PathVariable("post-id") @Positive Long postId,
                                    @RequestParam Boolean vote,
                                    @Valid @RequestBody PostVoteDto postVoteDto) {
        postVoteDto.setPostId(postId);

        Post post = postService.votePost(mapper.postVoteToPost(postVoteDto),
                vote);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.postToPostResponse(memberMapper, post, commentMapper))
                , HttpStatus.OK);
    }

    // 특정 게시글 조회
    @GetMapping("/{post-id}")
    public ResponseEntity getPost(@PathVariable("post-id") @Positive Long postId) {

        Post post = postService.findGetPost(postId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.postToPostResponse(memberMapper, post, commentMapper)),
                HttpStatus.OK);
    }


    // 전체 게시글 조회
    @GetMapping  // page = 1, size = 10으로 설정
    public ResponseEntity getPosts(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<Post> pagePosts = postService.findPosts(page - 1, size);
        List<Post> posts = pagePosts.getContent();
        List<PostResponseDto> response =
                posts.stream()
                        .map(post -> mapper.postToPostResponse(memberMapper, post, commentMapper))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(
                new MultiResponseDto<>(response, pagePosts),
                HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/{post-id}")
    public ResponseEntity deletePost(@PathVariable("post-id") @Positive Long postId,
                                         @AuthenticationPrincipal Member member) {
        postService.deletePost(postId, member);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}