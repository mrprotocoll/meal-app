const CountMeal = () => {
  const numberOfMeals = document.querySelector('#meals').childElementCount;
  document.querySelector('.nav-links .active').firstElementChild.textContent = `(${numberOfMeals})`;
};

export default CountMeal;