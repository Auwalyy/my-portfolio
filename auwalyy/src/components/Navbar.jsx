import React, { useState } from 'react';

const Navbar = () => {
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/contact', name: 'Contact' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-7 bg-[#0F172A] text-white">
  {/* Logo */}
  <h1 className="text-xl font-bold">Auwalyy</h1>

  {/* Desktop Nav */}
  <nav className="hidden md:flex gap-6">
    {navLinks.map((item, index) => (
      <a
        key={index}
        href={item.path}
        className="hover:text-[#3B82F6] transition"
      >
        {item.name}
      </a>
    ))}
  </nav>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-2xl"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? '✖' : '☰'}
  </button>

  {/* Mobile Nav */}
  {isOpen && (
    <div className="absolute top-16 left-0 w-full bg-[#1E293B] flex flex-col items-center md:hidden py-4">
      {navLinks.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className="py-2 hover:text-[#3B82F6] transition"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </a>
      ))}
    </div>
  )}
</header>

  );
};

export default Navbar;
