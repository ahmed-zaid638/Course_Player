import { useEffect, useRef } from "react";
import { Trophy, PlayCircle } from "lucide-react"; // Importing PlayCircle icon
import useWatchedVideos from "../../hooks/useWatchedVidoes"; // Assuming this hook is in the hooks folder

interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
  rank: number;
}

interface CourseLeaderboardProps {
  courseName: string;
  entries?: LeaderboardEntry[];
  onClose?: () => void;
}

export default function CourseLeaderboard({
  courseName = "Course Name Shown Here",
  entries = [],
  onClose,
}: CourseLeaderboardProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const totalVideos = 7;
  // Get watched videos using the custom hook
  const { watchedVideos } = useWatchedVideos();

  const displayEntries =
    entries.length > 0
      ? entries
      : Array(5)
          .fill(null)
          .map((_, i) => ({
            id: i,
            name: "",
            score: 0,
            rank: i + 1,
          }));

  // Calculate the percentage of videos watched
  const percentageCompleted = totalVideos
    ? Math.min((watchedVideos.length / 7) * 100, 100)
    : 0;

  // Define message based on watched videos count and percentage
  const progressMessage =
    watchedVideos.length > 0
      ? `Great job! You've watched ${
          watchedVideos.length
        } out of ${totalVideos} videos (${Math.round(
          percentageCompleted
        )}%)! Keep going to reach the top!`
      : "Start watching videos to make progress and climb the leaderboard!";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        console.log("Clicked outside modal");
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/30 z-40 flex items-start justify-center pt-28">
      <div
        ref={modalRef}
        className="max-w-md w-full bg-gray-50 p-6 rounded-lg shadow-sm"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-purple-800 font-medium text-xl">{courseName}</h2>
          <h3 className="text-gray-700 font-bold text-lg">Leaderboard</h3>
        </div>

        {/* Highlight Box */}
        <div className="flex items-start gap-2 mb-6 justify-around">
          <div className="max-w-[70%]">
            <p className="text-gray-600 text-xl leading-relaxed">{progressMessage}</p>
          </div>
          <div className="relative">
            {watchedVideos.length > 0 ? (
              <Trophy className="h-10 w-10 text-yellow-400" />
            ) : (
              <PlayCircle className="h-10 w-10 text-gray-400" /> // Show Play icon when no videos are watched
            )}
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="space-y-3">
          {displayEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-md p-4 shadow-sm flex items-center justify-between"
            >
              {entry.name ? (
                <>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-700">
                      #{entry.rank}
                    </span>
                    <span className="text-gray-800">{entry.name}</span>
                  </div>
                  <div className="font-medium text-gray-700">
                    {entry.score} pts
                  </div>
                </>
              ) : (
                <div className="w-full h-4 bg-gray-100 rounded"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
