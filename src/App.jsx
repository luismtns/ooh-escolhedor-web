import './App.css';
import { Link, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Home from './pages/Home';

const router = createHashRouter([
  {
    path: '/*',
    element: <Home />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
