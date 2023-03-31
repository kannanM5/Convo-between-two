import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Parent from "../Parent/Parent";
import Child from "../Child/Child";

const RouterConfigure = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/son" element={<Child />} />
      </Routes>
    </Router>
  );
};

export default RouterConfigure;
