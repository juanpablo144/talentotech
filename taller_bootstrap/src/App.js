import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tareas } from "./components/Tareas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tareas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
