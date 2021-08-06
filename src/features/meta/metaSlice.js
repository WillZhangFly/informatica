import { createSlice } from "@reduxjs/toolkit";
import meta from "../../mockData/meta";

export const metaSlice = createSlice({ ...meta });

export const { saveMeta } = metaSlice.actions;

export default metaSlice.reducer;
