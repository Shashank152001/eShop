import Productst from "./Productst";
import { useEffect, useState } from 'react'
function Products() {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('/api')
    .then((res)=>{ return res.json()})
    .then((data)=>{ console.log(data)
      setProducts(data)
    
    })
  },[]);
    return (
      <>
      {products.map((result)=>(
        <div key={result._id} id="product">
         <Productst products={result}/>
         </div>
      ))}
     
      </>
      );
}

export default Products;