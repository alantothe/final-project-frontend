import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./reducers/authReducers";

import { combineReducers} from "redux";



const rootReducer = combineReducers({
  auth: authReducer,

});

const store = configureStore({
    reducer : {rootReducer}
})





export default store;

//

// import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers,  applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { legacy_createStore as createStore} from 'redux'

// import authReducer from "./reducers/authReducers";


// const rootReducer = combineReducers({
//   auth: authReducer,

// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;


