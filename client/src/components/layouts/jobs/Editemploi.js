
import * as React from 'react';
import TextField from '@mui/material/TextField';
import  { useState } from 'react'
import {Form } from 'react-bootstrap'
import Box from '@mui/material/Box';
import { useHistory } from 'react-router';
import './Addemploi.css'
import { useDispatch, useSelector } from 'react-redux';
import { addEmploie,editEmploi } from '../../../actions/emploi';




const Editemploi = () => {
  const dispatch=useDispatch()
const [emploi, setemploi] = useState('titre','desc','salaire','adresse')
  const [titre, settitre] = useState('')
  const emplois = useSelector(state => state.emploiReducer.emplois)
  const edit=useSelector(state=>state.emploiReducer.edit)
  const editemploi=useSelector(state=>state.emploiReducer.emploi)
  const [desc, setdesc] = useState('')
  const [salaire, setsalaire] = useState('')
  const [adresse, setadresse] = useState('')
  const [error, setError] = useState()
const history=useHistory()
const handleDESC=(e)=>{
  setdesc(e.target.value)
}

const handletitre=(e)=>{
  settitre(e.target.value)
}
  
const handlesalaire=(e)=>{
  setsalaire(e.target.value)
}

const handleadress=(e)=>{
  setadresse(e.target.value)
}

// const handleSabmit=(e)=>{
// e.preventDefault();
// if(!titre || !desc    || !salaire  || !adress){
//   setError('please input all field')
// } else {
//   dispatch(addEmploie(emploi));
//   history.push('/emploi');
//   setError('')
// }
// }

const handlechange=(e)=>{
  settitre({...titre,[e.target.titre]:e.target.value})
}


    return (
      
<div>
      <button type="button" class="btn btn-secondary" onClick={()=>history.push('/emploi')}>Go back</button>
      <div className="center">
      <h1>Our Newsletter</h1>
      <form>
        <div className="inputbox">
          <input type="text" required="required" 
          value={emploi && emploi.titre}
           onchange={handlechange}/>
          <span>TITLE</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" 
           value={emploi && emploi.desc}
           onchange={handleDESC}/>
          <span>Description</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" 
           value={emploi && emploi.adresse}
           onchange={handleadress}/>
          <span>ADRESSE</span>
        </div>
        <div className="inputbox">
          <input type="text" required="required" 
           value={emploi && emploi.salaire}
           onchange={handlesalaire}/>
          <span>SALAIRE</span>
        </div>
        <div className="inputbox">
          <input type="button" defaultValue="edit" onClick={()=>{dispatch(editEmploi(editemploi._id,emploi))}} />
        </div>
      </form>
    </div>
    </div>






     

      // <div className="hello">
      //    <button type="button" class="btn btn-secondary" onClick={()=>history.push('/emploi')}>Go back</button>
      //   <label>Titre</label>
      //    <input type="text" classeName="form"
      //     placeholder="Normal text"
      //     value={emploi && emploi.titre}
      //     onchange={handlechange}/>

      //    <label>Description</label>
      //    <input type="text"
      //     placeholder="Normal text" 
      //    value={emploi && emploi.desc}
      //     onchange={handleDESC}/>

      //    <label>Adresse</label>
      //    <input type="text"
      //     // placeholder="Normal text"
      //     defaultvalue={emploi && emploi.adresse} 
      //     onchange={handleadress}
      //     />

      //    <label type="text">salaire</label>
      //    <input type="text"
      //     placeholder="Normal text"
      //    defaultvalue={emploi && emploi.salaire}
      //     onchange={handlesalaire}/>
          
      //     {error && <h2 style={{color:'red'}}>{error}</h2>}
      //    <button type="button" class="btn btn-primary" onClick={()=>{dispatch(addEmploie({
      //      titre:titre,desc,salaire,adresse
      //    }));history.push('/emploi')}}>Add Emploi</button>
      // </div>
    
    )
}

export default Editemploi
