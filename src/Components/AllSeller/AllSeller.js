import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const [sellers,setSellers]=useState([])
    useEffect(()=>{
        fetch('https://used-books-resale-server-dipu528447.vercel.app/allSellers')
        .then(res=>res.json())
        .then(data=>setSellers(data))
    },[])

    function verify(email){
        console.log(email)
        fetch(`https://used-books-resale-server-dipu528447.vercel.app/verify/${email}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json', 
            },   
        })
        .then(res=>res.json())
        .then(data=>toast('Verfied Successfully'));

    }
    function deleteUser(email){
        fetch(`https://used-books-resale-server-dipu528447.vercel.app/deleteUser/${email}`, {
            method: 'DELETE', 
            headers:{
                'content-type': 'application/json', 
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSellers(sellers.filter(man=>man.email!==email))
            toast('Deleted Sucessfully')
        })
    }
    return (
        <div>
            <div className="flex flex-col justify-end">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-1/2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-1/2">
                                <thead className="border-b">
                                    <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Serial No
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        email
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        profile picture
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Actions
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sellers.map((seller,index)=>{
                                        return (
                                            <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {seller.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {seller.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="shrink-0">
                                                    <img src={seller.photo} className="rounded-full w-10" alt="Profile Picture"/>
                                                </div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="flex space-x-2 justify-center">
                                                    <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>verify(seller.email)}>Verify</button>
                                                    <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>deleteUser(seller.email)}>Delete</button>
                                                </div>
                                            </td>
                                            </tr>
                                        );
                                    })}
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;