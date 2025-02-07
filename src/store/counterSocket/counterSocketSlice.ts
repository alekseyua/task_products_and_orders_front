import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";

export interface CounterSliceState {
  count: number;
}

const initialState: CounterSliceState = {
  count: 0,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSocketSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    getDataIoAsync: create.reducer((state, action: PayloadAction<number>) => {
      state.count = action.payload;
    }),
  }),
  selectors: {
    selectCount: (counter) => counter.count,
  },
});

export const { getDataIoAsync } =
  counterSocketSlice.actions;

export const { selectCount } = counterSocketSlice.selectors;
