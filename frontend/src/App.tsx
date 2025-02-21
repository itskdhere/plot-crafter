import { Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import AppPage from "./pages/AppPage";

const authPaths = ["auth", "signup", "signin"];

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {authPaths.map((path, index) => (
          <Route key={index} path={`/${path}`} element={<AuthPage />} />
        ))}
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
