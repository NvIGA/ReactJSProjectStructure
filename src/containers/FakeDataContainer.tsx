import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const FakeDataContainer: FC = () => {
  const { addData, removeData } = useActions()
  const data = useTypedSelector(
    ({ exampleReducer }) => exampleReducer.data
  )

  const handlePressToggleButton = (): void => {
    if (data) {
      removeData()
    } else {
      addData('Fake Data')
    }
  }

  return (
    <div className='App'>
      <h1>Data: {data}</h1>
      <button onClick={handlePressToggleButton}>Toggle</button>
    </div>
  )
}

export default FakeDataContainer
