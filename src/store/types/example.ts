export interface IExampleState {
  data: null | string
}

export enum ExampleTypes {
  ADD_DATA = 'ADD_DATA',
  ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS',
  REMOVE_DATA = 'REMOVE_DATA',
  REMOVE_DATA_SUCCESS = 'REMOVE_DATA_SUCCESS',
}

export interface AddData {
  type: ExampleTypes.ADD_DATA
  payload: string
}

export interface AddDataSuccess {
  type: ExampleTypes.ADD_DATA_SUCCESS
  payload: string
}

export interface RemoveData {
  type: ExampleTypes.REMOVE_DATA
}

export interface RemoveDataSuccess {
  type: ExampleTypes.REMOVE_DATA_SUCCESS
}

export type ExampleActions =
  | AddData
  | RemoveData
  | AddDataSuccess
  | RemoveDataSuccess
