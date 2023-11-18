import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "@/utils/functions";

interface CounterState {
  cartItem: IProduct[];
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItem = addItemToShoppingCart(state.cartItem, action.payload);
    },
    removeItemFromCartAction: (state, action: PayloadAction<IProduct>) => {
      // Assuming the payload is the name of the item to be removed
      state.cartItem = state.cartItem.filter(
        (item) =>
          !(
            item.color === action.payload.color &&
            item.count === action.payload.count &&
            item.size === action.payload.size
          )
      );
    },
  },
});

export const { addItemToCartAction, removeItemFromCartAction } =
  cartSlice.actions;

export default cartSlice.reducer;
