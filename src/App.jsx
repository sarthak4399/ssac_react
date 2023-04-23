import "./App.css";

import Card from "./components/Card";
import { Exams } from "./components/Exams";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { News } from './components/News';
// import CountriesPage from "./components/countriesPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Exams />
      <div class="custom-shape-divider-bottom-1682237467">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
          </svg>
      </div>
      <News/>
      <div class="custom-shape-divider-top-1682238582">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
      <div className="gap"></div>
      <Home />
      <Card />

      {/* <CountriesPage/> */}
      <Footer />
    </div>
  );
}

export default App;
