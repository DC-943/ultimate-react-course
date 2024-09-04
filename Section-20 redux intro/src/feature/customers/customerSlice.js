import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare: function (fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case 'customer/createCustomer':
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case 'customer/updateName':
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

//const store1 = createStore(customerReducer);

// store.dispatch({ type: 'account/deposit', payload: 500 });

// console.log('Hey Redux');
// console.log(store.getState());

// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'Buy a car' },
// });
// console.log(store.getState());

// store.dispatch({ type: 'account/payload' });
// console.log(store.getState());

// store.dispatch(deposit(500));
// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan(1000, 'Buy a cheap car'));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: 'customer/createCustomer',
//     payload: { fullName, nationalID, createAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: 'customer/updateName', payload: fullName };
// }

// store.dispatch(createCustomer('Jonas Schmedtmann', '24343434'));

// store.dispatch(deposit(250));

// console.log(store.getState());
