export const sendPostRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const addNote = async (url, authtoken, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authtoken}`
      },
      body: JSON.stringify(data)
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const fetchData = async (url, authtoken) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${authtoken}`
      }
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export const deleteNote = async (url, authtoken) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${authtoken}`
      },
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
export const editNote = async (url, authtoken, data) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authtoken}`
      },
      body: JSON.stringify(data)
    })
    return response
  } catch (error) {
    console.log(error)
  }
}
