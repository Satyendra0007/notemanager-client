import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Logo from '../Components/Logo';
import { useForm } from 'react-hook-form';
import { sendPostRequest } from '../actions/serverActions';
import { toast } from 'react-toastify';
import { NoteContext } from '../store/NoteContext';
import { useContext } from 'react';

export default function Login() {

  const navigate = useNavigate()
  const { saveToLocalStorage } = useContext(NoteContext)
  const { register, handleSubmit, formState: { errors, isSubmiting } } = useForm()

  const handleOnSubmit = async (data) => {
    const serverResponse = await sendPostRequest(`${import.meta.env.VITE_APP_SERVER_URI}api/auth/login`, data)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      saveToLocalStorage(response.token)
      toast.success(response.message)
      navigate("/notes")
    }
    else {
      toast.error(response.message)
    }
  }

  return (
    <div className='container mx-auto min-h-[84vh] '>
      <div className='md:max-w-lg m-auto  py-10 '>
        <Logo />
        <h1 className='font-semibold text-xl md:text-2xl text-center my-5'>Login to your Account</h1>
        <form onSubmit={handleSubmit(handleOnSubmit)} className='space-y-12 px-8 '>
          <div className="relative z-0">
            <input type="email" id="floating_standard2" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete='username' {...register("email", { required: { value: true, message: "Email is required " } })} />
            <label htmlFor="floating_standard2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email </label>
            {errors.email && <span className='text-red-600 text-xs font-bold'>{errors.email.message}</span>}
          </div>
          <div className="relative z-0">
            <input type="password" id="floating_standard4" className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " autoComplete='new-password' {...register("password", { required: { value: true, message: "Password is required " } })} />
            <label htmlFor="floating_standard4" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            {errors.password && <span className='text-red-600 text-xs font-bold'>{errors.password.message}</span>}
          </div>
          <div className="button text-center">
            <Button isSubmiting={isSubmiting} name={"Login"} />
          </div>
        </form>
      </div>
    </div>

  )
}