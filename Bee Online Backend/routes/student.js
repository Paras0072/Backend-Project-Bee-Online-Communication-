const express = require("express");
const authenticate =require('../config/passport')
const {
 updateStudent,
 createStudent,
deleteStudent,
getStudents,
getStudentById

} = require("../controllers/studentController");
const router = express.Router();

// creating a new Student
router.post("/create",authenticate, createStudent);
// updating the student
router.put("/update/:id",authenticate, updateStudent);
// deleting a particular student
router.delete("/delete/:studentId",authenticate, deleteStudent);
// get all students
router.get("/getAll",authenticate, getStudents)
// Get student by id
router.get("/getStudentById/:id",authenticate, getStudentById)
module.exports = router;
