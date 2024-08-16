import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { initFlowbite } from 'flowbite'
import { useEffect, useState } from "react";

export default function Note({ index, _id, title, priority, description, handleDeleteNote, handleEditNote }) {

  const [data, setData] = useState({
    title: "",
    priority: "",
    description: ""
  })

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleOnClick = () => {
    setData({
      title: title,
      priority: priority,
      description: description
    })
  }

  const addColour = (priority) => {
    if (priority === "Important")
      return "red"
    else if (priority === "Medium")
      return "yellow"
    else
      return "green"
  }


  useEffect(() => {
    initFlowbite();
  }, [])

  return (
    <>
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={`#accordion-collapse-body-${index}`} aria-expanded="true" aria-controls={`accordion-collapse-body-${index}`}>
          <span >{title}</span>
          <span className="text-white text-xs font-semibold px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-white" style={{ backgroundColor: addColour(priority) }}>{priority}</span>
          <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>.
      </h2>
      <div id={`accordion-collapse-body-${index}`} className="hidden" aria-labelledby={`accordion-collapse-heading-${index}`}>
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{description}</p>
          <div className="button space-x-4 text-right">
            <button className="bg-rose-600 p-2 md:p-2.5 rounded-full shadow-lg hover:scale-105 transition-all ease-in-out duration-300" onClick={() => { handleDeleteNote(_id) }}><MdDelete className="text-xl text-white " /></button>
            <button data-modal-target={`crud-modal-${index}`} data-modal-toggle={`crud-modal-${index}`} className="bg-rose-600 p-2 md:p-2.5 rounded-full shadow-lg hover:scale-105 transition-all ease-in-out duration-300 " onClick={handleOnClick}><MdModeEdit className="text-xl text-white" /></button>

          </div>

          {/* <!-- Main modal --> */}
          <div id={`crud-modal-${index}`} tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-white/5 backdrop-blur-md">
            <div className="relative p-4 w-full max-w-xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Note
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle={`crud-modal-${index}`}>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                      <input type="text" name="title" value={data.title} onChange={handleOnChange} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Note Title" required="" />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                      <select id="category" name="priority" value={data.priority} onChange={handleOnChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block max-w-md md:w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  >
                        {/* <option >Select Type</option> */}
                        <option value="Important">Important</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <textarea id="description" name="description" value={data.description} onChange={handleOnChange} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Note Here" ></textarea>
                    </div>
                  </div>
                  <button type="button" onClick={() => {
                    handleEditNote(_id, data); setData({ title: "", priority: "", description: "" })
                  }} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 flex justify-center items-center" data-modal-toggle={`crud-modal-${index}`}>
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Update Note
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
