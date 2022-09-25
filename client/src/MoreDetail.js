import { useParams } from 'react-router-dom'
import {  useEffect, useState } from 'react'


function MoreDetail() {
    const{id}=useParams();
    const[product,setProduct]=useState('')
    useEffect(()=>{
        fetch(`/api/${id}`)
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)
            setProduct(data)
        })
    },[])
    return(
        <>
        
        <h2 className='ms-2 mb-4 mt-3 text-primary'>{product.name}</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={product.img} style={{width:'500px'}}  alt="..." />
                </div>
                <div className="col-md-6">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.desc}</p>
                <p className="card-text">{product.price}</p>
                </div>
            </div>

        </div>
        </>
        
    );
}
export default MoreDetail;
