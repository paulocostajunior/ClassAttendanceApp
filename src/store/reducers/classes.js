//import { SET_CLASSES } from "../actions/actionTypes";

const initialState = {
  classes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLASSES':
        return {
            ...state,
            classes: action.classes
        }
    default:
      return state;
  }
};

export default reducer;
