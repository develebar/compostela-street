import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Program from "./pages/Program";
import DisciplinePage from "./pages/DisciplinePage";
import AreaPage from "./pages/AreaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/programa" element={<Program />} />

        <Route
          path="/disciplinas/:slug"
          element={<DisciplinePage />}
        />

        <Route
          path="/areas/:slug"
          element={<AreaPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;