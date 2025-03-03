import { X } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MailIcon } from "../utils/MailIcon";
import { Button, Input } from "@nextui-org/react";
import authService from "../appwrite/authService";
import { PasswordIcon } from "../utils/PasswordIcon";
import LoadingBar from "../components/common/LoadingBar";

function Signuppage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.createAccount({ email, password });
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message.replace(
          /^Invalid `password` param: /,
          ""
        );
        setError(message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && <ErrorModal errorMsg={error} setError={setError} />}
      {loading && <LoadingBar />}
      <div className="max-w-screen max-h-screen h-screen bg-[#F2E9E1] flex justify-center items-center">
        <div className=" w-[95vw] lg:w-[80vw] lg:h-[80vh] bg-[#B4A390] overflow-hidden rounded-lg shadow-black/50 shadow-md flex">
          <div className="max-w-[60%] h-full min-h-full hidden lg:inline-block relative">
            <img
              src="https://www.lawdonut.co.uk/business/sites/lawdonut-business/files/production/image/pottery_0.jpg"
              alt="poster"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-black/10 z-10 top-0"></div>
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
                type="email"
                labelPlacement="outside"
                placeholder="you@example.com"
                className="bg-[#E4DAC8] rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                type="password"
                placeholder="password"
                className="bg-[#E4DAC8] rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
                startContent={
                  <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <p className="text-end">Report Problem</p>
              <Button
                className="bg-[#4A4238] text-white rounded-lg hover:cursor-pointer"
                onPress={handleSubmit}
              >
                Signup
              </Button>
              <p className="text-center">
                Already have any account ?
                <Link to={"/login"} className="">
                  Signin
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signuppage;

function ErrorModal({ errorMsg, setError }) {
  return (
    <div className="w-screen h-screen bg-black/60 max-w-screen max-h-screen absolute z-50 backdrop-blur-md flex justify-center items-center">
      <div className="lg:w-[30%] w-[95%] bg-[#181616] rounded-lg overflow-hidden">
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
