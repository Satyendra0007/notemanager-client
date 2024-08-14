import { IoDocumentLockOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { NoteContext } from '../store/NoteContext';
import { useContext, useEffect } from 'react';
import { initFlowbite } from "flowbite";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {

  useEffect(() => {
    initFlowbite();
  }, [])

  const { isLoggedIn, userData } = useContext(NoteContext)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-around mx-auto p-4">
        <Link to={isLoggedIn ? "/notes" : "/"} className="flex items-center  rtl:space-x-reverse">
          <IoDocumentLockOutline className='text-2xl text-rose-600' />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notes<span className='text-rose-600'>Manager</span></span>
        </Link>
        <div className="flex items-center  space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <div className="w-9 h-9 rounded-full bg-rose-600 text-lg font-semibold text-white flex justify-center items-center"><FaRegUser /></div>
          </button>
          {/* <!-- Dropdown menu --> */}

          <div className=" w-52 z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            {isLoggedIn && <>
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{userData?.name}</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{userData?.email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </>}
          </div>
        </div>
      </div>
    </nav >

  )
}
