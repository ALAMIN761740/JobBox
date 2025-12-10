import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import registerLottie from "../assets/registerAnimation.json";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 p-4">
      
      <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-lg shadow-xl p-8 rounded-2xl">
        
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account 
        </h2>
        <div>
        <Lottie loop={true} animationData={registerLottie} />
      </div>

        <form className="space-y-4">
          <div>
            <label className="text-gray-300 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full mt-1 bg-gray-700 text-white"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-1 bg-gray-700 text-white"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full mt-1 bg-gray-700 text-white"
              required
            />
          </div>

          <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white text-lg mt-3">
            Register
          </button>

          <div className="divider divider-neutral text-gray-300">OR</div>

          {/* Google Login Button */}
          <button
            type="button"
            className="btn w-full bg-white hover:bg-gray-200 text-gray-900 text-lg flex items-center gap-3"
          >
            <FcGoogle size={26} />
            Continue with Google
          </button>

          <p className="text-center text-gray-300 text-sm mt-3">
            Already have an account?
            <Link to="/login" className="text-purple-400 ml-1 hover:underline">
              Login
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
};

export default Register;
