// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";
import AppLayout from "./AppLayout";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
