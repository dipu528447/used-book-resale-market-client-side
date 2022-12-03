import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { format } from 'date-fns'
import { TiTick } from "react-icons/ti";
import { UserContext } from '../../App';
import toast from 'react-hot-toast';
const Category = () => {
    const products=useLoaderData();
    const [user,setUser]=useContext(UserContext)
    const [activeProducts,setActiveProducts]=useState({});
    const [meeting,setMeeting]=useState('');
    const navigate =useNavigate();
    const [phone,setPhone]=useState('')
    function bookNow(product){
        const NewOrder={ 
            id:product._id,           
            advertize: product.advertize,
            category_id: product.category_id,
            condition: product.condition,
            location: product.location,
            mobile: product.mobile,
            name:product.name,
            original_price:product.original_price,
            picture:product.picture,
            posted_time:product.posted_time,
            resale_price:product.resale_price,
            seller_id:product.seller_id,
            seller_verified:product.seller_verified,
            status:product.status,
            year_of_used:product.year_of_used,
            buyer_id:user.email,
            buyer_name:user.name,
            buyer_phone:phone,
            meeting:meeting,
            order_time:new Date()
        }
        
        fetch('https://used-books-resale-server-dipu528447.vercel.app/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
            },
            body: JSON.stringify({...NewOrder})
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            toast('Booking successfully Completed')
           
        })
    }
    function setactive(pro){
        console.log(pro)
        setActiveProducts(pro)
    }
    
    return (
        <div className='grid grid-cols-3 gap-4 my-10'>
            {console.log(products)}
            {products.map(product=>{
                return(
                <div className="flex justify-center" key={product._id}>
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                        <img className="rounded-t-lg w-96 h-96" src={product.picture} alt=""/>
                        </a>
                        <div className="p-6 text-start">
                            <h5 className="text-gray-900 text-2xl font-medium mb-2">{product.name}</h5>
                            
                            <p className="text-gray-700 text-base mb-4">
                                Original Price: BDT {product.original_price}
                            </p>
                            <p className="text-gray-700 text-base mb-4">
                                Resale Price: BDT {product.resale_price}
                            </p>
                            <p className="text-gray-700 text-base mb-4">
                                Location: {product.location}
                            </p>
                            <p className="text-gray-700 text-base mb-4">
                                Year of used: {product.year_of_used} years
                            </p>
                            <p className="text-gray-700 text-base mb-4">
                                {/* {console.log(new Date(product.posted_time))} */}
                                posted time: {format(Date.parse(product.posted_time),'PPpp')}
                            </p>
                            
                                {/* {console.log(new Date(product.posted_time))} */}
                                
                            <div className="flex space-x-2 justify-start">
                                <h1 className="text-gray-700 text-base mb-4 ">
                                    posted by: {product.seller_name}
                                {product.seller_verified==="1" && <span className="inline-block  leading-none text-start whitespace-nowrap align-baseline  text-blue-600 rounded ml-2"><TiTick/></span>}
                                </h1>
                            </div>
                            
                            <button type="button" className="px-6
                                py-2.5
                                bg-blue-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                                 onClick={()=>setactive(product)}
                                >
                                    Book Now
                            </button>

                            
                            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                            id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog relative w-auto pointer-events-none">
                                <div
                                className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                    <div
                                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Book Now...!!!</h5>
                                        <button type="button"
                                        className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body relative p-4">
                                        <div className="p-6 text-start">
                                            <form>

                                            
                                            <h5 className="text-gray-900 text-2xl font-medium mb-2">{activeProducts.name}</h5>
                                            
                                            <p className="text-gray-700 text-base mb-4">
                                                Price: BDT {activeProducts.resale_price}
                                            </p>
                                            <p className="text-gray-700 text-base mb-4">
                                                Location: {activeProducts.location}
                                            </p>
                                            <p className="text-gray-700 text-base mb-4">
                                                Buyer Name: {user.name}
                                            </p>
                                            <p className="text-gray-700 text-base mb-4">
                                                Buyer Email: {user.email}
                                            </p>
                                            <input type="number" required placeholder="mobile number" className='text-base mb-4' onChange={(event)=>setPhone(event.target.value)}/>
                                            <input type="text" required placeholder='meeting location' className='text-base mb-4' onChange={(event)=>setMeeting(event.target.value)}/>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                        <button type="button" className="px-6
                                        py-2.5
                                        bg-purple-600
                                        text-white
                                        font-medium
                                        text-xs
                                        leading-tight
                                        uppercase
                                        rounded
                                        shadow-md
                                        hover:bg-purple-700 hover:shadow-lg
                                        focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
                                        active:bg-purple-800 active:shadow-lg
                                        transition
                                        duration-150
                                        ease-in-out" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="px-6
                                            py-2.5
                                            bg-blue-600
                                            text-white
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            rounded
                                            shadow-md
                                            hover:bg-blue-700 hover:shadow-lg
                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                            active:bg-blue-800 active:shadow-lg
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-1" onClick={()=>bookNow(product)}>Submit
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>
    );
};

export default Category;