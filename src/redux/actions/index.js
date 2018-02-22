export const like = (author, booksId) => ({
  type: 'LIKE',
  payload: { author, booksId },
});


export const dislike = (author, booksId) => ({
  type: 'DISLIKE',
  payload: { author, booksId },
});

export const load = newBooksStorage => ({
  type: 'LOAD',
  payload: newBooksStorage,
});

export default {
  like,
  dislike,
  load,
};

