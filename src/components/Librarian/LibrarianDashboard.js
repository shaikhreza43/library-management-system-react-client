import React from "react";
import AllStudents from "../Admin/AllStudents";
import CommonHeader from "../CommonHeader";
import AllBooks from "./AllBooks";

export default function LibrarianDashboard(props) {
  return (
    <div>
      <CommonHeader />
      <AllBooks />
      <AllStudents />
    </div>
  );
}
