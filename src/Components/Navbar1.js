import { Link } from 'react-router-dom'
import React from 'react'
import logo192 from './logo192.png'

export default function Navbar1(props) {
 
  return (
    
    <div className='navbar1'>
      <Link to="#" className='a1'>
      <img alt="xyz" src={logo192} height="30px"> 
       </img>
        <span className='react'>
React
        </span>
      </Link>
        <nav>
            <Link to="/docs">
                  Docs
            </Link>
            <Link to="/tutorials">
               Tutorials
            </Link>
            <Link to="/blogs">
                Blogs
            </Link>
            <Link to="/community">
                Community
            </Link>
        </nav>
        <span className='navpart3'>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </span>
        <span>
          <div className='dorpdown'>
        <a className="dropdown-hrefggle" href="#" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/expenses">Action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/expenses">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/expenses">Something else here</a></li>
          </ul>
          </div>
        </span>
        <div className='navpart4'>
            <Link to="/" className='a2'>Version</Link>
            <Link to="/" className='a2'>Languages</Link>
            <Link to="/" className='a2'>GitHub</Link>
        </div>
        <div>
          <label className="switch mx-3">
  <input type="checkbox" onChange={props.togglemode}/>
  <span className="slider round"></span>
</label></div>
         

        </div>
   
    
  )
  }