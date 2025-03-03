import React from "react";
import { X } from "phosphor-react";

function ErrorModal({ errorMsg, setError }) {
  return (
    <div className="w-screen h-screen bg-black/60 max-w-screen max-h-screen absolute z-50 backdrop-blur-md flex justify-center items-center">
      <div className="lg:w-[30%] w-[90%] bg-[#181616] rounded-lg overflow-hidden">
        <div className="w-full p-3 text-white font-light flex justify-between">
          <p className="text-2xl">Error</p>
          <X
            size={25}
            color="white"
            className="hover:cursor-pointer"
            onClick={() => setError(null)}
          />
        </div>
        <div className="w-full px-3 py-6 flex justify-center items-center text-white">
          {errorMsg}
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
