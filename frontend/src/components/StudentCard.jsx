const StudentCard = ({ student }) => {
    return (
      <div className="bg-secondary shadow-md rounded-lg p-4 text-primary">
        <h2 className="text-lg font-bold">{student.name}</h2>
        <p>Registration No: {student.registrationNumber}</p>
        <p>Department: {student.department}</p>
        <p>Year: {student.year}</p>
        <p>Gender: {student.gender === 'Male' ? 'Male' : 'Female'}</p>
      </div>
    );
  };
  
  export default StudentCard;
  