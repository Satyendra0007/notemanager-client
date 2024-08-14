import { NoteContext } from '../store/NoteContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {

  const navigate = useNavigate()
  const { deleteFromLocalStorage } = useContext(NoteContext)

  useEffect(() => {
    deleteFromLocalStorage()
    navigate("/")
  }, [])

  return (
    <div>
      Logged Out
    </div>
  )
}
