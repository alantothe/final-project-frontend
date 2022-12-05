// import { authActions } from "../actions/authActions";

const initState = {
  userDetails: null,
};

//(previousState, action ) => newState

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "":
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};



export default reducer;


