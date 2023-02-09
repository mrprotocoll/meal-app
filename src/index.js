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

  const likeMeal = async (likebtn) => {
    Array.from(likebtn).forEach((btn) => {
      btn.onclick = async () => {
        const iD = btn.getAttribute('data-id');
        const value = Number(btn.getAttribute('data-likes')) + 1;
        involvement.addLike(iD).then(() => {
          btn.setAttribute('data-likes', value);
          btn.lastElementChild.lastElementChild.innerHTML = value;
        });
      };
    });
  };

  const viewComments = async (commentbtn) => {
    Array.from(commentbtn).forEach((btn) => {
      btn.onclick = async () => {
        const popupcontainer = document.getElementById('pop-up');
        const iD = btn.getAttribute('data-id');
        const getMeal = await meal.getMealByID(iD);
        const comments = await involvement.getComments(iD);
        popupcontainer.innerHTML = Template.comment(getMeal.meals[0], comments);
        // close pop up
        document.querySelector('.close-btn').onclick = () => {
          popupcontainer.innerHTML = '';
        };
      };
    });
  };

  const renderDOM = () => {
    getAllMeals().then(() => {
      const commentbtn = document.querySelectorAll('.comment-action');
      const likebtn = document.querySelectorAll('.like');
      // view comments
      viewComments(commentbtn);
      // like meal
      likeMeal(likebtn);
    });
  };

  renderDOM();
});
