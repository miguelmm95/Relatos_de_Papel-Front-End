import React from "react";
import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="header">
        <h1 className="header_text">Relatos de papel</h1>
        <div className="header_searchBar">
            <input className="header_searchBar_text" type="text" placeholder="Buscar..." />
            <button className="header_searchBar_button">Buscar</button>
        </div>
    </div>
  );
}