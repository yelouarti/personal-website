import './App.css';
import Header from './components/header/Index';
import Footer from "./components/footer/Index";
import Hero from "./components/hero/Index.jsx";

function App() {
  return (
    <div className="app">
      <Header />
        <Hero />
      <Footer />
    </div>
  );
}

export default App;
