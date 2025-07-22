import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    {
      label: 'Academics',
      dropdown: [
        { path: '/academics/primary', label: 'Primary School' },
        { path: '/academics/middle', label: 'Middle School' },
        { path: '/academics/high', label: 'High School' },
      ]
    },
    { path: '/admissions', label: 'Admissions' },
    { path: '/activities', label: 'Activities' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/cbse-disclosure', label: 'CBSE Disclosure' },
  ];

  const mobileNavVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const mobileLinkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-light shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-neutral-dark' : 'text-white'}`}>SFS CBSE School</h1>
              <p className={`text-xs ${isScrolled ? 'text-neutral-gray' : 'text-blue-200'}`}>Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center cursor-pointer ${
                      isScrolled ? 'text-neutral-dark' : 'text-white'
                    } hover:text-primary-red`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </span>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                      >
                        {item.dropdown.map(subItem => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-neutral-dark hover:bg-neutral-light"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? `text-white`
                      : `${isScrolled ? 'text-neutral-dark' : 'text-white'} hover:text-primary-red`
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-red rounded-lg shadow-inner"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-neutral-dark' : 'text-white'} hover:bg-neutral-gray/20 transition-colors duration-300`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileNavVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-neutral-light shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.div key={item.label} variants={mobileLinkVariants}>
                  {item.dropdown ? (
                    <div>
                      <span className="block px-4 py-3 rounded-lg text-sm font-medium text-neutral-dark">
                        {item.label}
                      </span>
                      <div className="pl-4">
                        {item.dropdown.map(subItem => (
                           <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm font-medium text-neutral-gray hover:text-primary-red"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-white bg-primary-red'
                          : 'text-neutral-dark hover:text-white hover:bg-secondary-red'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}