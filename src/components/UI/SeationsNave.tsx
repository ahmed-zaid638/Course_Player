import type React from "react";
import { useState } from "react";
import { BookOpen, MessageCircle, HelpCircle, Trophy } from "lucide-react";

interface SectionsNavItem {
  icon: React.ReactNode;
  label: string;
  id: string;
}
interface SectionsNavProps {
  defaultActiveSection?: string;
  onClick?: (type: string) => void;
}

const SectionsNav = ({
  defaultActiveSection = "curriculum",
  onClick,
}: SectionsNavProps) => {
  const [activeSection, setActiveSection] = useState(defaultActiveSection);

  const items: SectionsNavItem[] = [
    { icon: <BookOpen size={20} />, label: "Curriculum", id: "curriculum" },
    { icon: <MessageCircle size={20} />, label: "Comments", id: "comments" },
    {
      icon: <HelpCircle size={20} />,
      label: "Ask Question",
      id: "ask-question",
    },
    { icon: <Trophy size={20} />, label: "Leaderboard", id: "leaderboard" },
  ];

  const handleCommentClick = () => {
    const el = document.getElementById("comments");
    if (el) {
      console.log("Element found:", el);
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleAskQuestionClick = () => {
    onClick?.("ask-question");
  };
  const handleLeaderboardClick = () => {
    onClick?.("leaderboard");
  };
  const handleCurriculumClick = () => {
    const el = document.getElementById("curriculum");
    if (el) {
      console.log("Element found:", el);
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "comments") {
      handleCommentClick();
      return;
    }
    if (sectionId === "ask-question") {
      handleAskQuestionClick();
      return;
    }
    if (sectionId === "leaderboard") {
      handleLeaderboardClick();
      return;
    }
    if (sectionId === "curriculum") {
      handleCurriculumClick();
      return;
    }
  };

  return (
    <div
      className={`flex flex-wrap justify-between md:justify-start px-2  gap-1 md:gap-8 mt-4 `}
    >
      {items.map((item) => {
        const isActive = activeSection === item.id;

        const iconWrapperClasses = [
          "mb-2 p-2 md:p-3 rounded-full border transition-all duration-200",
          "group-hover:border-blue-500 group-hover:text-blue-500 group-hover:shadow-sm",
          isActive
            ? "border-blue-500 text-blue-500 bg-blue-50"
            : "border-gray-200 text-gray-600",
        ].join(" ");

        const labelClasses = [
          "text-sm md:text-lg font-medium transition-colors duration-200",
          isActive
            ? "text-blue-600"
            : "text-gray-600 group-hover:text-blue-600",
        ].join(" ");

        const buttonClasses = [
          "flex flex-col items-center transition-all duration-200 cursor-pointer",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
          "group",
        ].join(" ");

        return (
          <button
            key={item.id}
            onClick={() => handleSectionClick(item.id)}
            className={buttonClasses}
          >
            <div className={iconWrapperClasses}>{item.icon}</div>
            <span className={`${labelClasses}`}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SectionsNav;
