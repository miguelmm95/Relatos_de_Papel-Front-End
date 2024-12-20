import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Overview } from "../views/Overview";
import { NotFound } from "../views/NotFound";

export const BookRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};