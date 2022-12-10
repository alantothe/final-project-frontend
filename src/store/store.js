import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import authReducer from "./reducers/authReducers";
import alertReducer from './reducers/alertReducer';

import { combineReducers} from "redux";




const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,

});

const store = configureStore({
    reducer : {rootReducer},
    middleware: [thunk]
})





export default store;





// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [applyMiddleware(thunk)]
// });







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




