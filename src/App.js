import './App.css';
import { darkTheme } from './utils/Themes';
import Navbar from './components/navbar/navbar';
import Body from './components/navbar/body/body';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
