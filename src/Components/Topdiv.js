import React from 'react'
import { Link } from 'react-router-dom'

export default function Topdiv() {
  return (
    <div className='topdiv'>
      {/* <font>Support Ukraine 🇺🇦</font>
        <font className="ukrain">&nbsp;Help Provide Humanitarian Aid to Ukraine.</font> */}
        <Link to="/">Home</Link>
    </div>
  )
}
