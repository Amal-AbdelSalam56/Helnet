import { useState, useRef, useEffect } from "react";
import {
  play,
  pause,
  muted,
  volumeDown,
  volumeUp,
  fullscreen,
  restart,
} from "../../../assets/images/icons";
import "./VideoPlayer.scss";

export default function VideoPlayer({ data }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [timeLine, setTimeLine] = useState(0);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  // useEffect(() => {
  //   const handleTimeUpdate = () => {
  //     setTimeLine(videoRef.current.currentTime);
  //   };

  //   videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

  //   return () => {
  //     videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, []);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setTimeLine(videoRef.current.currentTime);
    };

    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      currentVideoRef.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleTimeLine = (event) => {
    setTimeLine(parseFloat(event.target.value));
    videoRef.current.currentTime = parseFloat(event.target.value);
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
    videoRef.current.volume = parseFloat(event.target.value);
  };

  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  const add0toLiftFormat = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });

  const formatTime = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    if (hours === 0) {
      return `${add0toLiftFormat.format(minutes)}:${add0toLiftFormat.format(
        seconds
      )}`;
    } else {
      return `${hours}:${add0toLiftFormat.format(
        minutes
      )}:${add0toLiftFormat.format(seconds)}`;
    }
  };

  const maxTime = isNaN(videoRef.current?.duration)
    ? 0
    : videoRef.current.duration;

  return (
    <div className={`videoPlayer ${isPlaying}`}>
      <video
        className="video"
        style={{ maxHeight: "400px" }}
        src={data}
        ref={videoRef}
        onClick={togglePlay}
      />
      <div className="controlsContainer">
        <div className="controlsTimeLine">
          <input
            type="range"
            min="0"
            step="any"
            value={timeLine}
            onChange={handleTimeLine}
            max={maxTime}
          />
        </div>
        <div className="controlsButtons">
          <img
            src={isPlaying ? (timeLine === maxTime ? restart : pause) : play}
            alt=""
            role="button"
            onClick={togglePlay}
          />
          <img
            src={volume === 0 ? muted : volume > 0.4 ? volumeUp : volumeDown}
            alt=""
            className="volumeIcon"
          />
          <input
            type="range"
            min="0"
            max="1"
            step="any"
            defaultValue="1"
            onChange={handleVolumeChange}
            className="volumeControls"
          />
          <p className="duration">
            <span>{formatTime(timeLine)}</span>/
            <span>{formatTime(maxTime)}</span>
          </p>
          <img
            src={fullscreen}
            alt=""
            role="button"
            onClick={handleFullScreen}
          />
        </div>
      </div>
    </div>
  );
}
