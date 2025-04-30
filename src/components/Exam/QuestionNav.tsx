import { Question } from "../../data/questions"

interface Props {
  questions: Question[]
  current: number
  navigate: (index: number) => void
}

export default function QuestionNav({ questions, current, navigate }: Props) {
  return (
    <div className="flex justify-center gap-4 my-4">
      {questions.map((q, index) => (
        <button
          key={q.id}
          onClick={() => navigate(index + 1)}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border ${
            current === index + 1
              ? "bg-white text-blue-600 border-white"
              : "bg-transparent text-white border-white/50"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}
