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

    try {
      setIsFetching(true);
      const response = await loginQuery(user);
      // console.log(response);

      if (response.status === "success") {
        toast(response.message);
        setIsFetching(false);
        navigate("/dashboard");
      }
    } catch (error) {
      setError((error as Error).message);
      setIsFetching(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* Outer container for responsiveness */}
      <div className="flex flex-col items-center w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg md:flex-row md:h-[670px]">
        {/* Image section (hidden on mobile) */}
        <div className="hidden h-full bg-gray-200 md:block md:w-1/2">
          {/* Dummy image */}
          <img
            src={signin}
            alt="Sign Up Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Form section */}
        <div className="w-full p-6 md:w-1/2 sm:p-10">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-2xl font-bold text-purple-800">
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
              classname="w-full px-4 py-2 mt-4 font-bold text-purple-800 transition-colors border-4 border-purple-800 rounded-md hover:bg-purple-100 disabled:bg-gray-300 disabled:text-gray-600 disabled:border-gray-300"
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
