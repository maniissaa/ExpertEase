import { Routes, Route } from "react-router-dom";
import Learn from "./Home/Learn";
import Businesses from "./Buisness/Businesses";
function App() {
  return (
    <>
      <div className=" dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/business" element={<Businesses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
