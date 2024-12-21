import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../views/Landing";
import { Overview } from "../views/Overview";
import { BookDetails } from "../views/BookDetails";
import { NotFound } from "../views/NotFound";

export const BookRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            /*<Route path="/" element={<Landing />} />*/
            <Route path="/books" element={<Overview />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

export default BookRouter;