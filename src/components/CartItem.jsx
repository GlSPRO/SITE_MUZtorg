import React from 'react';
import Item from './Item';
import axios from 'axios';

const CartItem = (props) => {

    const onAdd = (obj) => {
      try{
        if (props.shopping.find(item => Number(item.id) ===  Number(obj.id))) {
          axios.delete(`http://localhost:3001/shopping/${obj.id}`);
          props.setshoppingCart((over)=> over.filter(item => Number(item.id) !== Number(obj.id)));
        }
        else {
          axios.post('http://localhost:3001/shopping', obj);
          props.setshoppingCart([...props.shopping, obj]);
        }
      }
      catch{ 
        alert('Error');
    };
  };

  const onAddF = (obj) => {
    try{
      if (props.favor.find(item => Number(item.id) ===  Number(obj.id))) {
        axios.delete(`http://localhost:3001/favorites/${obj.id}`);
        props.favoritesCart((over)=> over.filter(item => Number(item.id) !== Number(obj.id)));
      }
      else {
        axios.post('http://localhost:3001/favorites', obj);
        props.favoritesCart([...props.favor, obj]);
      }
    }
    catch{ 
      alert('Error');
  };
};

    return (
      <div className="catalog">
          {
              props.item.map(obj=>{
                  return(
                      <Item
                      id={obj.id}
                      myId={obj.myId}

                      name={obj.name}
                      price={obj.price}
                      count={obj.count}

                      onPlus={(cartObj) => onAdd(cartObj)}

                      onFav={(cartObj) => onAddF(cartObj)}
                      />
                  )

              })
          }
      </div>
    );
  }


export default CartItem;