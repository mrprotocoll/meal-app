import './style.css';
import Meal from './module/Meal.js';
import Template from './module/Template.js';

window.addEventListener('load', () => {
  const meal = new Meal();

  // meal container
  const mealsContainer = document.getElementById('meals');

  const getAllMeals = async () => {
    await meal.getMeals().then((meals) => {
      mealsContainer.innerHTML = Template.meals(meals);
    });
  };

  getAllMeals().then(() => {
    const popupcontainer = document.getElementById('pop-up');

    const commentbtn = document.querySelectorAll('.comment-action');
    Array.from(commentbtn).forEach((btn) => {
      btn.onclick = async () => {
        const iD = btn.getAttribute('data-id');
        await meal.getMealByID(iD).then((meal) => {
          popupcontainer.innerHTML = Template.comment(meal.meals[0]);
        });
        document.querySelector('.close-btn').onclick = () => {
          popupcontainer.innerHTML = '';
        };
      };
    });
  });
});
