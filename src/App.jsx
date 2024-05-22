import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import logo from './assets/logo.svg';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <div>
          <img src={logo} width={128} height={128} />
          <h1>Ooh Escolhedor!</h1>
          <Link to='privacy-policy'>Privacy Policy</Link>
        </div>
      ),
    },
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy />,
    },
  ],
  { basename: '/ooh-escolhedor-web/' }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
