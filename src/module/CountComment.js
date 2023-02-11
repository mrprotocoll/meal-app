const CountComment = () => {
  const numberOfComments = document.querySelector('#comment-body').childElementCount;
  document.querySelector('#comment-count').textContent = `(${numberOfComments})`;
};

export default CountComment;