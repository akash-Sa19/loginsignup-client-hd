import { useState } from "react";

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
        // @ts-ignore
        // style={{
        //   WebkitTextSecurity: "disc", // Hides the default eye icon
        //   MozAppearance: "textfield", // Firefox-specific
        //   appearance: "textfield", // Ensures no native styles for password input
        // }}
      />
      {type === "password" && (
        <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
          {showPassword ? (
            <span
              role="img"
              aria-label="Hide password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              🙈 {/* Replace with an icon */}
            </span>
          ) : (
            <span
              role="img"
              aria-label="Show password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              👁️ {/* Replace with an icon */}
            </span>
          )}
        </span>
      )}
    </div>
  );
};

export default InputTag;
