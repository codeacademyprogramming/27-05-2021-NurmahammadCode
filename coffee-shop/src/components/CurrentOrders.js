import React, { useState } from "react";
import { connect } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  sortStatus,
  updateOrder,
} from "../store/actions";

const mapStateToProps = (state) => ({
  data: state.orderReducer.orders,
});

function CurrentOrders({
  data,
  deleteOrder,
  confirmOrder,
  updateOrder,
  sortStatus,
}) {
  const [status, setStatus] = useState("");
  const [note, setNote] = useState("");
  const [sugar, setSugar] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeId, setActiveId] = useState(null);
  let orders = data.map((order, key) => {
    return (
      <tr key={key}>
        <td>{key + 1}</td>
        <td>{order.name}</td>
        <td>{order.coffee}</td>
        <td>{order.size}</td>
        {isEditMode && activeId === order.id ? (
          <input
            className="form-control"
            style={{ width: 45, marginTop: "18%" }}
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
          />
        ) : (
          <td>{order.sugar}</td>
        )}
        <td>{order.table}</td>
        {isEditMode && activeId === order.id ? (
          <td>
            <input
              className="form-control"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </td>
        ) : (
          <td>{order.note}</td>
        )}
        {isEditMode && activeId === order.id ? (
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Created</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        ) : (
          <td>{order.status}</td>
        )}
        <td>
          <button
            type="button"
            className="btn btn-primary btn-xs"
            disabled={order.status === "Done"}
            onClick={() => {
              if (!isEditMode) {
                setStatus(order.status);
                setSugar(order.sugar);
                setNote(order.note);
                setActiveId(order.id);
                setIsEditMode(true);
              } else {
                updateOrder({ id: order.id, note, sugar, status });
                setIsEditMode(false);
              }
            }}
          >
            {isEditMode && activeId === order.id ? "Done" : "Edit"}
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success btn-xs"
            onClick={() => {
              if (isEditMode) {
                updateOrder({ id: order.id, note, sugar, status });
                setIsEditMode(false);
              }
              confirmOrder(order.id);
            }}
          >
            Confirm
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-xs"
            onClick={() => deleteOrder(order.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="order-list">
      <div className="container">
        <h2>Current Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Type</th>
              <th>Size</th>
              <th>Sugar</th>
              <th>Table number</th>
              <th>Note</th>
              <th
                style={{
                  cursor: "pointer",
                  backgroundColor: "#4cb565",
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "2px 3px #888888",
                }}
                onClick={() => {
                  sortStatus();
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>{orders}</tbody>
        </table>
        {!orders.length && (
          <div className="alert alert-info" role="alert">
            No orders yet... but I can smell them coming!
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, {
  deleteOrder,
  confirmOrder,
  updateOrder,
  sortStatus,
})(CurrentOrders);
