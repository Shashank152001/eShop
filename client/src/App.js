import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from './Header';
import HomeMid from './HomeMid';
import Products from './Products';
import { CartContext } from './CartContext';
import { useState, useEffect } from 'react';
import Cart from './Cart';
import MoreDetail from './MoreDetail';
function App() {
  const [cart,setCart]=useState({});

  useEffect(()=>{
   const a = window.localStorage.getItem('cart')
    setCart(JSON.parse(a))
  },[])

  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  return ( 
   <>
    <Router>
      <CartContext.Provider value={{setCart,cart}}>
      <Header/>
      <Routes>
      <Route path='/' element={<HomeMid/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/productupdate/:id' element={<MoreDetail/>}></Route>


      </Routes>
      </CartContext.Provider>
    </Router>
   </>
   );
}

export default App;