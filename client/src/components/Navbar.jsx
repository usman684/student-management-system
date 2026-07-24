import { FaUserGraduate } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <FaUserGraduate size={28} className="me-2" />

          <span className="fw-bold">Student Management System</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
