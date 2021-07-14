import {
  takeEvery,
  put,
  call,
  select,
  SagaReturnType,
} from 'redux-saga/effects'
import {
  addDataSuccess,
  removeDataSuccess,
} from '../actions/exampleActions'
import { DataProvider } from '../../helpers/ApiClient'
import { RootState } from '../index'
import { AddData, ExampleTypes } from '../types/example'

function* workerAddData({ payload }: AddData) {
  //   const data: ReturnType<typeof getData> = yield select(getData)

  try {
    const fakeData: SagaReturnType<
      typeof DataProvider.exampleRequest
    > = yield call(() => DataProvider.exampleRequest(payload))
    yield put(addDataSuccess(fakeData))
  } catch (e) {
    console.log(e)
  }
}

function* workerRemoveData() {
  yield put(removeDataSuccess())
}

export function* watchAddData() {
  yield takeEvery(ExampleTypes.ADD_DATA, workerAddData)
}

export function* watchRemoveData() {
  yield takeEvery(ExampleTypes.REMOVE_DATA, workerRemoveData)
}

export const getData = ({ exampleReducer }: RootState) =>
  exampleReducer.data
