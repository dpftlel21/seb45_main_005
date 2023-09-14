import React from 'react';
import ReactPlayer from 'react-player';
import PlayButton from '../../assets/images/Frame7.png';
import Pause from '../../assets/images/pause.png';
import Mute from '../../assets/images/mute.png';
import Notmute from '../../assets/images/notmute.png';

interface CustomAudioPlayerProps {
  url?: string;
  duration: number;
  setDuration: any;
  isPlaying: boolean;
  setIsPlaying: any;
  isMuted: boolean;
  setIsMuted: any;
  currentTime: number;
  setCurrentTime: any;
}

const Plyer: React.FC<CustomAudioPlayerProps> = ({
  url,
  duration,
  setDuration,
  isPlaying,
  setIsPlaying,
  isMuted,
  setIsMuted,
  currentTime,
  setCurrentTime,
}) => {
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);
  };

  const handleDuration = (durations: number) => {
    setDuration(durations);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  // const [currentSong,setCurrentSong] = useState();
  // if(duration===currentTime){
  //   setCurrentSong(다음곡url)
  // }

  return (
    <div className="custom-audio-player">
      <div className="player-controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? <img src={Pause} /> : <img src={PlayButton} />}
        </button>
        <button onClick={handleMuteUnmute}>
          {isMuted ? <img src={Notmute} /> : <img src={Mute} />}
        </button>
        <div className="time">{formatTime(currentTime)}</div>
        {duration && <div className="time">{formatTime(duration)}</div>}
      </div>
      <ReactPlayer
        url={url}
        playing={isPlaying}
        controls={true}
        muted={isMuted}
        width="100%"
        height="300px"
        volume={0.8}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
    </div>
  );
};

export default Plyer;
