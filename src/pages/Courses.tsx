import { Link } from "react-router-dom";
import Layout from "../layout";
import videos from "../data/vidoes"; // assuming this is the correct data

const CoursesList = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
  ];

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <h1 className="text-3xl font-bold text-green-600 mb-8">All Courses</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
        {videos.map((video) => (
          <Link
            to={`/course/${video.id}`}
            key={video.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <div className="h-32 w-full bg-green-100 flex items-center justify-center rounded mb-4">
              <span className="text-green-600 text-xl font-semibold">
                Video {video.id}
              </span>
            </div>
            <h2 className="text-lg font-semibold">{video.title}</h2>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default CoursesList;
