import { useParams } from 'react-router-dom'
import {  useEffect, useState,useContext } from 'react'
import { CartContext } from './CartContext';

function MoreDetail() {
    const{id}=useParams();
    const {setCart,cart}= useContext(CartContext)
    const[product,setProduct]=useState('')
    useEffect(()=>{
        fetch(`/api/${id}`)
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)
            setProduct(data)
        })
    },[])
    function handleAddcart(e,product){
        //console.log(products);
        let _cart = {...cart}
        if(!_cart.items){
           _cart.items={}
        }
        if(_cart.items[product._id]){
           _cart.items[product._id] +=1
        }else{
           _cart.items[product._id]=1
        }
        if(!_cart.totalItems){
           _cart.totalItems=0
        }
        _cart.totalItems +=1;
       
        setCart(_cart)
        console.log(cart)
     }
    return(
        <>
        
        
        <div className="container">
            <div className="row">
            <h2 className='ms-2 mb-4 mt-3 text-primary'>{product.name}</h2>
                <div className="col-md-6">
                
                <img src={product.img} style={{width:'400px'}} alt="..." className='img-fluid mx-auto d-block' />
                </div>
                <div className="col-md-6">
                <h5 className='fs-1'>{product.name}</h5>
                <p className='fs-2'>{product.desc}</p>
                <p className='fs-2'>{product.price}</p>
                <button className="btn btn-success me-2" onClick={(e)=>{handleAddcart(e,product)}}>Add Cart</button>
                </div>
            </div>

        </div>
        </>
        
    );
}
export default MoreDetail;
