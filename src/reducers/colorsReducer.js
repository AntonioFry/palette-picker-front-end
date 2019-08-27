export const colorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CURRENT_COLORS':
      return [...action.colors];

    default:
      return state;
  }
}