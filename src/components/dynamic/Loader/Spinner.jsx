import React from 'react'
import './spinner.css'

const Spinner = () => {
    return (
        <div>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner