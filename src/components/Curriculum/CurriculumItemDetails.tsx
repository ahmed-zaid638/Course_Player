import {
  FileText,
  Lock,
  PlayCircle,
  Newspaper,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

function CurriculumItemDetails({ data, onClick, isSelected }: any) {
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    const checkWatched = () => {
      const status = localStorage.getItem(`watched_${data.videoUrl}`);
      setWatched(status === "watched");
    };

    checkWatched();

    const handleVideoWatched = (e: any) => {
      if (e.detail?.url === data.videoUrl) {
        checkWatched();
      }
    };

    window.addEventListener("videoWatched", handleVideoWatched);
    return () => window.removeEventListener("videoWatched", handleVideoWatched);
  }, [data?.videoUrl]);

  const getTypeIcon = (type: "lesson" | "exam" | "pdf") => {
    switch (type) {
      case "lesson":
        return watched ? (
          <CheckCircle size={16} className="text-green-500" />
        ) : (
          <PlayCircle size={16} className="text-gray-500" />
        );
      case "exam":
        return <Newspaper size={16} className="text-gray-500" />;
      case "pdf":
        return <FileText size={16} className="text-gray-500" />;
      default:
        return <FileText size={16} className="text-gray-500" />;
    }
  };

  return (
    <div
      className={`${
        isSelected ? "bg-blue-50" : "bg-white hover:bg-gray-50"
      } border-b px-1 border-gray-200 rounded-m transition cursor-pointer ${
        data.isLocked ? "opacity-100 cursor-not-allowed" : ""
      }`}
      onClick={() => onClick(data.type, data.id)}
    >
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-2">
          {getTypeIcon(data.type)}
          <p className="text-lg text-gray-600">{data.title}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          {data.isLocked && <Lock size={14} />}
        </div>
      </div>
    </div>
  );
}

export default CurriculumItemDetails;
