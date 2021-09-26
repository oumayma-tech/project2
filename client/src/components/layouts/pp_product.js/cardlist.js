
import './Productcard.css'
import Productcard from './Productcard'
import { useSelector } from 'react-redux'




const CardList = () => {

const products=useSelector(state=>state.ProductReducer.products)
    return (

      
        <div className="main-container">
        <div className="heading">
        <div className="emplois">
            
         {
             products.map(product=><Productcard product={product} key={product._id} />)
         }
                </div>
            </div>
</div>


            
    )
}

export default CardList
