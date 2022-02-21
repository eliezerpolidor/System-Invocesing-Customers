import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home.js';
import TodoListRecoil from "./routes/todoListRecoil";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

import { 
  BrowserRouter,
  Routes,
  Route ,
  Navigate
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/invocesystem">
      <Routes>
        <Route exact path='/' element={<App />} >
          <Route index
                 element={<Home />}
          />
          
          <Route path='todoListRecoil' element={<TodoListRecoil />} />
          <Route path='invoices' element={<Invoices />} >
            <Route index
              element={
                <main>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='*'
              element={
                <main>
                  <p>There's nothing here!</p>
                </main>
              }>
          </Route>  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
