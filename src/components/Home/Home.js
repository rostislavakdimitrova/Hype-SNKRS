import { useEffect } from 'react';
import { Carousel } from '../Carousel/Carousel';
import './Home.css';

export const Home = (props) => {

    useEffect(() => {
        props.showNav(true);
    });

    return (
        <div className='home-container'>
            <Carousel />
            
        </div>
    );
};

