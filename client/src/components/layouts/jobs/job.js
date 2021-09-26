import React from 'react'
import { Link } from "react-router-dom"
import JobCard from './JobCard'
import emploiReducer from '../../../reducers/emploiReducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import "./job.css"

import {getEmplois}  from '../../../actions/emploi'


function Job() {

    const history=useHistory()
    const dispatch = useDispatch()

    const emplois = useSelector(state => state.emploiReducer.emplois)

    return (
        <div>
   
        <div className="main-container">
            <div className="heading">
                <h1 className="heading__title">
                    <Link to="/emploi">
                        عروض شغل في كامل أنحاء الجمهورية التونسية
                    </Link>
                </h1>
            </div>
            
                <div className="emplois">
                    {
                        emplois.map(emploi => <JobCard emploi={emploi} key={emploi._id} />)
                       
                    }
                    
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-light" onClick = {() => dispatch(getEmplois())}>
                     عروض شغل     
                    </button>
                    
                </div>
                <button type="button" class="btn btn-primary" onClick={()=>history.push('/Add_Emploi')} >Add Emploi</button>
        </div>
    
        </div>
    )
}

export default Job
