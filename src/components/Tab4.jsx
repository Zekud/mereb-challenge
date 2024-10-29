import React from "react";

const Tab4 = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Title 4</h2>
      <div dangerouslySetInnerHTML={{ __html: data[3] }} />
    </div>
  );
};

export default Tab4;
