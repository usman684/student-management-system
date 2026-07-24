import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <h6 className="mb-2">Student Management System</h6>

        <p className="mb-3">Built with React, Bootstrap & Express</p>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="https://github.com/usman684" target="_blank">
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-usman-2041b3396"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <small>© {new Date().getFullYear()} All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
