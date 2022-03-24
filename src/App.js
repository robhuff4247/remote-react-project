import './style.css';
import { React } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Details1 from './Details1';
import Details2 from './Details2';
import Details3 from './Details3';
import Login from "./Login";
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="details1" element={<Details1 />} />
          <Route path="details2" element={<Details2 />} />
          <Route path="details3" element={<Details3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
