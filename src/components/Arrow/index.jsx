import React from 'react';
import './index.css'

class Arrow extends React.Component {
    render() {
        return (
            <div className="arrow">
                <div className="scroll">
                    <h2>↓ (scroll)</h2>
                </div>
            </div>
        )
    }
}

export default Arrow;