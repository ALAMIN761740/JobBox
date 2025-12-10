import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginLottie from "../assets/login.json"; 
import { AuthContext } from "../contexts/Authcontext/Authcontext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const Login = () => {
  const { loginUser } = useContext(AuthContext);  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
        alert("Login successful!");
        form.reset();
        navigate("/"); // Login successful হলে home page এ redirect
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Error: " + error.message);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google user:", result.user);
        alert("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Google login error:", error);
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-900 p-4">
      <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-lg shadow-xl p-8 rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login to Your Account
        </h2>

        <div className="mb-4">
          <Lottie loop={true} animationData={loginLottie} style={{ height: 200 }} />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-300 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-1 bg-gray-700 text-white"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-1 bg-gray-700 text-white"
              required
            />
          </div>

          <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white text-lg mt-3">
            Login
          </button>

          <div className="divider divider-neutral text-gray-300">OR</div>

          {/* Google Login Button */}
          <button
            type="button"
            className="btn w-full bg-white hover:bg-gray-200 text-gray-900 text-lg flex items-center gap-3"
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={26} />
            Continue with Google
          </button>

          <p className="text-center text-gray-300 text-sm mt-3">
            Don't have an account?
            <Link to="/register" className="text-purple-400 ml-1 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
