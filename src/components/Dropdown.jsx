import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router";

export const DropdownContext = React.createContext({
  open: false,
  setOpen: () => {},
});

export function Dropdown({ children }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function DropdownButton({ children }) {
  const { open, setOpen } = useContext(DropdownContext);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center space-x-1 px-3 py-2 text-[#ffffff] hover:cursor-context-menu font-medium transition-colors"
    >
      <span>{children}</span>
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${
          open ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export function DropdownContent({ children }) {
  const { open } = useContext(DropdownContext);

  return (
    <div
      className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 z-50 ${
        open
          ? "opacity-100 visible transform translate-y-0"
          : "opacity-0 invisible transform -translate-y-2"
      }`}
    >
      {children}
    </div>
  );
}

export function DropdownList({ children }) {
  return <ul className="py-2">{children}</ul>;
}

export function DropdownItem({ children, to, handleClick }) {
  const { setOpen } = useContext(DropdownContext);

  const onClick = (e) => {
    if (handleClick) {
      handleClick(e);
    }
    setOpen(false);
  };

  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
