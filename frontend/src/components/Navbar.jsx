import { Link } from "react-router-dom";
import { useState } from "react";
import SearchModal from "./SearchModal";
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Student Manager</h1>
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-accent transition-colors duration-300"
            >
              All Students
            </Link>
          </li>
          <li>
            <Link
              to="/add"
              className="hover:text-accent transition-colors duration-300"
            >
              Add Student
            </Link>
          </li>
          <li>
            {/* Search Icon/Button */}
            <button
              onClick={() => setIsModalOpen(true)} // Open modal
              className="bg-secondary text-black px-4 py-2 rounded"
            >
              Search Student
            </button>

            {/* Search Modal */}
            {isModalOpen && (
              <SearchModal onClose={() => setIsModalOpen(false)} /> // Pass close handler
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
