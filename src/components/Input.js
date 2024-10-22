import React, { forwardRef, useEffect, useState } from "react";
import ErrorIcon from "../utils/icons/ErrorIcon";

const Input = forwardRef((props, ref) => {
  const { placeholder, pattern, required, label, type } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [first, setfirst] = useState(true);

  useEffect(() => {
    if (!first) {
      validate();
    }
    setfirst(false);
    // eslint-disable-next-line
  }, [value]);

  const validate = () => {
    const input = ref.current;
    const validityState = input.validity;
    if (validityState.valueMissing) {
      setError("Please fill out this field");
    } else if (!validityState.valid) {
      setError("Invalid field value");
    } else {
      setError("");
    }
  };

  return (
    <div
      className={
        "relative bg-stone-100 " + (error ? "px-5 border border-red-500" : "")
      }
    >
      <label
        className={
          "absolute left-5 top-3 text-sm text-gray-500 " +
          (value ? "block " : "hidden ")
        }
      >
        {label ? label : placeholder}
      </label>
      <input
        ref={ref}
        placeholder={placeholder}
        className={
          "w-full py-5 px-5 border-b border-b-gray-500 block focus:outline-none focus:border-b-2 focus:border-b-orange-600 bg-stone-100 " +
          (value ? "pt-9 pb-4 text-lg " : "") +
          (error ? "px-0" : "")
        }
        pattern={pattern}
        required={required}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && (
        <div className="flex justify-between items-center">
          <span className="text-red-500 text-sm py-2">{error}</span>
          <ErrorIcon />
        </div>
      )}
    </div>
  );
});

export default Input;
