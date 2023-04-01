import { createSelector } from "@reduxjs/toolkit";

import { CatsState } from "./types";
import { initialState } from ".";

const selectDomain = (state: CatsState) => state || initialState;

export const selectCats = createSelector(
  [selectDomain],
  (catSates) => catSates.cats,
);

export const selectPage = createSelector(
  [selectDomain],
  (catSates) => catSates.page,
);

export const selectLimit = createSelector(
  [selectDomain],
  (catSates) => catSates.limit,
);

export const setlectLoading = createSelector(
  [selectDomain],
  (catSates) => catSates.loading,
);
