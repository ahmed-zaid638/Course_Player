import { Link } from "react-router-dom";
import videos from "../data/vidoes";
import Layout from "../layout"; // use Layout

const CoursesList = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
  ];

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <h1 className="text-3xl font-bold">Welcome to the SEO Course</h1>
      <p className="text-lg mb-6">Select a video to start learning!</p>

      <ul className="space-y-4">
        {videos.map((video) => (
          <li key={video.id}>
            <Link
              to={`/course/${video.id}`}
              className="block p-4 bg-white rounded-lg shadow hover:bg-green-50 transition"
            >
              {video.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CoursesList;
