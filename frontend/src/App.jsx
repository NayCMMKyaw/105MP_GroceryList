import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MyList from "./pages/MyList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route expect path="/" element={<Home />} />
          <Route expect path="/home" element={<Home />} />
          <Route expect path="/signup" element={<Signup />} />
          <Route expect path="/login" element={<Login />} />
          <Route expect path="/mylist" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;