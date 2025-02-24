import { X } from "phosphor-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SideBar({ showSidebar, setShowSideBar }) {
  if (showSidebar) {
    return (
      <div className="w-[80vw] absolute h-[100vh] bg-black/50 backdrop-blur-md z-50 lg:hidden shadow-xl shadow-black">
        {/* sidebar header */}
        <div className="w-full h-12 bg-[#4A4238] flex justify-between items-center px-3">
          <span className="text-xl text-[#F1E2C9]">Menu</span>
          <X size={30} color="#F1E2C9" onClick={() => setShowSideBar(false)} />
        </div>
        {/* sidebar lists */}
        <div className="px-6 h-full py-2">
          <Link
            to="/explore"
            className="text-black w-full"
            onClick={() => setShowSideBar(false)}
          >
            <p className="w-full text-xl my-3 font-light text-[#F2E9E1]">
              Explore
            </p>
          </Link>
          <Link
            to="/tranding"
            className="text-black w-full"
            onClick={() => setShowSideBar(false)}
          >
            <p className="w-full text-xl my-3 font-light text-[#F2E9E1]">
              Tranding
            </p>
          </Link>
          <Link
            to="/about"
            className="text-black w-full"
            onClick={() => setShowSideBar(false)}
          >
            <p className="w-full text-xl my-3 font-light text-[#F2E9E1]">
              About
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideBar;
