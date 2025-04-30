import CurriculumItem from "./CurriculumItem";
import ProgressBar from "../ProgressBar";

const Curriculum: React.FC = ({ data, onClick }: any) => {
  ("");
  return (
    <section className="max-w-3xl mx-auto">
      <div className="text-xl  font-semibold mb-12">Topics for this course</div>
      <div className="mb-12">
        <ProgressBar />
      </div>
      {data.map((item: any) => (
        <div className="">
          <CurriculumItem data={item} onClick={onClick} />
        </div>
      ))}
    </section>
  );
};

export default Curriculum;
