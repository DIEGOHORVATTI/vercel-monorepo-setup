import { useState, useEffect } from 'react';

export default function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('http://localhost:3000');

      if (!response.ok) {
        throw new Error('Failed to fetch message');
      }

      const data = await response.text();
      setMessage(data);
    };

    fetchMessage();
  }, []);

  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <h1>Backend Message:</h1>

      <h1>{message}</h1>
    </span>
  );
}
