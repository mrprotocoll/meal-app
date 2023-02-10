export default class Template {
    static meal = (meal, likes) => `
    <div class="meal" data-id="${meal.idMeal}">
        <div class="meal-image">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="meal-body">
          <div class="title">
              <h2>${meal.strMeal}</h2>
          </div>
          <div class="action">
              <button class="comment-action button" data-id="${meal.idMeal}">Comments</button>
              <button data-id="${meal.idMeal}" data-likes="${likes}" class="like"><span><i class="fa fa-heart"></i> <span class="num-of-likes">${likes}</span> likes</span></button>
          </div>
        </div>
    </div>`

    static meals = (data, likes) => {
      let content = '';
      data.meals.forEach((meal) => {
        let like = likes.filter((like) => like.item_id === meal.idMeal);
        like = (like.length > 0) ? like[0].likes : 0;
        content += this.meal(meal, like);
      });
      return content;
    };

    static getIngredients = (meal) => {
      let content = '';
      for (let x = 1; x <= 10; x += 1) {
        content += `<span>${meal[`strIngredient${x}`]}</span>`;
      }
      return content;
    }

    static commentCard = (comment) => `<li>Message: ${comment.comment}
    <small>Name: ${comment.username}</small>
    <small>Date: ${comment.creation_date}</small></li>`;

    static getComments = (comments) => {
      let content = '';
      if (comments.length > 0) {
        comments.forEach((comment) => {
          content += this.commentCard(comment);
        });
      }
      return content;
    }

    static comment = (meal, comments) => `<section class="com-section">
        <div class="comment-section">
          <div class="image">
            <img
              src="${meal.strMealThumb}"
              alt="${meal.strMeal}"
            />
            <div class="close-btn">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
          </div>
          <div class="food-name">
            <h2>${meal.strMeal}</h2>
          </div>
          <div class="food-recipe">
            <h3>Ingredients</h3>
            <div class="ingredients">
             ${this.getIngredients(meal)}
            </div>
          </div>
          <div class="description">
            <p>${meal.strInstructions}</p>
          </div>
          <div class="comments">
            <h3>Comments<span id="comment-count">5</span></h3>
            <ul id="comment-body">
              ${this.getComments(comments)}
            </ul>
          </div>

          <form class="form" id="form">
            <div class="add-comment">Add a comment</div>
            <input id="user" type="text" placeholder="Your name " />
            <textarea id="message" placeholder="Your insights" rows="5" cols="20"></textarea>
            <button type="submit" class="btn" id="btn">Comments</button>
          </form>
        </div>
      </section>`;
}