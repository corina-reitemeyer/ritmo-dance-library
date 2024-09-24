import { RouterProvider } from 'react-router-dom'
import router from '../router.tsx'

/*
 * Using RouterProvider to manage routing for the app. This connects
 * to the router defined in router.tsx and allows the layout in
 * layout.tsx to render nested routes. Simplifies the routing setup
 * by directly providing the router configuration.
 */

function App() {
  return <RouterProvider router={router} />
}

export default App
