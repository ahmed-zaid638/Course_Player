import { ChevronLeft, Clock } from "lucide-react";

export default function ExamHeader({ timer }: { timer: string }) {
  return (
    <div className="flex items-center justify-between p-4">
      <button className="text-white">
        <ChevronLeft size={24} />
      </button>
      <div className="bg-yellow-400  font-medium px-4 py-1 rounded-sm flex items-center gap-1 mx-auto shadow-[0_0_30px_#facc15]">
        <Clock size={16}  color="white"/>
        <span className="text-white">{timer}</span>
      </div>
    </div>
  );
}
