import './App.css';
import {Hero, Introduction, Features, Screenshots, Download, Rating, Contact, Footer} from './sections/index'

function App() {
  return (
    <div className="App">
      <Hero />
      <Introduction />
      <Features />
      <Screenshots />
      <Download />
      <Rating />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
