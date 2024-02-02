import React from 'react'
import Api from '../../Api'

const Sport = (props) => {
  const {value,setSearch,search}=props
  console.log("search",search);
  return (
  
    <div className='mt-5 sports'>
      <Api url={ search? `/everything?q=${value}`: "/top-headlines/sources?category=sports"} type={"category"} value={value} setSearch={setSearch} />
    </div>
  )
}

export default Sport
