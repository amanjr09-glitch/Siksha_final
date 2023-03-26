import * as React from 'react'
import BtnSlider from './SliderButton'
import "./index.css"
import Card from "../Card"

export default function Slider({ dataArray }) {
    const [slideIndex, setSlideIndex] = React.useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataArray.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataArray.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataArray.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider" style={{ height: "45vh" }}>
            {dataArray.map((data, index) => {
                return (
                    <Card key={index} sliderClass={slideIndex === index + 1 ? "slide active-anim" : "slide"} data={data}/>
                )
            })}
            {dataArray.length > 1 &&
                <>

                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                    <div className="container-dots">
                        {Array.from({ length: dataArray.length }).map((item, index) => (
                            <div
                                key={index}
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"}
                            ></div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}