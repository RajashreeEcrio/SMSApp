import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeData } from "./Routes";

export default function RouterConfig() {
  return (
    <Routes>
      {routeData.map((page) => (
        <Route key={page.key} path={page.path} element={<page.element/>} />
      ))}
    </Routes>
  );
}
