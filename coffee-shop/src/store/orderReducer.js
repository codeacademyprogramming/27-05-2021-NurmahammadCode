import {
  SET_ORDERS,
  DELETE_ORDER,
  CONFIRM_ORDER,
  SET_IN_PROGRESS,
  UPDATE_ORDER,
  SORT_STATUS,
} from "./constants";

const initialState = {
  orders: [],
};

function orderReducer(state = initialState, { type, payload }) {
  console.log(type);
  if (type === SET_ORDERS) {
    const { id, name, coffee, size, sugar, table, note } = payload;
    let copyOrders = [...state.orders];
    copyOrders.push({
      id,
      name,
      coffee,
      size,
      sugar,
      table,
      note,
      status: "Created",
    });
    return { ...state, orders: copyOrders };
  } else if (type === DELETE_ORDER) {
    let copyOrders = [...state.orders];
    copyOrders = copyOrders.filter((order) => order.id !== payload);
    return { ...state, orders: copyOrders };
  } else if (type === CONFIRM_ORDER) {
    let copyOrders = [...state.orders];
    copyOrders = copyOrders.map((order) => {
      if (order.id === payload) {
        return { ...order, status: "Done" };
      } else return order;
    });
    return { ...state, orders: copyOrders };
  } else if (type === UPDATE_ORDER) {
    let copyOrders = [...state.orders];
    copyOrders = copyOrders.map((order) => {
      if (order.id === payload.id) {
        return {
          ...order,
          sugar: payload.sugar,
          note: payload.note,
          status: payload.status,
        };
      } else return order;
    });
    return { ...state, orders: copyOrders };
  } else if (type === SET_IN_PROGRESS) {
    let copyOrders = [...state.orders];
    copyOrders = copyOrders.map((order) => {
      if (order.id === payload.id && order.status !== "Done") {
        return { ...order, status: "In Progress" };
      } else return order;
    });
    return { ...state, orders: copyOrders };
  } else if (type === SORT_STATUS) {
    let copyOrders = [...state.orders];
    copyOrders = copyOrders.sort((a, b) => {
      if (a.status === "Created" && b.status === "In Progress") {
        return 1;
      }
      if (a.status === "Created" && b.status === "Done") {
        return 1;
      }
      if (a.status === "In Progress" && b.status === "Created") {
        return -1;
      }
      if (a.status === "In Progress" && b.status === "Done") {
        return 1;
      }
      if (a.status === "Done" && b.status === "In Progress") {
        return -1;
      }
      if (a.status === "Done" && b.status === "Created") {
        return -1;
      }
      return 0;
    });
    console.log(copyOrders);
    return { ...state, orders: copyOrders };
  }
  return state;
}

export default orderReducer;
