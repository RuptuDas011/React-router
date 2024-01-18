import React, { useEffect } from 'react'

function Github() {
    useEffect(() => {
      fetch('https://github.com/RuptuDas011')
      .then(Response=> Response.json())
      .then(data=>{
        console.log(data);
        SetData(data)
      })
      return () => {
       
      }
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white  p-4 text-3xl'>
      Github 
      <img src="{data.avatar_url}" alt="Git picture" />
    </div>
  )
}

export default Github
