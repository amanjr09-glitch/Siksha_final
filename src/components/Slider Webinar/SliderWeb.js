import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "./SliderWeb.css"
class SliderWeb extends Component {
  render() {
    let data = [
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Soft-Matte-post-1-Poppy-Pink.jpg",
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Facewash_3.jpg",
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Hi-Shine-Post-1-Mauve-Struck.jpg",
      
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/MHML-(1).jpg",
       
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Artboard-1-(1)-(1).jpg"
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Rare-(1).jpg"
      },
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/Liquid-Matte-Lipstick-post-1-Envy-Me.jpg"
      }
      ,
      {
        imgSrc: "https://files.myglamm.com/site-images/400x400/OTTP-(1).jpg"
      }
    ];

    let manner ={
        autoSliding: { interval: "3s" },
      circular: true,
    };

    let buttonSetting = {
      placeOn: "middle-inside",
      hoverEvent: false,
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
        }
      }
    };
    return (
      <div>
      {/* <h3 className='h4'>BEST SELLER</h3> */}
      <CarouselSlider
        slideItems={data}
        manner={manner}
        accEle={{ dots: false }}
        sliderBoxStyle={{
          width: "95%",
          height: "300px",
          justifyContent:"center",
          margin:"40px",
          color:"white",
          background: "transparent",
        }}
        buttonSetting={buttonSetting}
      
      />
        </div>
    );
  }
}

export default SliderWeb;
