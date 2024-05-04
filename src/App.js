import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ContactUs = lazy(() => import('./pages/ContactUs'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <ContactUs /> },
    ]
  },
]);

function App() {
  return (
    <div className="font-bricolage py-8 w-5/6 m-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div >
  );
}

export default App;