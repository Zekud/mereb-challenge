import React from "react";

const Tab3 = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Title 3</h2>
      <div dangerouslySetInnerHTML={{ __html: data[2] }} />
    </div>
  );
};

export default Tab3;
