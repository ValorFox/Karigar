import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon } from "../utils/MailIcon";
import { Button, Input } from "@nextui-org/react";
import { PasswordIcon } from "../utils/PasswordIcon";
import ErrorModal from "../components/common/ErrorModal";
import authService from "../appwrite/authService";
import LoadingBar from "../components/common/LoadingBar";
import { useDispatch } from "react-redux";
import { updateUser } from "../Redux/Slice/userSlice";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      const response = await authService.login({ email, password });
      dispatch(updateUser(response.providerUid));
      navigate("/");
    } catch (error) {
      setError(error.message || "Something went wrong during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && <ErrorModal errorMsg={error} setError={setError} />}
      {isLoading && <LoadingBar />}
      <div className="max-w-screen max-h-screen h-screen bg-[#F2E9E1] flex justify-center items-center">
        <div className="w-[95vw] lg:w-[80vw] lg:h-[80vh] bg-[#B4A390] overflow-hidden rounded-lg shadow-black/50 shadow-md flex">
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
            <form
              onSubmit={handleFormSubmit}
              className="w-full lg:p-8 p-4 flex flex-col gap-y-5 mt-2"
            >
              <p className="text-2xl my-2">Login</p>

              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-[#E4DAC8] rounded-lg"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="password"
                className="bg-[#E4DAC8] rounded-lg"
                startContent={
                  <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-end">Forget Password</p>
              <Button
                className="bg-[#4A4238] text-white rounded-lg hover:cursor-pointer"
                type="submit"
              >
                Login
              </Button>
              <p className="text-center">
                Don't have any account ?{" "}
                <Link to={"/signup"} className="">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
