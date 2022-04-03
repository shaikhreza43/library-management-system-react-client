import React from "react";
import BookCard from "./BookCard";

export default function BookCards(props) {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
