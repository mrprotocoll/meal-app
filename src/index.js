import './style.css';
import Meal from './module/Meal.js';
import Template from "./module/Template.js";

window.addEventListener('load', () => {
  const meal = new Meal();

  // meal container
  const mealsContainer = document.getElementById('meals');

  const getAllMeals = () => {
    meal.getMeals().then((meals) => {
        mealsContainer.innerHTML = Template.meals(meals);
    });
  };

  getAllMeals()
  
});