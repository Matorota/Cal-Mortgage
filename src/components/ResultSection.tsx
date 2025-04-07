import resultImg from "../images/illustration-empty.svg";

interface ResultsSectionProps {
  result: {
    monthlyRepayment: string;
    totalRepayment: string;
  } | null;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) => {
  return (
    <div className=" sm:rounded-none flex-1 bg-[#133040] text-white p-8 md:p-8 rounded-b-[30px] md:rounded-bl-[80px] md:rounded-r-[30px] flex items-center justify-center px-5">
      <div className="md:flex-row box-border bg-[#133040] text-white p-8  flex flex-col justify-center items-center text-center rounded-bl-[80px] rounded-r-[30px] ">
        {result ? (
          <div className="result-content text-left">
            <h3 className=" font-bold mb-3 text-2xl">Your results</h3>
            <p className="text-sm text-[#a0b3c8] text-left mb-3 ">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments" again.
            </p>
            <div className="bg-[#0e2431] p-5 rounded-lg border-t-4  border-[#d6d727] text-left">
              <p className="text-base text-[#a0b3c8] mb-2">
                Your monthly repayments
              </p>
              <h2 className="font-bold text-6xl text-[#d6d727] my-2">
                £{result.monthlyRepayment}
              </h2>
              <hr className="border-t border-[#a0b3c8] my-5" />
              <p>Total you'll repay over the term</p>
              <h3 className="font-bold text-2xl text-white mt-2">
                £{result.totalRepayment}
              </h3>
            </div>
          </div>
        ) : (
          <div className="result-placeholder flex flex-col items-center justify-center">
            <img
              src={resultImg}
              alt="Results placeholder"
              className="w-40 items-center "
            />
            <h3 className="mb-3 text-xl">Results shown here</h3>
            <p className="text-base text-[#a0b3c8] mb-2 ">
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsSection;
