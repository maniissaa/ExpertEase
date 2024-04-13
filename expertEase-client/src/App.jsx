import { Routes, Route } from "react-router-dom";
import Learn from "./Home/Learn";
import Businesses from './Buisness/Businesses';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/business" element={<Businesses />} />
      </Routes>
    </>
  );
}

export default App;
