import "./App.css";
import Card from "./components/Card";
import { Exams } from "./components/Exams";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { News } from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Exams />
      <News/>
      <div className="gap"></div>
      <Home />
      <Card />
      
      <Footer />
    </div>
  );
}

export default App;
