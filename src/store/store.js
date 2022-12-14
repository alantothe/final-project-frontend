import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';

import friendsReducer from './reducers/friendsReducer';
import chatReducer from "./reducers/chatReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    friends: friendsReducer,
    chat: chatReducer,
  },
  middleware: [thunk],
});

export default store;



// import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import authReducer from "./reducers/authReducer";
// import alertReducer from "./reducers/alertReducer";
// import friendsReducer from "./reducers/friendsReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//
//   friends: friendsReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

// import authReducer from "./reducers/authReducers";


// import { combineReducers} from "redux";
// import friendsReducer from './reducers/friendsReducer'




// const rootReducer = combineReducers({
//   auth: authReducer,
//   friends: friendsReducer,


// });

// const store = configureStore({
//     reducer : {rootReducer},
//     middleware: [thunk]
// })





