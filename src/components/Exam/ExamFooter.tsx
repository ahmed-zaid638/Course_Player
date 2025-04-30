export default function ExamFooter({
  score,
  total,
}: {
  score: number;
  total: number;
}) {
  return (
    <div className="bg-white p-4 border-t flex justify-center gap-8">
      <div className="flex items-center gap-2">
        <span className="text-blue-500 font-bold">{score}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-500 font-bold">{total}</span>
      </div>
    </div>
  );
}
