import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddConsent from "../components/campaigns/event/AddConsent";
import UpdateConsent from "../components/campaigns/event/UpdateConsent";
import ViewConsent from "../components/campaigns/event/ViewConsent";
import {
  ConsentMgrListContainer,
  ConsentMgrListEditContainer,
  NotFount,
  Unauthorized,
  Login,
  Register
} from "../pages";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route
            path="/consentMgrListEditContainer"
            element={<ConsentMgrListEditContainer />}
          />
          <Route
            path="/addConsent"
            element={<AddConsent />}
          />
          <Route
            path="/updateConsent"
            element={<UpdateConsent />}
          />
          <Route
            path="/viewConsent"
            element={<ViewConsent />}
          /> */}
          <Route path="/notFount" element={<NotFount />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
