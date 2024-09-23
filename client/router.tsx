/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import MoveList from './components/MoveList'
import Layout from './components/Layout'

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<MoveList />} />
  </Route>,
)

export default routes
