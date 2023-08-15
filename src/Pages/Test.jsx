import React, { useState } from 'react'

const Test = () => {
    const [data, setData] = useState(false)
  return <>
  <button onClick={e=>setData(!data)}>Click me</button>
  {
    data?<h2>Hello</h2>:false
  }
  </>
}

export default Test