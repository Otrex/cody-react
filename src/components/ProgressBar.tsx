import React from "react";

interface ProgressBarProps {
  progress: number;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "red";
  width?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = "md",
  color = "blue",
  width = "w-full",
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const sizeClasses = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6",
  };

  const colorClasses = {
    blue: "bg-custom-blue",
    purple: "bg-custom-purple",
    red: "bg-custom-red",
  };

  const bgColorClass = "bg-gray-200";
  const fillColorClass = colorClasses[color];
  const heightClass = sizeClasses[size];

  return (
    <div
      className={`${width} ${heightClass} ${bgColorClass} rounded-2xl overflow-hidden shadow-custom transition-all duration-300 ease-in-out`}
    >
      <div
        className={`${heightClass} ${fillColorClass} transition-all duration-300 ease-in-out hover:brightness-110 active:brightness-90`}
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
