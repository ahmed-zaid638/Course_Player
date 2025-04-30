import { FileText, Lock, PlayCircle, Newspaper } from "lucide-react";

function CurriculumItemDetails({ data, onClick }: any) {
  const getTypeIcon = (type: "lesson" | "exam" | "pdf") => {
    switch (type) {
      case "lesson":
        return <PlayCircle size={16} className="text-gray-500" />;
      case "exam":
        return <Newspaper size={16} className="text-gray-500" />;
      case "pdf":
        return <FileText size={16} className="text-gray-500" />;
      default:
        return <FileText size={16} className="text-gray-500" />;
    }
  };

  const handleClick = (type: string, id: number) => {
    onClick(type, id);
  };

  return (
    <div
      className={`bg-white border-b border-gray-200 rounded-md transition cursor-pointer hover:bg-gray-50 ${
        data.isLocked ? "opacity-100 cursor-not-allowed" : ""
      }`}
      onClick={() => handleClick(data.type, data.id)}
    >
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-2">
          {getTypeIcon(data.type)}
          <p className="text-sm text-gray-600">{data.title}</p>
        </div>
        <div className="text-gray-400">
          {data.isLocked ? <Lock size={14} /> : null}
        </div>
      </div>
    </div>
  );
}

export default CurriculumItemDetails;
