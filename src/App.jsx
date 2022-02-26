import { useState, useEffect, createContext } from 'react'
import { getTopHosts } from './services/ping.service'

import { HostList } from './cmps/HostList';
import { PingForm } from './cmps/PingForm';
import { OutputArea } from './cmps/OutputArea';


import './App.css';

function App() {
  const [topHosts, setTopHosts] = useState(null)
  const [pingReply, setPingReply] = useState(undefined)

  const handlePingReply = (res) => {
    setPingReply(res)
  }

  useEffect(() => {
    console.log('getting hosts')
    async function getHosts() {
      const hosts = await getTopHosts()
      setTopHosts(hosts)
    }
    getHosts()
  }, [pingReply])

  return (
    <div className="App">
      <h1>Let's ping!</h1>
      <PingForm handlePingReply={handlePingReply} />
      <OutputArea pingReply={pingReply} />
      {
        topHosts ?
          <HostList hosts={topHosts} /> : <div>Loading...</div>
      }
    </div>
  );
}

export default App;
