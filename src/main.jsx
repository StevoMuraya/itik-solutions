import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import { routes } from './routes';
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(routes)
root.render(
 <RouterProvider router={router}/>
);


