import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import CartItem from './components/CartItem';
import{ Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Shopping from './components/Shopping';
import Favorites from './components/Favorites';

export const AppContext = React.createContext({});

function App() {
  
  const [card, setCart] = useState([]);
  const [shopping, setshoppingCart] = useState([]);
  const [search, setsearchCart] = useState([]);
  const [favor, favoritesCart] = useState([]);



  useEffect(() => {
    async function axiosData(){
      const cardData = await axios.get('http://localhost:3001/catalog');
      const shoppingData = await axios.get('http://localhost:3001/shopping');
      const favoritesData = await axios.get('http://localhost:3001/favorites');

      setCart(cardData.data);
      setshoppingCart(shoppingData.data);
      favoritesCart(favoritesData.data);
        }
      axiosData();
  }, []) 

  const isAdded = (myId) =>{
    return shopping.some((objIsAdded) => objIsAdded.myId === myId)
  }

  const isAddedFav = (myId) =>{
    return favor.some((objIsAdded) => objIsAdded.myId === myId)
  }
  
  const deleteShop = (id) => {
    axios.delete(`http://localhost:3001/shopping/${id}`)
    setshoppingCart((over) => shopping.filter(item=> Number(item.id) !== Number(id)));
  }

  const favoritesShop = (id) => {
    axios.delete(`http://localhost:3001/favorites/${id}`)
    favoritesCart((over) => favor.filter(item=> Number(item.id) !== Number(id)));
  }

  const price = shopping.reduce((total, obj) => total + obj.price, 0);

  return (

<AppContext.Provider
value={{
  card,
  setCart,
  shopping,
  setshoppingCart,
  isAddedFav,
  favor,
  favoritesCart,
  search,
  setsearchCart,
  isAdded,
}}
>


    <>
    <Header/>
    <Routes>
      <Route
        path='/catalog'
        element={
          <CartItem item={card}
          shopping={shopping}
          setshoppingCart = {setshoppingCart}
          favoritesCart = {favoritesCart}
          favor = {favor}

          />
        }
      />
      <Route
        path='/shopping'
        element={
          <Shopping 
          shopping = {shopping}
          deleteShop = {deleteShop}
          price = {price} />
        }
      />
      <Route
        path='/favorites'
        element={
          <Favorites 
          favoritesShop = {favoritesShop}
          favor = {favor}
          />
        }
      />
      
    </Routes>
    
    </>
    </AppContext.Provider>

  );
}

export default App;
