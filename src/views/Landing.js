import React from "react";

function Landing() {

    useRedirection("/books", 2500);

  return (
    <div className="landing">
      <h1>Bienvenidos a Relatos de Papel</h1>
    </div>
  );
}

export default Landing;