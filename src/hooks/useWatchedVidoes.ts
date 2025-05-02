import { useState, useEffect } from "react";

const useWatchedVideos = () => {
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);

  const fetchWatchedVideos = () => {
    const videos: string[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("watched_")) {
        const progress = localStorage.getItem(key);
        if (progress) {
          videos.push(key);
        }
      }
    }

    setWatchedVideos(videos);
  };

  useEffect(() => {
    fetchWatchedVideos();

    const interval = setInterval(() => {
      fetchWatchedVideos();
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return { watchedVideos };
};

export default useWatchedVideos;
