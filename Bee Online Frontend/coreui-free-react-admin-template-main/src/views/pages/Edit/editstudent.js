// import React from 'react'
// import {
//   CButton,
//   CCol,
//   CContainer,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilMagnifyingGlass } from '@coreui/icons'

// const Page500 = () => {
//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={6}>
//             <span className="clearfix">
//               <h1 className="float-start display-3 me-4">500</h1>
//               <h4 className="pt-3">Houston, we have a problem!</h4>
//               <p className="text-body-secondary float-start">
//                 The page you are looking for is temporarily unavailable.
//               </p>
//             </span>
//             <CInputGroup className="input-prepend">
//               <CInputGroupText>
//                 <CIcon icon={cilMagnifyingGlass} />
//               </CInputGroupText>
//               <CFormInput type="text" placeholder="What are you looking for?" />
//               <CButton color="info">Search</CButton>
//             </CInputGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Page500

// import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom' // To get the student ID from the URL and navigate programmatically
// import { getStudentById, updateStudent, deleteStudent } from '../../../api' // Ensure these API methods are defined
// import { isAuthenticated } from '../../../utils/auth'
// import {
//   CButton,
//   CCol,
//   CContainer,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CForm,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilUser, cilEnvelopeClosed, cilLockLocked } from '@coreui/icons'

// const EditStudent = () => {
//   const { id } = useParams() // Get student ID from URL
//   const navigate = useNavigate() // To navigate programmatically
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     college: '',
//     batch: '',
//   })
//   const [loading, setLoading] = useState(true)

//   // Fetch student data on component mount
//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const response = await getStudentById(id)
//         setFormData(response.data)
//         setLoading(false)
//       } catch (err) {
//         console.error('Error fetching student data:', err)
//         alert('Error fetching student data')
//         setLoading(false)
//       }
//     }

//     fetchStudent()
//   }, [id])

//   // Handle form change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     // Check if the user is authenticated
//     if (!isAuthenticated()) {
//       alert('Please log in first.')
//       return
//     }

//     try {
//       const { name, email, college, batch } = formData
//       // Call the API function to update the student
//       const response = await updateStudent(id, name, email, college, batch)
//       // Log the response to see what is being returned
//       console.log('API Response:', response)

//       if (response.status === 200) {
//         alert('Student updated successfully')
//       } else {
//         alert('Error updating student')
//       }
//     } catch (err) {
//       console.error('Error occurred:', err) // Log the error for debugging
//       alert('Error updating student: ' + err.message) // Display the error message
//     }
//   }

//   // Handle delete action
//   const handleDelete = async () => {
//     if (!isAuthenticated()) {
//       alert('Please log in first.')
//       return
//     }

//     try {
//       const response = await deleteStudent(id)
//       if (response.status === 200) {
//         alert('Student deleted successfully')
//         navigate('/students') // Navigate to the students list page
//       } else {
//         alert('Error deleting student')
//       }
//     } catch (err) {
//       console.error('Error occurred:', err) // Log the error for debugging
//       alert('Error deleting student: ' + err.message) // Display the error message
//     }
//   }

//   if (loading) return <p>Loading...</p> // Display loading state while fetching data

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={6}>
//             <h1 className="display-4 mb-4">Edit Student</h1>
//             <CForm onSubmit={handleSubmit}>
//               <CInputGroup className="mb-3">
//                 <CInputGroupText>
//                   <CIcon icon={cilUser} />
//                 </CInputGroupText>
//                 <CFormInput
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                 />
//               </CInputGroup>

//               <CInputGroup className="mb-3">
//                 <CInputGroupText>
//                   <CIcon icon={cilEnvelopeClosed} />
//                 </CInputGroupText>
//                 <CFormInput
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   required
//                 />
//               </CInputGroup>

//               <CInputGroup className="mb-3">
//                 <CInputGroupText>
//                   <CIcon icon={cilLockLocked} />
//                 </CInputGroupText>
//                 <CFormInput
//                   type="text"
//                   name="college"
//                   value={formData.college}
//                   onChange={handleChange}
//                   placeholder="College"
//                   required
//                 />
//               </CInputGroup>

