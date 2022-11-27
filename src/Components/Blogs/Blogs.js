import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="flex justify-center mt-20">
                <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4">
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-start">Question 1: What are the different ways to manage a state in a React application?</h5>
                    <p class="text-gray-700 text-base mb-4 text-start">
                       Ans: The Four Kinds of React State to Manage
                    </p>
                    <ol className='text-start ml-20 list-decimal' >
                        <li>Local state.</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>
                    </ol>
                </div>
            </div>
            <div class="flex justify-center mt-20">
                <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4">
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-start">Question 2: How does prototypical inheritance work?</h5>
                    <p class="text-gray-700 text-base mb-4 text-start">
                       Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.
                    </p>
                </div>
            </div>
            <div class="flex justify-center mt-20">
                <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4">
                    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-start">Question 3: What is a unit test? Why should we write unit tests?</h5>
                    <p class="text-gray-700 text-base mb-4 text-start">
                       Ans: A  unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. 
                       <br></br>
                       The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;