
const defaultState = {
  booksStorage: [],
  // booksStorage: {
  //   'J K Rowling': [{
  //     books_id: 10,
  //     Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)',
  //     rating: 4.45,
  //     like: 0,
  //   },
  //   {
  //     books_id: 20,
  //     Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)',
  //     rating: 4.38,
  //     like: 0,
  //   },
  //   {
  //     books_id: 30,
  //     Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)',
  //     rating: 4.54,
  //     like: 0,
  //   },
  //   {
  //     books_id: 40,
  //     Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)',
  //     rating: 4.53,
  //     like: 0,
  //   },
  //   {
  //     books_id: 50,
  //     Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)',
  //     rating: 4.47,
  //     like: 0,
  //   },
  //   {
  //     books_id: 60,
  //     Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)',
  //     rating: 4.54,
  //     like: 0,
  //   },
  //   {
  //     books_id: 70,
  //     Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)',
  //     rating: 4.62,
  //     like: 0,
  //   },
  //   ],
  //   'Sidney Sheldon': [{
  //     books_id: 80,
  //     Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
  //     rating: 4.02,
  //     like: 0,
  //   },
  //   {
  //     books_id: 100,
  //     Name: 'Tell Me Your Dreams',
  //     rating: 3.93,
  //     like: 0,
  //   },
  //   {
  //     books_id: 90,
  //     Name: 'Master of the Game',
  //     rating: 4.1,
  //     like: 0,
  //   },
  //   {
  //     books_id: 110,
  //     Name: 'The Other Side of Midnight (Midnight #1)',
  //     rating: 3.9,
  //     like: 0,
  //   },
  //   {
  //     books_id: 120,
  //     Name: 'Rage of Angels',
  //     rating: 3.92,
  //     like: 0,
  //   },
  //   ],
  // },
};

const loadBooks = (currentState, newBooksState) => {
  const newState = {
    booksStorage: newBooksState,
  };
  return newState;
};

const likeBook = (currentState, payload) => {
  const state = currentState;
  const bookId = payload.booksId;
  const { author } = payload;
  let bookToUpdate = {};
  let bookIndex = 0;

  for (let i = 0; i < state[author].length; i += 1) {
    if (state[author][i].books_id === bookId) {
      bookToUpdate = state[i];
      bookIndex = i;
      break;
    }
  }
  bookToUpdate.like = 1;
  state[author][bookIndex] = bookToUpdate;

  return {
    booksStorage: state,
  };
};

const dislikeBook = (currentState, payload) => {
  const state = currentState;
  const bookId = payload.booksId;
  const { author } = payload;
  let bookToUpdate = {};
  let bookIndex = 0;

  for (let i = 0; i < state[author].length; i += 1) {
    if (state[author][i].books_id === bookId) {
      bookToUpdate = state[i];
      bookIndex = i;
      break;
    }
  }
  bookToUpdate.like = 0;
  state[author][bookIndex] = bookToUpdate;

  return {
    booksStorage: state,
  };
};

const booksState = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'LOAD':
      return (loadBooks(state, actions.payload));
    case 'LIKE':
      return (likeBook(state, actions.payload));
    case 'DISLIKE':
      return (dislikeBook(state, actions.payload));
    default:
      return state;
  }
};

export default booksState;
