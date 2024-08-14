import React from 'react'
import { IoDocumentLockOutline } from "react-icons/io5";

export default function Logo() {
  return (
    <div className="logo mb-5">
      <div className="flex items-center justify-center text-3xl">
        <span className='font-bold mb-1.5'>&lt;</span>
        <IoDocumentLockOutline className='text-2xl text-rose-600' />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notes<span className='text-rose-600'>Manager </span></span>
        <span className='font-bold'>/&gt;</span>
      </div>
    </div>
  )
}
