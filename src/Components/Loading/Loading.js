import React from 'react'

function Loading() {
    return (
        <div style={{ width: '120px', margin: 'auto', textAlign: 'center', marginTop: '30%' }}>
            <div class="spinner-grow spinner-grow-sm" role="status" style={{ marginRight: 5 }}>
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status" style={{ marginRight: 5 }}>
                <span class="visually-hidden">Loading...</span>
            </div><div class="spinner-grow spinner-grow-sm" role="status" style={{ marginRight: 5 }}>
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading