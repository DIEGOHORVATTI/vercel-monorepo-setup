import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/api/hello');

      if (!response.ok) {
        throw new Error('Failed to fetch message');
      }

      const data = await response.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return <h1>{message}</h1>;
}

export default App;
