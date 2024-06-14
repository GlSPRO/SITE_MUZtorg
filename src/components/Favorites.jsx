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
      <Button onClick={() => onDelete(obj.id)}>Удалить из избранного</Button>
    </Card.Body>
  </Card>
  
);

const Favorites = (props) => (
  <div>
    <div>
      <h2>Избранные товары</h2>
    </div>

    {props.favor.length > 0 ? (
      <div>
        {props.favor.map((obj) => (
          <Shop key={obj.id} obj={obj} onDelete={props.favoritesShop} />
        ))}

      </div>
    ) : (
      <h2>Нет избранного</h2>
    )}
  </div>
);

export default Favorites;