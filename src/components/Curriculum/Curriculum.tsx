import CurriculumItem from "./CurriculumItem";
import ProgressBar from "../ProgressBar";

const Curriculum = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="text-xl  font-semibold mb-12">Topics for this course</div>
      <div className="mb-12">
        <ProgressBar />
      </div>
      {[1, 2, 3].map(() => (
        <div className="">
          <CurriculumItem />
        </div>
      ))}
    </section>
  );
};

export default Curriculum;
