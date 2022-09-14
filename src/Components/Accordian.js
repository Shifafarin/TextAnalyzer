import React from 'react'
import { useState } from 'react'

export default function Accordian(props) {

  const [mystyle,setstyle]=useState({
    color:'black',
    backgroundColor:'white'
  })

 function toggleStyle(){
    if(mystyle.color==='black')
    {
      setstyle(
        {
          color:'white',
          backgroundColor:'black'
        }
      )
      setbtntxt('Enable Light mode')
    }
    else{
      setstyle(
        {
          color:'black',
          backgroundColor:'white'
        }
      )
      setbtntxt('Enable Dark mode')
    }
  }
    
  const [btntxt,setbtntxt]=useState('Enable dark mode')


 
  return (
    <div>
        <h1 className={`${props.mode}`}>React</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne" style={mystyle}>
      <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Declarative
      </button>
    </h2>
    <div style={mystyle} id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.
      </div>
    </div>
  </div>
  <div style={mystyle} className="accordion-item">
    <h2 style={mystyle} className="accordion-header" id="headingTwo">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Component-Based
      </button>
    </h2>
    <div style={mystyle} id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</div>
    </div>
  </div>
  <div style={mystyle} className="accordion-item">
    <h2 style={mystyle} className="accordion-header" id="headingThree">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Learn Once, Write Anywhere
      </button>
    </h2>
    <div style={mystyle} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
      We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.</div>
    </div>
  </div>
</div>
<button className='btn btn-primary my-3' style={{width:'5cm'}} onClick={toggleStyle}>{btntxt}</button>
    </div>
  )
}
