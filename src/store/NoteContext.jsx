import { createContext, useEffect, useState } from "react";
import { fetchData } from "../actions/serverActions";
export const NoteContext = createContext()

export default function ContextWrapper({ children }) {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})

  const saveToLocalStorage = (token) => {
    localStorage.setItem("token", token)
    setToken(localStorage.getItem("token"))
    setIsLoggedIn(!!token)
  }

  const deleteFromLocalStorage = () => {
    localStorage.removeItem("token")
    setToken(null)
    setIsLoggedIn(false)
  }

  const fetchUserData = async () => {
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/auth/user`, token)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      setUserData(response)
    }
    else {
      console.log(response.message)
    }
  }

  useEffect(() => {
    fetchUserData();
    console.log("running")
  }, [token])

  return (
    <NoteContext.Provider value={{ token, saveToLocalStorage, deleteFromLocalStorage, isLoggedIn, userData }}>
      {children}
    </NoteContext.Provider>

  )
}