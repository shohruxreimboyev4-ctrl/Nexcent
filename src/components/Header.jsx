import { Button } from "antd";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/Features" },
    { name: "Community", path: "/community" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <header className="top-0 left-0 right-0 bg-white shadow">
      <div className="max-w-[1280px] m-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <img
              src="/Logo.svg"
              alt="Nexcent Logo"
              draggable={false}
              className="select-none h-6"
            />
          </Link>

          <nav className="flex gap-6 items-center">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group relative inline-block transition-colors duration-300 hover:text-green-600"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              type="primary"
              size="large"
              className="flex items-center gap-2 !bg-green-600 !border-green-600 hover:!bg-green-700 px-6 rounded-lg"
            >
              Register Now
              <IoIosArrowRoundForward size={22} />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
