import { useState } from "react";
import MortgageCalculatorForm from "./MortgageCalculatorForm";
import ResultsSection from "./ResultSection";

export type MortgageType = "repayment" | "interest-only" | "";

export default function MortgageCalculator() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState<MortgageType>("");

  const [result, setResult] = useState<{
    monthlyRepayment: string;
    totalRepayment: string;
  } | null>(null);

  // Guard clause
  const calculateRepayments = () => {
    if (!mortgageAmount || !interestRate) {
      setResult(null);
      return;
    }

    const principal = parseFloat(mortgageAmount);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;

    if (mortgageType === "repayment" && mortgageTerm) {
      const numberOfPayments = parseInt(mortgageTerm) * 12;
      const monthlyRepayment =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      const totalRepayment = monthlyRepayment * numberOfPayments;

      setResult({
        monthlyRepayment: monthlyRepayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2),
      });
    } else if (mortgageType === "interest-only") {
      const monthlyRepayment = principal * monthlyInterestRate;
      const totalRepayment = monthlyRepayment * (parseInt(mortgageTerm) * 12);

      setResult({
        monthlyRepayment: monthlyRepayment.toFixed(2),
        totalRepayment: totalRepayment.toFixed(2),
      });
    }
  };

  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("repayment");
    setResult(null);
  };

  // 0-640 - small screens
  // 640 - 768 - medium screens
  // 768 - 1024 - large screens
  // 1024+ - x-large screens

  return (
    <main className="rounded-none flex flex-col items-center p-5 font-sans bg-gradient-to-r from-[#f0f4f8] to-[#e0e7ff] min-h-screen">
      <div className="rounded-t-none flex flex-col md:flex-row md:gap-x-5 gap-y-5 bg-white shadow-md  lg:rounded-[30px] md:rounded-[30px] overflow-hidden w-full max-w-[400px] md:max-w-[900px]">
        <div className="rounded-none flex-1 p-5 sm:p-10 md:p-8 lg:p-10">
          <MortgageCalculatorForm
            mortgageAmount={mortgageAmount}
            setMortgageAmount={setMortgageAmount}
            mortgageTerm={mortgageTerm}
            setMortgageTerm={setMortgageTerm}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            mortgageType={mortgageType}
            setMortgageType={setMortgageType}
            calculateRepayments={calculateRepayments}
            clearAll={clearAll}
          />
        </div>

        <ResultsSection result={result} />
      </div>
    </main>
  );
}