//               <CInputGroup className="mb-3">
//                 <CInputGroupText>
//                   <CIcon icon={cilLockLocked} />
//                 </CInputGroupText>
//                 <CFormInput
//                   type="text"
//                   name="batch"
//                   value={formData.batch}
//                   onChange={handleChange}
//                   placeholder="Batch"
//                   required
//                 />
//               </CInputGroup>

//               <CButton color="success" type="submit">
//                 Update Student
//               </CButton>
//               <CButton color="danger" onClick={handleDelete} className="ms-2">
//                 Delete Student
//               </CButton>
//             </CForm>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default EditStudent
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudents, getStudentById, updateStudent, deleteStudent } from '../../../api'
import { isAuthenticated } from '../../../utils/auth'
import {
  CButton,
  CContainer,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilEnvelopeClosed, cilLockLocked } from '@coreui/icons'

const StudentManagement = () => {
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null) // Store selected student data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    batch: '',
  })
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the list of students
    const fetchStudents = async () => {
      try {
        const response = await getStudents()
        setStudents(response.data)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching students:', err)
        alert('Error fetching students')
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  // Fetch student data when a student is selected
  const handleSelectStudent = async (id) => {
    try {
      const response = await getStudentById(id)
      setFormData(response.data)
      setSelectedStudent(response.data)
    } catch (err) {
      console.error('Error fetching student data:', err)
      alert('Error fetching student data')
    }
  }

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedStudent) {
      alert('Please select a student first.')
      return
    }

    if (!isAuthenticated()) {
      alert('Please log in first.')
      return
    }

    try {
      const { name, email, college, batch } = formData
      const response = await updateStudent(selectedStudent._id, name, email, college, batch)

      if (response.status === 201) {
        alert('Student updated successfully')
        window.location.reload() // Refresh the page after successful update
        // navigate('/Edit')
      } else {
        alert('Error updating student')
      }
    } catch (err) {
      console.error('Error updating student:', err)
      alert('Error updating student: ' + err.message)
    }
  }

  // Handle delete action
  const handleDelete = async () => {
    if (!isAuthenticated()) {
      alert('Please log in first.')
      return
    }

    if (!selectedStudent) {
      alert('Please select a student first.')
      return
    }

    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        const response = await deleteStudent(selectedStudent._id)
        if (response.status === 200) {
          alert('Student deleted successfully')
          setStudents(students.filter((student) => student._id !== selectedStudent._id))
          setSelectedStudent(null)
          setFormData({ name: '', email: '', college: '', batch: '' }) // Reset form after deletion
        } else {
          alert('Error deleting student')
        }
      } catch (err) {
        console.error('Error deleting student:', err)
        alert('Error deleting student: ' + err.message)
      }
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <CContainer>
      <CRow>
        {/* Left Column: Student List */}
        <CCol md={6}>
          <h1 className="display-4 mb-4">Student List</h1>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableHeaderCell>College</CTableHeaderCell>
                <CTableHeaderCell>Batch</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {students.map((student) => (
                <CTableRow key={student._id}>
                  <CTableDataCell>{student.name}</CTableDataCell>
                  <CTableDataCell>{student.email}</CTableDataCell>
                  <CTableDataCell>{student.college}</CTableDataCell>
                  <CTableDataCell>{student.batch}</CTableDataCell>
                  <CTableDataCell>
                    <CButton color="warning" onClick={() => handleSelectStudent(student._id)}>
                      Edit
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>

        {/* Right Column: Edit Form */}
        <CCol md={6}>
          <h1 className="display-4 mb-4">Edit Student</h1>
          {selectedStudent ? (
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilUser} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilEnvelopeClosed} />
                </CInputGroupText>
                <CFormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="College"
                  required
                />
              </CInputGroup>

              <CInputGroup className="mb-3">
                <CInputGroupText>
                  <CIcon icon={cilLockLocked} />
                </CInputGroupText>
                <CFormInput
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  placeholder="Batch"
                  required
                />
              </CInputGroup>

              <CButton color="success" type="submit">
                Update Student
              </CButton>
              <CButton color="danger" onClick={handleDelete} className="ms-2">
                Delete Student
              </CButton>
            </CForm>
          ) : (
            <p>Please select a student to edit.</p>
          )}
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default StudentManagement
