import { Link } from "react-router-dom"; // if you're using React Router

const Welcomepage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F2E9E1]">
      <div className="bg-[#B4A390] shadow-lg rounded-lg p-8 text-center space-y-4 lg:w-auto w-[95vw]">
        <h2 className="text-2xl font-bold text-[#4A4238]">
          Account Created Successfully!
        </h2>
        <p className="text-black">
          Welcome aboard! Your account has been created. You can now log in to
          access our platform.
        </p>
        <Link
          to="/login"
          className="inline-block bg-[#4A4238] text-amber-50 py-2 px-4 rounded-lg hover:bg-[#3b342d] transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Welcomepage;
