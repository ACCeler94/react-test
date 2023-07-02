import shortid from "shortid";


const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

// selectors
export const getAllLists = ({ lists }) => lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

// actions
export const addList = payload => ({ type: ADD_LIST, payload });


// action creators
const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default listsReducer;