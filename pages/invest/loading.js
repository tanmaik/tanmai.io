import Image from "next/image";
import { useEffect } from "react";
import Router from "next/router";

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/invest/getting-started");
    }, 400);
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
        alt="loading"
        width={50}
        height={50}
      />
    </div>
  );
};
export default Loading;
