export default {
  getProducts(state) {
    return state.products;
  },
  getSignatureMeals(state) {
    return state.products.filter(
      (product) => product.product_type === "Signature"
    );
  },
  getSignatureMealsTags(state) {
    const allTags = state.products.map((product) => product.tags);
    const singleArrayTagObjects = [].concat.apply([], allTags);
    const singleArrayTags = singleArrayTagObjects.map((tag) => tag.name);
    let uniqueTags = [...new Set(singleArrayTags)];
    return uniqueTags
  },
  getJustProteinMeals(state) {
    return state.products.filter(
      (product) => product.product_type === "Just Protein"
    );
  },
  getRecipeStr: (state) => (id) => {
    const product = state.products.find((product) => product.id === id);
    if (product === undefined) {
      return;
    }
    var recipesStr = "";
    for (var i = 0; i < product.recipes.length - 1; i++) {
      recipesStr += product.recipes[i].name + ", ";
    }
    recipesStr += "and " + product.recipes[i].name;
    return recipesStr;
  },
  getIngredientStr: (state) => (id) => {
    const product = state.products.find((product) => product.id === id);
    var ingredientStr = "";
    for (var i = 0; i < product.ingredients.length - 1; i++) {
      ingredientStr += product.ingredients[i].name + ", ";
    }
    ingredientStr += product.ingredients[i].name;
    return ingredientStr;
  },
};
