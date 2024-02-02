import React, { useEffect } from 'react'
import Api from '../../Api'

const Technology = (props) => {
  const {value,setSearch,search}=props
  console.log("value--tecc",value);
 
  return (
    <div className='mt-5 technology'>
     <Api url={ search? `/everything?q=${value}`: "/top-headlines/sources?category=technology"} type={"category"} value={value} setSearch={setSearch} />
    </div>
  )
}

export default Technology
