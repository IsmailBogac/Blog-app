import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-light fixed-bottom text-dark text-center text-lg-start">
      <div className="container p-3">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start mb-2 mb-md-0">
            <span>© 2025 LargeBlog. All rights reserved.</span>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="https://instagram.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="text-dark me-3" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com" className="text-dark" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
