import Nav from "./components/Layout/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-[#0b1220]">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
