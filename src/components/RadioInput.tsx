import { ChangeEvent } from "react";
import { MortgageType } from "./MortgageCalculator";

type Props = {
  label: string;
  value: MortgageType;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioInput({ value, checked, label, onChange }: Props) {
  return (
    <label
      className={`flex items-center gap-2 p-2 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
        checked
          ? "bg-[#fff8e5] border-[#ffd966] text-[#002b5c]"
          : "bg-white border-[#d1e3f8] text-[#676f79]"
      }  hover:border-[#ffd966] focus:outline-none active:bg-[#c4e022]`}
    >
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
          checked
            ? "border-[#ffd966] bg-[#ffd966]"
            : "border-[#d1e3f8] bg-white"
        }`}
      >
        {checked && <span className="w-2.5 h-2.5 bg-white rounded-full"></span>}
      </span>
      <span className="text-base font-bold">{label}</span>
    </label>
  );
}
