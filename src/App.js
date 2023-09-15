import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./comonents/Home";
import Navabar from "./comonents/Navabar";
import Detail from "./comonents/Detail"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Navabar />
                <Home />
              </>
            }
          />
          <Route path="/detail" element={
            <>
              <Navabar/>
              <Detail/>
            </>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
