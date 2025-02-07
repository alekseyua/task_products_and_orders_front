import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";
import { fetchCount } from "./counterAPI";

export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSocketSlice = createAppSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      state.value += 1;
    }),
    decrement: create.reducer((state) => {
      state.value -= 1;
    }),
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    ),
    getDataIoAsync: create.asyncThunk(
      async () => {
        const response = await fetchCount(55);
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.value += action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
  selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
  },
});

export const { decrement, increment, incrementByAmount, getDataIoAsync } =
  counterSocketSlice.actions;

export const { selectCount, selectStatus } = counterSocketSlice.selectors;
