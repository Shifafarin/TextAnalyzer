import React from 'react'
import Topdiv from './Topdiv'
import { useState } from 'react';
import List from './List';
export default function Docs() {
  const [services, setservices] = useState({ servin:[], servout:[] });
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { servin } = services;
    if (checked) {
      setservices({
        servin: [...servin, value],
        servout: [...servin, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setservices({
        servin: servin.filter((e) => e !== value),
        servout: servin.filter((e) => e !== value),
      });
    }
   
    
  };
  return (
    <div>
      <Topdiv/>
      <div className="container my-5">
      <h1>Services</h1>
      <br></br>
      <h5>Please select the Services:</h5>
        <table>
          <tr>
            <td>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Web Development" id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
        Web Development
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Magento2 Development" id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
        Magento2 Development
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="DevOps Services" id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
        DevOps Services
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Plugin Development" id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
        Plugin Development
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Hosting Services" id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
        Hosting Services
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="Golang Programming Partner" id="flexCheckDefault" onChange={handleChange}/>
        <label class="form-check-label" for="flexCheckDefault">
        Golang Programming Partner
        </label>
      </div></td>
            <td><div>
              <List val={services.servout}/>
              </div></td>
          </tr>
        </table>
      
      
      {/* <textarea
                className="form-control text"
                name="response"
                value={services.servout}
                placeholder="The checkbox values will be displayed here "
                id="floatingTextarea2"
                style={{ height: "150px" }}
                // onChange={handleChange}
              ></textarea> */}
              
      </div>
    </div>
  )
}
