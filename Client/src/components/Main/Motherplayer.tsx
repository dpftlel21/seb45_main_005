import React from 'react';
import { useState } from 'react';
import Player from './Plyer';

const Motherplayer = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number | null>(null);

  if (duration === currentTime + 2000) {
    setCurrentUrl('https://www.youtube.com/watch?v=DfX4F5a6JE8');
    console.log(currentUrl);
  }

  return (
    <div>
      <Player
        duration={duration}
        setDuration={setDuration}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        url={`https://www.youtube.com/watch?v=NgEaOJ7lRWY`}
      />
    </div>
  );
};

export default Motherplayer;
