// import logo from './logo.svg';
// import { useContext } from 'react';
import { useState } from 'react';
import './App.css';
import { useCart } from './cart-context';
import { useProductList } from './ProductList';


export function CartHeader(){
  const {cart} = useCart()
  return <h1>Items in Cart {cart.length}</h1>
}

export function ProducListing(){
  const {setcart} = useCart()
  const {product} = useProductList()
  return(
    product.map(Item =>(<div className="Card">
        <div>
          <h3>{Item.name}</h3>
          <p>{Item.description}</p>
        </div>
        <button className="btn-1" onClick={()=>setcart((item)=>{
          const finalArr = item.map((cartadd)=>{
            if(cartadd.id === Item.id){
              return {...cartadd, qty:cartadd.qty+1}
            }
            return {...Item, qty:Item.qty+1}
          })
          return [...item, finalArr]
        })} style={{alignSelf: "center"}}>Add To Cart</button>
      </div>))
  )
}

export function Cart(){
  const {cart} = useCart()
  return (
    cart.map(item => (<div className="Card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button>+</button><span>{item.qty}</span><button>-</button>
    </div>))
  )
}

function App() {
  const [route, setroute]=useState('Products')
  return (
    <div className="App">
      <button className="btn-1" onClick={()=>setroute('Products')}>Products</button>
      <button className="btn-1" onClick={()=>setroute('Cart')}>Cart</button>
      <button className="btn-1" onClick={()=>setroute('Checkout')}>Checkout</button>
      <button className="btn-1" onClick={()=>setroute('DarkMode')}>{route === "Darkmode" ? "Light Mode": "DarkMode"}</button>
      <CartHeader/>
      {route === "Cart" &&<Cart/>}
      {route === "Products" && <ProducListing />}
    </div>
  );
}

export default App;
