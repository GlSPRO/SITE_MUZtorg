import React from 'react';
import Item from './Item';
import axios from 'axios';

const CartItem = (props) => {
  const onAdd = async (obj) => {
    try {
      if (props.shopping.find(item => Number(item.id) === Number(obj.id))) {
        await axios.delete(`http://localhost:3001/shopping/${obj.id}`);
        props.setshoppingCart(over => over.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        await axios.post('http://localhost:3001/shopping', obj);
        props.setshoppingCart([...props.shopping, obj]);
      }
    } catch (error) {
      alert('Error');
    }
  };

  const onAddF = async (obj) => {
    try {
      if (props.favor.find(item => Number(item.id) === Number(obj.id))) {
        await axios.delete(`http://localhost:3001/favorites/${obj.id}`);
        props.favoritesCart(over => over.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        await axios.post('http://localhost:3001/favorites', obj);
        props.favoritesCart([...props.favor, obj]);
      }
    } catch (error) {
      alert('Error');
    }
  };

  const onSearch = (event) => {
    props.setSearch(event.target.value);
  };

  return (
    <div className="catalog">
      <div>
        <input onChange={onSearch} placeholder="Поиск" />
      </div>
      {
        props.item
          .filter(item =>
            typeof item.name === 'string' &&
            item.name.toLowerCase().includes((props.search || '').toString().toLowerCase())
          )
          .map(obj => (
            <Item
              key={obj.id} // добавлено key для уникальности элементов
              id={obj.id}
              myId={obj.myId}
              name={obj.name}
              price={obj.price}
              count={obj.count}
              onPlus={(cartObj) => onAdd(cartObj)}
              onFav={(cartObj) => onAddF(cartObj)}
            />
          ))
      }
    </div>
  );
};

export default CartItem;
