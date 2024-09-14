import axios from 'axios'

const API_URL = 'http://localhost:5000'

export const registerUser = async (username, email, password, confirmPassword) => {
  return axios.post(`${API_URL}/auth/register`, { username, email, password, confirmPassword })
}

export const loginUser = async (username, password) => {
  return axios.post(`${API_URL}/auth/login`, { username, password })
}

export const addStudent = async (name, email, college, batch) => {
  const token = localStorage.getItem('token')
  try {
    return axios.post(
      `${API_URL}/student/create`,
      { name, email, college, batch },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    // Handle errors if needed
    throw error
  }
 
}

export const getStudents = () => {
  const token = localStorage.getItem('token')
  return axios.get(`${API_URL}/student/getAll`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}
export const getStudentById = (id) => {
   const token = localStorage.getItem('token')
  return axios.get(
    `${API_URL}/student/getStudentById/${id}`,
   
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
}

export const updateStudent = (id, name, email, college, batch) => {
   const token = localStorage.getItem('token')
  return axios.put(
    `${API_URL}/student/update/${id}`,
    { name, email, college, batch },
   
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
  )
}

export const deleteStudent = (id) => {
   const token = localStorage.getItem('token')
  return axios.delete(`${API_URL}/student/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}

