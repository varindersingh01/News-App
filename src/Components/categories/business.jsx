import React, { useEffect } from 'react'
import Api from '../../Api'
const Business = (props) => {
  const {value,setSearch,search}=props
 
  return (
    <div className='mt-5 business'>
    <Api url={ search? `/everything?q=${value}`: "/top-headlines/sources?category=business"} type={"category"} value={value} setSearch={setSearch} />
    </div>
  )
}

export default Business
