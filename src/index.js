import './style.css';
import Meal from './module/Meal.js';
import Template from './module/Template.js';
import Involvement from './module/Involvement.js';

window.addEventListener('load', () => {
  const meal = new Meal();
  const involvement = new Involvement();
  // meal container
  const mealsContainer = document.getElementById('meals');

  const getAllMeals = async () => {
    const meals = await meal.getMeals();
    const likes = await involvement.getLikes();
    mealsContainer.innerHTML = Template.meals(meals, likes);
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
        // close pop up
        document.querySelector('.close-btn').onclick = () => {
          popupcontainer.innerHTML = '';
        };
      };
    });
  });
});
