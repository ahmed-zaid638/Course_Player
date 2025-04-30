export type CurriculumItemType = "lesson" | "exam" | "pdf";

export interface CurriculumItem {
  id: number;
  title: string;
  isLocked: boolean;
  videoUrl: string;
  type: CurriculumItemType;
  duartion?: string;
}

export interface CurriculumSection {
  id: number;
  title: string;
  items: CurriculumItem[];
}

export interface Course {
  id: number;
  title: string;
  curriculum: CurriculumSection[];
}
export const CoursesData: Course[] = [
  {
    id: 1,
    title: "Learn React from Scratch",
    curriculum: [
      {
        id: 1,
        title: "React Basics",
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
    ],
  },
];
