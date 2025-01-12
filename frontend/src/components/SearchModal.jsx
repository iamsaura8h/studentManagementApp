import { useState } from "react";
import API from "../services/api";

const SearchModal = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle search input
  const handleSearch = async (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    if (searchValue.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      // Call backend API to search students by name
      const response = await API.get(`/searchByName/${searchValue}`);
      setResults(response.data.students);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Search Students</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✖
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        {/* Search Results */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-2">
            {results.length > 0 ? (
              results.map((student) => (
                <li key={student.registrationNumber} className="p-2 border-b">
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-sm text-gray-500">
                    {student.registrationNumber} - {student.department}
                  </p>
                </li>
              ))
            ) : (
              query && <p>No results found</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
