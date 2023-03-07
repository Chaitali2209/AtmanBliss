import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useState } from "react";

function App() {
  const [toogleForm, setToogleForm] = useState("login");
  const handleToggleForm = (fromName) => {
    setToogleForm(fromName);
  };

  return (
    <Router>
      <Header handleToggleForm={handleToggleForm} toogleForm={toogleForm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path={`/${toogleForm}`}
          element={
            toogleForm === "login" ? (
              <Login handleToggleForm={handleToggleForm} />
            ) : (
              <SignUp handleToggleForm={handleToggleForm} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
