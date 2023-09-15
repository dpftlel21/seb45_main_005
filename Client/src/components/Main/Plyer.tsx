import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayButton from '../../assets/images/Frame7.png';
import Pause from '../../assets/images/pause.png';
import Mute from '../../assets/images/mute.png';
import Notmute from '../../assets/images/notmute.png';
import data from './Data/data.json';

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
  currentUrl: string;
  setCurrentUrl: any;
  currentIdx: number;
  setCurrentIdx: any;
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
  currentUrl,
  setCurrentUrl,
  currentIdx,
  setCurrentIdx,
}) => {
  console.log(currentUrl);
  const [volumeValue, setVolumeValue] = useState(0.8);
  const reactPlayerRef = useRef<ReactPlayer>(null);
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

  const handleNext = async () => {
    let nextIdx;

    if (currentIdx < data.length - 1) {
      nextIdx = currentIdx + 1;
    } else if (currentIdx === data.length - 1) {
      nextIdx = 0;
    }

    await setCurrentIdx(nextIdx);
    setCurrentUrl(data[nextIdx].url);
    setIsPlaying(true);
  };

  const handlePre = async () => {
    let prevIdx;

    if (currentIdx > 0) {
      prevIdx = currentIdx - 1;
    } else if (currentIdx === 0) {
      prevIdx = data.length - 1;
    }

    await setCurrentIdx(prevIdx);
    setCurrentUrl(data[prevIdx].url);
    setIsPlaying(true);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setVolumeValue(newValue);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);

    if (reactPlayerRef.current) {
      reactPlayerRef.current.seekTo(newTime, 'seconds');
    }
  };

  const handlePlaynext = async () => {
    let nextIdx;

    if (currentIdx < data.length - 1) {
      nextIdx = currentIdx + 1;
    } else if (currentIdx === data.length - 1) {
      nextIdx = 0;
    }

    await setCurrentIdx(nextIdx);
    setCurrentUrl(data[nextIdx].url);
    setIsPlaying(true);
  };

  return (
    <div className="custom-audio-player">
      <div className="player-controls">
        <div>{data[currentIdx].title}</div>
        <div>{data[currentIdx].ArtistName}</div>
        <button onClick={handlePlayPause}>
          {isPlaying ? <img src={Pause} /> : <img src={PlayButton} />}
        </button>
        <button onClick={handleMuteUnmute}>
          {isMuted ? <img src={Mute} /> : <img src={Notmute} />}
        </button>
        <div className="time">{formatTime(currentTime)}</div>
        {duration && <div className="time">{formatTime(duration)}</div>}
        <input
          type="range"
          min={0}
          max={1}
          value={volumeValue}
          step={0.01}
          onChange={handleVolumeChange}
        />
        <input
          type="range"
          min={0}
          max={duration} // 영상의 총 길이를 최대 값으로 설정
          step={0.01}
          value={currentTime}
          onChange={handleSeek}
        />
        <button onClick={handleNext}>다음</button>
        <button onClick={handlePre} className="w-32">
          이전
        </button>
      </div>
      <ReactPlayer
        url={url}
        playing={isPlaying}
        controls={true}
        muted={isMuted}
        width="100"
        height="300px"
        volume={volumeValue}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onEnded={handlePlaynext}
        ref={reactPlayerRef}
      />
    </div>
  );
};

export default Plyer;
