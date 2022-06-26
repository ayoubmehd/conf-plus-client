import { HTMLInputTypeAttribute } from "react";
import { InputType } from "zlib";

interface Input {
  type: "text" | "password" | "email";
}

const useInput = (input: Input) => {
  const validInputs = {
    text: (
      <div>
        <label
          htmlFor="password"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Password
        </label>
        <input className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>
    ),
    email: (
      <div>
        <label
          htmlFor="email"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Email
        </label>
        <input
          name="email"
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
        />
      </div>
    ),
    password: (
      <div>
        <label
          htmlFor="password"
          className="inline-block text-gray-800 text-sm sm:text-base mb-2"
        >
          Password
        </label>
        <input
          name="password"
          type="password"
          className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
        />
      </div>
    ),
  };

  return validInputs[input.type] ? validInputs[input.type] : validInputs.text;
};

export const ConfForm: React.FC<{ inputs: Input[] }> = ({ inputs }) => {
  return (
    <>
      {inputs.map((input) => {
        return useInput(input);
      })}
    </>
  );
};
