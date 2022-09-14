import React from 'react'

export default function List(props) {

const val = props.val;
  const list = val.map((val,index) =>
   <li key={index}>{val}</li>
  );
  return (
    <ul>{list}</ul>
  );
   
  
}
