export default class Template {
    static meal = (meal) => `
    <div class="meal" data-id="${meal.idMeal}">
        <div class="meal-image">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="title">
            <h2>${meal.strMeal}</h2>
            <div class="likes"><span><i class="fa fa-heart"></i> 5 likes</span></div>
        </div>
        <div class="action">
            <button>Comments</button>
        </div>
    </div>`

    static meals = (data) => {
      let content = '';
      data.meals.forEach((meal) => {
        content += this.meal(meal);
      });
      return content;
    };
}