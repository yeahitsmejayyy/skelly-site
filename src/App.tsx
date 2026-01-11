import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/routes/home";
import Privacy from "@/routes/privacy";
import Terms from "@/routes/terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}
