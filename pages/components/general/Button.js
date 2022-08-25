import Link from "next/link";

const Button = (props, target) => {
  return (
    <button className="bg-gradient-to-b from-[#5CA5CE] to-[#61BCC9] hover:opacity-70 cursor-pointer text-white rounded-full transition-all">
      <h2 className="font-dm font-medium py-2 px-9">{props.title}</h2>
    </button>
  );
};

export default Button;
