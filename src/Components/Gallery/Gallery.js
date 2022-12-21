import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallery,setGallery]=useState([]);
    useEffect(()=>{
        fetch('https://used-books-resale-server-dipu528447.vercel.app/gallery')
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
            {gallery.length>0?<>
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

export default Gallery;