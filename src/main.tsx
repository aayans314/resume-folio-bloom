import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force dark theme across the site for a focused, dark tone
document.documentElement.classList.add("dark");

createRoot(document.getElementById("root")!).render(
    <App />);
