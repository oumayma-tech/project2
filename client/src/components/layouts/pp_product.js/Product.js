import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/navbar'
import './Productcard.css'
import Cardlist from './cardlist'
import Header from '../header/header'
import Productcard from './Productcard'
import { getPRODUCT, getProduct } from '../../../actions/product'
import {Link} from 'react-router-dom'



function Product({history}) {

 const dispatch =useDispatch()
//  const products = useSelector(state => state.products)
const products = useSelector(state => state.products)
 
    return (
        <div>
   
        
                    <Link to="/products">
                <button className="btn btn-light" onClick = {() => dispatch(getPRODUCT())}>
                     مزيد من المنتجات   
                    </button>
                    </Link>
              
            
            
            
                
                    
                
                <button type="button" class="btn btn-primary" onClick={()=>history.push('/Add_Emploi')} >Add Product</button>
        </div>
    
      
        
        
    )
}

export default Product
