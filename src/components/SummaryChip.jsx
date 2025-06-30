import React from "react";

function SummaryChip({ img, category, score }) {
  let textColor, bgColor;

  switch (category) {
    case "Reaction":
      textColor = "text-[#ff4d4d]";
      bgColor = "bg-[#ff4d4d10]";
      break;
    case "Memory":
      textColor = "text-[#ffa500]";
      bgColor = "bg-[#ffa50010]";
      break;
    case "Verbal":
      textColor = "text-[#00bd92]";
      bgColor = "bg-[#00bd9210]";
      break;
    case "Visual":
      textColor = "text-[#4b00ff]";
      bgColor = "bg-[#4b00ff10]";
      break;
  }

  return (
    <div className={`flex justify-between p-3 rounded-lg ${bgColor}`}>
      <div className="flex gap-2 items-center">
        <img src={img} />
        <p className={`font-semibold text-sm ${textColor}`}>{category}</p>
      </div>
      <div className="text-[#2e3547] text-sm font-semibold">
        {score} <span className="text-xs text text-[#2e354770]">/ 100</span>
      </div>
    </div>
  );
}

export default SummaryChip;
