import data from '../../data/data.json';
const initialState = data;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TRACK':
    return state;
  };
  return state;
}
