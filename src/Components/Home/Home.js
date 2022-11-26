import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <div className="flex  space-x-2 justify-center my-10">
                <h2 className="text-4xl font-medium leading-tight text-gray-800">
                    Book Categories
                </h2>
            </div>
           <Categories/>
           
            <div className='flex flex-col sm:flex-row w-5/6 mx-auto'>
                <Advertisement/>
                <Gallery></Gallery>
            </div>
           
        </div>
    );
};

export default Home;