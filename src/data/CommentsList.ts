export interface Comment {
  id: string;
  studentName: string;
  date: string;
  content: string;
  avatarUrl: string;
}

export const defaultComments: Comment[] = [
  {
    id: "1",
    studentName: "Johnson Koenig",
    date: "Oct 10, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarUrl:
      "https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg",
  },
  {
    id: "2",
    studentName: "Mohamed Ali",
    date: "Oct 15, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarUrl:
      "https://jstockphotography.co.uk/wp-content/uploads/2020/10/Julian_Stock_Commercial_Photographer_220x220.jpg",
  },
  {
    id: "3",
    studentName: "Johnson Koenig",
    date: "Oct 18, 2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatarUrl:
      "https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg",
  },
];
