import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Expenses from './Components/Expenses';
import Invoices from './Components/Invoices';
import Docs from './Components/Docs';
import Tutorial from './Components/Tutorial';
import Blogs from './Components/Blogs';
import Community from './Components/Community';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
     <Route path="docs" element={<Docs />} />
      <Route path="tutorials" element={<Tutorial />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="community" element={<Community />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
