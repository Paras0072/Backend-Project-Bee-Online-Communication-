const Student =require("../models/student")

// create new student
module.exports.createStudent=async (req, res) => {
  const { name, email, batch, college } = req.body;
try {
  // Check if the student already exists
  const student = await Student.findOne({ email });

  if (student) {
    // Handle the case where the student already exists
    console.log("Student already exists");
    return res
      .status(400)
      .json({ message: "Student with this email already exists" });
  }

  // If the student does not exist, create a new one
  const newStudent = new Student({
    email, // assuming `email` is from req.body
    name,
    batch,
    college
   });

  // Save the new student to the database
  await newStudent.save();

  // Return the newly created student object (or a confirmation)
  return res.status(201).json({
    message: "Student created successfully",
    student: newStudent,
  });
} catch (err) {
  // Log and handle any errors
  console.error("Error in finding or creating student", err);
  return res
    .status(500)
    .json({ message: "Server error, please try again later." });
}

   
}
// update student data
module.exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    const {
      name,
      college,
      batch,
     
    } = req.body;

    if (!student) {
      return res.redirect("back");
    }

    student.name = name;
    student.college = college;
    student.batch = batch;
   

    student.save();
      return res.status(201).json({
        message: "Student updated successfully",
     
      });
  
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
}
// delete the student
module.exports.deleteStudent = async (req, res) => {
   const { studentId } = req.params;
  
    try {
      const student = await Student.findByIdAndDelete(studentId);

      return res
        .status(200)
        .json({ message: "Student deleted successfully" })
       
    } catch (err) {
      console.error("Error deleting student", err);
      return res
        .status(500)
        .json({ message: "Server error, unable to delete student" });
    }
};
// Get all students
module.exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find()
    res.status(200).json(students)
  } catch (err) {
    res.status(500).json({ message: 'Server error, please try again later.' })
  }
}
// Get student by ID
module.exports.getStudentById = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const student = await Student.findById(id)
    if (!student) {
      return res.status(404).json({ message: 'Student not found' })
    }
    res.status(200).json(student)
  } catch (err) {
    res.status(500).json({ message: 'Server error, please try again later.' })
  }
}