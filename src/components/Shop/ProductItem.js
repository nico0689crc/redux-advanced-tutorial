import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = props => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({ item: { id, title, price, description } })
    );
  };

  return (
    <li className="item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="actions">
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
