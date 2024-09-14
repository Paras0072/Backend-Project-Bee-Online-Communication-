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

// const Page404 = () => {
//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={6}>
//             <div className="clearfix">
//               <h1 className="float-start display-3 me-4">404</h1>
//               <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
//               <p className="text-body-secondary float-start">
//                 The page you are looking for was not found.
//               </p>
//             </div>
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


import React, { useState } from 'react'
import { addStudent } from '../../../api'
import { isAuthenticated } from '../../../utils/auth'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser, cilEnvelopeClosed, cilLockLocked } from '@coreui/icons'

const CreateStudent = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    batch: '',
  })

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Check if the user is authenticated
    if (!isAuthenticated()) {
      alert('Please log in first.')
      return
    }

    try {
      // Log the form data to ensure all fields are correct
      console.log('Form Data:', formData)
      // Destructure form data
      const { name, email, college, batch } = formData

      // Call the API function to add the student
      const response = await addStudent(name, email, college, batch)
      // Log the response to see what is being returned
      console.log('API Response:', response)
      if (response.status == 201) {
        // localStorage.setItem('token', response.data.token)
        alert('Student added successfully')
      }
      // else if (response.status == 401) {
      //   alert('Student already exist')
      //   // throw new Error('Token not found in the response')
      // } else {
      //   alert(response.data.msg)
      // }
    } catch (err) {
      console.error('Error occurred:', err) // Log the error for debugging
      //  alert('Error adding student:  ' + err.message) // Display the error message
      alert('Error adding student: Student already Exist  ' ) // Display the error message
    }

    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      college: '',
      batch: '',
    })
    
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <h1 className="display-4 mb-4">Add Student</h1>
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
                Add Student
              </CButton>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default CreateStudent
