// import {useEffect} from 'react'

const Select = (props)=>{

    

console.log("6", props.result)
return(
<>
    <select>
    <option value="" disabled selected hidden>
    {props.name}
    </option>
    {props.result.map(el=>(
    <option key={el.id} value={el.value}>{el.label}</option>))}
    </select>
</>
);
};

export default Select