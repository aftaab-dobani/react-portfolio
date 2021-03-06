import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import AboutMe from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <AboutMe />
    <Portfolio />
    <Footer />
    </>
  );
  }

export default App;
