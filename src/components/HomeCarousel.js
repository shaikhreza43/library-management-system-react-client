import React, { useState } from "react";
import Slider from "react-slick";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  speed: 500,
  dots:true,
  arrows:false
};

const items = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
    name: "img1",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    name: "img2",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1588581939864-064d42ace7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "img3",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1522211988038-6fcbb8c12c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "img4",
  },
];

export default function HomeCarousel(props) {
  return (
    <>
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={item.src}
              alt={item.name}
              style={{ height: "400px", objectFit: "contain" }}
            ></img>
          </div>
        ))}
      </Slider>
    </>
  );
}
