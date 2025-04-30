import { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [showIcon, setShowIcon] = useState(true);

  const handleTogglePlay = () => {
    setPlaying((prev) => !prev);
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
        url={url || "https://vimeo.com/76979871"}
        playing={playing}
        controls
        width="100%"
        height="100%"
      />

      {showIcon && (
        <button
          onClick={handleTogglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 transition-opacity duration-500"
        >
          <div className="bg-white/10 border border-white/20 p-6 rounded-full shadow-lg hover:scale-110 transition-transform">
            {playing ? (
              <Pause size={48} className="text-white" />
            ) : (
              <Play size={48} className="text-white" />
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
