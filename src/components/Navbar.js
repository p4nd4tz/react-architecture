import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";

const headers = [
  { name: "About Us", link: "about" },
  { name: "Services", link: "services" },
  { name: "Our Projects", link: "projects" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="">
        <nav className="container mx-auto py-2">
          <div className="flex items-center justify-between font-semibold text-lg tracking-wider leading-loose text-gray-800">
            <div className="font-bold text-xl">
              <Link to={"/"} className="">
                Build X
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-10">
                {headers.map((header) => (
                  <li key={header.name}>
                    <Link to={header.link} className="">
                      {header.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={"/contact"} className="">
                    <button className="bg-gray-800 text-white p-6 py-4 rounded-2xl text-lg">
                      Contact Us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              showMenu
                ? "mobile-menu block md:hidden"
                : "mobile-menu hidden md:hidden"
            }
          >
            <ul className="mt-4 space-y-4">
              {headers.map((header) => (
                <li key={header.name}>
                  <Link to={header.link} className="block px-4 py-2 rounded">
                    {header.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={"/contact"}
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="py-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Navbar;