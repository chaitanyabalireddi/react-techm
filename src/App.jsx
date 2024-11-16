import React, { useState } from 'react'
import Loginpage from './pages/Loginpage'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Productspage from './pages/Productspage';
import {CartProvider, } from './context/CartContext'
import Cart from './components/Cart';


function App() {
  const colors = ['#ef4444', '#bef264', '#57534e', '#A4988A'];
  const [colorIndex, setColorIndex] = useState(0); 


  const changeBackgroundColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div style={{ backgroundColor: colors[colorIndex]}} className='w-screen font-sans h-screen bg-red-400 overflow-x-hidden'>
     <CartProvider>
      <Navbar />
      <Landingpage changeBackgroundColor={changeBackgroundColor}/>
      <Productspage />
      <Cart />
     </CartProvider>

    </div>
  )
}

export default App
