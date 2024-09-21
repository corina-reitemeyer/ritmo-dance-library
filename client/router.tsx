/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import MoveList from './components/MoveList'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<MoveList />} />
  </Route>,
)

export default routes
