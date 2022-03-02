import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import "./CartItem.css";

const CartItem = props => {
  const { id, title, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        item: { id, title, quantity, totalPrice, price },
      })
    );
  };
  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItem({ id }));
  };

  return (
    <li className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${totalPrice.toFixed(2)}{" "}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
