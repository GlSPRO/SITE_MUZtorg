import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';


const Item = (props) => {

const context = React.useContext(AppContext);

const onClickAdd = () => {
  const {id, myId, name:name, price:price, count:count } = props;
  props.onPlus({id, myId, name, price, count});
}

const onClickAddFav = () => {
  const {id, myId, name:name, price:price, count:count } = props;
  props.onFav({id, myId, name, price, count});
}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Цена: {props.price}
        </Card.Text>
        <Card.Text>
          Количество: {props.count}
        </Card.Text>
        <Button 
        onClick={onClickAdd}>
          {
            context.isAdded(props.myId) ? 'Добавлен':'Добавить в корзину'
          }
        </Button>
        <Button 
        onClick={onClickAddFav}>
          {
            context.isAddedFav(props.myId) ? 'Добавлен в избранное':'Добавить в избранное'
          }
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item