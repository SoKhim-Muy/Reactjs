import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const Table = ({ children }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">{children}</table>
      </div>
    </>
  );
};
