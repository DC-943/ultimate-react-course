import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './feature/accounts/accountSlice';
import customerReducer from './feature/customers/customerSlice';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

/*const [state, dispatch] = useReducer(reducer, initialArg, init?)*/
//const store = createStore(accountReducer);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
