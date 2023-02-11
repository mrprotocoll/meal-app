import './style.css';
import CountMeal from './module/CountMeal.js';
import UI from './module/UI.js';

window.addEventListener('load', () => {
  UI.displayMeals().then(() => {
    // display number of meals
    CountMeal();

    // view meal comments on click
    UI.viewComments();

    // like meal on click
    UI.likeMeal();
  });
});
