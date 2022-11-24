import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <div className="flex space-x-2 justify-center my-10">
                <h2 className="text-4xl font-medium leading-tight text-gray-800">
                    Book Categories
                </h2>
            </div>
           <Categories/>
        </div>
    );
};

export default Home;