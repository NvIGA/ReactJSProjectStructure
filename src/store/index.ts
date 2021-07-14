import { exampleReducer } from './reducers/exampleReducer'
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {
  watchAddData,
  watchRemoveData,
} from './saga/exampleSaga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const saga = createSagaMiddleware()
export const rootReducer = combineReducers({
  exampleReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage,
  //   blacklist: []
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(saga))
)

export const persistedStore = persistStore(store)
saga.run(watchAddData)
saga.run(watchRemoveData)
