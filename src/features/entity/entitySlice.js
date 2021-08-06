import { createSlice } from "@reduxjs/toolkit";
import entity from "../../mockData/entity";

export const entitySlice = createSlice({ ...entity });

export const { saveEntity } = entitySlice.actions;

export default entitySlice.reducer;
