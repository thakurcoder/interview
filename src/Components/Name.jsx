import React from 'react'

function Name(props) {
  const data = props?.data;
  return (
    <div>
    <h1>{data?.name}</h1>
    {data?.child && <div style={{ marginLeft: 30, paddingLeft: 30 }}>
        {data.child.map(e => {
            return <Name data={e} />
        })}
    </div>
    }
</div>
  )
}

export default Name