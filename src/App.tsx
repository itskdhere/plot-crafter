// import { useState, useEffect, useRef, createContext } from "react"
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "./App.css";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
