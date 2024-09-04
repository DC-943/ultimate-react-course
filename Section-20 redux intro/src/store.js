// import { applyMiddleware, combineReducers, createStore } from 'redux';

// import { thunk } from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';

import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './feature/accounts/accountSlice';
import customerReducer from './feature/customers/customerSlice';

// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

/*const [state, dispatch] = useReducer(reducer, initialArg, init?)*/
//const store = createStore(accountReducer);

//const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
