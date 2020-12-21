export default {
  toggleShowCart(state) {
    state.showCart = !state.showCart;
  },
  setCart(state, payload) {
    state.cart = payload;
  },
  toggleDisableCart(state) {
    state.disableCart = !state.disableCart;
  },
  setShowCart(state, payload) {
    state.showCart = payload;
  }
};
