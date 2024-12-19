import React from "react";
import { Overview } from "../views/Overview";

export const BookRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/books" element={<Overview />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};