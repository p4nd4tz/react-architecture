import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <AboutUs />},
      {path: 'services', element: <Services />},
      {path: 'projects', element: <Projects />},
      {path: 'contact', element: <ContactUs />},
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