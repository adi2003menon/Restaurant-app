import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import {
  Calendar,
  LogOut,
  Package,
  ShoppingCart,
  UserCircle,
  Menu,
  X,
} from "lucide-react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { navigate, user, setUser, axios, cartCount } =
    useContext(AppContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const logout = async () => {
    try {
      const { data } = await axios.post("/api/auth/logout");

      if (data.success) {
        setUser(null);
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-cyan-50 shadow-md sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-32" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Menus
            </Link>

            <Link
              to="/book-table"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Book Table
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 hover:bg-gray-100 rounded-lg"
            >
              <ShoppingCart size={22} />

              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount || 0}
              </span>
            </button>

            {/* Desktop Login/Profile */}
            <div className="hidden md:block">
              {user ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsProfileOpen(true)}
                  onMouseLeave={() => setIsProfileOpen(false)}
                >
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <UserCircle size={30} />
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg border">
                      <Link
                        to="/my-bookings"
                        className="flex items-center px-4 py-3 hover:bg-gray-100"
                      >
                        <Calendar size={18} className="mr-2" />
                        My Bookings
                      </Link>

                      <Link
                        to="/my-orders"
                        className="flex items-center px-4 py-3 hover:bg-gray-100"
                      >
                        <Package size={18} className="mr-2" />
                        My Orders
                      </Link>

                      <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50"
                      >
                        <LogOut size={18} className="mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              Home
            </Link>

            <Link
              to="/menu"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              Menus
            </Link>

            <Link
              to="/book-table"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              Book Table
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block"
            >
              Contact
            </Link>

            {user ? (
              <>
                <Link
                  to="/my-bookings"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  My Bookings
                </Link>

                <Link
                  to="/my-orders"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  My Orders
                </Link>

                <button
                  onClick={logout}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
                className="bg-orange-500 text-white px-5 py-2 rounded-lg"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;