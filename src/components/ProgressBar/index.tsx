import { useEffect, useState } from "react";
import useWatchedVideos from "../../hooks/useWatchedVidoes";

const ProgressBar = () => {
  const [mounted, setMounted] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const { watchedVideos } = useWatchedVideos();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (watchedVideos.length > 0) {
      console.log(watchedVideos.length);
      const averageProgress = watchedVideos.length / 7;
      setPercentage(averageProgress * 100);
    }
  }, [watchedVideos]);

  if (!mounted) {
    return (
      <div className="w-full mb-4">
        <div className="h-12 mb-2"></div>
        <div className="w-full h-10 border-2 border-blue-300 rounded-md"></div>
        <div className="h-12 mt-2"></div>
      </div>
    );
  }

  return (
    <div className="w-full mb-4 relative">
      <div
        className="absolute -top-14  flex flex-col items-center z-10 transition-all duration-300"
        style={{
          left: `calc(${
            percentage === 0 ? percentage + 1 : percentage - 1
          }% - 20px)`,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#C8C8C8] bg-white flex items-center justify-center">
          <span className="text-xs font-medium text-[#485293]">You</span>
        </div>
        <div className="w-0 h-0 mt-[2px] border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-[#C8C8C8]" />
      </div>

      <div className="relative w-full h-1 bg-gray-200 rounded-md overflow-hidden translate-y-[0px]">
        <div
          className="h-full bg-[#6ABD8A] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div
        className="absolute top-full mt-[6px] flex flex-col items-center z-10 transition-all duration-300"
        style={{
          left: `calc(${
            percentage === 0 ? percentage + 1 : percentage - 3
          }% - 3px)`,
        }}
      >
        <span className="text-xs font-medium text-[#485293]">
          {percentage.toFixed(0)}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
