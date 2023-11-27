import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="mb-3">
      <h1 className="text-white text-2xl font-bold uppercase">{title}</h1>
      <div className="h-[2px] bg-gray-300 w-full"></div>
    </div>
  );
};

export default PageTitle;
