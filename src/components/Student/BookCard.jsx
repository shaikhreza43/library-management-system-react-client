import { Button, Link } from "@mui/material";
import React from "react";

export default function BookCard(props) {
  return (
    <div className="card" style={{ width: "14rem",margin:"10px 10px" }}>
      <img
        src="https://5.imimg.com/data5/FW/QI/MY-25289254/isc-mathematics-book-ii-for-class-xii-500x500.jpg"
        className="card-img-top"
        alt="book_img"
      />
      <div className="card-body">
        <h5 className="card-title">Book Name</h5>
        <p className="card-text">Book Description</p>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
