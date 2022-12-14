import React, { useEffect, useState } from 'react';

const Advertisement = props => {
    const {slide}=props;
    return (
        <div className='w-1/2 mx-auto'> 
        <div className="flex space-x-2 justify-center my-10">
                <h2 className="text-4xl font-medium leading-tight text-gray-800">
                    Advertisement
                </h2>
            </div>
            {slide.length>0?<>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner relative w-full overflow-hidden">
                    {slide.map((sd,index)=>{
                        return (
                            <div className={`carousel-item ${index==0?"active":""}  relative float-left w-full`} key={index}>
                                <img
                                    src={sd.picture}
                                    className="block w-full"
                                    alt="not found"
                                />
                            </div>
                        )
                    })}
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </>:<>
            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            </>}
        </div>
    );
};

export default Advertisement;