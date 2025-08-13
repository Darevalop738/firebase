// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <LanguageSwitcher /> {/* Siempre visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
