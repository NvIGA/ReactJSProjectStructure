import {
  ExampleActions,
  IExampleState,
  ExampleTypes,
} from '../types/example'

const exampleState = {
  data: null,
}

export const exampleReducer = (
  state: IExampleState = exampleState,
  action: ExampleActions
): IExampleState => {
  switch (action.type) {
    case ExampleTypes.ADD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case ExampleTypes.REMOVE_DATA_SUCCESS:
      return {
        ...state,
        data: null,
      }

    default:
      return { ...state }
  }
}
