import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary text-secondary shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Student Manager</h1>
        <ul className="flex space-x-6">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
