import { TRY_ADD_TODO } from '../constants';
import * as actions from '../actions';
import { put, takeEvery } from 'redux-saga/effects';
import { AddTodo } from '../actions';

function* addTodoAsynchronously(action: AddTodo) {
  yield put(actions.addTodo(action.text));
}

function* todoSaga() {
  yield takeEvery(TRY_ADD_TODO, addTodoAsynchronously);
}

export default todoSaga;