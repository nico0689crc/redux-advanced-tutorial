import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

const cartBackendUrl = `${process.env.REACT_APP_BACKEND_URL}/cart.json`;

export const fetchCartDataActionCreator = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(cartBackendUrl);

      if (!response.ok) {
        throw Error("Could not fetch cart data");
      }

      const data = await response.json();

      return data;
    };

    const cartData = await fetchData().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed.",
        })
      );
    });

    dispatch(
      cartActions.replaceCart({
        cart: {
          items: cartData.items || [],
          totalQuantity: 0,
        },
      })
    );
  };
};

//PLACE THE SYNC CODE INTO THUNK ACTIONS CREATORS
export const sendCartDataActionCreator = cart => {
  return async dispatch => {
    const sendRequest = async () => {
      const response = await fetch(cartBackendUrl, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    await sendRequest().catch(() => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    });

    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      })
    );
  };
};
