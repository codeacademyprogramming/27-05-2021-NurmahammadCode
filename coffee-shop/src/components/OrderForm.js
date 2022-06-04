import React, { useState } from "react";
import { connect } from "react-redux";
import { setOrder } from "../store/actions";
import uuid from "react-uuid";

const mapStateToProps = (state) => ({
  menu: state.coffeeReducer.menu,
});

function OrderForm({ menu, setOrder }) {
  const [name, setName] = useState("");
  const [coffeeType, setCoffeeType] = useState("");
  const [coffeeSize, setCoffeeSize] = useState("");
  const [sugarCount, setSugarCount] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [note, setNote] = useState("");

  let coffees = menu.coffees;
  let sizes = menu.sizes;
  let sugar = menu.sugar;

  let coffeeTypes = coffees.map((coffee, key) => {
    return (
      <option key={key} value={coffee}>
        {coffee}
      </option>
    );
  });

  let coffeeSizes = sizes.map((size, key) => {
    return (
      <option key={key} value={size}>
        {size}
      </option>
    );
  });

  let sugarSpoons = sugar.map((spoon, key) => {
    return (
      <option key={key} value={spoon}>
        {spoon}
      </option>
    );
  });

  let tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count, key) => {
    return (
      <option key={key} value={count}>
        {count}
      </option>
    );
  });

  const placeOrderHandler = () => {
    setOrder({
      id: uuid(),
      name: name,
      coffee: coffeeType,
      size: coffeeSize,
      sugar: sugarCount,
      table: tableNumber,
      note: note,
    });
  };

  return (
    <div className="order-form">
      <div className="container">
        <form
          className="form-horizontal"
          onSubmit={(e) => {
            e.preventDefault();
            placeOrderHandler();
          }}
        >
          <h2>I want a coffee too!</h2>
          <hr />
          <div className="form-group">
            <label className="col-sm-2 control-label">Your name</label>
            <div className="col-sm-10">
              <input
                required
                className="form-control"
                type="text"
                placeholder="Dadash Dadashov"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Coffee Type</label>
            <div className="col-sm-10">
              <select
                onChange={(e) => setCoffeeType(e.target.value)}
                required
                className="form-control"
                name="coffee"
              >
                <option defaultValue="">Please Select</option>
                {coffeeTypes}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">What Size?</label>
            <div className="col-sm-10">
              <select
                onChange={(e) => setCoffeeSize(e.target.value)}
                required
                className="form-control"
                name="size"
              >
                <option defaultValue="">Please Select</option>
                {coffeeSizes}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label">Any Sugar?</label>
            <div className="col-sm-10">
              <select
                onChange={(e) => setSugarCount(e.target.value)}
                required
                className="form-control"
                name="sugar"
              >
                <option defaultValue="">Please Select</option>
                {sugarSpoons}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Your table number</label>
            <div className="col-sm-10">
              <select
                onChange={(e) => setTableNumber(e.target.value)}
                required
                className="form-control"
                name="sugar"
              >
                <option defaultValue="">Please Select</option>
                {tableNumbers}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Your note</label>
            <div className="col-sm-10">
              <input
                required
                className="form-control"
                type="text"
                placeholder="Special note..."
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          <input
            className="btn btn-success"
            type="submit"
            value="Place my Order!"
          />
        </form>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, { setOrder })(OrderForm);
