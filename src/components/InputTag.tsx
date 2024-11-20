import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type Props = {
  setQuery: any;
  placeholder: string;
  type: string;
  query: any;
  name: string;
  classname?: string;
};

const InputTag = ({
  setQuery,
  placeholder,
  type,
  query,
  name,
  classname = "",
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 ${classname}`}
        value={query[name]}
        onChange={(e) => setQuery({ ...query, [name]: e.target.value })}
        required
        minLength={type == "password" ? 6 : 1}
        maxLength={type != "email" ? 20 : 50}
      />
      {type === "password" && (
        <span className="absolute inset-y-0 flex items-center cursor-pointer right-3">
          {showPassword ? (
            <span
              role="img"
              aria-label="Hide password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <FaEyeSlash />
            </span>
          ) : (
            <span
              role="img"
              aria-label="Show password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <FaEye />
            </span>
          )}
        </span>
      )}
    </div>
  );
};

export default InputTag;
