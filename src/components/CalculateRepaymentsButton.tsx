import imgSrc from "../images/icon-calculator.svg";

type Props = {
  handleSubmit: () => void;
};

export default function CalculateRepaymentsButton({ handleSubmit }: Props) {
  return (
    <button
      onClick={handleSubmit}
      className="w-[250px] h-[45px] bg-[#d1f026] border-none px-6 py-3 rounded-full cursor-pointer font-bold text-base text-[#002b5c] flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:bg-[#dfdd89] hover:border-[#ffd966] focus:outline-none active:bg-[#c4e022] mt-5 mb-4"
    >
      <img
        src={imgSrc}
        alt="Calculator icon"
        style={{ width: "20px", height: "20px" }}
        className="w-5 h-5"
      />
      Calculate Repayments
    </button>
  );
}
