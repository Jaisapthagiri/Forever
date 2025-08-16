import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");

  const isLogin = currentState === "login";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in...");
    } else {
      console.log("Signing up...");
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-14">
      <div className="bg-white text-gray-700 w-full p-6 md:p-8 shadow-lg">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-full py-3 px-4 outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          )}

          {isLogin && (
            <div className="text-right text-sm text-gray-500">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-700 transition-all py-3 rounded-full text-white font-medium shadow-md"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setCurrentState(isLogin ? "signup" : "login")}
            className="text-gray-500 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>

        <div className="flex flex-col gap-3 mt-6">
          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center bg-black py-3 rounded-full text-white font-medium hover:bg-gray-900 transition"
          >
            <img
              className="h-5 w-5"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
              alt="appleLogo"
            />
            Continue with Apple
          </button>

          <button
            type="button"
            className="w-full flex items-center gap-2 justify-center bg-white border border-gray-300 py-3 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <img
              className="h-5 w-5"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
              alt="googleFavicon"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
