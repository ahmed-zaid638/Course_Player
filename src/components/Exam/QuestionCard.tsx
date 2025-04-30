import { Question } from "../../data/questions";
import OptionCard from "./OptionCard";

interface Props {
  question: Question;
  selectedOption: string | null;
  onSelectOption: (opt: string) => void;
  index: number;
}

export default function QuestionCard({
  question,
  selectedOption,
  onSelectOption,
  index,
}: Props) {
  return (
    <div className="bg-white mx-4 rounded-t-2xl flex-1 p-6 rounded-lg">
      <div className="mb-4">
        <div className="text-gray-600 mb-2">{index}.</div>
        <div className="text-gray-800 font-medium">{question.text}</div>
      </div>
      <div className="space-y-3 mt-6">
        {question.options.map((option, i) => (
          <OptionCard
            key={i}
            option={option}
            selected={selectedOption === option}
            onClick={() => onSelectOption(option)}
          />
        ))}
      </div>
    </div>
  );
}
