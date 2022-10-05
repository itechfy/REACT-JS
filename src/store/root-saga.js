import { all, call } from "redux-saga/effects";
import categoriesSaga from "./category/category.saga";

// All Sagas will be composed in this array
export default function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
