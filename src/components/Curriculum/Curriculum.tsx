import CurriculumItem from "./CurriculumItem";
import ProgressBar from "../ProgressBar";
import { CurriculumSection } from "../../types/curriculum";

interface CurriculumProps {
  data: CurriculumSection[] | undefined;
  onClick: (type: string, id: number) => void;
}

const Curriculum = ({ data, onClick }: CurriculumProps) => {
  console.log("Curriculum data:", data);
  console.log("Curriculum onClick:", onClick);
  return (
    <section className="max-w-3xl mx-auto">
      <div className="text-xl  font-semibold mb-12">Topics for this course</div>
      <div className="mb-12">
        <ProgressBar />
      </div>
      {data?.map((item: any) => (
        <div className="">
          <CurriculumItem data={item} onClick={onClick} />
        </div>
      ))}
    </section>
  );
};

export default Curriculum;
