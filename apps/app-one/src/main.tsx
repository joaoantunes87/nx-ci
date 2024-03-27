import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './app/app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world app one changed!</div>,
  },
  {
    path: "/about",
    element: <div>About app one</div>,
  },
  {
    path: "/app",
    element: <App/>
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
