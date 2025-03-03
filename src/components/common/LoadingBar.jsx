import { Spinner } from "@nextui-org/react";
import React from "react";

function LoadingBar() {
  return (
    // backgorund covering whole LoadingBar
    <div className="w-screen h-screen bg-black/40 backdrop-blur-md absolute z-20 flex justify-center items-center">
      {/* main loading bar */}
      <div className="lg:w-[20vw] w-[80vw] py-2 px-4 rounded-lg bg-[#181616] flex items-center">
        {/* {spinner} */}
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-amber-50 border-t-transparent rounded-full animate-spin"></div>
        </div>
        {/* Loading message */}
        <div className="p-2 ml-8 flex flex-col">
          <span className="text-xl text-amber-50">Loading...</span>
          <span className="text-sm text-amber-50">Please wait</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingBar;
