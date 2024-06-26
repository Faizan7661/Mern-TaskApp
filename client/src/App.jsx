import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/mainPage"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
