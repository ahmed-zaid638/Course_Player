export type CurriculumItemType = "lesson" | "exam" | "pdf";

export interface CurriculumItemData {
  id: number;
  type: CurriculumItemType;
  title: string;
  description?: string;
}

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
  duration?: string;
}

export interface Course {
  id: number;
  title: string;
  curriculum: CurriculumSection[];
}
