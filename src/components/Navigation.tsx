import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ isDarkMode, toggleDarkMode }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      {/* Desktop Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-6 mx-auto">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 ${
                isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/backend" 
            className={({ isActive }) => 
              `text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 ${
                isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
              }`
            }
          >
            Backend Projects
          </NavLink>
          <NavLink 
            to="/fullstack" 
            className={({ isActive }) => 
              `text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105 ${
                isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
              }`
            }
          >
            Full Stack Projects
          </NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute left-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        <button 
          onClick={toggleDarkMode} 
          className="absolute right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
        >
          {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="pt-20 px-4 space-y-4">
          <NavLink 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => 
              `block py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/backend"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => 
              `block py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            Backend Projects
          </NavLink>
          <NavLink 
            to="/fullstack"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => 
              `block py-2 px-4 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`
            }
          >
            Full Stack Projects
          </NavLink>
        </div>
      </div>
      
      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}