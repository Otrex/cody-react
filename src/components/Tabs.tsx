import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "red";
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  size = "md",
  color = "blue",
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].id);

  const sizeClasses = {
    sm: "text-xs py-1 px-2",
    md: "text-sm py-2 px-4",
    lg: "text-base py-3 px-6",
  };

  const colorClasses = {
    blue: "text-custom-blue hover:text-blue-700 active:text-blue-800",
    purple: "text-custom-purple hover:text-purple-700 active:text-purple-800",
    red: "text-custom-red hover:text-red-700 active:text-red-800",
  };

  const activeColorClasses = {
    blue: "border-custom-blue text-custom-blue",
    purple: "border-custom-purple text-custom-purple",
    red: "border-custom-red text-custom-red",
  };

  return (
    <div className="w-full font-sans">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${sizeClasses[size]} ${
              colorClasses[color]
            } font-medium focus:outline-none transition duration-150 ease-in-out rounded-t-xl hover:bg-gray-100 ${
              activeTab === tab.id
                ? `border-b-2 ${activeColorClasses[color]}`
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 px-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
