import { useState } from "react";
import toast from "react-hot-toast";
import signin from "../assets/signinImg.png";
import { useNavigate } from "react-router-dom";
import { loginQuery } from "../auth/authQuery";
import { User } from "../types/user";
import { Button, InputTag, FormErrorMessage } from "../components";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);

    try {
      setIsFetching(true);
      const response = await loginQuery(user);

      if (response.status === "success") {
        toast.success(response.message);
        setIsFetching(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setError((error as Error).message);
      setIsFetching(false);
      console.error("Error logging in:", error);
    }
  };

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

          <form
            className="mt-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-4">
              {/* Email */}
              <InputTag
                setQuery={setUser}
                placeholder="Email"
                type="email"
                query={user}
                name="email"
              />
              {/* Password */}
              <InputTag
                setQuery={setUser}
                placeholder="Password"
                type="password"
                query={user}
                name="password"
              />
              {error && <FormErrorMessage message={error} />}
            </div>

            <Button
              type="submit"
              isDisabled={isFetching}
              label="Sign In"
            />
            <Button
              type="button"
              classname="w-full mt-4 text-purple-800 border-4 border-purple-800 py-2 px-4 rounded-md hover:bg-purple-100 transition-colors font-bold disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-300"
              destination={() => navigate("/")}
              isDisabled={isFetching}
              label={"Sign up"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
