import React, { useState, useRef, useEffect } from "react";
import { Fade as Hamburger } from "hamburger-react";
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownList,
  DropdownItem,
} from "./Dropdown";
import NavMenu from "./NavMenu";
import mockData from "../data/mockData.json";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const productItems = mockData.productDropdown;
  const resourceItems = mockData.resourceDropdown;

  function onButtonClick(action) {
    return () => {
      console.log("Button Click", action);
    };
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#53389E] z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/vite.svg"
              alt="logo svg"
              loading="lazy"
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-[#ffffff]">
              Untitled UI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-[#ffffff] hover:underline font-medium transition-colors"
            >
              Home
            </a>

            <Dropdown>
              <DropdownButton>Products</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  {productItems.map((item) => (
                    <DropdownItem key={item.id} to={`/product/${item.slug}`}>
                      {item.title}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContent>
            </Dropdown>

            <Dropdown>
              <DropdownButton>Resources</DropdownButton>
              <DropdownContent>
                <DropdownList>
                  {resourceItems.map((item) => (
                    <DropdownItem key={item.id} to={`/resource/${item.slug}`}>
                      {item.title}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContent>
            </Dropdown>

            <a
              href="#"
              className="text-[#ffffff] hover:underline font-medium transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Pricing
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onButtonClick("Log in")}
              className="px-4 py-2 text-[#ffffff]  hover:text-[#e6e6e6]  hover:cursor-pointer font-medium transition-colors"
            >
              Log in
            </button>
            <button
              onClick={onButtonClick("Sign up")}
              className="px-4 py-2 bg-[#7F56D9] text-white rounded-lg hover:bg-[#6D47C7] hover:cursor-pointer font-medium transition-colors"
              style={{ backgroundColor: "#7F56D9" }}
            >
              Sign up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden" ref={hamburgerRef}>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              size={24}
              color="#ffffff"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <NavMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        productItems={productItems}
        resourceItems={resourceItems}
        onButtonClick={onButtonClick}
        ref={menuRef}
      />

      {/* Spacer for fixed navbar
      <div className="h-20"></div> */}
    </>
  );
}
