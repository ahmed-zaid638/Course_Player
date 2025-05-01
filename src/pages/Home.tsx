import { Link } from "react-router-dom";
import videos from "../data/vidoes";
import Layout from "../layout";

const Home = () => {
  const breadcrumbItems = [{ label: "Home", path: "/" }];
  const previewVideos = videos.slice(0, 3);

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      {/* Heading Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Available Courses
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Explore our wide range of courses designed to enhance your skills and
          knowledge. Whether you're just starting or looking to expand your
          expertise, we've got something for everyone.
        </p>
      </header>

      {/* Preview Videos Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Courses
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {previewVideos.map((video) => (
            <Link
              to={`/course/${video.id}`}
              key={video.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col items-center text-center transform hover:scale-105"
            >
              <div className="h-48 w-full bg-green-100 flex items-center justify-center rounded mb-6">
                <span className="text-green-600 text-xl font-semibold">
                  Video {video.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {video.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Take Your Learning to the Next Level
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Browse through our full library of courses and discover new topics to
          dive into. Start your learning journey with us today.
        </p>
        <div>
          <Link
            to="/courses"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            View All Courses
          </Link>
        </div>
      </section>

      {/* Testimonials or Features Section (Optional) */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          What Our Learners Are Saying
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            "These courses have completely transformed the way I approach my
            work. The learning experience is top-notch!"
          </p>
          <p className="text-lg text-gray-700 mb-4">
            "I was able to apply what I learned immediately. The content is
            well-structured and easy to follow."
          </p>
          <p className="text-lg text-gray-700 mb-4">
            "Highly recommend! The best platform to level up your skills at your
            own pace."
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
