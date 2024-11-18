import { useNavigate } from "react-router-dom";
import signin from "../assets/signinImg.png";
const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Outer container for responsiveness */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl items-center">
        {/* Image section (hidden on mobile) */}
        <div className="hidden md:block md:w-1/2 bg-gray-200">
          {/* Dummy image */}
          <img
            src={signin}
            alt="Sign Up Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              Let us know <span className="text-red-500">!</span>
            </h2>
          </div>

          <form className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              {/* Password */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Set Password"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors font-bold"
            >
              Sign In
            </button>
            <button
              type="submit"
              className="w-full mt-4 text-purple-800 border-4 border-purple-800 py-2 px-4 rounded-md hover:bg-purple-100 transition-colors font-bold"
              onClick={() => navigate("/")}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
