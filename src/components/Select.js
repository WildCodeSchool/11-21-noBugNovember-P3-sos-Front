import {useState} from 'react'

const Select = (props, handleChange)=>{

const [selection, setSelection]=useState(props.result[0].value)

console.log("6", props.result)
return(
<>
    <select onChange={e=> setSelection(e.target.value)} value={selection}>
    <option value="" disabled selected hidden>
    {props.name}
    </option>
    {props.result.map(el=>(
    <option key={el.id} value={el.value} >{el.label}</option>))}
    </select>
</>
)
};

export default Select