import {
  rightCircle,
  leftCircle,
  volumeDown,
  muted,
  volumeUp,
  play2,
  pause,
  profile1,
} from "../../../assets/images/icons";
import { Button } from "../";
import { useRef, useState } from "react";
import { t } from "i18next";
import "./AudioPlayer.scss";

export default function AudioPlayer({ data,user }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
    audioRef.current.volume = parseFloat(event.target.value);
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

  const maxTime = isNaN(audioRef.current?.duration)
    ? 0
    : audioRef.current.duration;

  return (
    <>
      <audio src={data} ref={audioRef} />
      <Button
        dir="rtl"
        className="h-60 rounded-3xl relative cursor-auto"
        children={
          <>
            <div
              className={`absolute flex ${isPlaying ? "playAnimation" : ""}`}
            >
              <img className="-m-4" src={leftCircle} alt="" />

              <img className="-m-4" src={rightCircle} alt="" />
            </div>

            <img
              className="absolute"
              src={user?.user_img ? storageLink + e.user.profile.user_img : profile1}
              alt=""
            />

            <img
              className="absolute"
              src={isPlaying ? pause : play2}
              alt=""
              onClick={() => {
                setIsPlaying(!isPlaying);
                togglePlay();
              }}
            />

            <div className="absolute bottom-0 w-full flex justify-between p-2">
              <p>{t("audio clip")}</p>

              <div className="flex items-center volumeControlsContainer">
                <img
                  src={
                    volume === 0 ? muted : volume > 0.4 ? volumeUp : volumeDown
                  }
                  alt=""
                />

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="any"
                  defaultValue="1"
                  onChange={handleVolumeChange}
                />

                <span>{formatTime(maxTime)}</span>
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
