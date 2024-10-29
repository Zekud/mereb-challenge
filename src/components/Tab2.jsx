import React from "react";

const Tab2 = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Title 2</h2>
      <div dangerouslySetInnerHTML={{ __html: data[1] }} />
    </div>
  );
};

export default Tab2;
