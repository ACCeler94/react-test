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

export const getAllLists = ({ lists }) => lists;

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getAllColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearch = payload => ({ type: 'UPDATE_SEARCH_QUERY', payload })


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;