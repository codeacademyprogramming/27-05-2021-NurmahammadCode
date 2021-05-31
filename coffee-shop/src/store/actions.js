import {
  SET_ORDERS,
  GET_ORDERS,
  DELETE_ORDER,
  CONFIRM_ORDER,
  SET_IN_PROGRESS,
  UPDATE_ORDER,
  SORT_STATUS,
} from "./constants";

export const setOrder = (payload) => (dispatch) => {
  dispatch({ type: SET_ORDERS, payload });
  setTimeout(() => {
    dispatch({ type: SET_IN_PROGRESS, payload });
  }, 20000);
};

export function getOrders(payload) {
  return { type: GET_ORDERS, payload };
}

export function deleteOrder(payload) {
  return { type: DELETE_ORDER, payload };
}

export function confirmOrder(payload) {
  return { type: CONFIRM_ORDER, payload };
}

export function updateOrder(payload) {
  return { type: UPDATE_ORDER, payload };
}

export function sortStatus(payload) {
  return { type: SORT_STATUS, payload };
}
