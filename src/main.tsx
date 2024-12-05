import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { Error } from "./pages/Error/Error.tsx";

import "./index.css";
import Home from "./pages/Home/Home.tsx";
import WorkDetail from "./pages/WorkDetail/WorkDetail.tsx";
import Gallery from "./pages/Gallery/Gallery.jsx";  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
