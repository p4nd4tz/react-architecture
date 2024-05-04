import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './features/navbar/Navbar'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {index: true, element: <HomePage />}
    ]
  },
]);

function App() {
  return (
    <div className="font-bricolage py-8 w-5/6 m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;