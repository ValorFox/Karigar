import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { MailIcon } from "../utils/MailIcon";

function Signuppage() {
  return (
    <div className="max-w-screen max-h-screen h-screen bg-[#F2E9E1] flex justify-center items-center">
      <div className=" w-[95vw] lg:w-[80vw] lg:h-[80vh] bg-[#B4A390] overflow-hidden rounded-lg shadow-black/50 shadow-md flex">
        <div className="max-w-[60%] h-full min-h-full hidden lg:inline-block relative">
          <img
            src="https://www.lawdonut.co.uk/business/sites/lawdonut-business/files/production/image/pottery_0.jpg"
            alt="poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full bg-black/10 z-50 top-0"></div>
        </div>

        <div className="h-full w-[40rem] lg:p-8 p-2">
          <div className="px-8 py-4 text-center">
            <Link
              to="/"
              className="font-bold text-4xl playwrite-it-moderna-Cursive"
            >
              Karigar
            </Link>
          </div>
          <div className="h-[.5px] bg-[#4A4238] mt-4 mx-8"></div>
          <form className="w-full lg:p-8 p-4 flex flex-col gap-y-5 mt-2">
            <p className="text-2xl my-2">SignUp</p>
            <Input
              placeholder="username"
              type="text"
              className="bg-[#E4DAC8] rounded-lg"
            />
            <Input
              labelPlacement="outside"
              placeholder="you@example.com"
              className="bg-[#E4DAC8] rounded-lg"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="email"
            />
            <Input
              placeholder="password"
              type="password"
              className="bg-[#E4DAC8] rounded-lg"
            />{" "}
            <p className="text-end">Report Problem</p>
            <Button className="bg-[#4A4238] text-white rounded-lg hover:cursor-pointer">
              Signup
            </Button>
            <p className="text-center">
              Already have any account ?{" "}
              <Link to={"/login"} className="">
                Signin
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
