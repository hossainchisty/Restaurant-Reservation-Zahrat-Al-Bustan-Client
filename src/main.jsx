import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import Chef from './components/Chef/Chef.jsx';
import FeedBack from './components/Feedback/Feedback';
import Reservation from './components/Reservation/Reservation';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/chef' element={<Chef />} />
      <Route path='/feedback' element={<FeedBack />} />
      <Route path='/reservation' element={<Reservation />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Toaster position='top-right' reverseOrder={false} />
  </RouterProvider>
);
