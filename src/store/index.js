import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import {
  INCREMENNT,
  DECREMENT,
  INCRESEBYFIVE,
  SHOWCOUNTER,
} from "../actions/action-type/counter-action";

const initialStateCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: isAuthenticated,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
