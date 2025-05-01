"use client";

import { useEffect, useRef, useState } from "react";
import { questions } from "../../data/questions";
import ExamHeader from "./ExamHeader";
import QuestionNav from "./QuestionNav";
import QuestionCard from "./QuestionCard";

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExamModal({ isOpen, onClose }: ExamModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>("Bihar");

  const modalRef = useRef<HTMLDivElement>(null);
  const currentQuestion = questions[currentQuestionIndex - 1];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 z-20 flex items-center justify-center">
      <div
        ref={modalRef}
        className="flex flex-col h-[80vh] max-w-md mx-auto bg-white shadow-lg absolute z-20 rounded-lg w-[90%] left-0 right-0 top-5 bottom-0 m-auto"
      >
        <div className="flex flex-col h-full bg-blue-600 pb-5 rounded-lg">
          <ExamHeader timer={"00:59:12"} />
          <QuestionNav
            questions={questions}
            current={currentQuestionIndex}
            navigate={setCurrentQuestionIndex}
          />
          <QuestionCard
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
            index={currentQuestionIndex}
          />
        </div>
      </div>
    </div>
  );
}
