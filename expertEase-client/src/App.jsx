import { Routes, Route } from "react-router-dom";
import Learn from "./Home/Learn";
import Businesses from "./Buisness/Businesses";
import SignUp from './components/SignUp';
function App() {
  return (
    <>
      <div className=" dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Learn />} />
          <Route path="/business" element={<Businesses />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
