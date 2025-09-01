import React, { forwardRef, useState } from "react";
import { Link } from "react-router";

const NavMenu = forwardRef(
  ({ isOpen, onClose, productItems, resourceItems, onButtonClick }, ref) => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
      setExpandedSection(expandedSection === section ? null : section);
    };

    const handleItemClick = () => {
      onClose();
    };

    return (
      <div
        className={`fixed top-20 left-0 right-0 bg-white border-t border-gray-200  transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        ref={ref}
      >
        <div className="px-6 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Home Link */}
          <div className="mb-4">
            <Link
              to="/"
              onClick={handleItemClick}
              className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-medium  border-gray-100"
            >
              Home
            </Link>
          </div>

          {/* Products Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection("products")}
              className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 font-medium  border-gray-100"
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedSection === "products" ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedSection === "products"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-2 pb-4 space-y-2">
                {productItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.slug}`}
                    onClick={handleItemClick}
                    className="block w-full text-left py-2 text-sm text-gray-600 shadow-md hover:text-gray-900 hover:bg-gray-50 rounded px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection("resources")}
              className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900 font-medium  border-gray-100"
            >
              <span>Resources</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedSection === "resources" ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedSection === "resources"
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-2 pb-4 space-y-2">
                {resourceItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/resource/${item.slug}`}
                    onClick={handleItemClick}
                    className="block w-full text-left py-2 text-sm text-gray-600 shadow-md  hover:text-gray-900 hover:bg-gray-50 rounded px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Link */}
          <div className="mb-6">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleItemClick();
              }}
              className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-medium border-gray-100"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-3 pt-4  border-gray-200">
            <button
              onClick={() => {
                onButtonClick("Log in")();
                handleItemClick();
              }}
              className="w-full py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-colors border border-gray-300"
            >
              Log in
            </button>
            <button
              onClick={() => {
                onButtonClick("Sign up")();
                handleItemClick();
              }}
              className="w-full py-3 px-4 bg-[#7F56D9] text-white rounded-lg hover:bg-[#6D47C7] font-medium transition-colors"
              style={{ backgroundColor: "#7F56D9" }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
);

NavMenu.displayName = "NavMenu";

export default NavMenu;
