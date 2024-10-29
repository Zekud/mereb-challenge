import React from "react";
import { Routes, Route } from "react-router-dom";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3";
import Tab4 from "../components/Tab4";

const AllRoutes = ({ data }) => {
  return (
    <Routes>
      <Route path="/" element={<Tab1 data={data} />} />
      <Route path="/tab2" element={<Tab2 data={data} />} />
      <Route path="/tab3" element={<Tab3 data={data} />} />
      <Route path="/tab4" element={<Tab4 data={data} />} />
    </Routes>
  );
};

export default AllRoutes;
