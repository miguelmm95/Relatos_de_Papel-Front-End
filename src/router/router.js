import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../views/Landing";
import { Overview } from "../views/Overview";
import { BookDetails } from "../views/BookDetails";
import FavoritesView from "../views/FavoritesView";
import CartView from "../views/CartView";
import { Checkout } from "../views/Checkout";
import NotFound from "../views/NotFound";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const BookRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/books" element={<Layout><Overview /></Layout>} />
            <Route path="/books/:id" element={<Layout><BookDetails /></Layout>} />
            <Route path="/Cart" element={<Layout><CartView /></Layout>} />
            <Route path="/Checkout" element={<Layout><Checkout /></Layout>}/>
            <Route path="/FavoritesView" element={<Layout><FavoritesView /></Layout>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
};

const Layout = ({children}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default BookRouter;