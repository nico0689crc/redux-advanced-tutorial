import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import "./CartButton.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartItemsQuantity = useSelector(state => state.cartStore.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className="button" onClick={toggleCartHandler}>
      <span>Click to Toggle My Cart</span>
      <span className="badge">{cartItemsQuantity}</span>
    </button>
  );
};

export default CartButton;
