export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "First question placeholder",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    id: 2,
    text: "Among the following states of India, which one has the oldest rock formations in the country?",
    options: ["Assam", "Bihar", "Karnataka", "Uttar Pradesh"],
  },
  {
    id: 3,
    text: "Third question placeholder",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    id: 4,
    text: "Fourth question placeholder",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    id: 5,
    text: "Fifth question placeholder",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
];
