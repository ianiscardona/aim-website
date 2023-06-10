import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/home/navbar";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative w-screen bg-slate-400">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
