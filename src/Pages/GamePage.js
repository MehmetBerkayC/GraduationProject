import React from "react";
import Navbar from "../Components/Navbar";

function GamePage() {
  return (
    <>
      <div className="bg-success vh-100">
        <Navbar />
        <div className="mt-5 pt-3 text-center text-light">
          <p>Oh hi there!</p>
        </div>
      </div>
    </>
  );
}

export default GamePage;
