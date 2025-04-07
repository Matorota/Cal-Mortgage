import { ChangeEvent } from "react";

type Props = {
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  sideContent: string;
  sideContentPosition?: "left" | "right";
};

export default function Input({
  label,
  error,
  value,
  onChange,
  sideContent,
  sideContentPosition = "right",
}: Props) {
  const renderSideContent = () => (
    <span
      className={`px-4 py-2 ${
        error ? "bg-red-100 text-red-500" : "bg-[#eaf4fc] text-[#002b5c]"
      } text-lg font-bold flex items-center justify-center`}
    >
      {sideContent}
    </span>
  );

  return (
    <div className="flex-1">
      <label className="block mb-2 font-bold text-[#676f79]">{label}</label>
      <div
        className={`flex items-center border-1 ${
          error ? "border-red-500" : "border-[#d1e3f8] hover:border-[#312d2d]"
        } rounded-lg overflow-hidden bg-white`}
      >
        {sideContentPosition === "left" && renderSideContent()}
        <input
          type="number"
          value={value}
          onChange={onChange}
          className="p-2 w-full bg-transparent text-[#002b5c] placeholder-[#a0b3c8] focus:outline-none"
        />
        {sideContentPosition === "right" && renderSideContent()}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
