import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ConsentMgrListContainer,
  ConsentMgrListEditContainer,
  NotFount,
  Unauthorized,
} from "../pages";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConsentMgrListContainer />} />
          <Route
            path="/consentMgrListEditContainer"
            element={<ConsentMgrListEditContainer />}
          />
          <Route path="/notFount" element={<NotFount />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
