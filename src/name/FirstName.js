import React from 'react'

import { useSelector } from 'react-redux'

const FirstName = () => {
    const fname =useSelector(stat=>state.lname)
  return (
    <div>FirstName</div>
  )
}

export default FirstName