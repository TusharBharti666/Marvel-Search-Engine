// Import components
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import About from "./components/About";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";

// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar logo={<Logo text={"Marvel"} />}>
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"About"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


// wrap the code inside the router in order to use routers functionality
// put all the things outside the routes which you want to display on all the pages , i.e: navbar
// element is the component you want to show in that route

