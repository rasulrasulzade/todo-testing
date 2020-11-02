import { call, put, all, takeLatest } from "redux-saga/effects";

import { FETCH_ALL_COMMENTS_REQUESTED } from "./actionTypes";
import { fetchAllComments } from "./actionCreators";
import { getComments } from "./api";

function* fetchAllCommentsSaga() {
  try {
    const comments = yield call(getComments);
    yield put(fetchAllComments(comments));
  } catch (error) {
    console.log(error);
  }
}
export default function* rootSaga() {
  yield all([takeLatest(FETCH_ALL_COMMENTS_REQUESTED, fetchAllCommentsSaga)]);
}
