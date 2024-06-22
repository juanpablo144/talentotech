import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/page2";
import { Page3 } from "./components/page3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina1" element={<Page1 />} />
        <Route path="/pagina2" element={<Page2 />} />
        <Route path="/pagina3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
