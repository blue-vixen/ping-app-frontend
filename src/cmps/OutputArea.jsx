import React from 'react'

export function OutputArea({ pingReply }) {
    return (
        <div className='output-area'>
            <div className='input-container'>
                <label htmlFor='output'>Output:</label>
                <textarea name='output' id='output' readOnly value={pingReply}></textarea>
            </div>
        </div >
    )
}
