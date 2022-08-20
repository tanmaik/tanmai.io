import Link from "next/link";
import Button from "../components/general/Button";

const Invest = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen font-dm">
        <div>
          <h1 className="text-3xl text-center ">
            Welcome to your personalized
          </h1>
          <h1 className="text-3xl text-center">investing experience</h1>
          <h2 className="text-center pt-2">created by tanmai kalisipudi</h2>
          <br></br>
          <Button title="Get started" />
        </div>
      </div>
    </div>
  );
};

export default Invest;
