import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const StudentForm = ({
  addStudent,
  updateStudent,
  editingStudent,
  setEditingStudent,
}) => {
  const [errors, setErrors] = useState({});
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    course: "",
    department: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Student name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits";
    }

    // Course
    if (!formData.course.trim()) {
      newErrors.course = "Course is required";
    }

    // Department
    if (!formData.department.trim()) {
      newErrors.department = "Department is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.warning("Please fix the validation errors.");
      return;
    }

    if (editingStudent) {
      updateStudent(formData);
    } else {
      addStudent(formData);
    }

    setFormData(initialFormData);

    setErrors({});
    setEditingStudent(null);
  };

  return (
    <div className="card border-0">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
            />

            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />

            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone No."
            />

            {errors.phone && (
              <div className="invalid-feedback">{errors.phone}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <input
              type="text"
              name="course"
              className={`form-control ${errors.course ? "is-invalid" : ""}`}
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter your Course"
            />

            {errors.course && (
              <div className="invalid-feedback">{errors.course}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Department</label>
            <input
              type="text"
              name="department"
              className={`form-control ${errors.department ? "is-invalid" : ""}`}
              value={formData.department}
              onChange={handleChange}
              placeholder="Enter your Depart"
            />

            {errors.department && (
              <div className="invalid-feedback">{errors.department}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {editingStudent ? "Update Student" : "Add Student"}
          </button>

          {editingStudent && (
            <button
              type="button"
              className="btn btn-secondary w-100 mt-2"
              onClick={() => {
                setEditingStudent(null);

                setFormData(initialFormData);

                setErrors({});
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
