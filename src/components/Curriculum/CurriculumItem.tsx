import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import CurriculumItemDetails from "./CurriculumItemDetails";

const CurriculumItem = ({ data, onClick }: any) => {
  console.log("CurriculumItem data:", data);
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="px-3 md:p-4 md:pb-6 mb-4 bg-white border border-gray-200 transition">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold hidden md:block">
          {data.duartion}
        </h2>
      </div>

      <div className="flex items-start justify-between">
        <div className="text-gray-600 text-md block mb-4">{data.title}</div>
        <button
          className="block md:hidden mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>

      {(isOpen || window.innerWidth >= 640) && (
        <div
          className={`${isOpen ? "block" : "hidden"} md:block transition-all`}
        >
          {data.items.map((item: any) => (
            <CurriculumItemDetails
              key={item.id}
              data={item}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurriculumItem;
