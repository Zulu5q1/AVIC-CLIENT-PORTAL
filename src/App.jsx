import { createBrowserRouter, RouterProvider } from 'react-router';
import DashboardPage from './DashboardPage.jsx';
import ShipmentsPage from './ShipmentsPage.jsx'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />
  },
  {
    path:'/shipments',
    element: <ShipmentsPage/>
  },
  {
    path:'*',
    element: <NotFound/>
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
