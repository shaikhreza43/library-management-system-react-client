import React from "react";
import BookCard from "./BookCard";

export default function BookCards(props) {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div style={{ display: "flex" }}>
            <BookCard />
            <BookCard />
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
}
