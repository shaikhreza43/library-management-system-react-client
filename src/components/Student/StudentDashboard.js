import React from "react";
import CommonHeader from "../CommonHeader";
import BookCards from "./BookCards";
import SearchBooks from "./SearchBooks";

export default function StudentDashboard(props) {
  return (
    <div>
      <CommonHeader />
      <SearchBooks />
      <BookCards />
    </div>
  );
}
