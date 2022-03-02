import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendCartDataActionCreator,
  fetchCartDataActionCreator,
} from "./store/cartActionCreators";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.uiStore.notification);
  const isCartVisible = useSelector(state => state.uiStore.cartIsVisible);
  const cart = useSelector(state => state.cartStore);

  /* useEffect(() => {
    const updateCartServer = async () => {
      const cartBackendUrl = `${process.env.REACT_APP_BACKEND_URL}/cart.json`;

      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data.",
        })
      );

      const response = await fetch(cartBackendUrl, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    updateCartServer().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    });
  }, [cart]); */

  //This "useEffect" is necessary to work with the action creator.
  useEffect(() => {
    dispatch(fetchCartDataActionCreator());
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    console.log(cart);
    if (cart.changed) {
      dispatch(sendCartDataActionCreator(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
