import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h6 className="mb-2">Student Management System</h6>

        <p className="mb-3">Built with React, Bootstrap & Express</p>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <FaGithub size={22} />
          <FaLinkedin size={22} />
        </div>

        <small>© {new Date().getFullYear()} All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
