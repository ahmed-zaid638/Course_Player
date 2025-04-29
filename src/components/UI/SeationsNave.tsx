"use client";

import type React from "react";
import { useState } from "react";
import { BookOpen, MessageCircle, HelpCircle, Trophy } from "lucide-react";

interface SectionsNavItem {
  icon: React.ReactNode;
  label: string;
  id: string;
}

interface SectionsNavProps {
  onSectionChange?: (sectionId: string) => void;
  defaultActiveSection?: string;
  className?: string;
}

const SectionsNav = ({
  onSectionChange,
  defaultActiveSection = "curriculum",
  className = "",
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

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  return (
    <div
      className={`flex flex-wrap justify-between md:justify-start px-2  gap-4 md:gap-8 mt-4 ${className}`}
    >
      {items.map((item) => {
        const isActive = activeSection === item.id;

        const iconWrapperClasses = [
          "mb-2 p-3 rounded-full border transition-all duration-200",
          "group-hover:border-blue-500 group-hover:text-blue-500 group-hover:shadow-sm",
          isActive
            ? "border-blue-500 text-blue-500 bg-blue-50"
            : "border-gray-200 text-gray-600",
        ].join(" ");

        const labelClasses = [
          "text-sm font-medium transition-colors duration-200",
          isActive
            ? "text-blue-600"
            : "text-gray-600 group-hover:text-blue-600",
        ].join(" ");

        const buttonClasses = [
          "flex flex-col items-center transition-all duration-200",
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
            <span className={labelClasses}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SectionsNav;
