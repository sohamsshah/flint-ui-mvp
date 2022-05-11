import { Home, Point, RothC } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/point" element={<Point />} />
          <Route path="/rothc" element={<RothC />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
