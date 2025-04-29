import CurriculumItemDetails from "./CurriculumItemDetails";

const CurriculumItem = () => {
  return (
    <div className=" p-4 pb-9 mb-4 bg-white border border-gray-200 transition">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Week 1-3</h2>
        <div className="text-gray-600 text-md">
          Lorem ipsum dolor s aw;ka jshkasj gapasdhgk sequi.
        </div>
      </div>
      {[1, 2, 3].map((item, index) => {
        return (
          <div key={index} className="">
            <CurriculumItemDetails />
          </div>
        );
      })}
    </div>
  );
};

export default CurriculumItem;
