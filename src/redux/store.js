import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';



const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, action.payload] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, action.payload] };
    case 'UPDATE_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    default:
      return state;
  }
};


//selectors
export const getFilteredCards = ({ cards, searchQuery }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchQuery));

export const getAllColumns = ({ columns }) => columns


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;