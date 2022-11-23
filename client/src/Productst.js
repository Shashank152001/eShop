import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';
function Productst(props) {
   const {products}=props
   const {setCart,cart}= useContext(CartContext)
   // const {setMoreDetail,moreDetail}= useContext(CartContext)
   function handleAddcart(e,products){
      //console.log(products);
      let _cart = {...cart}
      if(!_cart.items){
         _cart.items={}
      }
      if(_cart.items[products._id]){
         _cart.items[products._id] +=1
      }else{
         _cart.items[products._id]=1
      }
      if(!_cart.totalItems){
         _cart.totalItems=0
      }
      _cart.totalItems +=1;
     
      setCart(_cart)
      console.log(cart)
   }
    return ( 
        <>
     <div className="card" style={{
        width:'19rem'
     }}>
  <img src={products.img} style={{width:'300px'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{products.name}</h5>
    <p className="card-text">{products.desc}</p>
    <p className="card-text">{products.price}</p>
    <button className="btn btn-success me-2" onClick={(e)=>{handleAddcart(e,products)}}>Add Cart</button>
    <Link to={`/productupdate/${products._id}`}><button className="btn btn-primary me-2">More Details</button></Link>

  </div>
</div>
        </>
     );
}

export default Productst;