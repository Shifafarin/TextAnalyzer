import React from 'react'
import Topdiv from './Topdiv'

export default function Tutorial() {
  return (
    <div>
      <Topdiv/>
      <br></br>
        <br></br>
      <div className='container'>
      <h1>Tutorial</h1>
      <div>
<h5>Introduction</h5>
<p>Check out the completed version of the app here.</p>

<p>
React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.

If you're just getting started with React generally, we recommend you follow the excellent Getting Started guide in the official docs. There is plenty of information there to get you up and running. React Router is compatible with React >= 16.8.

We'll keep this tutorial quick and to the point. By the end you'll know the APIs you deal with day-to-day with React Router. After that, you can dig into some of the other docs to get a deeper understanding.
</p>
<h5>While building a little bookkeeping app we'll cover:</h5>

<ol>
  <li>Configuring Routes</li>
  <li>Navigating with Link</li>
  <li>Creating Links with active styling</li>
  <li>Using Nested Routes for Layout</li>
  <li>Navigating programmatically</li>
  <li>Using URL params for data loading</li>
  <li>Using URL Search params</li>
  <li>Creating your own behaviors through composition</li>
  <li>Server Rendering</li>
</ol>
</div>
</div>
    </div>
  )
}
