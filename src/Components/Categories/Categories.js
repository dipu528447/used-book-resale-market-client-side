import React from 'react';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
const Categories = () => {
    const [categories,setCategories]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setCategories(data)
            
        })
    }, []);
    
    return (
        
        <div className='flex flex-col md:flex-row lg:flex-row justify-around mt-10 mx-auto w-5/6'>
            
            {categories.map(category=>{
                return (
                    <Link to={`/category/${category.id}`} key={category._id}>
                        <div className="flex justify-center" >
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <img className="rounded-t-lg" src={category.category_img} alt=""/>                                
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{category.category_name}</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        {category.category_details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Categories;