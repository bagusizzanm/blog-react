import { LogOut, Menu, UserRoundCog } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const avatarRef = useRef();

  // Close avatar dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed bg-white top-0 left-0 right-0 z-50 p-4 md:px-6 lg:px-12 xl:px-24 flex items-center justify-between shadow">
      {/* Logo & Navigation */}
      <div className="flex items-center gap-8">
        <span className="font-bold text-xl text-black flex items-center gap-2">
          <Link to="/" className="text-2xl text-black">
            Blogger.com
          </Link>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-800 font-medium">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Technology</li>
          <li className="hover:text-black cursor-pointer">Science</li>
          <li className="hover:text-black cursor-pointer">Reviews</li>
          <li className="hover:text-black cursor-pointer">Guides</li>
        </ul>
      </div>

      {/* Right side: Search, Menu, Avatar */}
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full w-[180px] md:w-[250px]">
          <Search size={16} className="text-slate-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-full text-sm text-slate-700"
          />
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-slate-100 p-2 rounded-full md:hidden">
          <Menu size={18} />
        </button>

        {/* Avatar */}
        {/* Avatar Dropdown */}
        <div className="relative" ref={avatarRef}>
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            onClick={() => setAvatarOpen((prev) => !prev)}
          />

          <AnimatePresence>
            {avatarOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-60 bg-white border rounded-md shadow-lg z-50">
                <ul className="py-1 text-sm text-slate-700">
                  <li className="flex px-4 py-2 gap-x-5 text-blue-500 hover:bg-blue-100 cursor-pointer">
                    <UserRoundCog size={16} />
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="flex gap-x-5 text-red-500 px-4 py-2 hover:bg-red-100 cursor-pointer">
                    <LogOut size={16} />
                    <Link to="#">Logout</Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-full left-0 w-full bg-white shadow-md border-t z-20 md:hidden">
          <ul className="flex flex-col p-4 gap-3 text-sm font-medium text-slate-800">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Technology</li>
            <li className="hover:text-black cursor-pointer">Science</li>
            <li className="hover:text-black cursor-pointer">Reviews</li>
            <li className="hover:text-black cursor-pointer">Guides</li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
