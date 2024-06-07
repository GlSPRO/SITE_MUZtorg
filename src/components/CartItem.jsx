import React from 'react';
import Item from './Item';

const CartItem = (props) => {
  return (
    <div className="Strings">
        {
            props.item.map(obj=>{
                return(
                    <Item
                    id={obj.id}
                    key={obj.id}

                    name={obj.name}
                    price={obj.price}
                    count={obj.count}
                    />
                )

            })
        }
    </div>
  );
}

export default CartItem;