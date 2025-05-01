import { useParams } from "react-router-dom";
import { useState } from "react";
import VideoPlayer from "../components/Player/VideoPlayer";
import Curriculum from "../components/Curriculum/Curriculum";
import Layout from "../layout";
import SectionsNav from "../components/UI/SeationsNave";
import CourseMaterials from "../components/CourseMaterials";
import Comments from "../components/Comments";
import { CoursesData } from "../data/CoursesList";
import ExamModal from "../components/Exam/ExamModal";
import AskQuestionModal from "../components/AskQuestion";
import CourseLeaderboard from "../components/Leaderboard";
import PdfModal from "../components/Modals/PdfModal";

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const [ExamModalOpen, setExamModalOpen] = useState(false);
  const [leaderboardModalOpen, setLeaderboardModalOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);

  const courseId = Number(id);
  const currentCourse = CoursesData.find((course) => course.id === courseId);
  const curriculumData = currentCourse?.curriculum;

  const firstAvailableVideo =
    curriculumData
      ?.flatMap((section) => section.items)
      .find((item) => !item.isLocked)?.videoUrl ?? "";

  const [selectedVideoUrl, setSelectedVideoUrl] =
    useState<string>(firstAvailableVideo);

  const handleCurriculumItemClick = (type: string, id: number) => {
    if (type === "lesson") {
      console.log("Lesson clicked!", id);
      const selectedItem = curriculumData
        ?.flatMap((section) => section.items)
        .find((item) => item.id === id);
      if (selectedItem) {
        console.log("Selected item:", selectedItem);
        setSelectedVideoUrl(selectedItem.videoUrl);
      }
    }
    if (type === "pdf") {
      setShowPdfModal(true);
    }
    if (type === "exam") {
      setExamModalOpen(true);
      console.log("exam clicked!");
    }
  };

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: `/courses` },
    { label: "Course Details", path: `/course/${id}` },
  ];

  const handleModalsClick = (type: string) => {
    if (type === "ask-question") {
      setModalOpen(true);
    }
    if (type === "leaderboard") {
      setLeaderboardModalOpen(true);
      console.log("leaderboard clicked!");
    }
  };
  if (!currentCourse) {
    return (
      <Layout breadcrumbItems={breadcrumbItems} title="Course Not Found">
        <div className="text-center py-10 text-red-500">Course not found.</div>
      </Layout>
    );
  }

  return (
    <Layout breadcrumbItems={breadcrumbItems} title={currentCourse.title}>
      <div>
        <div className="p-4">
          {showPdfModal && (
            <PdfModal
              fileUrl="/sample.pdf"
              onClose={() => setShowPdfModal(false)}
            />
          )}
        </div>
        {ExamModalOpen && (
          <ExamModal
            isOpen={ExamModalOpen}
            onClose={() => setExamModalOpen(false)}
          />
        )}
        <AskQuestionModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
        {leaderboardModalOpen && (
          <CourseLeaderboard
            courseName={currentCourse.title}
            onClose={() => setLeaderboardModalOpen(false)}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <VideoPlayer url={selectedVideoUrl} key={selectedVideoUrl} />
          <div>
            <SectionsNav onClick={handleModalsClick} />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 hidden md:block">
              Course Materials
            </h2>
            <CourseMaterials />
          </div>
          <div className="hidden md:block" id="comments">
            <Comments />
          </div>
        </div>
        <div className="" id="curriculum">
          <Curriculum
            data={curriculumData}
            onClick={handleCurriculumItemClick}
          />
          <div className="block md:hidden" id="comments">
            <Comments />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
