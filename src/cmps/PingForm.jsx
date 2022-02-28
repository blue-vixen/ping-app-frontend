import React, { useState } from 'react'

export function PingForm({ handlePing, isPingReqRunning }) {
    const [pingSettings, setPingSettings] = useState({ host: '', count: 1 })
    const { host, count } = pingSettings

    const handleSubmit = async ev => {
        ev.preventDefault()
        handlePing({ ...pingSettings })
    }

    const handleChange = ev => {
        const { name, value } = ev.target
        setPingSettings({ ...pingSettings, [name]: value })
    }

    return (
        <div className='form-container'>
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
                <button type='submit' disabled={isPingReqRunning ? true : false}>{isPingReqRunning ? 'Running' : 'Run'}</button>
            </form>
        </div>
    )
}
