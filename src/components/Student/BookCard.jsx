import { Button, Link } from "@mui/material";
import React from "react";

export default function BookCard(props) {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="book_img" />
            <div className="card-body">
              <h5 className="card-title">Book Name</h5>
              <p className="card-text">Book Description</p>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
