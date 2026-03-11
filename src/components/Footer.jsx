import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#7c6aea]  py-12 px-6 dark:bg-black  dark:bg-black dark:text-white">
        <div className="max-w-6xl mx-auto">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Name */}
       

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p>📍 Bangalore, India</p>
          <p>📧 afshanazaman1800@gmail.com</p>
          <p>📞 7002903928</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-2xl text-white">
          <a href="https://github.com/Afshana77" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/afshana-zaman-786887193/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6   text-sm">
        © {new Date().getFullYear()} Afshana Zaman. All rights reserved.
      </div>
      </div>
    </footer>
  );
}