import { Link } from "react-router-dom";
import Layout from "../layout"; // use Layout
import { CoursesData } from "../data/CoursesList";

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
        {CoursesData.map((course) => (
          <li key={course.id}>
            <Link
              to={`/course/${course.id}`}
              className="block p-4 bg-white rounded-lg shadow hover:bg-green-50 transition"
            >
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CoursesList;
