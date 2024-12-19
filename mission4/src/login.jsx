import { useState } from "react";

const USERS = {
  testUser: {
    password: "password123",
    token: "mock-jwt-token-12345",
  },
};

function Login({ setAuth }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = USERS[userId];
    if (user && user.password === password) {
      setError("");
      localStorage.setItem("authToken", user.token); 
      setAuth(true); 
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
