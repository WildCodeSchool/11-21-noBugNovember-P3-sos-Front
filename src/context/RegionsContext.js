import axios from 'axios'
import { useEffect, useState, createContext } from 'react'

export const RegionsContext = createContext()

const RegionsContextProvider = (props) => {
  const [regions, setRegions] = useState([])
  const [idRegion, setIdRegion] = useState('')
  useEffect(() => {
    axios
      .get('http://localhost:4242/regions')
      .then((res) => setRegions(res.data))
  }, [])
  return (
    <RegionsContext.Provider value={{ regions, idRegion, setIdRegion }}>
      {props.children}
    </RegionsContext.Provider>
  )
}

export default RegionsContextProvider
