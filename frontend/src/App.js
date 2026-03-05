import { Route, Router, Routes } from 'react-router';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import Playground from './pages/Playground';


function App() {
  return (
    <div className="App mt-[100px]">
      <header className="App-header">
      </header>
      <NavBar/>
      <Routes>
        <Route element={<Playground/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
