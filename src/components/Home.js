import React from "react";
import CommonHeader from "./CommonHeader";
import HomeCarousel from "./HomeCarousel";
import HomeFooter from "./HomeFooter";

export default function Home(props) {
  return (
    <>
      <CommonHeader />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h5 className="text-center mb-3 mt-2">
              Welcome to Library Management System
            </h5>
            <HomeCarousel />
            <div className="mt-5">
              <HomeFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
