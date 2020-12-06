export default {
  getShowCart(state) {
    return state.showCart;
  },
  getCart(state) {
    return state.cart;
  },
  getDisableCart(state) {
    return state.disableCart;
  },
  cartContainsCustom(state) {
    const order_items = state.cart.order_items
    for(let i = 0; i < order_items.length; i++){
      if(order_items[i].product.product_type === "Custom"){
        return true;
      }
    }
    return false;
  }
};
