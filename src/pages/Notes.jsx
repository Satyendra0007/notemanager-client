import { useEffect, useContext, useState } from "react";
import Note from "../Components/Note"
import { initFlowbite } from 'flowbite'
import { useForm } from "react-hook-form";
import { addNote, fetchData, deleteNote, editNote } from "../actions/serverActions";
import { NoteContext } from "../store/NoteContext";
import { toast } from "react-toastify";


export default function Notes() {

  const { register, handleSubmit, reset, formState: { errors, isSubmiting } } = useForm()
  const { token } = useContext(NoteContext)
  const [notes, setNotes] = useState([])

  const fetchAllNotes = async () => {
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/notes`, token)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      setNotes(response)
    }
    else {
      toast.error(response.message)
    }
  }

  const handleOnSubmit = async (data) => {
    const serverResponse = await addNote(`${import.meta.env.VITE_APP_SERVER_URI}api/notes`, token, data)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      reset();
      toast.success(response.message)
      fetchAllNotes();
    }
    else {
      toast.error(response.message)
    }
  }

  const handleDeleteNote = async (id) => {
    if (confirm("Do you really want to delete this Note")) {
      const serverResponse = await deleteNote(`${import.meta.env.VITE_APP_SERVER_URI}api/notes/${id}`, token)
      const response = await serverResponse.json()
      if (serverResponse.ok) {
        toast.success(response.message)
        fetchAllNotes();
      }
      else {
        toast.error(response.message)
      }
    }
  }

  const handleEditNote = async (id, data) => {
    const serverResponse = await editNote(`${import.meta.env.VITE_APP_SERVER_URI}api/notes/${id}`, token, data)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      toast.success(response.message)
      fetchAllNotes();
    }
    else {
      toast.error(response.message)
    }
  }

  useEffect(() => {
    initFlowbite();
    fetchAllNotes();
  }, [])

  return (
    <div className='container mx-auto min-h-[84vh]'>
      <div className='md:max-w-3xl m-auto py-5  '>
        <div className="button px-5">
          <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2" type="button">
            Create New Note
          </button>
          {/* <!-- Main modal --> */}
          <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-white/5 backdrop-blur-md">
            <div className="relative p-4 w-full max-w-xl max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Create New Note
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)} className="p-4 md:p-5">
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                      <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Note Title" required="" {...register("title", { required: { value: true, message: "Tittle is required " } })} />
                      {errors.title && <span className='text-red-600 text-xs font-bold'>{errors.title.message}</span>}
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                      <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block max-w-md md:w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" {...register("priority", { required: { value: true, message: "Type is required " } })}>
                        {/* <option >Select Type</option> */}
                        <option value="Important">Important</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                      {errors.priority && <span className='text-red-600 text-xs font-bold'>{errors.priority.message}</span>}
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Note Here" {...register("description", { required: { value: true, message: "Description is required " } })}></textarea>
                      {errors.description && <span className='text-red-600 text-xs font-bold'>{errors.description.message}</span>}
                    </div>
                  </div>
                  <button disabled={isSubmiting} type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 flex justify-center items-center" >
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    Add new Note
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="notes">
          <h1 className="text-2xl md:text-3xl font-semibold  my-8 text-center"> Your Notes </h1>
          <div id="accordion-collapse" data-accordion="collapse">

            {notes.length === 0 && <h3 className="text-xl font-semibold text-gray-900 dark:text-white">No New Notes Available</h3>}
            {notes.length !== 0 && notes.map((note, index) => {
              return <Note key={note._id} index={index + 1} {...note} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
