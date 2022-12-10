import { authActions } from "../actions/authActions";

export const initState = {
  userDetails: null,
};

//(previousState, action ) => newState

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};



export default reducer;


