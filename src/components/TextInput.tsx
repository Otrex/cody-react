import React, { InputHTMLAttributes } from "react";

interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "danger";
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  className,
  size = "md",
  variant = "default",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = {
    default: "border-gray-300 focus:ring-custom-blue focus:border-custom-blue",
    primary:
      "border-custom-purple focus:ring-custom-purple focus:border-custom-purple",
    danger: "border-custom-red focus:ring-custom-red focus:border-custom-red",
  };

  const baseInputClasses =
    "w-full border rounded-xl shadow-custom focus:outline-none focus:ring-2 transition duration-150 ease-in-out";
  const inputClasses = `${baseInputClasses} ${sizeClasses[size]} ${
    variantClasses[variant]
  } ${error ? "border-custom-red" : ""} ${className || ""}`;

  return (
    <div className="mb-4 font-sans">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input type="text" className={inputClasses} {...props} />
      {error && <p className="mt-1 text-sm text-custom-red">{error}</p>}
    </div>
  );
};

export default TextInput;
