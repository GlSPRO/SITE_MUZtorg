import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import CartItem from './components/CartItem';
import{ Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios.get('http://localhost:3001/Strings')
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error))
    }
    getData();
  }, [])

  return (
    <>
    <Header/>
    <Routes>
      <Route
        path='/'
        element={
          <CartItem item={data}/>
        }
      />
      <Route
        path='/'
        element={
          <Home />
        }
      />
    </Routes>
    
    </>
  );
}

export default App;
