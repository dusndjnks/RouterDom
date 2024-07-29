import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Help from './pages/Help'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Privacy from './pages/Privacy'
import Product from './pages/Product'
import Signup from './pages/Signup'


function App(){
  return(
    <div>
      <Routes className="App">
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App