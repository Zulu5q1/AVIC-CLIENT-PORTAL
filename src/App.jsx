import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import ShipmentsPage from './ShipmentsPage.jsx'
import NotFound from './NotFound.jsx'
import Quote from './Quote.jsx'
import Summary from './Summary.jsx'
import SuccessPage from './SuccessPage.jsx';
import Support from './Support.jsx'
import Profile from './Profile.jsx'
import AppLayout from './AppLayout.jsx';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children: [

      {
        path: '/',
        element: <Dashboard />
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
        path: '/support',
        element: <Support/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },

    ]
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
