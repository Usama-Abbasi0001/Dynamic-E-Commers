import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousal() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="lg:w-[65%] md:w-[80%] w-[80%] mt-[3rem]">
        <div id="frame-2">
          <Slider {...settings}>
            <div>
              <img src={require("./images/Frame.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/Frame.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/Frame.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/Frame.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/Frame.png")} alt="" />
            </div>
            <div>
              <img src={require("./images/Frame.png")} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Carousal;
