export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_TRACK':
      return action.payload;
  };
  return state;
};
