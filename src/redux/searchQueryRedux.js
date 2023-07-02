
const createActionName = actionName => `app/searchQuery/${actionName}`;
const UPDATE_SEARCH_QUERY = createActionName('UPDATE_SEARCH_QUERY');

// actions
export const updateSearch = payload => ({ type: UPDATE_SEARCH_QUERY, payload });

const searchQueryReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return action.payload;
    default:
      return statePart;
  }
}

export default searchQueryReducer;