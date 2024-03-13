import React, { useState } from 'react'

function Name(props) {

  const data = props?.data;
  const [show,setshow] = useState(true)
  const handleclick = ()=>{
    setshow(!show)
  }

  return (
    <div className='font-bold text-2xl p-7 '>
    <h1 onClick={handleclick} className='shadow-lg p-5' > ⬇️ {data?.name}</h1>
    {data?.child && show && <div className='ml-52 '>
        {data.child.map(e => {
            return <Name data={e} />
        })}
    </div>
    }
</div>
  )
}

export default Name