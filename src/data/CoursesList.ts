import { Course } from "../types/curriculum";

export const CoursesData: Course[] = [
  {
    id: 1,
    title: "Learn React from Scratch",
    curriculum: [
      {
        id: 1,
        title: "React Basics",
        duration: "1-3 weeks",
        items: [
          {
            id: 1,
            duartion: "1-3 weeks",
            title: "Introduction to React",
            isLocked: false,
            videoUrl: "https://vimeo.com/76979871",
            type: "lesson",
          },
          {
            id: 2,
            title: "Components and Props",
            isLocked: true,
            videoUrl: "https://vimeo.com/43054656",
            type: "lesson",
            duartion: "1-3 weeks",
          },
          {
            id: 3,
            title: "State and Lifecycle",
            isLocked: true,
            videoUrl: "https://vimeo.com/303360564",
            duartion: "1-3 weeks",
            type: "pdf",
          },
          {
            id: 4,
            title: "State and Lifecycle",
            isLocked: true,
            videoUrl: "https://vimeo.com/303360564",
            type: "lesson",
            duartion: "1-3 weeks",
          },
          {
            id: 5,
            title: "Exam",
            isLocked: true,
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
            type: "exam",
            duartion: "1-3 weeks",
          },
        ],
      },
      {
        id: 2,
        title: "Advanced React",
        duration: "4-5 weeks",

        items: [
          {
            id: 6,
            duartion: "1-3 weeks",
            title: "Hooks Deep Dive",
            isLocked: true,
            videoUrl: "https://vimeo.com/65107797",
            type: "lesson",
          },
          {
            id: 7,
            title: "Context API",
            isLocked: true,
            videoUrl: "https://vimeo.com/1084537",
            type: "lesson",
            duartion: "1-3 weeks",
          },
          {
            id: 8,
            title: "Performance Optimization",
            isLocked: true,
            videoUrl: "https://vimeo.com/112233445",
            duartion: "1-3 weeks",
            type: "pdf",
          },
          {
            id: 9,
            title: "React Router",
            isLocked: true,
            videoUrl: "https://vimeo.com/663028019?utm_source=chatgpt.com",
            type: "lesson",
            duartion: "1-3 weeks",
          },
          {
            id: 10,
            title: "Final Exam",
            isLocked: true,
            videoUrl: "https://www.w3schools.com/html/movie.mp4",
            type: "exam",
            duartion: "1-3 weeks",
          },
        ],
      },
    ],
  },
];
