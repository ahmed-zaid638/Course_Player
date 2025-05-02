import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  console.log("VideoPlayer rendered with URL:", url);
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [hasSetStatus, setHasSetStatus] = useState(false);
  const [watched, setWatched] = useState(false);

  const storageKey = `watched_${url}`;
  console.log(watched);
  useEffect(() => {
    const status = localStorage.getItem(storageKey);
    if (status === "watched") {
      setWatched(true);
      setHasSetStatus(true);
    }
  }, [url, storageKey]);

  const handleTogglePlay = () => {
    setPlaying((prev) => !prev);
  };

  const handleProgress = (state: { played: number }) => {
    const percentPlayed = state.played * 100;
    if (percentPlayed >= 80 && !hasSetStatus) {
      localStorage.setItem(storageKey, "watched");
      setWatched(true);
      setHasSetStatus(true);

      window.dispatchEvent(
        new CustomEvent("videoWatched", { detail: { url } })
      );
     
    }
  };

  useEffect(() => {
    if (playing) {
      setTimeout(() => setShowIcon(false), 500);
    } else {
      setShowIcon(true);
    }
  }, [playing]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
      />

      {showIcon && (
        <button
          onClick={handleTogglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 transition-opacity duration-500"
        >
          <div className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
            {playing ? (
              <Pause size={34} fill="#e54860" stroke="none" />
            ) : (
              <Play size={34} fill="#e54860" stroke="none" />
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
