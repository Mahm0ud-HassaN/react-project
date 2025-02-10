import './App.css';
import './index.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import Pricing from './Components/Pricing/Pricing';
import NotFound from './Components/NotFound/NotFound.jsx';
import Admin from './Components/Admin/Admin.jsx';




const router = createBrowserRouter([{
  path: '/', element: <Layout />, children: [{
     index: true, element: <Home />
  },
    {

    path: '/home', element: <Home />
  }, {
    path: '/contact', element: <Contact />
  }, {
    path: '/login', element: <Login />
  }, {
    path: '/admin', element: <Admin />
  }, {
    path: '/register', element: <Register />
  }, {
    path: '/about', element: <About />
  }, {
    path: '/courses', element: <Courses />
  },{
    path:'/pricing',element:<Pricing/>
  } ,
  {
    path: '*', element: <NotFound />
  }]

}])

function App() {
  return (<>

    <RouterProvider router={router} />

  </>);
}

export default App;
