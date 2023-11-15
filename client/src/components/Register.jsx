import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    password2: "",
  });

  const handleInput =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    console.log(name,value);
    setUserData({...userData,[name]:value});
  }

  const postData= async ()=>{
    try {
      const {
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        password2,
      } = userData;

      const response = await axios.post("/api/user/register",{
        ...userData
      });
      if (response.status === 200) {
          window.alert("User Registration Successful!");
          navigate("/login")
        } else {
          window.alert("Something went wrong!");
        }
      } catch (error) {
        console.error(error);
    
        if (error.response && error.response.status === 400) {
          window.alert("Invalid Registration");
        } else {
          window.alert("Something went wrong!");
        }
      }
    };
      
    const handleSubmit = async (event)=>{
      event.preventDefault();
      if(userData.password !== userData.password2){
        window.alert("Passwords don't match. Please try again.");
        return;
      }
      await postData();
    }
  
  return (
    
    <>

   <section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
    </div>

    <form method='POST'  className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName" className="sr-only">First Name</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter First Name"
            name="firstName"
            id="firstName"
            autoComplete="off"
            value={userData.firstName}
            onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <label htmlFor="lastName" className="sr-only">Last Name</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Last Name"
            name="lastName"
            id="lastName"
            autoComplete="off"
            value={userData.lastName}
            onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Email"
            name="email"
                id="email"
                autoComplete="off"
                value={userData.email}
                onChange={handleInput}
          />
        </div>
      </div>
      <div>
        <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Mobile Number"
            name="mobileNumber"
                id="mobileNumber"
                autoComplete="off"
                value={userData.mobileNumber}
                onChange={handleInput}
          />

        </div>
      </div>
      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Password"
            name="password"
                id="password"
                autoComplete="off"
                value={userData.password}
                onChange={handleInput}
          />

        </div>
      </div>

      <div>
        <label htmlFor="password2" className="sr-only">Confirm Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Confirm Password"
            name="password2"
                id="password2"
                autoComplete="off"
                value={userData.password2}
                onChange={handleInput}
          />

        </div>
      </div>

      <div className="flex items-center justify-between">

      <br />
            <span>
              Already have an account ?{" "}
              <Link to="/login" className="Login">
                Login
              </Link>
            </span>

        <button
          type="submit"
          className="inline-block  rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Register
        </button>
        
      </div>

    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>

    
    </>
  )
}

export default Register