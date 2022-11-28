import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const [buyers,setBuyers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allBuyers')
        .then(res=>res.json())
        .then(data=>setBuyers(data))
    },[])
    function deleteUser(email){
        fetch(`http://localhost:5000/deleteUser/${email}`, {
            method: 'DELETE', 
            headers:{
                'content-type': 'application/json', 
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBuyers(buyers.filter(man=>man.email!==email))
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
                                    {buyers.map((buyer,index)=>{
                                        return (
                                            <tr className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {buyer.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {buyer.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="shrink-0">
                                                    <img src={buyer.photo} className="rounded-full w-10" alt="Profile Picture"/>
                                                </div>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="flex space-x-2 justify-center">
                                                    
                                                    <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>deleteUser(buyer.email)}>Delete</button>
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

export default AllBuyers;