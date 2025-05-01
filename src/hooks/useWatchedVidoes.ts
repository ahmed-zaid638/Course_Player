import { useState, useEffect } from "react";

const useWatchedVideos = () => {
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);

  // Function to update the watched videos from localStorage
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

    setWatchedVideos(videos); // Update the state with watched videos
  };

  useEffect(() => {
    // Initial load of watched videos
    fetchWatchedVideos();

    // Listen for changes in localStorage (across different tabs/windows)
    const handleStorageChange = () => {
      console.log("Video watched detected");
      fetchWatchedVideos(); // Refresh watched videos on storage change
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange); // Clean up listener
    };
  }, []); // This will run on mount and whenever the component is rendered

  // Add a method to update `localStorage` and trigger an update in the component
  const markVideoAsWatched = (videoKey: string) => {
    localStorage.setItem(videoKey, "watched"); // Mark the video as watched in localStorage
    fetchWatchedVideos(); // Immediately update the state after watching the video
  };

  return { watchedVideos, markVideoAsWatched };
};

export default useWatchedVideos;
