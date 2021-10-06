import { useState } from 'react';

import './App.css'

import Logo from './assets/Logo@0.75x.png'

import api from './services/api'

const host = "http://192.168.1.50"
const user = process.env.USER_IDFLEX
const pass = process.env.PASS_IDFLEX

function App() {

  const [session, setSession] = useState('')

  async function OpenDor (session){
      await api.post(host + '/execute_actions.fcgi?session=' + session, {
          actions: [ { action: "sec_box", parameters: "id=65793, reason=3" } ]
      })
  }

  async function requestSession(){
      await api.post(host + '/login.fcgi',{
          login: user,
          password: pass
      })
      .then((response) => {
          console.log(response.data.session)  
          OpenDor(response.data.session)
          setSession(response.data.session)

      })
      .catch(erro => console.log(erro))
  }

  return (
    <div className="App">
      <img src={Logo} alt="" />
      <button onClick={requestSession}>Open</button>
      <div className="session">
        <h3>Session:</h3>
        <h4>{session ? session : 'Error Getting Session'}</h4>
      </div>
    </div>
  );
}

export default App;
