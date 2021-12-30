import React from "react";
import { Button } from "react-bootstrap";

function ErrorPage() {
  return (
    <>
      <div className="bg-success vh-100">
        <div className="m-0 p-5">
          <p className="text-center text-light">
            404, an error occured while loading the page!
            <br />
            <Button className="mt-3 p-2 btn btn-dark text-light" href="/">
              Home Page
            </Button>
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
