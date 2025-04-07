import calImg from "../images/icon-calculator.svg";
import React, { useState } from "react";

interface FormSectionProps {
  mortgageAmount: string;
  setMortgageAmount: (value: string) => void;
  mortgageTerm: string;
  setMortgageTerm: (value: string) => void;
  interestRate: string;
  setInterestRate: (value: string) => void;
  mortgageType: string;
  setMortgageType: (value: string) => void;
  calculateRepayments: () => void;
  clearAll: () => void;
}

const FormSection: React.FC<FormSectionProps> = ({
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
}) => {
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

      {/* Mortgage Amount */}
      <div className="mb-4">
        <label className="block mb-2 font-bold text-[#676f79]">
          Mortgage Amount
        </label>
        <div
          className={`flex items-center border-1 ${
            errors.mortgageAmount
              ? "border-red-500"
              : "border-[#d1e3f8] hover:border-[#312d2d] "
          } rounded-lg overflow-hidden bg-white`}
        >
          <span
            className={`px-4 py-2 ${
              errors.mortgageAmount
                ? "bg-red-100 text-red-500"
                : "bg-[#eaf4fc] text-[#002b5c] "
            } text-lg font-bold flex items-center justify-center `}
          >
            £
          </span>
          <input
            type="number"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
            className="p-2 w-full bg-transparent text-[#002b5c] placeholder-[#a0b3c8] focus:outline-none "
          />
        </div>
        {errors.mortgageAmount && (
          <p className="text-red-500 text-sm">{errors.mortgageAmount}</p>
        )}
      </div>

      {/* pvz radio yello but it still don't wanna do what it suppost to:     <div class="flex items-center me-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="yellow-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
    </div> */}
      <div className="flex justify-between gap-5 mb-4 sm:flex-col lg:flex-row">
        <div className="flex-1">
          <label className="block mb-2 font-bold text-[#676f79]">
            Mortgage Term
          </label>
          <div
            className={`flex items-center border-1 ${
              errors.mortgageTerm
                ? "border-red-500"
                : "border-[#d1e3f8] hover:border-[#312d2d]"
            } rounded-lg overflow-hidden bg-white`}
          >
            <input
              type="number"
              value={mortgageTerm}
              onChange={(e) => setMortgageTerm(e.target.value)}
              className="p-2 w-full bg-transparent text-[#002b5c] placeholder-[#a0b3c8] focus:outline-none"
            />
            <span
              className={`px-4 py-2 ${
                errors.mortgageTerm
                  ? "bg-red-100 text-red-500"
                  : "bg-[#eaf4fc] text-[#002b5c]"
              } text-lg font-bold flex items-center justify-center`}
            >
              years
            </span>
          </div>
          {errors.mortgageTerm && (
            <p className="text-red-500 text-sm mt-1">{errors.mortgageTerm}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block mb-2 font-bold text-[#676f79]">
            Interest Rate
          </label>
          <div
            className={`flex items-center border-1 ${
              errors.interestRate
                ? "border-red-500"
                : "border-[#d1e3f8] hover:border-[#312d2d]"
            } rounded-lg overflow-hidden bg-white`}
          >
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="p-2 w-full bg-transparent text-[#002b5c] placeholder-[#a0b3c8] focus:outline-none"
            />
            <span
              className={`px-4 py-2 ${
                errors.interestRate
                  ? "bg-red-100 text-red-500"
                  : "bg-[#eaf4fc] text-[#002b5c]"
              } text-lg font-bold flex items-center justify-center`}
            >
              %
            </span>
          </div>
          {errors.interestRate && (
            <p className="text-red-500 text-sm mt-1">{errors.interestRate}</p>
          )}
        </div>
      </div>

      {/* MT */}
      <div className="mb-4">
        <label className="text-base font-bold text-[#676f79] mt-4 mb-4">
          Mortgage Type
        </label>
        <div className="flex flex-col gap-2 mt-2">
          {/* RO */}
          <label
            className={`flex items-center gap-2 p-2 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              mortgageType === "repayment"
                ? "bg-[#fff8e5] border-[#ffd966] text-[#002b5c]"
                : "bg-white border-[#d1e3f8] text-[#676f79]"
            }  hover:border-[#ffd966] focus:outline-none active:bg-[#c4e022]`}
          >
            <input
              type="radio"
              value="repayment"
              checked={mortgageType === "repayment"}
              onChange={(e) => setMortgageType(e.target.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                mortgageType === "repayment"
                  ? "border-[#ffd966] bg-[#ffd966]"
                  : "border-[#d1e3f8] bg-white"
              }`}
            >
              {mortgageType === "repayment" && (
                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
              )}
            </span>
            <span className="text-base font-bold">Repayment</span>
          </label>

          {/* IOO */}
          <label
            className={`flex items-center gap-2 p-2 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              mortgageType === "interest-only"
                ? "bg-[#fff8e5] border-[#ffd966] text-[#002b5c]"
                : "bg-white border-[#d1e3f8] text-[#676f79]"
            }  hover:border-[#ffd966] focus:outline-none active:bg-[#c4e022]`}
          >
            <input
              type="radio"
              value="interest-only"
              checked={mortgageType === "interest-only"}
              onChange={(e) => setMortgageType(e.target.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-full ${
                mortgageType === "interest-only"
                  ? "border-[#ffd966] bg-[#ffd966]"
                  : "border-[#d1e3f8] bg-white"
              }`}
            >
              {mortgageType === "interest-only" && (
                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
              )}
            </span>
            <span className="text-base font-bold">Interest Only</span>
          </label>
        </div>
        {errors.mortgageType && (
          <p className="text-red-500 text-sm mt-2">{errors.mortgageType}</p>
        )}
      </div>

      {/* REZ BUT */}
      <button
        onClick={handleSubmit}
        className="w-[250px] h-[45px] bg-[#d1f026] border-none px-6 py-3 rounded-full cursor-pointer font-bold text-base text-[#002b5c] flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:bg-[#dfdd89] hover:border-[#ffd966] focus:outline-none active:bg-[#c4e022] mt-5 mb-4"
      >
        <img
          src={calImg}
          alt="Calculator icon"
          style={{ width: "20px", height: "20px" }}
          className="w-5 h-5"
        />
        Calculate Repayments
      </button>
    </div>
  );
};

export default FormSection;
