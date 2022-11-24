import React from 'react';
import {useEffect,useState} from 'react'
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
        
        <div className='flex justify-around mt-10'>
            
            {categories.map(category=>{
                return (
                    <div className="flex justify-center">
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
                );
            })}
        </div>
    );
};

export default Categories;