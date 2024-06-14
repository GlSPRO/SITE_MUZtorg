import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = ({ obj, onDelete }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{obj.name}</Card.Title>
      <Card.Text>
        Цена {obj.price} руб.
      </Card.Text>
      <Card.Text>
        Количество {obj.count} шт.
      </Card.Text>
      <Button onClick={() => onDelete(obj.id)}>Удалить из корзины</Button>
    </Card.Body>
  </Card>
  
);

const Shopping = (props) => (
  <div>
    <div>
      <h2>Добро пожаловать в корзину!</h2>
    </div>

    {props.shopping.length > 0 ? (
      <div>
        {props.shopping.map((obj) => (
          <Shop key={obj.id} obj={obj} onDelete={props.deleteShop} />
        ))}

      </div>
    ) : (
      <h2>Корзина пуста</h2>
    )}

    <div>
      <p>Итого: {props.price} руб.</p>
      <p>Количество товаров: {props.shopping.length} шт.</p>
    </div>
  </div>
);

export default Shopping;