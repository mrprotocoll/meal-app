export default class Meal {
  constructor() {
    this.baseURI = 'https://www.themealdb.com/api/json/v1/1/';
  }

  getMeals = async () => fetch(`${this.baseURI}filter.php?c=Seafood`).then((response) => response.json());

  getMealByID = async (id) => fetch(`${this.baseURI}lookup.php?i=${id}`).then((response) => response.json());
}