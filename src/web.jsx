// web.jsx
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "./Index";
import SecondLetter from "./SecondLetter";
import FadeWrapper from "./FadeWrapper"; // we'll make this next
import FindName from "./FindName";
import Test1 from "./Test1";

export default function WebRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/index" replace />} />
        <Route
          path="/index"
          element={
            <FadeWrapper>
              <Index />
            </FadeWrapper>
          }
        />
        <Route
          path="/FindName"
          element={
            <FadeWrapper>
              <FindName />
            </FadeWrapper>
          }
        ></Route>
        <Route
          path="/SecondLetter"
          element={
            <FadeWrapper>
              <SecondLetter />
            </FadeWrapper>
          }
        />
        <Route
          path="/test"
          element={
            <FadeWrapper>
              <Test1 />
            </FadeWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
