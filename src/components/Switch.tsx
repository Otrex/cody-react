import React from "react";

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "red";
  disabled?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
  isOn,
  handleToggle,
  size = "md",
  color = "blue",
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out";
  const sizeClasses = {
    sm: "w-10 h-6",
    md: "w-14 h-8",
    lg: "w-16 h-9",
  };
  const colorClasses = {
    blue: "bg-custom-blue",
    purple: "bg-custom-purple",
    red: "bg-custom-red",
  };
  const thumbSizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };
  const thumbTranslateClasses = {
    sm: "translate-x-4",
    md: "translate-x-6",
    lg: "translate-x-7",
  };

  return (
    <div
      onClick={disabled ? undefined : handleToggle}
      className={`${baseClasses} ${sizeClasses[size]} ${
        isOn ? colorClasses[color] : "bg-gray-300"
      } ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-custom active:shadow-none"
      }`}
    >
      <div
        className={`bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          thumbSizeClasses[size]
        } ${isOn ? thumbTranslateClasses[size] : "translate-x-0"}`}
      />
    </div>
  );
};

export default Switch;
