import Nav from "./components/Layout/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
