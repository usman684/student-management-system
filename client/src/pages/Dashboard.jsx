import { FaUserGraduate, FaBookOpen, FaBuilding } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import StatsCard from "../components/StatsCard";
import StudentForm from "../components/StudentForm";
import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";

import {
  getStudents,
  addStudent as createStudent,
  updateStudent as editStudent,
  deleteStudent as removeStudent,
} from "../api/studentApi";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // =============================
  // Fetch Students
  // =============================
  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // =============================
  // Add Student
  // =============================
  const addStudent = async (student) => {
    try {
      await createStudent(student);

      toast.success("Student added successfully 🎉");

      fetchStudents();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add student");
    }
  };

  // =============================
  // Update Student
  // =============================
  const updateStudent = async (updatedStudent) => {
    try {
      await editStudent(updatedStudent._id, updatedStudent);

      toast.success("Student updated successfully ✏️");

      setEditingStudent(null);

      fetchStudents();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update student");
    }
  };

  // =============================
  // Delete Student
  // =============================
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await removeStudent(id);

      toast.success("Student deleted successfully 🗑️");

      if (editingStudent && editingStudent._id === id) {
        setEditingStudent(null);
      }

      fetchStudents();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete student");
    }
  };

  // =============================
  // Search Filter
  // =============================
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Dynamic Stats
  const totalCourses = [...new Set(students.map((s) => s.course))].length;

  const totalDepartments = [...new Set(students.map((s) => s.department))]
    .length;

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
            value={students.length}
            icon={<FaUserGraduate />}
            bgColor="#0d6efd"
          />
        </div>

        <div className="col-md-4">
          <StatsCard
            title="Courses"
            value={totalCourses}
            icon={<FaBookOpen />}
            bgColor="#198754"
          />
        </div>

        <div className="col-md-4">
          <StatsCard
            title="Departments"
            value={totalDepartments}
            icon={<FaBuilding />}
            bgColor="#fd7e14"
          />
        </div>
      </div>

      {/* Student Form */}
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

      {/* Student Table */}
      <StudentTable
        students={filteredStudents}
        setEditingStudent={setEditingStudent}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default Dashboard;
