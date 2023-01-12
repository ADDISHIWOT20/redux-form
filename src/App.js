
import './App.css';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fname,lname,Profe,Gen,Ag } from './store/action/action';

function App() {
  const firstName = useSelector((state)=>state.firstName)
  console.log(firstName)
  const lastName = useSelector((state)=>state.lastName)

  const Profession = useSelector((state)=>state.proffe)

  const Gender = useSelector((state)=>state.gen)

  const Age = useSelector((state)=>state.ag)

  const dispatch = useDispatch()
  
  const [myfname, setMyfname] =  useState()

  const [mylname, setMylname] =  useState()
  const [profession, setprofession] =  useState()

  const [gender, setgender] =  useState()

  const [age, setage] =  useState()

  return (
    <div className="App">
     
      <div className='text-sm text-white bg-red-500 '>
        <div className="flex flex-col">
      <label>firstName</label>
        <input className="text-black" value={myfname} onChange={(e)=>setMyfname(e.target.value)}/>
        <button className="text-black" onClick={()=>dispatch(fname(myfname))}>Dispatch</button>
        <br/>
        <br/>
        <label>lastName</label>
        <input className="text-black" value={mylname} onChange={(e)=>setMylname(e.target.value)}/>
        <button className="text-black" onClick={()=>dispatch(lname(mylname))}>Dispatch</button>
        <br/>
        <br/>
        <label>Profession</label>
        <input className="text-black" value={profession} onChange={(e)=>setprofession(e.target.value)}/>
        <button  className="text-black"onClick={()=>dispatch(Profe(profession))}>Dispatch</button>
        <br/>
        <br/>
        <label>Gender</label>
        <input className="text-black" value={gender} onChange={(e)=>setgender(e.target.value)}/>
        <button className="text-black"onClick={()=>dispatch(Gen(gender))}>Dispatch</button>
        <br/>
        <br/>
        <label>Age</label>
        <input className="text-black" value={age} onChange={(e)=>setage(e.target.value)}/>
        <button className="text-black" onClick={()=>dispatch(Ag(age))}>Dispatch</button>
        <br/>
        <br/>
        </div>
      <div className='text 3x1'>firstName: {firstName}</div>
      <div className='text 3x1'>lastName:{lastName}</div>
      <div className='text 3x1'>Gender:{Gender}</div>
      <div className='text 3x1'>Profession:{Profession}</div>
      <div className='text 3x1'>Age:{Age}</div>

      </div>
    </div>
  );
}

export default App;
