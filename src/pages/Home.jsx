import React from 'react'
import { IoDocumentLockOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';
import Button from '../Components/Button';

export default function Home() {

  return (
    <div className='container mx-auto min-h-[84vh] flex flex-col justify-center items-center '>
      <div className='md:max-w-3xl m-auto  py-10  '>
        <Logo />
        <div className="paragraph px-1.5  ">
          <div className='text-center font-semibold text-gray-800 space-y-1'>
            <h2 className=' text-xl md:text-2xl font-semibold'>Welcome to NoteManager</h2>
            <h3 className=' text-lg md:text-xl font-semibold'>Your Ultimate Note-Taking Companion</h3>
            <p>
              NoteManager is your perfect partner for organizing, managing, and accessing your notes efficiently. Whether you're a student, a professional, or someone who loves keeping track of ideas, NoteManager offers a seamless experience to ensure all your information is at your fingertips.
            </p>
          </div>
        </div>
        <div className="buttons my-5 flex justify-center items-center">
          <Link to="/login">
            <Button name={"Login"} />
          </Link>
          <Link to="/signup">
            <Button name={"SignUp"} />
          </Link>
        </div>
      </div>
    </div >
  )
}
