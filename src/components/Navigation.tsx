import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navigation({ isDarkMode, toggleDarkMode }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-6 mx-auto">
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
        <button 
          onClick={toggleDarkMode} 
          className="absolute right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
        >
          {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
        </button>
      </div>
    </nav>
  );
}