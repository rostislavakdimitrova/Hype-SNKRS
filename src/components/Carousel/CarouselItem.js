import { Link } from 'react-router-dom';

export const CarouselItem = ({slide, carouselImage}) => {
    return (
        <section>
            {carouselImage.map((currentSlide, i) => (
                <div 
                    key={i}
                    className={i === slide ? "slides active" : "inactive"}
                >
                    <img src={currentSlide.urls} alt="" className="slide-image" />
                    {/*<h2 className="slide-title">{currentSlide.title}</h2>*/}
                    <Link to={currentSlide.path} className="slide-text">{currentSlide.title}</Link>
                </div>
            ))}
        </section>
    );
};