import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './compinenet/Home';
import AppliedJobs from './compinenet/AppliedJobs/AppliedJobs';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './compinenet/Root/Root';
import ErrorPage from './compinenet/ErrorPage/ErrorPage';
import JobDetail from './compinenet/JobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path: '/job/:id',
        element: <JobDetail></JobDetail>,
        loader: () => fetch ('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
