import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import MoveList from './components/MoveList'

/*
 * Switched to using createBrowserRouter and RouterProvider from
 * React Router v6.4+. This makes routing cleaner and easier to manage
 * by clearly setting up parent-child relationships. It helps avoid
 * type issues that come from passing route arrays directly to <Routes>.
 * Overall, it seems to be a simpler and more modern way to handle routing
 * and works better with TypeScript.
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MoveList />,
      },
    ],
  },
])

export default router
