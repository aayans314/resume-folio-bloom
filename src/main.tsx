import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(  <BrowserRouter basename="/resume-folio-bloom">
    <App />
  </BrowserRouter>);
