import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoDocumentLockOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className='bg-rose-100'>
      <div className="logo">
        <div className="flex items-center justify-center text-base">
          <span className='font-bold mb-1'>&lt;</span>
          <IoDocumentLockOutline className=' text-rose-600' />
          <span className="self-center font-semibold whitespace-nowrap dark:text-white">Notes<span className='text-rose-600'>Manager </span></span>
          <span className='font-bold'>/&gt;</span>
        </div>
      </div>
      <div className="message flex justify-center items-center gap-2 font-bold text-sm">
        Created with <span><FaHeart className='text-rose-600' /></span> by Satyendra
      </div>
    </footer>
  )
}
