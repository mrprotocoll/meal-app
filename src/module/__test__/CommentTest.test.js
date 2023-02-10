import CountComment from '../CountComment.js';

// set document mockup
document.body.innerHTML = `<div class="comments">
<h3>Comments<span id="comment-count"></span></h3>
<ul id="comment-body">
<li>comment</li>
<li>comment</li>
<li>comment</li>
<li>comment</li>
<li>comment</li>
</ul>
</div>`;

// AAA
test('Test number of comments:', () => {
// Arrange
  const commentCounterElement = document.querySelector('#comment-count');
  const numberOfComments = document.querySelector('#comment-body').childElementCount;

  CountComment();

  expect(commentCounterElement.textContent).toBe(`(${numberOfComments})`);
});