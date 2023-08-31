package mainproject.musicforecast.domain.playlist.mapper;

import mainproject.musicforecast.domain.member.entity.Member;
import mainproject.musicforecast.domain.playlist.dto.PlaylistDto;
import mainproject.musicforecast.domain.playlist.entity.Playlist;
import mainproject.musicforecast.domain.playlistTag.entity.PlaylistTag;
import mainproject.musicforecast.domain.tag.entity.Tag;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
//@Service //PlaylistController에서 Could not autowire.
public interface PlaylistMapper {

    default Playlist playlistPostDtoToPlaylist(PlaylistDto.Post playlistPostDto) {
        Member member = new Member();

        member.setMemberId(playlistPostDto.getMemberId());

        Playlist playlist = new Playlist();

        playlist.setMember(member);
        playlist.setTitle(playlistPostDto.getTitle());
        playlist.setPublic(playlistPostDto.isPublic());

        return playlist;
    }

    Playlist playlistPatchDtoToPlaylist(PlaylistDto.Patch playlistPatchDto);

//    default Playlist playlistPatchDtoToPlaylist(PlaylistDto.PatchTag playlistPatchDto) {
//        Playlist playlist = new Playlist();
//
//        playlist.setPlaylistId(playlistPatchDto.getPlaylistId());
//        playlist.setTitle(playlistPatchDto.getTitle());
//        playlist.setPublic(playlistPatchDto.isPublic());
//
//        List<Tag> tags = new ArrayList<>();
//
//        playlistPatchDto.getTag().stream().forEach(tag -> tags.add(tag));
//
//        playlist.setPlaylistTags(tags);
//    }

    default PlaylistDto.DetailResponse playlistToPlaylistResponseDto(Playlist playlist) {
        PlaylistDto.DetailResponse response = PlaylistDto.DetailResponse.builder()
                .playlistId(playlist.getPlaylistId())
                .title(playlist.getTitle())
                .isPublic(playlist.isPublic())
                .view(playlist.getView())
                .memberId(playlist.getMember().getMemberId())
                .build();

        List<PlaylistTag> playlistTags = playlist.getPlaylistTags();

        List<PlaylistDto.PlaylistTagResponse> playlistTagResponses = playlistTags.stream()
                .map(playlistTag -> PlaylistDto.PlaylistTagResponse.builder()
                        .playlistTagId(playlistTag.getPlaylistTagId())
                        .playlistId(playlistTag.getPlaylist().getPlaylistId())
                        .tagId(playlistTag.getTag().getTagId()).build())
                .collect(Collectors.toList());

        response.setPlaylistTags(playlistTagResponses);

        return response;
    }

    List<PlaylistDto.Response> playlistToPlaylistResponseDtos(List<Playlist> playlists);
}
