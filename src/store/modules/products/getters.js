export default {
  getProducts(state) {
    return state.products;
  },
  getSignatureMeals(state) {
    return state.products.filter(
      product => product.product_type === "Signature"
    );
  },
  getRecipeStr: state => id => {
    const product = state.products.find(product => product.id === id);
    var recipesStr = "";
    for (var i = 0; i < product.recipes.length - 1; i++) {
      recipesStr += product.recipes[i].name + ", ";
    }
    recipesStr += "and " + product.recipes[i].name;
    return recipesStr;
  },
  getIngredientStr: state => id => {
    const product = state.products.find(product => product.id === id);
    var ingredientStr = "";
    for (var i = 0; i < product.ingredients.length - 1; i++) {
      ingredientStr += product.ingredients[i].name + ", ";
    }
    ingredientStr += product.ingredients[i].name;
    return ingredientStr;
  }
};
