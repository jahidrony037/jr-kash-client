import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-10">
        <h2 className="text-5xl font-extrabold text-primary-color text-center leading-relaxed">
          WellCome to the JR-Kash System
        </h2>
        <div className="space-x-4">
          <Link
            to={"/register"}
            className="btn bg-primary-color text-[#eef5ff] hover:bg-[#B4D4FF] border-none"
          >
            Register
          </Link>
          <Link
            to={"/login"}
            className="btn bg-primary-color text-[#eef5ff] hover:bg-[#B4D4FF] border-none"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
