import { useState } from "react";
import signup from "../assets/signupImg.png";
import { User } from "../types/user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { otpVerificationQuery, signupQuery } from "../auth/authQuery";
import { FormErrorMessage, InputTag, SelectTag, Button } from "../components";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const [otp, setOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError("🙅🏼‍♂️ Passwords do not match");
      return;
    }

    try {
      setIsFetching(true);
      const response = await signupQuery(user);
      // console.log(response);

      if (response.status === "success") {
        toast(response.message);
        setIsFetching(false);
        setIsOtpSent(true);
        setError("");
      }
    } catch (error) {
      setError((error as Error).message);
      setIsFetching(false);
      console.error("Error signing up:", error);
    }
  };

  const handleOtpVerification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsVerifyingOtp(true);
      const response = await otpVerificationQuery(user.email, otp);
      // console.log(response);

      if (response.status === "success") {
        toast(response.message);
        setIsVerifyingOtp(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setError((error as Error).message);
      setIsVerifyingOtp(false);
      console.error("Error verifying OTP:", error); // Add this line
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* Outer container for responsiveness */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl md:h-[670px]">
        {/* Image section (hidden on mobile) */}
        <div className="hidden h-full bg-gray-200 md:block md:w-1/2">
          {/* Dummy image */}
          <img
            src={signup}
            alt="Sign Up Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form section */}
        <div className="w-full p-6 md:w-1/2 sm:p-10">
          <div className="flex items-center justify-between text-center md:text-left">
            <h2 className="mb-2 text-2xl font-bold text-purple-800">
              Let us know <span className="text-red-500">!</span>
            </h2>

            <p
              className={`text-sm cursor-pointer text-gray-600 ${
                isOtpSent ? "hidden" : ""
              }`}
            >
              <a
                onClick={() => navigate("/login")}
                className="font-semibold text-purple-500 underline cursor-pointer hover:text-purple-700"
              >
                Sign
                <span className="text-red-500">In</span>
              </a>
            </p>
          </div>

          {!isOtpSent ? (
            <form
              className="mt-6"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 gap-4">
                {/* First Name */}
                <InputTag
                  type="text"
                  placeholder="First Name"
                  setQuery={setUser}
                  query={user}
                  name="fname"
                />
                {/* Last Name */}
                <InputTag
                  type="text"
                  placeholder="Last Name"
                  setQuery={setUser}
                  query={user}
                  name="lname"
                />
                {/* Password */}
                <InputTag
                  type="password"
                  placeholder="Password"
                  setQuery={setUser}
                  query={user}
                  name="password"
                />
                {/* Retype Password */}
                <InputTag
                  type="password"
                  placeholder="Retype Password"
                  setQuery={setUser}
                  query={user}
                  name="confirmPassword"
                />

                {/* Contact Mode */}
                <SelectTag
                  setQuery={setUser}
                  query={user}
                  name="contactMode"
                  optionArray={[
                    { value: "email", label: "Email Verification" },
                  ]}
                  placeholder="Contact Mode"
                />

                {/* Email */}
                <InputTag
                  type="email"
                  placeholder="Email"
                  setQuery={setUser}
                  query={user}
                  name="email"
                />

                {/* Error Message */}
                {error && <FormErrorMessage message={error} />}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                isDisabled={isFetching}
                label={"Sign Up"}
              />
            </form>
          ) : (
            <form
              className="relative mt-6"
              onSubmit={handleOtpVerification}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-violet-500">
                    Verify your email
                  </h2>
                  {/* Message */}
                  <p className="mt-2 text-sm font-medium text-gray-500">
                    Hi {user.fname || "user"}! we've send an email to{" "}
                    <span
                      className="underline cursor-pointer"
                      onClick={() => {
                        window.open(`https://mail.google.com/mail`, "_blank");
                      }}
                    >
                      {user.email || "example@gmail.com"}
                    </span>
                    , verify your email address and activate your account.
                  </p>
                </div>

                {/* Otp Input */}
                <input
                  type="text"
                  placeholder="XXXXXX"
                  className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />

                {/* Error Message */}
                {error && <FormErrorMessage message={error} />}
              </div>

              <Button
                type="submit"
                isDisabled={isVerifyingOtp}
                label={isVerifyingOtp ? "Verifying..." : "Verify Otp"}
              />
              <p
                className="mt-4 text-sm font-medium text-gray-500 cursor-pointer"
                onClick={() => {
                  if (!isVerifyingOtp) {
                    setIsOtpSent(false);
                  }
                }}
              >
                ← return to signup
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
