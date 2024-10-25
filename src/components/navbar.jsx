import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";

const Navbar = () => {
  const [mobileDrawerOpen, setDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
              <span className="text-xl tracking-tight">React</span>
            </div>

            <ul className="hidden lg:flex ml-20 space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center space-x-8 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md py-2 px-3"
              >
                Create an account
              </a>
            </div>

            <div className="lg:hidden md:flex flex:col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="fixed lg:hidden right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6 mt-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 border rounded-md py-2 px-3"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
