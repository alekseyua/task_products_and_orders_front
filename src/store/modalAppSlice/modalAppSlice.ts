import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../createAppSlice";

export interface IModalCustom {
  show: boolean;
  title: string;
  desc: React.ReactNode | string;
  apply: string;
  action: () => any;
}

const initialState: IModalCustom = {
  show: false,
  title: "",
  desc: "",
  apply: "",
  action: () => {},
};

export const modalAppSlice = createAppSlice({
  name: "modalApp",
  initialState,
  reducers: (create) => ({
    closeModal: create.reducer((state) => ({
      ...state,
      show: false,
    })),
    showModal: create.reducer((state, action: PayloadAction<IModalCustom>) => {
      return {
        ...state,
        show: true,
        title: action.payload.title,
        desc: action.payload.desc,
        apply: action.payload.apply,
        action: action.payload.action,
      };
    }),
  }),
  selectors: {
    selectModalState: (state) => state,
  },
});

export const { showModal, closeModal } = modalAppSlice.actions;
export const { selectModalState } = modalAppSlice.selectors;
