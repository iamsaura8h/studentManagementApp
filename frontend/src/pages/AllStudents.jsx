import { useEffect, useState } from 'react';
import API from '../services/api';
import StudentCard from '../components/StudentCard';

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from backend
    const fetchStudents = async () => {
      try {
        const response = await API.get('/');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">All Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.registrationNumber} student={student} />
        ))}
      </div>
    </div>
  );
};

export default AllStudents;
