import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './DashboardPage.jsx';
import ShipmentsPage from './ShipmentsPage.jsx'
import NotFound from './NotFound.jsx'
import Quote from './Quote.jsx'
import Summary from './Summary.jsx'
import SuccessPage from './SuccessPage.jsx';

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
    path: '/quote',
    element:<Quote/>
  },
  {
    path: '/summary',
    element: <Summary/>
  },
  {
    path: '/success',
    element: <SuccessPage/>
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
