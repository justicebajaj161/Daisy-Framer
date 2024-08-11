import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';
import Landing from './pages/Landing';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import About from './pages/About';

function App() {

  const router=createBrowserRouter([
{
  path:'/',
  element:<Home/>,
  errorElement:<Error/>,
  children:[
    {
      index:true,
      element:<Landing/>
    },
    {
      path:'products',
      element:<Products/>
    },
    {
      path:'products:id',
      element:<SingleProduct/>
    },
    {
      path:'cart',
      element:<Cart/>
    },
    {
      path:'checkout',
      element:<Checkout/>
    },
    {
      path:'orders',
      element:<Orders/>
    },
    {
      path:'about',
      element:<About/>
    }
  ]
},
{
  path:'/login',
  element:<Login/>,
  errorElement:<Error/>
},
{
  path:'/register',
  element:<Register/>,
  errorElement:<Error/>
}
  ])
  return <RouterProvider router={router}/>
}

export default App;
