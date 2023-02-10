import CountMeal from '../CountMeal.js';

// set document mockup
document.body.innerHTML = `<ul class="nav-menu">
<li class="nav-links">
  <a href="#" id="Seafood" data-name="Seafood" class="nav-link active">Seafood <span></span></a>
</li>
<li class="nav-links">
  <a href="#" data-name="Dessert" class="nav-link">Dessert</a>
</li>
<li class="nav-links">
  <a href="#" data-name="Vegan" class="nav-link">Vegan</a>
</li>
</ul>

<section id="meals" class="meals container">
  <div class="meal"></div>
  <div class="meal"></div>
  <div class="meal"></div>
  <div class="meal"></div>
  <div class="meal"></div>
</section>`;

// AAA
test('Test number of meal items:', () => {
  // Arrange
  const mealCounterElement = document.querySelector('.nav-links .active').firstElementChild;
  const numberOfMeals = document.querySelector('#meals').childElementCount;

  // act
  CountMeal();

  // assert
  expect(mealCounterElement.textContent).toBe(`(${numberOfMeals})`);
});