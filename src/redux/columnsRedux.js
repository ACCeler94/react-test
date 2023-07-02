const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//selectors
export const getAllColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);

// actions
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}

export default columnsReducer;