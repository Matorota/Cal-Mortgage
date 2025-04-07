import { useState } from "react";
import "./App.css";
import FormSection from "./components/FormSection";
import ResultsSection from "./components/ResultSection";

function App() {
  ///////////////////
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  //////////////////////////////////////////////
  const [result, setResult] = useState<{
    monthlyRepayment: string;
    totalRepayment: string;
  } | null>(null);

  const calculateRepayments = () => {
    if (mortgageAmount && interestRate) {
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
    } else {
      setResult(null);
    }
  };
  ///////////////////////////////
  const clearAll = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("repayment");
    setResult(null);
  };

  return (
    /* div  3 main */
    <div className="sm:rounded-none flex flex-col items-center p-5 font-sans bg-gradient-to-r from-[#f0f4f8] to-[#e0e7ff] min-h-screen">
      <div className=" sm:rounded-t-none flex flex-col md:flex-row md:gap-x-5 gap-y-5 bg-white shadow-md  lg:rounded-[30px] md:rounded-[30px] overflow-hidden w-full max-w-[400px] md:max-w-[900px]">
        <div className="sm:rounded-none flex-1 p-5 sm:p-10 md:p-8 lg:p-10">
          <FormSection
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

        <div className=" sm:rounded-none flex-1 bg-[#133040] text-white p-8 md:p-8 rounded-b-[30px] md:rounded-bl-[80px] md:rounded-r-[30px] flex items-center justify-center px-5">
          <ResultsSection result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
