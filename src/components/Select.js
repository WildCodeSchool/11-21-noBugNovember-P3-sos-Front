// import {useState} from 'react'

const Select = (props)=>{

return(
<>
    <select value={props.value} onChange={(e) => props.set(e.target.value)}>
    <option value="" disabled selected hidden>
    {props.name}
    </option>
    {props.result.map(el=>(
    <option key={el.id} value={el.id}>{el.label}</option>))}
    </select>
</>
)
};

export default Select