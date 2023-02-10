const CountComment = () => {
  const numberOfComments = document.querySelector('#comment-body').childElementCount;
  const nav = document.querySelector('#comment-count');
  nav.textContent = `(${numberOfComments})`;
};

export default CountComment;