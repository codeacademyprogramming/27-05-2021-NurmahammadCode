// import {
//     GET_STUDENTS,
//   } from "./constants";

import { SET_ORDERS } from "./constants";

const initialState = {
  menu: {
    // feel free to add / remove / edit what's on the menu below :)
    coffees: [
      "Latte",
      "Soy Latte",
      "Flat White",
      "Long Black",
      "Cappuccino",
      "Mocha",
    ],
    sizes: ["Small", "Regular", "Large"],
    sugar: [0, 1, 2, 3, "Seriously??"],
  },
};

function coffeeReducer(state = initialState, action) {
  if (action.type === SET_ORDERS) {
    return { ...state, students: action.payload };
  } else if (action.type === SET_ORDERS) {
    return { ...state };
  }
  return state;
}

export default coffeeReducer;
