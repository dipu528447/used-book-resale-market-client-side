import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../App';

const MyOrder = () => {
    const [user,setUser]=useContext(UserContext);
    const [myorders,setMyorders]=useState([]);
    useEffect(()=>{
        fetch(`https://used-books-resale-server-dipu528447.vercel.app/myorder/${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyorders(data))
    },[])


    function paynow(id,product_id){
        console.log(id,product_id)
        fetch(`https://used-books-resale-server-dipu528447.vercel.app/paynow/${product_id}`)
        .then(res=>{
            res.json();
            console.log(res)
            
        })
        .then(data=>{
            console.log(data)
            
            if(data?.status=="0"){
                toast('already sold')
            }
            else{
                afterpayment(id,product_id)
            }
        });
    }

    function afterpayment(id,product_id){
       
            fetch(`https://used-books-resale-server-dipu528447.vercel.app/paynow/${id}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json', 
                },   
            })
            .then(res=>res.json())
            .then(data=>{
                toast('paid successfully')
                fetch(`https://used-books-resale-server-dipu528447.vercel.app/unavailable/${product_id}`,{
                method:'PUT',
                headers:{
                    'content-type': 'application/json', 
                },   
                })
                .then(res=>res.json())
                .then(data=>console.log(data));
            });
        
    }

    function deleteProduct(id){
        console.log(id)
        fetch(`https://used-books-resale-server-dipu528447.vercel.app/order/${id}`, {
            method: 'DELETE', 
            headers:{
                'content-type': 'application/json', 
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMyorders(myorders.filter(pro=>pro._id!==id))
        })
    }
        
    return (
        <div>
            {myorders.map(product=>{
                return(
                <div className="flex justify-center py-10" key={product._id}>
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={product.picture} alt="" />
                        <div className="p-6 flex flex-col justify-start">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{product.name}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    Original price: {product.original_price}
                                </p>
                                <p className="text-gray-700 text-base mb-4">
                                    Resale price: {product.resale_price}
                                </p>
                                <p className="text-gray-700 text-base mb-4">
                                    location: {product.location}
                                </p>
                                <p className="text-gray-700 text-base mb-4">
                                    year of used: {product.year_of_used}
                                </p>
                                <p className="text-gray-700 text-base mb-4">
                                    category: {product.category_id==="1"?"Hardware Engineering Books":product.category_id==="2"?"Software Engineerning Books":"Graphics Designing Books"}
                                </p>
                                <p className="text-gray-700 text-base mb-4">
                                    Condition: {product.condition==="1"?"Excellent":product.condition==="2"?"Good":"Fair"}
                                </p>
                                
                                <div className='flex'>
                                    <button type="button" className="m-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase
                                     rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                     active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>paynow(product._id,product.id)}
                                    >Pay Now</button>
                                    <button type="button" className="m-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase
                                     rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 
                                     active:shadow-lg transition duration-150 ease-in-out" onClick={()=>deleteProduct(product._id)}>Delete</button>
                                </div>
                                
                        </div>
                    </div>
                </div>
            )})}
        </div>
    );
};

export default MyOrder;