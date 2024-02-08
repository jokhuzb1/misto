import { Route,  Router,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './components/Layouts/RootLayout.jsx'
import About from './pages/About'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Jewelery from './pages/Jewelery'
import Electronic from './pages/Electronic'
import Contact from './pages/Contact'
import { RouterProvider } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct.jsx';
import Cart from './pages/Cart.jsx';
import { ScrollRestoration } from "react-router-dom";
import GoToTop from './components/Layouts/GoToTop.jsx';


const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<RootLayout/>}>
    
    <Route index path='/' element={<Home/>}/>
    <Route  path='about' element={<About/>}/>
    <Route  path='women' element={<Women/>}/>
    <Route  path='men' element={<Men/>}/>
    <Route  path='jewelery' element={<Jewelery/>}/>
    <Route  path='contact' element={<Contact/>}/>
    <Route  path='electronic' element={<Electronic/>}/>
    <Route path='singleProduct/:productId' element={<SingleProduct/>}/>
    <Route  path='cart' element={<Cart/>}/>
  </Route>
  ))
function App() {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
