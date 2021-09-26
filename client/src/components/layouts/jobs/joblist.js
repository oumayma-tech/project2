import './job.css'
import Jobcard from './JobCard'
import { useSelector } from 'react-redux'




const EmploiList = () => {

const emplois=useSelector(state=>state.EmploisReducer.emplois)
    return (

      
        <div className="main-container">
        <div className="heading">
           
        <div className="emplois">

         {
             emplois.map(emploi=><Jobcard emploi={emploi} key={emploi._id} />)
         }
                </div>
            </div>
            </div>
           
    )
}

export default EmploiList