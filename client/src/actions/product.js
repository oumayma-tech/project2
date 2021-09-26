import axios from 'axios'
import {GET_PRODUCTS,GET_PRODUCT,TOGGLE_FALSE,TOGGLE_TRUE} from './types'

export const getPRODUCT=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/api/product')
        dispatch({type:GET_PRODUCTS,payload:res.data.products})
        console.log(res.data)
       
    } catch (error) {
        console.log(error)

    
}
}


export const addProduct=(newproduct)=>async(dispatch)=>{
    try {
       
        await axios.post('/api/product',newproduct)
     
       dispatch(getPRODUCT())

        
    } catch (error) {
        console.log(error)
    }
}

export  const editProduct=(id,newproduct)=>async(dispatch)=>{
    try {
        await axios.put(`/api/product/${id}`,newproduct)
        dispatch(getPRODUCT())
    } catch (error) {
        console.log(error)
    }
}

 export const getProduct=(id)=>async(dispatch)=>{
            try {
              const res=  await axios.get(`/api/product/${id}`)
              dispatch({type:GET_PRODUCT,payload:res.data.products})
            } catch (error) {
                console.log(error)
            }
        }
        export const deleteProduct=(id)=>async(dispatch)=>{
            try {
                await axios.delete(`/api/product/${id}`)
                dispatch(getPRODUCT())
            } catch (error) {
                console.log(error)
            }
        }      
        export const toggleTrue=()=>{
            return {
                type:TOGGLE_TRUE
            }
            }
            
            export const toggleFalse=()=>{
                return {
                    type:TOGGLE_FALSE
                }
                }