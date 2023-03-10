const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case ADDITEM: {
      // Check product exist
      const exist = state.find(x => x.id === product.id);

      if (exist) {
        return state.map(x =>
          x.id === product.id ? {...x, qty: x.qty + 1} : x,
        );
      }
      return [...state, {...product, qty: 1}];
    }

    case REMOVEITEM: {
      const exist = state.find(x => x.id === product.id);

      if (exist) {
        // item exists, update quantity
        if (exist.qty === 1) {
          return state.filter(x => x.id !== exist1.id);
        } else {
          return state.map(x =>
            x.id === product.id ? {...x, qty: x.qty - 1} : x,
          );
        }
      }
      // item didn't exist, just return current state
      return state;
    }

    default:
      // No action to do, return current state
      return state;
  }
};

export default handleCart;
