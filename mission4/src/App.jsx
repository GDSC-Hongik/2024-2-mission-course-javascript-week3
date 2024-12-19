import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token === "mock-jwt-token-12345") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    setIsAuthenticated(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <ProtectedPage />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Login setAuth={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
