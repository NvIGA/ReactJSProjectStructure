import './App.css'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import FakeDataContainer from './containers/FakeDataContainer'

const App: FC = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <FakeDataContainer />
      </Provider>
    </div>
  )
}

export default App
