import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoPlayer from "../components/Player/VideoPlayer";
import Curriculum from "../components/Curriculum/Curriculum";
import videos, { Video } from "../data/vidoes";

import Layout from "../layout"; // use Layout
import SectionsNav from "../components/UI/SeationsNave";
import CourseMaterials from "../components/CourseMaterials";
import Comments from "../components/Comments";

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const currentVideo: Video =
    videos.find((video) => video.id === Number(id)) || videos[0];

  const [watchedVideos, setWatchedVideos] = useState<number[]>(() => {
    const stored = localStorage.getItem("watchedVideos");
    return stored ? JSON.parse(stored) : [];
  });

  const handleProgress = ({ played }: { played: number }) => {
    if (played >= 0.8 && !watchedVideos.includes(currentVideo.id)) {
      const updated = [...watchedVideos, currentVideo.id];
      setWatchedVideos(updated);
      localStorage.setItem("watchedVideos", JSON.stringify(updated));
    }
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: `/courses` },
    { label: "Course Details", path: `/course/${id}` },
  ];

  if (!currentVideo) {
    return (
      <Layout breadcrumbItems={breadcrumbItems} title="Course Not Found">
        <div className="text-center py-10 text-red-500">Video not found.</div>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbItems={breadcrumbItems} title={currentVideo.title}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <VideoPlayer
            url={currentVideo.url}
            onProgress={handleProgress}
            playing
          />
          <div>
            <SectionsNav />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 hidden md:block">
              Course Materials
            </h2>
            <CourseMaterials />
          </div>
          <div className="hidden md:block">
            <Comments />
          </div>
        </div>
        <div className="">
          <Curriculum />
          <div className="block md:hidden">
            <Comments />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
