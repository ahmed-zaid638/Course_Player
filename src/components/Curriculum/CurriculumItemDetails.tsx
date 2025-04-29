import React from "react";
import { BookOpen, Lock, FileText } from "lucide-react";

function CurriculumItemDetails() {
  return (
    <div className=" bg-white border-b border-gray-200 rounded-md transition">
      <div className="flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-2">
          <FileText size={14} />{" "}
          <p className="text-sm text-gray-600">Lorem ipsu</p>
        </div>

        <div className="text-gray-400">
          <Lock size={14} />
        </div>
      </div>
    </div>
  );
}

export default CurriculumItemDetails;
