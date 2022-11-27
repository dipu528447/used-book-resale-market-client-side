import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user,setUser]=useContext(UserContext)
    const imageHostKey=process.env.REACT_APP_imgbb_key;


    const handleAddProduct=data=>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name, 
                    original_price: data.original_price,
                    resale_price: data.resale_price,
                    mobile: data.mobile,
                    location: data.location,
                    year_of_used: data.year_of_used,
                    category_id: data.category,
                    condition: data.condition,
                    seller_id: user.email,
                    seller_name:user.name,
                    seller_photo:user.photo,
                    posted_time: new Date(),
                    seller_verified: "1",
                    advertize:"0",
                    status:"1",
                    picture: imgData.data.url
                }

                fetch('http://localhost:5000/addProduct', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    
                })
            }
        })
    }



    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleSubmit(handleAddProduct)}>
                                <div className="mb-6">
                                    <label
                                    className="form-control block w-full text-center px-4 py-2 text-4xl font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    >
                                        Add Product
                                    </label>
                                </div>    
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Book Name"
                                    {...register("name", {
                                        required: "Product Name is Required"
                                    })}
                                    />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="number"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Original Price"
                                    {...register("original_price", {
                                        required: "Product original price is Required"
                                    })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="number"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Resale Price"
                                    {...register("resale_price", {
                                        required: "resale price is Required"
                                    })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="number"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Mobile"
                                    {...register("mobile", {
                                        required: "Mobile number is Required"
                                    })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Location"
                                    {...register("location", {
                                        required: "Location is Required"
                                    })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="number"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Year of Used"
                                    {...register("year_of_used", {
                                        required: "Year of Used is Required"
                                    })}
                                    />
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-center">
                                        <div className="mb-3 w-full">
                                            <select className="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                                            {...register("category", {
                                                required: "Category is Required"
                                            })}>
                                                <option value='0'>Select Category </option>
                                                <option value='1'>Computer Hardware Books</option>
                                                <option value='2'>Software Engineering Books</option>  
                                                <option value='3'>Graphics Designing Books</option>  
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="flex justify-center">
                                        <div className="mb-3 w-full">
                                            <select className="form-select appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                                            {...register("condition", {
                                                required: "Condition is Required"
                                            })}>
                                                <option value='0'>Select condition Type</option>
                                                <option value='Excellent'>Excellent</option>
                                                <option value='Good'>Good</option>  
                                                <option value='Fair'>Fair</option>  
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="file"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Choose File"
                                    {...register("image", {
                                        required: "Image is Required"
                                    })}
                                    
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    
                                >
                                    Submit
                                </button>
                              
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProduct;