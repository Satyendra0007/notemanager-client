import React from 'react'
import Spinner from './Spinner'

export default function Button({ name, isSubmiting = false }) {
  return (
    <button disabled={isSubmiting} type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2"> {isSubmiting ? <Spinner /> : name}</button>
  )
}
