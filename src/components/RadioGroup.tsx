import { MortgageType } from "./MortgageCalculator";
import RadioInput from "./RadioInput";

type Props = {
  mortgageType: MortgageType;
  setMortgageType: (value: MortgageType) => void;
  error?: string;
};

export default function RadioGroup({
  mortgageType,
  setMortgageType,
  error,
}: Props) {
  console.log({ mortgageType });
  return (
    <div className="mb-4">
      <label className="text-base font-bold text-[#676f79] mt-4 mb-4">
        Mortgage Type
      </label>
      <div className="flex flex-col gap-2 mt-2">
        <RadioInput
          label="Repayment"
          value="repayment"
          onChange={(event) =>
            setMortgageType(event.target.value as MortgageType)
          }
          checked={mortgageType === "repayment"}
        />
        <RadioInput
          label="Interest"
          value="interest-only"
          onChange={(event) =>
            setMortgageType(event.target.value as MortgageType)
          }
          checked={mortgageType === "interest-only"}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
