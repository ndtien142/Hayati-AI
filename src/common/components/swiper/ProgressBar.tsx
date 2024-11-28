import React from "react";

interface ProgressBarProps {
  activeIndex: number; // Index of the active tab
  totalTabs: number; // Total number of tabs
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  activeIndex,
  totalTabs,
}) => {
  // Calculate the width of each segment dynamically
  const gap = 8; // Gap between progress bars in pixels
  const totalGapWidth = (totalTabs - 1) * gap; // Total space taken by gaps
  const totalWidth = 100; // Total width of the container in percentage
  const segmentWidth =
    (totalWidth - totalGapWidth * (100 / window.innerWidth)) / totalTabs; // Width of each segment in percentage

  return (
    <div className="flex justify-center items-center mt-4 w-full gap-[8px]">
      {Array.from({ length: totalTabs }).map((_, index) => (
        <span
          key={index}
          style={{ width: `${segmentWidth}%` }}
          className={`h-1 rounded-full transition-colors ${
            index === activeIndex ? "bg-pink-500" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
