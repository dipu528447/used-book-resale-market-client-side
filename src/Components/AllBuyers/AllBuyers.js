import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers,setBuyers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allBuyers')
        .then(res=>res.json())
        .then(data=>setBuyers(data))
    },[])
    return (
        <div>
            <div class="flex flex-col justify-end">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-1/2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-1/2">
                                <thead class="border-b">
                                    <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Serial No
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        profile picture
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Actions
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {buyers.map((buyer,index)=>{
                                        return (
                                            <tr class="border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {buyer.name}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {buyer.email}
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div className="shrink-0">
                                                    <img src={buyer.photo} className="rounded-full w-10" alt="Profile Picture"/>
                                                </div>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <div class="flex space-x-2 justify-center">
                                                    
                                                    <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
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