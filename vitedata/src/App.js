import logo from './logo.svg';
import './App.css';
import Homepage from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <About/>
    </div>
  );
}

export default App;
