import React,{useEffect, useState}  from 'react'

import { Form } from 'react-bootstrap'

import {useDispatch, useSelector} from 'react-redux'
import {AddEmploi} from '../../'




const AddEmploi = () => {

   const update=useSelector(state=>state.EmploiReducer.update)
   const updateemploi=useSelector(state=>state.EmploiReducer.emploi)
   const [titre, settitre] = useState('')
   const [desc, setdes] = useState('')
   const [salaire, setsalaire] = useState('')
 
 const dispatch=useDispatch()

const handleTitre=(e)=>{
    settitre({...titre,[e.target.titre]:e.target.value})
}



    return (
        <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
       Add Jobs
      </button>
      {/* Modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{emploi.titre}</h5>
              <input type="text"  placeholder="Enter contact name ..."
                    name="name"
                    defaultValue={emploi.titre}
                    onChange={handleTitre}/>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={()=>{dispatch(addEmploi(emploi));history.push('/')}}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default AddEmploi