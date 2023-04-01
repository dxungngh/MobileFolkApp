import { call, put, select, takeEvery } from "redux-saga/effects";
import { selectLimit, selectPage, setlectLoading } from "./selectors";
import { loadCats, loadCatsSuccessfully, loadCatsError, setLoading } from ".";
import { CatsErrorType } from "./types";
import { loadCatsFromAPI } from "@api";
import { ICatItem } from "@services/models";

export function* getCats() {
  const page: number = yield select(selectPage);
  const limit: number = yield select(selectLimit);
  const loading: boolean = yield select(setlectLoading);

  try {
    console.log("getCats is Called: " + JSON.stringify(loading));
    if (!loading) {
      yield put(setLoading());
      const catList: ICatItem[] = yield call(loadCatsFromAPI, limit, page);
      if (catList?.length > 0) {
        yield put(loadCatsSuccessfully(catList));
      } else {
        yield put(loadCatsError(CatsErrorType.RESPONSE_ERROR));
      }
    }
  } catch (err: any) {
    console.log("ErrorSaga: " + JSON.stringify(err));
    yield put(loadCatsError(CatsErrorType.RESPONSE_ERROR));
  }
}

export function* catsSaga() {
  yield takeEvery(loadCats.type, getCats);
}
