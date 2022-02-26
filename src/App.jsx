import { useState, useEffect } from 'react'
import { sendPing, getTopHosts } from './services/ping.service'

import { HostList } from './cmps/HostList';

import './App.css';

function App() {
  const [pingSettings, setPingSettings] = useState({ host: '', count: 1 })
  const [pingReply, setPingReply] = useState('')
  const { host, count } = pingSettings
  const [topHosts, setTopHosts] = useState(null)

  useEffect(() => {
    console.log('hey')
    async function getHosts() {
      const hosts = await getTopHosts()
      console.log('got hosts', hosts)
      setTopHosts(hosts)
    }
    getHosts()
  }, [])

  const handleChange = ev => {
    const { name, value } = ev.target
    setPingSettings({ ...pingSettings, [name]: value })
  }

  const handleSubmit = async ev => {
    ev.preventDefault()
    const res = await sendPing({ ...pingSettings })
    setPingReply(res)
  }

  return (
    <div className="App">
      <h1>Let's ping!</h1>
      <form className='ping-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="host">Host:</label>
          <input type='text' name='host' id='host' value={host} required onChange={handleChange} />
        </div>
        <div className='input-container'>
          <label htmlFor='count'>Count:</label>
          <input type='range' name='count' id='count' value={count} min='1' max='5' required onChange={handleChange} />
          <span>{count}</span>
        </div>
        <div className='input-container'>
          <label htmlFor='output'>Output:</label>
          <textarea name='output' id='output' readOnly value={pingReply}></textarea>
        </div>
        <button type='submit'>Run</button>
      </form>
      {
        topHosts ?
          <HostList hosts={topHosts} /> : <div>Loading...</div>
      }
    </div>
  );
}

export default App;
