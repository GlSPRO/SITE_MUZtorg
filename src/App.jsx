import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import CartItem from './components/CartItem';
import{ Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';



function App() {
  
  const [card, setCart] = useState([]);

  useEffect(() => {
    async function axiosData(){
      const cardData = await axios.get('http://localhost:3001/Strings');
      setCart(cardData.data);
        }
      axiosData();
  }, []) 
  

  return (
    <>
    <Header/>
    <Routes>
      <Route
        path='/'
        element={
          <CartItem item={card}/>
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
