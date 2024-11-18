import signup from "../assets/signupImg.png";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Outer container for responsiveness */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Image section (hidden on mobile) */}
        <div className="hidden md:block md:w-1/2 bg-gray-200">
          {/* Dummy image */}
          <img
            src={signup}
            alt="Sign Up Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <div className="text-center md:text-left flex justify-between items-center">
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              Let us know <span className="text-red-500">!</span>
            </h2>
            <p className="text-sm text-gray-600">
              <a
                href="/login"
                className="text-purple-500 font-semibold underline hover:text-purple-700"
              >
                Sign
                <span className="text-red-500">In</span>
              </a>
            </p>
          </div>

          <form className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />

              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
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

              {/* Retype Password */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Retype Password"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              {/* Contact Mode */}
              <select className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
                <option value="">Contact Mode</option>
                <option value="email">Email Verification</option>
              </select>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
