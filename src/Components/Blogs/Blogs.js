import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="flex justify-center mt-20">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full">
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">What are the different ways to manage a state in a React application?</h5>
                    <p class="text-gray-700 text-base mb-4 text-start">
                       Ans: The Four Kinds of React State to Manage
                    </p>
                    <ul className='text-start ml-20'>
                        <li>Local state.</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>
                    </ul>
                        
                        
                        
                        
                    
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;