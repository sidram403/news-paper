import React from "react";
import Logo from "../assets/logo.png";
import GoogleIcon from "../assets/icons/google_icon.png";
import { Divider} from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {

   

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-1/2 bg-red-500 flex items-center justify-center">
        <div className=" text-center p-4 bg-white w-96 h-40">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-5xl font-bold text-center mb-6 text-red-500 uppercase">
            Log in
          </h2>
          <div className="w-1/2 mx-32 flex items-center justify-center text-center gap-2 border border-red-500 px-4 py-2 rounded-md">
            <img src={GoogleIcon} alt="google icon" className="w-8 h-8" />
            <p className="text-gray-700">Sign in with Google</p>
          </div>
          <Divider className="text-gray-700 py-4 text-[12px]">Sign in with Email</Divider>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="py-2">
                <p className="text-red-500 text-[12px] font-bold cursor-pointer">Forget Password</p>
              </div>
            </div>
            <div>
                
              <button
                type="submit"
                className="mx-32 w-1/2 px-4 py-2 bg-red-500 text-white rounded-md font-bold hover:bg-red-600 "
              >
                Sign in
              </button>
            </div>
            <div className="w-full mx-32">
                <p className="text-[14px]">Create a new Account ? <Link to={'/signup'}> <span className="cursor-pointer text-blue-500">Sign up</span></Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
