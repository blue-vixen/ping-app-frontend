import { useState, useEffect } from 'react'
import { getHosts, sendPing } from './services/ping.service'

import { HostList } from './cmps/HostList';
import { PingForm } from './cmps/PingForm';
import { OutputArea } from './cmps/OutputArea';


import './App.css';

function App() {
  const [topHosts, setTopHosts] = useState(null)
  const [pingReply, setPingReply] = useState(undefined)
  const [isPingReqRunning, setIsPingReqRunning] = useState(false)

  const handlePing = async (pingSettings) => {
    setIsPingReqRunning(true)
    const res = await sendPing({ ...pingSettings })
    setIsPingReqRunning(false)
    const reply = res.requests.pop()
    setPingReply(reply)
  }


  useEffect(() => {
    async function onGetHosts() {
      const hosts = await getHosts()
      setTopHosts(hosts)
    }
    onGetHosts()
  }, [pingReply])

  return (
    <div className="App">
      <h1>Let's ping!</h1>
      <PingForm handlePing={handlePing} isPingReqRunning={isPingReqRunning} />
      <OutputArea pingReply={pingReply} isPingReqRunning={isPingReqRunning} />
      {
        topHosts ?
          <HostList hosts={topHosts} /> : <div>Loading...</div>
      }
    </div>
  );
}

export default App;
