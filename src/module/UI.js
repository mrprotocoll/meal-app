import CountComment from './CountComment.js';
import Involvement from './Involvement.js';
import Meal from './Meal.js';
import Template from './Template.js';

export default class UI {
    static meal = new Meal();

    static involvement = new Involvement();

    static displayMeals = async () => {
      const meals = await this.meal.getMeals();
      const likes = await this.involvement.getLikes();
      // display meals
      document.getElementById('meals').innerHTML = Template.meals(meals, likes);
    };

    static likeMeal = () => {
      const likebtn = document.querySelectorAll('.like');
      Array.from(likebtn).forEach((btn) => {
        btn.onclick = () => {
          const iD = btn.getAttribute('data-id');
          const value = Number(btn.getAttribute('data-likes')) + 1;
          this.involvement.addLike(iD).then(() => {
            btn.setAttribute('data-likes', value);
            btn.lastElementChild.lastElementChild.innerHTML = value;
          });
        };
      });
    };

    static addComment = (id) => {
      document.querySelector('#btn').onclick = (e) => {
        e.preventDefault();
        const username = document.getElementById('user').value;
        const comment = document.getElementById('message').value;
        if (username && comment) {
          const today = new Date();
          const data = {
            id,
            username,
            comment,
            creation_date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
          };
          this.involvement.addComment(data).then(() => {
            document.getElementById('comment-body').insertAdjacentHTML('beforeend', Template.commentCard(data));
            document.getElementById('form').reset();
            CountComment();
          });
        }
      };
    };

    static viewComments = async () => {
      const commentbtn = document.querySelectorAll('.comment-action');
      Array.from(commentbtn).forEach((btn) => {
        btn.onclick = async () => {
          const popupcontainer = document.getElementById('pop-up');
          const iD = btn.getAttribute('data-id');
          const getMeal = await this.meal.getMealByID(iD);
          const comments = await this.involvement.getComments(iD);

          // display meal details
          popupcontainer.innerHTML = Template.comment(getMeal.meals[0], comments);

          // close pop up on when close button is clicked
          document.querySelector('.close-btn').onclick = () => {
            popupcontainer.innerHTML = '';
          };

          // add comment on form submission
          this.addComment(iD);

          // display number of comments
          CountComment();
        };
      });
    };
}