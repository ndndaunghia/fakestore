import React from "react";
import styled from "styled-components";
import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
import banner3 from "./banner3.jpg";
// const BannerImg = styled.div`
//    width: 100%;
//    height: 586px;
//    background-image: url(${banner});
//    background-size: cover;
// `

export default function Banner() {
  return (
    // <div className="container">
    //     <BannerImg></BannerImg>
    // </div>
    <div className="container">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        interval='2000'
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2500">
            <img
              src={banner1}
              className="d-block w-100"
              alt=""
              style={{ height: "568px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img
              src={banner2}
              className="d-block w-100"
              alt=""
              style={{ height: "568px" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2500">
            <img
              src={banner3}
              className="d-block w-100"
              alt=""
              style={{ height: "568px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
