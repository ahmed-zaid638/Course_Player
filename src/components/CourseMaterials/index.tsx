import { Clock, BookOpen, Users, Globe, User2Icon } from "lucide-react";

// interface CourseStatsProps {
//   duration: string
//   lessons: number
//   enrolled: number
//   language: string
//   className?: string
// }

export default function CourseMaterials({
  duration = "3 weeks",
  lessons = 8,
  enrolled = 65,
  language = "English",
  Instructor = "John Doe",
}) {
  const stats = [
    {
      icon: <User2Icon className="w-5 h-5 text-gray-500" />,
      label: "Instructor:",
      value: Instructor,
    },
    {
      icon: <Clock className="w-5 h-5 text-gray-500" />,
      label: "Duration:",
      value: duration,
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gray-500" />,
      label: "Lessons:",
      value: lessons,
    },
    {
      icon: <Users className="w-5 h-5 text-gray-500" />,
      label: "Enrolled:",
      value: `${enrolled} students`,
    },
    {
      icon: <Globe className="w-5 h-5 text-gray-500" />,
      label: "Language:",
      value: language,
    },
  ];

  return (
    <div
      className={`flex flex-col md:flex-row md:gap-6 pb-5 md:pb-0 bg-white rounded-md shadow-sm border border-gray-100`}
    >
      <div className="text-lg font-semibold text-gray-800 block md:hidden p-4">
        Course Materails
      </div>
      {/* First Panel */}
      <div className="flex-1  p-4 relative">
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center border-b md:border-b-0 pb-4 md:pb-0 border-gray-200"
            >
              <div className="w-8">{stat.icon}</div>
              <div className="w-24 text-gray-600 text-sm">{stat.label}</div>
              <div className="text-gray-800 font-medium">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Panel */}
      <div className="flex-1  p-4 relative hidden md:block">
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center border-b md:border-b-0 pb-4 md:pb-0  border-gray-200"
            >
              <div className="w-8">{stat.icon}</div>
              <div className="w-24 text-gray-600 text-sm">{stat.label}</div>
              <div className="text-gray-800 font-medium">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
