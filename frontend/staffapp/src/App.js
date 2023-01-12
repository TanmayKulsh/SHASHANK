import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/register" element={<Register></Register>}></Route> 
        </Routes>
      </div>

    </div>
  );
}

export default App;
