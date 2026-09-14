import { createBrowserRouter, RouterProvider } from 'react-router';
import DashboardPage from './DashboardPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
