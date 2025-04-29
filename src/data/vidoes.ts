export interface Video {
    id: number;
    title: string;
    url: string;
  }

const videos: Video[] = [
  {
    id: 1,
    title: "Introduction to SEO",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 2,
    title: "SEO Keywords Research",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 3,
    title: "On-Page SEO Optimization",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default videos;
