import React from 'react';
import one from '../../assests/1.jpg'
import two from '../../assests/2.jpg'
import three from '../../assests/3.jpg'
const Slider = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full h-1/4">
                    <img
                        src={one}
                        className="block w-full "
                        alt="..."
                    />
                    
                    </div>
                    <div className="carousel-item relative float-left w-full h-1/4 ">
                    <img
                        src={two}
                        className="block w-full "
                        alt="..."
                    />
                   
                    </div>
                    <div className="carousel-item relative float-left w-full h-1/4">
                    <img
                        src={three}
                        className="block w-full "
                        alt="..."
                    />
                   
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;