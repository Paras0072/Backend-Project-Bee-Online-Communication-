# User Management System

## Overview

This project is a simple **User Management System** with features to manage students and users. It provides the ability to:
- Add, edit, and delete student records.
- Manage users (block and unblock users).
- JWT-based authentication using Passport.js.

---

## Table of Contents

- [Backend Setup](#backend-setup)
  - [Technologies](#technologies-used)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation and Running the Server](#installation-and-running-the-server)
  - [API Endpoints](#api-endpoints)
- [Frontend Setup](#frontend-setup)
  - [Technologies](#technologies-used-frontend)
  - [Installation and Running the Frontend](#installation-and-running-the-frontend)
  - [Frontend Features](#frontend-features)

---

## Backend Setup

### Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose for ODM)
- Passport.js (JWT Authentication)

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Environment Variables

Create a `.env` file in the root directory of your backend with the following values:

```env
MONGO_URI=<your_mongo_db_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000

### Installation

1. Clone the repository:
   git clone https://github.com/Paras0072/Backend-Project-Bee-Online-Communication-.git
Install dependencies:

npm install

##  Endpoints

The API provides the following endpoints:

# User Authentication

### Register User
 
 * URL: `/auth/register`
  
 * Method: POST
 * Request Body;
    * username (string, required): The username of the user.
    * email (string, required): The email address of the user.
    * password (string, required): The user's password.
    * confirmpassword (string, required): Confirmation of the user's password.
 *  Example Request:
  {
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmpassword": "password123"
 }
  * Example Response: {
  "status": "success",
  "message": "User registered successfully"
}

### Login User
 
 * URL:/auth/login
  
 * Method: POST
 * Request Body;
  
    * username (string, required): The username of the user.
    * password (string, required): The user's password.
  
 *  Example Request:
  {
 
  "username": "Master",
  "password": "password123",
 
 }
  * Example Response: {
  "status": "success",
  "message": "<JWT_TOKEN>"
}

# Project Management

### Student Management

 * GET /student/getAll : Get a list of all students.(requires JWT)
 * GET /student/getStudentById/:id: Get details of a specific student.(requires JWT)
 * POST /student/create: Add a new student (requires JWT).
 * PUT /student/update/:id: Update a student (requires JWT)
 * DELETE /student/delete/:id: Delete a student (requires JWT)

### User Management

 * PATCH /auth/block/:id: Block a user by ID.
 * PATCH /auth/unblock/:id: Unblock a user by ID

---

## Frontend Setup

### Technologies Used

- React.js
- Axios (for API requests)
- React Router (for routing)
- CoreUI (for UI components)

### Installation and Running the Frontend

 * Navigate to the frontend directory:
    cd frontend
 * Install dependencies:
    npm install
 * Run the frontend server: 
   npm start



## Frontend Features
 
## Authentication

 * Users can log in to access protected routes.

## Student Management

 ###  In UI you will find the pages section in side bar where you will find this pages:

     ###  Student Management

          * Add a Student: Navigate to the "Add Student" page and fill in the required fields.
          * Edit Student: Navigate to the "Student List," click on a student's edit button to modify  their data.
          * Delete Student: Remove a student by clicking the delete button in the editing page
## User Management (Admin)

  ### Block/Unblock Users: Admin can block and unblock users from accessing the system. Blocked users are prevented from logging in or accessing certain resources.
     { This feature could be added soon in frontend }

  ### Side-by-Side Layout for Editing and List

      *  The "Edit Student" page and the "Student List" are displayed side by side, allowing admins to quickly modify and view changes in real-time.
  ### Auto-refresh Feature

      *  After updating or deleting a student, the page automatically refreshes to reflect the latest data.

project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env
├── README.md


### Explanation:

- The **Backend** section covers setup instructions, API endpoints, and the required environment variables for the backend (Node.js with Express and MongoDB).
- The **Frontend** section explains how to set up and run the React frontend, with details about the features, including student and user management, auto-refresh after actions, and the UI layout.
- The **Folder Structure** section provides an overview of how both the frontend and backend are organized. 

This structure should give clear guidance on how to set up and work with both parts of the project.




