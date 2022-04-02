import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import LeftPanel from './components/main/LeftPanel/LeftPanel';
import Home from './components/main/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <LeftPanel />
        <Home />
      </div>
    </div>
  );
}

export default App;
