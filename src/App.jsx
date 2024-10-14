import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./conponents/HomePage/HomePage";
import Header from "./conponents/Header/MainHeader/MainHeader";
import Contact from "./conponents/Header/Contact/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>

        <Route index element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
