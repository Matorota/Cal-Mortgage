import { useState } from "react";
import { MortgageType } from "./MortgageCalculator";
import CalculateRepaymentsButton from "./CalculateRepaymentsButton";
import Input from "./Input";
import RadioGroup from "./RadioGroup";

type Props = {
  mortgageAmount: string;
  setMortgageAmount: (value: string) => void;
  mortgageTerm: string;
  setMortgageTerm: (value: string) => void;
  interestRate: string;
  setInterestRate: (value: string) => void;
  mortgageType: MortgageType;
  setMortgageType: (value: MortgageType) => void;
  calculateRepayments: () => void;
  clearAll: () => void;
};

const MortgageCalculatorForm = ({
  mortgageAmount,
  setMortgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  calculateRepayments,
  clearAll,
}: Props) => {
  const [errors, setErrors] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "",
  });

  // Clear all fields and reset errors BUT DOSENT RESET PROPERLY
  const handleClearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("");
    setErrors({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
    });
    clearAll();
  };

  const handleSubmit = () => {
    const newErrors = {
      mortgageAmount: mortgageAmount ? "" : "This field is required",
      mortgageTerm: mortgageTerm ? "" : "This field is required",
      interestRate: interestRate ? "" : "This field is required",
      mortgageType: mortgageType ? "" : "This field is required",
    };

    setErrors(newErrors);

    if (
      !newErrors.mortgageAmount &&
      !newErrors.mortgageTerm &&
      !newErrors.interestRate &&
      !newErrors.mortgageType
    ) {
      calculateRepayments();
    }
  };

  /*sm:flex-col   NEPAGAUNU KODEL SITAS NEVIKIA */
  return (
    <div className="bg-white p-5 box-content w-[100%] rounded-[30px]">
      <div className="flex justify-between items-center mb-5 ">
        <h2 className="text-2xl font-bold text-[#002b5c] mb-0">
          Mortgage Calculator
        </h2>
        <button
          className="text-sm font-medium cursor-pointer text-gray-500 underline hover:text-gray-700"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <Input
        label="Mortgage Amount"
        value={mortgageAmount}
        onChange={(e) => setMortgageAmount(e.target.value)}
        error={errors.mortgageAmount}
        sideContent="£"
        sideContentPosition="left"
      />

      {/* pvz radio yello but it still don't wanna do what it suppost to:     <div class="flex items-center me-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="yellow-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
    </div> */}

      <div className="flex justify-between gap-5 mb-4 sm:flex-col lg:flex-row">
        <Input
          label="Mortgage Term"
          value={mortgageTerm}
          onChange={(e) => setMortgageTerm(e.target.value)}
          error={errors.mortgageTerm}
          sideContent="years"
        />
        <Input
          label="Interest Rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          error={errors.interestRate}
          sideContent="%"
        />
      </div>

      <RadioGroup
        error={errors.mortgageType}
        mortgageType={mortgageType}
        setMortgageType={setMortgageType}
      />
      <CalculateRepaymentsButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default MortgageCalculatorForm;
