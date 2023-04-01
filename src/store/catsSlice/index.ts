import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICatItem } from "@services/models";
import { CatsState, CatsErrorType } from "./types";

export const initialState: CatsState = {
  cats: [],
  limit: 20,
  page: 0,
  loading: false,
  error: null,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    loadCats: (_state) => {},
    loadCatsSuccessfully: (state, action: PayloadAction<ICatItem[]>) => {
      state.cats = state.cats.concat(action.payload);
      state.loading = false;
      state.page++;
    },
    loadCatsError: (state, action: PayloadAction<CatsErrorType>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { loadCats, loadCatsSuccessfully, loadCatsError, setLoading } =
  catsSlice.actions;
export default catsSlice.reducer;
