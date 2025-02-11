import './App.css';
import './index.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Courses from './Components/Courses/Courses.jsx';
import About from './Components/About/About.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';




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
  return (
    <>
    <p>Azaaa</p>
    </>
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
// mahmoud hassan         </a>
//       </header>
//     </div>
  );
}

export default App;
