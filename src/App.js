import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import Home from './components/main/Home/Home';
import LeftPanel from './components/main/LeftPanel/LeftPanel';

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
