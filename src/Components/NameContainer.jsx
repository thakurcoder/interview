import React from 'react'
import Name from './Name'
import {useEffect,useState} from 'react'
function NameContainer(props) {

    const [data,setdata] = useState([])
    const fetchdata =async ()=>{
        const data = await fetch("https://raw.githubusercontent.com/Vibencode-Solutions/mock-api/main/api.json");
        const json = await data.json()
        console.log(json)
        setdata(json)
    }

    useEffect(()=>{
       fetchdata()
    
    },[]);

    if (data.length==0) return 
  return (
    <div>
       <div>
            {
                data.map((e) => <Name data={e} />)
            }

        </div>
        
    </div>
  )

        }
export default NameContainer;