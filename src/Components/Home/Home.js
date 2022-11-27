import React, { useEffect, useState } from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import Slider from '../Slider/Slider';

const Home = () => {
    const [slide, setSlide]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/advertise')
        .then(res=>res.json())
        .then(data=>setSlide(data))
    },[])
    return (
        <div>
           <Slider></Slider>
           <div className="flex  space-x-2 justify-center my-10">
                <h2 className="text-4xl font-medium leading-tight text-gray-800">
                    Book Categories
                </h2>
            </div>
           <Categories/>
           
            <div className={` ${slide.length>0?'flex flex-col w-5/6':"flex flex-row w-5/6 justify-center"} sm:flex-row  mx-auto`}>
                {slide.length>0? <Advertisement slide={slide}/>:<></>}
                <Gallery></Gallery>
            </div>
           
        </div>
    );
};

export default Home;