import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
  import { createContext } from 'react';
  import "./index.css"
import App from './App.jsx'; 
const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context =createContext({isauthenticated:false});

const Compi=()=>{
  const [isauthenticated,setisauthenticated]=useState(false);
  const [loading,setloading]=useState(false);
  const [user,setuser]=useState({});

  return(
  <Context.Provider value={{isauthenticated,setisauthenticated,user,setuser,loading,setloading}}>
    <App/>
  </Context.Provider>
  );
}
root.render(
  <React.StrictMode>
    <Compi/>
  </React.StrictMode>
);