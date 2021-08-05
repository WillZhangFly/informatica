import { configureStore } from "@reduxjs/toolkit";
import entityReducer from "../features/entity/entitySlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    entity: entityReducer,
  },
  middleware: [logger],
});
