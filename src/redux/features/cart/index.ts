import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  [key: string]: number;
}

const initialState: CartState = { total: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<string>) => {
      if (state['total'] === 30) return;

      const count = state[payload] || 0;
      state[payload] = count + 1;
      state['total'] += 1;
    },
    decrement: (state, { payload }: PayloadAction<string>) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        state['total'] -= 1;
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
      state['total'] -= 1;
    },
    reset: (state, { payload }: PayloadAction<string>)  => {
      const count = state[payload] || 0;
      state['total'] -= count;
      delete state[payload];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
