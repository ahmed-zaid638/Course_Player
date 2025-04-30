interface Props {
  option: string;
  selected: boolean;
  onClick: () => void;
}

export default function OptionCard({ option, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`border rounded-lg p-3 cursor-pointer transition-colors ${
        selected
          ? "bg-blue-500 text-white border-blue-500"
          : "bg-white text-gray-800 border-gray-200 hover:border-blue-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 flex-shrink-0 rounded border flex ${
            selected ? "border-white bg-blue-500" : "border-gray-300 bg-white"
          }`}
        >
          {selected && (
            <div className="w-3 h-3 m-auto bg-white rounded-[3px]"></div>
          )}
        </div>
        <div>{option}</div>
      </div>
    </div>
  );
}
