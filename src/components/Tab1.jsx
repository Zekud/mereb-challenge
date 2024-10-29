import React from "react";

const Tab1 = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Title 1</h2>
      <div dangerouslySetInnerHTML={{ __html: data[0] }} />
    </div>
  );
};

export default Tab1;
