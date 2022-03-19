import React from "react";
import CommonHeader from "../CommonHeader";
import AllLibrarians from "./AllLibrarians";
import AllStudents from "./AllStudents";

export default function AdminDashboard(props) {
  return (
    <div>
      <CommonHeader />
      <AllLibrarians />
      <AllStudents />
    </div>
  );
}
