import { useEffect, useState } from 'react';
import API from '../services/api'; // Adjust the path if necessary

const Test = () => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        await API.get('/'); // Adjust the endpoint to match your backend
        setIsConnected(true);
      } catch (err) {
        setIsConnected(false);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Backend Connection Test</h1>
      {isConnected === null ? (
        <p>Testing connection...</p>
      ) : isConnected ? (
        <p className="text-green-500">Backend is connected!</p>
      ) : (
        <p className="text-red-500">Failed to connect to the backend.</p>
      )}
    </div>
  );
};

export default Test;
