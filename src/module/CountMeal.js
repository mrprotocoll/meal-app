const CountMeal = () => {
  const numberOfMeals = document.querySelector('#meals').childElementCount;
  const nav = document.querySelector('.nav-links .active').firstElementChild;
  nav.textContent = `(${numberOfMeals})`;
};

export default CountMeal;