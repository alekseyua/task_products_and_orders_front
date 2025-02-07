import { createAppSlice } from "../createAppSlice";

export interface IPrice {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface IProducts {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  condition: string;
  guarantee: {
    start: string;
    end: string;
  };
  price: IPrice[];
  order: number;
  date: string;
}

export interface ICapitalize {
  id: number;
  isActive: boolean;
  title: string;
  createDate: {
    start: string;
    end: string;
  };
  amountProducts: number;
  price: IPrice[];
  products: IProducts[];
}

export type AppState = ICapitalize[];

const initialState: AppState = [
  {
    id: 1,
    title: "Длинное предлинное длиннючее название прихода",
    isActive: true,
    createDate: {
      start: "2017-06-29 12:09:33",
      end: "2017-06-29 12:09:33",
    },
    amountProducts: 10,
    price: [
      { value: 10, symbol: "USD", isDefault: 0 },
      { value: 100, symbol: "UAH", isDefault: 1 },
    ],
    products: [
      {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 1 order 1",
        type: "Monitors",
        condition: "свободен",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 2,
        serialNumber: 1234,
        isNew: 0,
        photo: "pathToFile.jpg",
        title: "Product 2 order 2",
        type: "Keyboard",
        condition: "В ремонте",
        specification: "Specification 1",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 1,
        date: "2017-06-29 12:09:33",
      },
    ],
  },
  {
    id: 2,
    title: "Длинное предлинное длиннючее название прихода",
    isActive: false,
    createDate: {
      start: "2017-07-29 12:09:33",
      end: "2017-08-29 12:09:33",
    },
    amountProducts: 120,
    price: [
      { value: 1250, symbol: "USD", isDefault: 0 },
      { value: 25460, symbol: "UAH", isDefault: 1 },
    ],
    products: [
      {
        id: 3,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 1",
        type: "Monitors",
        specification: "Specification 1",
        condition: "свободен",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 2,
        date: "2017-06-29 12:09:33",
      },
      {
        id: 4,
        serialNumber: 1234,
        isNew: 1,
        photo: "pathToFile.jpg",
        title: "Product 2",
        type: "Mouse",
        specification: "Specification 1",
        condition: "свободен",
        guarantee: {
          start: "2017-06-29 12:09:33",
          end: "2017-06-29 12:09:33",
        },
        price: [
          { value: 100, symbol: "USD", isDefault: 0 },
          { value: 2600, symbol: "UAH", isDefault: 1 },
        ],
        order: 2,
        date: "2017-06-29 12:09:33",
      },
    ],
  },
];

export const capitalizedGoodsSlice = createAppSlice({
  name: "capitalizedGoods",
  initialState,
  reducers: (create) => ({
    addData: create.reducer(
      (state: AppState, action: { payload: ICapitalize }) => {
        return [...state, action.payload];
      }
    ),
    deleteProductById: create.reducer(
      (state: AppState, action: { payload: { id: number } }) => {
        const res = state.map((order: ICapitalize) => ({
          ...order,
          products: order.products.filter(
            (product) => product.id !== action.payload.id
          ),
        }));
        return res;
      }
    ),
    deleteOrderById: create.reducer(
      (state: AppState, action: { payload: { id: number } }) => {
        const res = state.filter(
          (order: ICapitalize) => order.id !== action.payload.id
        );
        return res;
      }
    ),
    changeActiveOrder: create.reducer(
      (state: AppState, action: { payload: number }) => {
        return state.map((data: ICapitalize) =>
          data.id === action.payload
            ? { ...data, isActive: true }
            : { ...data, isActive: false }
        );
      }
    ),
    closeActiveOrder: create.reducer((state: AppState) => {
      return state.map((data: ICapitalize) => ({ ...data, isActive: false }));
    }),
  }),
  selectors: {
    selectCapitalizeGoodz: (state: AppState) => state,
    selectListTypeProducts: (state: AppState) =>
      Array.from(
        new Set(state.flatMap((order) => order.products.map((p) => p.type)))
      ),
    selectProductsList: (state: AppState, filter: { type?: string }) => {
      if (filter?.type && filter?.type !== "all")
        return state.flatMap((order) =>
          order.products
            .map(
              (product) =>
                product.type === filter?.type && {
                  ...product,
                  titleOrder: order.title,
                  orderDate: order.createDate,
                }
            )
            .filter((el) => el)
        );
      return state.flatMap((order) =>
        order.products.map((product) => ({
          ...product,
          titleOrder: order.title,
          orderDate: order.createDate,
        }))
      );
    },
  },
});

export const {
  deleteOrderById,
  closeActiveOrder,
  changeActiveOrder,
  deleteProductById,
} = capitalizedGoodsSlice.actions;

export const {
  selectProductsList,
  selectCapitalizeGoodz,
  selectListTypeProducts,
} = capitalizedGoodsSlice.selectors;
