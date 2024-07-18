import { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const [pinError, setPinError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const pin = e.target.pin.value;
    const role = e.target.role.value;
    if (pin.length < 5) {
      return setPinError("Pin Must Be 5 digit");
    }
    setPinError("");

    const userInfo = {
      name: name,
      email: email,
      pin: pin,
      mobile: mobile,
      role: role,
    };
    console.log(userInfo);
    axiosPublic
      .post("/register", userInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary-color text-center leading-relaxed md:mb-20  mb-10">
          Registration Here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="flex flex-col items-center">
            <div>
              <label htmlFor="name" className="font-bold text-primary-color">
                Name
              </label>
            </div>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-[340px] lg:w-[500px] focus:outline-none focus:border-primary-color"
              placeholder="enter your name"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col items-center">
            <div>
              <label
                htmlFor="mobile-number"
                className="font-bold text-primary-color"
              >
                Mobile Number
              </label>
            </div>
            <input
              required
              type="text"
              id="mobile-number"
              name="mobile"
              className="input input-bordered w-[340px] lg:w-[500px] focus:outline-none focus:border-primary-color"
              placeholder="enter your mobile number"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <div>
              <label htmlFor="email" className="font-bold text-primary-color">
                Email
              </label>
            </div>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-[340px] lg:w-[500px] focus:outline-none focus:border-primary-color"
              placeholder="enter your mail"
            />
          </div>

          {/* Pin */}
          <div className="flex flex-col items-center">
            <div>
              <label htmlFor="pin" className="font-bold text-primary-color">
                Pin
              </label>
            </div>
            <input
              required
              type="number"
              id="pin"
              name="pin"
              className="input input-bordered w-[340px] lg:w-[500px] focus:outline-none focus:border-primary-color"
              placeholder="enter 5 digit pin"
            />
            {pinError && <p className="text-sm text-red-600">{pinError}</p>}
          </div>

          {/* Register As */}
          <div className="flex flex-col items-center">
            <div>
              <label htmlFor="name" className="font-bold text-primary-color">
                Register As
              </label>
            </div>
            <select
              name="role"
              id=""
              className="input input-bordered w-[340px] lg:w-[500px] focus:outline-none focus:border-primary-color"
              required
            >
              <option value="Select" defaultValue="select here" disabled>
                select here
              </option>
              <option value="Agent">Agent</option>
              <option value="User">User</option>
            </select>
          </div>

          <div className="flex flex-col items-center">
            <input
              required
              type="submit"
              value="Register"
              className="bg-primary-color btn w-[340px] lg:w-[500px] text-[#eef5ff] font-bold hover:bg-[#B4D4FF]"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
