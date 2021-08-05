import { configureStore } from "@reduxjs/toolkit";
import entityReducer from "../features/entity/entitySlice";
import metaReducer from "../features/entity/metaSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    entity: entityReducer,
    meta:metaReducer
  },
  middleware: [logger],
});
