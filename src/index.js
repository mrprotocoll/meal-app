import './style.css';
import Meal from './module/Meal.js';
import Template from './module/Template.js';
import Involvement from './module/Involvement.js';
import CountMeal from './module/CountMeal.js';
import CountComment from './module/CountComment.js';

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

  const likeMeal = () => {
    const likebtn = document.querySelectorAll('.like');
    Array.from(likebtn).forEach((btn) => {
      btn.onclick = () => {
        const iD = btn.getAttribute('data-id');
        const value = Number(btn.getAttribute('data-likes')) + 1;
        involvement.addLike(iD).then(() => {
          btn.setAttribute('data-likes', value);
          btn.lastElementChild.lastElementChild.innerHTML = value;
        });
      };
    });
  };

  const addComment = (id) => {
    document.querySelector('#btn').onclick = (e) => {
      e.preventDefault();
      const username = document.getElementById('user').value;
      const message = document.getElementById('message').value;
      if (username && message) {
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const comment = {
          id,
          username,
          comment: message,
          creation_date: date,
        };
        involvement.addComment(comment).then(() => {
          document.getElementById('comment-body').insertAdjacentHTML('beforeend', Template.commentCard(comment));
          document.getElementById('form').reset();
          CountComment();
        });
      }
    };
  };

  const viewComments = async () => {
    const commentbtn = document.querySelectorAll('.comment-action');
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

        addComment(iD);
        CountComment();
      };
    });
  };

  getAllMeals().then(() => {
    // count meals
    CountMeal();

    // view comments
    viewComments();

    // like meal
    likeMeal();
  });
});
