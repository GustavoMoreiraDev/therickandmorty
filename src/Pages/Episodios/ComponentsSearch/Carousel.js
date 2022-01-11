import React from 'react';
import './carousel.css';

export default function Carousel() {
    return (
        <div className='carousel'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/06/Rick-And-Morty.jpg" className=" img d-block w-100" alt="TheRickAndMorty"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/06/Rick-And-Morty.jpg" className=" img d-block w-100" alt="TheRickAndMorty"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/06/Rick-And-Morty.jpg" className=" img d-block w-100" alt="TheRickAndMorty"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
