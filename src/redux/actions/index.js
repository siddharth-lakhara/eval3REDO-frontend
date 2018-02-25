export const like = (author, booksId) => ({
  type: 'LIKE',
  payload: { author, booksId },
});


export const dislike = (author, booksId) => ({
  type: 'DISLIKE',
  payload: { author, booksId },
});

export const load = newBookStorage => ({
  type: 'LOAD',
  payload: newBookStorage,
});

export const save = () => ({ type: 'SAVE' });

export default {
  like,
  dislike,
  load,
  save,
};

