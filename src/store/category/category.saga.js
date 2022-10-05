import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.actions";
import { call, all, takeLatest, put } from "redux-saga/effects";
import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

// Redux Saga //
export function* fetchCategoriesAsync() {
  //  dispatch(fetchCategoriesStart()); used in redux-thunk
  try {
    const CategoriesMap = yield call(getCategoriesandDocuments);

    yield put(fetchCategoriesSuccess(CategoriesMap)); //dispatch like put
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
// THE SAGA
export default function* categoriesSaga() {
  // console.log("Saga started");
  yield all([call(onFetchCategories)]);
}
