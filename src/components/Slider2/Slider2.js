import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./Slider.css";

class Slider2 extends Component {
  render() {
    let data = [
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/TGLF-sept-main-KV-1920x527_1.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/Carousel-(Desktop)---1920-527_4.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/1920x527MM.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/1920x527lit_1.jpg",
      },
      {
        imgSrc:
          "https://files.myglamm.com/site-images/original/1920x527MM.jpg",
      },
    ];
    let manner = {
      autoSliding: { interval: "3s" },
      circular: true,
    };

    let accEleSetting = { dots: false};

    let buttonSetting = {
      placeOn: "middle-inside",
      style: {
        left: {
          height: "60px",
          width: "40px",
          color: "black",
          margin: "0",
          fontSize: "25px",
          background: "white",
          opacity: "1",
          fontWeight:"500"
        },
        right: {
          height: "60px",
          width: "40px",
          color: "black",
          margin: "0",
          fontSize: "25px",
          background: "white",
          opacity: "1",
          fontWeight:"500"
        },
      },
    };


    return (
      <div className="offers_container">
        <div className="offer_slider">
          <CarouselSlider
            slideItems={data}
            manner={manner}
            accEle={accEleSetting}
            buttonSetting={buttonSetting}
            sliderBoxStyle={{
              width: "98.6%",
              height: "620px",
              background: "transparent",
              margin: "0 0 0 10px",
            }}
            itemsStyle={{ padding: "0px", margin: "40px 0px 0px 0px" }}
          />
        </div>
      </div>
    );
  }
}

export default Slider2;

