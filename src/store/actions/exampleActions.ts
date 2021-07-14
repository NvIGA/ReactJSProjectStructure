import {
  AddData,
  AddDataSuccess,
  ExampleTypes,
  RemoveData,
  RemoveDataSuccess,
} from '../types/example'

export const addData = (
  payload: AddData['payload']
): AddData => ({
  type: ExampleTypes.ADD_DATA,
  payload,
})

export const addDataSuccess = (
  payload: AddDataSuccess['payload']
): AddDataSuccess => ({
  type: ExampleTypes.ADD_DATA_SUCCESS,
  payload,
})

export const removeData = (): RemoveData => ({
  type: ExampleTypes.REMOVE_DATA,
})

export const removeDataSuccess = (): RemoveDataSuccess => ({
  type: ExampleTypes.REMOVE_DATA_SUCCESS,
})
