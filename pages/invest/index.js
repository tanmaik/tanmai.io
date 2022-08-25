import Button from "../components/general/Button";
import Link from "next/link";

const Invest = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2 className="font-dm font-medium text-4xl pb-2 text-[#5CA5CE]">
          Welcome to your personalized
        </h2>
        <h2 className="font-dm text-4xl font-medium text-[#5CA5CE]">
          investing experience
        </h2>
        <br></br>

        <Link href="/invest/loading">
          <a>
            <Button title="Get started" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Invest;
