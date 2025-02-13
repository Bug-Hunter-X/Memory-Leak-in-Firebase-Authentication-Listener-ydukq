import { useEffect } from 'react';
import { onAuthStateChanged, auth } from './firebase'; // Assuming you have this setup

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);

  // ... rest of the component
}