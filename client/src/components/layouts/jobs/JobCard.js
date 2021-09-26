import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { deleteEmploi, toggleTrue } from '../../../actions/emploi'

import "./job.css"
function JobCard({ emploi }) {

const dispatch=useDispatch()
const history=useHistory()
const handleAlert=(id)=>{
    if(window.confirm("هل انت متاكد من محو المحتوى ?")){
  dispatch(deleteEmploi(id))
    }
}
// useEffect(() => {
//     dispatch(toggleTrue)
   
// }, [])
    return (
       

        <div>
            {/* <button type="button" class="btn btn-primary" onClick={()=>history.push('/Add_Emploi')} >Add Emploi</button> */}
        
        <div className="container">
        <div className="cards">
        <div className="card card-2">
            <label> عنوان الشغل</label>
        <h2 className="card__title">
            {emploi && emploi.titre}
        </h2>
        <p class="card-text">{emploi && emploi.desc}</p>
        <h2 className="card__title">{emploi && emploi.adresse}</h2>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <button type="button" class="btn btn-danger" onClick={()=>handleAlert(emploi._id)}>Delete</button>
                <button type="button" class="btn btn-info" onClick={()=> history.push(`/Edit_emploi/${emploi._id}`)}>edit</button>
            </div>
            
        </div>
        
        </div>
        </div>

        // <div class="container">
        //     <a class="card1" href="#">
        //         <h3> عنون الوظيفة </h3>
        //         <h5> {emploi.titre} </h5>
        //         <h3> وصف الوظيفة </h3>
        //         <h5>
        //         {emploi.desc}
        //         </h5>
        //         <h3> راتب الشهري </h3>
        //         <h5> {emploi.salaire} </h5>
        //         <h3> توقيت العمل  </h3>
        //         <h5> {emploi.horaire} </h5>
        //         <h3> مكان العمل  </h3>
        //         <h5> {emploi.adresse} </h5>
        //         <h3>  رابط الترشح  </h3>
        //         <h5> {emploi.lin} </h5>
        //         <div class="go-corner" href="#">
        //             <div class="go-arrow">
        //                 →
        //             </div>
        //         </div>
        //     </a>
        // </div>
    // <div className="emploi">
    //   <div className="container">
    //   <div className="card">
    //     <div className="box">
    //       <div className="content">
    //         <h2>01</h2>
    //         <h3>{emploi.titre}</h3>
    //         <p>{emploi.desc}</p>
    //         <h3> توقيت العمل  </h3>
    //     <h5> {emploi.horaire} </h5>
    //         <a href="#">رابط الترشح</a>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    //   </div>
     

    )
}

export default JobCard
