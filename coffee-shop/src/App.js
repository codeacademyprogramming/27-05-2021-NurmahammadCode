import "./App.css";
import store, { persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import OrderForm from "./components/OrderForm";
import CurrentOrders from "./components/CurrentOrders";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <CurrentOrders />
          <OrderForm />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
