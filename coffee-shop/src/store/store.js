import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import orderReducer from "./orderReducer";
import coffeeReducer from "./coffeeReducer";
import storage from "redux-persist/lib/storage";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  orderReducer: orderReducer,
  coffeeReducer: coffeeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

export const persistor = persistStore(store);

export default store;
