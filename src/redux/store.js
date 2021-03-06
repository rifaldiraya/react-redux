import rootReducer from "./reducer";

const redux = require("redux");
const createStore = redux.createStore;
const store = createStore(rootReducer);

export default store;
