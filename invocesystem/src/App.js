import githubLogo from './assets/fotoEliezerP.jpg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

import {
  RecoilRoot,
} from 'recoil';


function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <header className="App-header">
        <div className="flex-row">
          <h1>System Invoices</h1>
          <a
            className="App-link"
            href=""
            target="_blank"
            title="See Curricular Summary"
            rel="noopener noreferrer"
          >
            Developer Eliezer Polidor
          </a> &nbsp; | &nbsp;
          <a
            className="App-link"
            href="mailto:eliezerpolidor69@gmail.com" title="Send Email Eliezer Polidor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Email a Eliezer Polidor
          </a> &nbsp; | &nbsp;
          <a
            className="App-link"
            rel="noopener noreferrer"
          >
            <img  src={githubLogo} 
                  style={{ verticalAlign: 'bottom'}}
                  height='52px' 
                  width='52px'
                  title="Photo Eliezer Polidor" 
                  alt="Photo Eliezer Polidor" 
            />
          </a>
        </div>  
      </header> 
      <div className="App-body">
        <nav className="App-nav">
          <Link 
              style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}
              to="">
                Home
            </Link>
            <Link 
              style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}
              to="invoices">
                Invoices
            </Link>
            <Link 
            style={{ color:'lightblue', display: "block", margin: "0.5rem 0" }}          
            to="todoListRecoil">
              ToDo List
          </Link>
        </nav>
        <main className="App-content">
          <Outlet />
        </main>
      </div>
    </div>  
    </RecoilRoot>
  );
}

export default App;
