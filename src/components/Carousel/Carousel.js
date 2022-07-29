import { carouselImage } from "../../utils/carouselImages";
import { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { Arrows } from "./Arrows";
import './Carousel.css';

const length = carouselImage.length - 1;

export const Carousel = (props) => {

    const [ slide, setSlide ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(slide => slide === length ? 0 : slide + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [slide]);


    return (
        <div className="slider-container">
            <CarouselItem slide={slide} carouselImage={carouselImage} />
            <Arrows
                prevSlide={() => setSlide(slide < 1 ? length : slide - 1 )}
                nextSlide={() => setSlide(slide === length ? 0 : slide + 1)}
            />
        </div>
    );
};