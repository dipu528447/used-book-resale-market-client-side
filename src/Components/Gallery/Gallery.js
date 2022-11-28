import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallery,setGallery]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/gallery')
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    return (
        <div className='w-full md:w-1/2 lg:w-1/2'>
            <div className="flex space-x-2 justify-center my-10">
                <h2 className="text-4xl font-medium leading-tight text-gray-800">
                    Gallery
                </h2>
            </div>
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {gallery.map((pic,index)=>{
                            return(
                                <div className="flex flex-wrap w-1/3" key={index}>
                                    <div className="w-full p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                            src={pic.picture}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;