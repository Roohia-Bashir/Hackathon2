'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, CheckSquare, LogOut, User } from 'lucide-react';
import { isAuthenticated, getUserName, logout } from '@/lib/api';

const Header = () => {
  const pathname = usePathname();
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      if (isAuthenticated()) {
        const name = getUserName();
        setUserName(name);
      } else {
        setUserName(null);
      }
      setLoading(false);
    };

    checkAuth();

    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    logout();
    setUserName(null);
  };

  const navLinks = [
    { href: '/', label: 'Home', show: true },
    { href: '/chat', label: 'Chat', show: !!userName },
    { href: '/tasks', label: 'My Tasks', show: !!userName },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
              <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent hidden xs:inline">
              TaskFlow
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(
              (link) =>
                link.show && (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                    } px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all`}
                  >
                    {link.label}
                  </Link>
                )
            )}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-3">
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            ) : userName ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg border border-blue-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-gray-800 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-xs text-gray-500">Welcome back</p>
                    <p className="text-sm font-semibold text-gray-900 truncate max-w-[140px]">
                      {userName}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-gray-800 rounded-lg hover:shadow-lg hover:scale-105 transition"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mb-4">
              {navLinks.map(
                (link) =>
                  link.show && (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`${
                        pathname === link.href
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      } px-4 py-3 rounded-lg text-sm font-medium`}
                    >
                      {link.label}
                    </Link>
                  )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
