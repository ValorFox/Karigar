import React from "react";
import { Avatar } from "@nextui-org/react";
function MobileSidebarUserprofile() {
  return (
    <div className="w-full h-42 flex justify-center items-center flex-col text-[#F1E2C9]">
      <Avatar
        showFallback
        radius
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        className="w-20 h-20 text-large"
      />
      <p className="text-lg font-light mt-2">Username</p>
      <p className="text-lg font-light">Username@gmail.com</p>
    </div>
  );
}

export default MobileSidebarUserprofile;
