import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../../firebase';
import { updateProfile } from "firebase/auth";
import { Link } from 'react-router-dom';
const Registration = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [userType,setUserType]=useState('');
    function register(event){
        event.preventDefault();
        const auth = getAuth(app);
        console.log(email,password,name,userType)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;               
            }).then(() => {
            // Profile updated!
            updateProfile(auth.currentUser, {
                displayName: {name}
            // ...
            
            }).catch((error) => {
            // An error occurred
            // ...
            });
            // ...
            const newUser={
                email:email,
                password: password,
                name: name,
                userType: userType
            }
            fetch('http://localhost:5000/addUser', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newUser)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                })
                .catch(er => console.error(er));
            alert('Registration Complete')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
            // ..
        });
    }
    return (
        <div>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
                                <div className="mb-6">
                                    <label
                                    className="form-control block w-full text-center px-4 py-2 text-4xl font-normal text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    >
                                        Registration
                                    </label>
                                </div>    
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Name"
                                    onChange={(event)=>setName(event.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    onChange={(event)=>setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    onChange={(event)=>setPassword(event.target.value)}
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
                                            onChange={(event)=>setUserType(event.target.value)}>
                                                <option value='buyer'>Select User Type</option>
                                                <option value='seller'>Seller</option>
                                                <option value='buyer'>Buyer</option>  
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={(event)=>register(event)}
                                >
                                    Sign Up
                                </button>
                                <Link to='/login'><p className='text-blue-400 text-center p-2'>Already have an account?</p></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;