import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import CurriculumItemDetails from "./CurriculumItemDetails";

const CurriculumItem = ({ data, onClick, isFirst }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null); // 👈 Add this

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsOpen(!isMobile || isFirst);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isFirst]);

  const handleItemClick = (type: string, id: number) => {
    onClick(type, id);
    setSelectedItemId(id); // 👈 Set selected item globally
  };

  return (
    <div className="px-3 md:p-4 md:pb-6 mb-4 bg-white border border-gray-200 transition">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] hidden md:block">{data.duration}</h2>
      </div>

      <div className="flex items-start justify-between">
        <div className="text-gray-600 text-xl block mb-4">{data.title}</div>
        <button
          className="block md:hidden mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </button>
      </div>

      {(isOpen || window.innerWidth >= 768) && (
        <div
          className={`${isOpen ? "block" : "hidden"} md:block transition-all`}
        >
          {data.items.map((item: any) => (
            <CurriculumItemDetails
              key={item.id}
              data={item}
              onClick={handleItemClick}
              isSelected={selectedItemId === item.id} // 👈 Pass down selection state
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurriculumItem;
