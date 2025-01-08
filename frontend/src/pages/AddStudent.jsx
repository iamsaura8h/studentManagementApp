import { useState } from "react";
import API from "../services/api"; 

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    department: "",
    year: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/add", formData); // POST request to backend
      setMessage("Student added successfully!");
      setFormData({ name: "", registrationNumber: "", department: "", year: "", gender: "" });
    } catch (error) {
      setMessage("Error adding student. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>  
    <h1 className="text-2xl font-bold text-primary mb-4">Add Student</h1>
    <div className="container flex flex-col justify-center items-center  mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-3 flex flex-col w-1/3 bg-zinc-100 p-6 shadow-lg rounded-lg">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input rounded-lg p-1"
          required
        />
        <input
          type="text"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="Registration Number"
          className="input rounded-lg p-1  "
          required
        />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Department"
          className="input rounded-lg p-1 "
          required
        />
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder=" Year"
          className="input rounded-lg p-1"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="input rounded-lg p-1 "
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit" className="bg-slate-300 px-3 py-2 rounded-lg w-2/3">
          Add Student
        </button>
      </form>
      <br />
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
    </>
  );
};

export default AddStudent;
