import React, { useState } from 'react'
import { sendPing } from '../services/ping.service'

export function PingForm({ handlePingReply }) {
    const [pingSettings, setPingSettings] = useState({ host: '', count: 1 })
    const { host, count } = pingSettings


    const handleSubmit = async ev => {
        ev.preventDefault()
        const res = await sendPing({ ...pingSettings })
        handlePingReply(res)
    }


    const handleChange = ev => {
        const { name, value } = ev.target
        setPingSettings({ ...pingSettings, [name]: value })
    }

    return (
        <div>
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
                <button type='submit'>Run</button>
            </form>
        </div>
    )
}
