import {
  SET_ORDERS,
  GET_ORDERS,
  DELETE_ORDER,
  CONFIRM_ORDER,
  SET_IN_PROGRESS,
  UPDATE_ORDER,
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

// export function getStudents() {
//   return function (dispatch) {
//     axios
//       .get("https://607ebb8202a23c0017e8bf04.mockapi.io/a/1/students")
//       .then((response) => {
//         dispatch({ type: SET_STUDENTS, payload: response.data });
//       })
//       .catch((error) => console.error(error));
//   };
// }

// export function setAttendance() {
//   return function (dispatch) {
//     axios
//       .get("https://607ebb8202a23c0017e8bf04.mockapi.io/a/1/attendence")
//       .then((response) => {
//         dispatch({ type: SET_ATTENDANCE, payload: response.data });
//       })
//       .catch((error) => console.error(error));
//   };
// }
