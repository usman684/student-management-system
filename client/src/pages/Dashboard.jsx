import { FaUserGraduate, FaBookOpen, FaBuilding } from "react-icons/fa";

import StatsCard from "../components/StatsCard.jsx";
import StudentForm from "../components/StudentForm.jsx";
import SearchBar from "../components/SearchBar.jsx";
import StudentTable from "../components/StudentTable.jsx";
import { useState } from "react";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@gmail.com",
      phone: "03001234567",
      course: "MERN Stack",
      department: "Computer Science",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed@gmail.com",
      phone: "03111234567",
      course: "Flutter",
      department: "Software Engineering",
    },
  ]);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const addStudent = (student) => {
    setStudents([
      ...students,
      {
        id: Date.now(),
        ...student,
      },
    ]);

    toast.success("Student added successfully 🎉");
  };

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student,
      ),
    );

    setEditingStudent(null);

    toast.info("Student updated successfully ✏️");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));

    if (editingStudent && editingStudent.id === id) {
      setEditingStudent(null);
    }

    toast.error("Student deleted successfully 🗑️");
  };

  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">Welcome Back 👋</h2>

        <p className="text-muted">Student Management Dashboard</p>
      </div>

      {/* Stats */}
      <div className="row g-4">
        <div className="col-md-4">
          <StatsCard
            title="Total Students"
            value="120"
            icon={<FaUserGraduate />}
            bgColor="#0d6efd"
          />
        </div>

        <div className="col-md-4">
          <StatsCard
            title="Courses"
            value="8"
            icon={<FaBookOpen />}
            bgColor="#198754"
          />
        </div>

        <div className="col-md-4">
          <StatsCard
            title="Departments"
            value="5"
            icon={<FaBuilding />}
            bgColor="#fd7e14"
          />
        </div>
      </div>

      {/* Form */}
      <div className="accordion mt-5" id="studentAccordion">
        <div className="accordion-item shadow-sm">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#studentForm"
            >
              {editingStudent ? "✏️ Update Student" : "➕ Add New Student"}
            </button>
          </h2>

          <div
            id="studentForm"
            className="accordion-collapse collapse show"
            data-bs-parent="#studentAccordion"
          >
            <div className="accordion-body">
              <StudentForm
                addStudent={addStudent}
                updateStudent={updateStudent}
                editingStudent={editingStudent}
                setEditingStudent={setEditingStudent}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mt-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Table */}
      <StudentTable
        students={filteredStudents}
        setEditingStudent={setEditingStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default Dashboard;
