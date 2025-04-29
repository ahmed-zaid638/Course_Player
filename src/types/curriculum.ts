export type CurriculumType = "lesson" | "exam" | "pdf";

export interface CurriculumItemData {
  id: number;
  type: CurriculumType;
  title: string;
  description?: string;
}
