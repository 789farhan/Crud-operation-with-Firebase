"use client"

import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import React from 'react';

import { Formvalues } from "../../type";

import { LoginUser } from "@/components/practice/store/loginSlice";

export default function Login() {

  let selectdata=useSelector((state:any)=>state.login);
  // localStorage.setItem("userLogin",JSON.stringify(selectdata))
  console.log("data from the use selector:",selectdata);
  

  let { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useDispatch();

  function data(values: Formvalues) {


    dispatch(LoginUser(values))

  }


  return (
    <>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            {/* <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt /> */}
            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login
            </h2>
            <form className="space-y-6" method="POST" onSubmit={handleSubmit(data)}>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input  {...register('password', { required: true })} placeholder="password" type="password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1">
                    <input  {...register('email', { required: true })} placeholder="email" type="email" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                  </div>
                </div>
              
              </div>
              <div>
                <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                  Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}



