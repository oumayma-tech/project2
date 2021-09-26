import axios from 'axios'
import { GET_EMPLOI, GET_EMPLOIS ,TOGGLE_FALSE,TOGGLE_TRUE} from './types'

export const getEmplois = () => async(dispatch) => {
    try {
        const res = await axios.get('/api/emploi')
        
        dispatch({
            type: GET_EMPLOIS,
            payload: res.data.emplois
        })
    } catch (error) {
        console.log("impossible to get emploi", error)
    }
}
export const addEmploie=(newemploi)=>async(dispatch)=>{
    try {
        await axios.post('/api/emploi',newemploi)
        dispatch(getEmplois())
    } catch (error) {
        console.log(error)
    }
    }

export  const editEmploi=(id,newemploi)=>async(dispatch)=>{
    try {
        await axios.put(`/api/emploi/${id}`,newemploi)
        dispatch(getEmplois())
    } catch (error) {
        console.log(error)
    }
}

 export const getEmploi=(id)=>async(dispatch)=>{
            try {
              const res=  await axios.get(`/api/emploi/${id}`)
              dispatch({type:GET_EMPLOI,payload:res.data.emploi})
            } catch (error) {
                console.log(error)
            }
        }
        export const deleteEmploi=(id)=>async(dispatch)=>{
            try {
                await axios.delete(`/api/emploi/${id}`)
                dispatch(getEmplois())
                dispatch(toggleTrue())
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
