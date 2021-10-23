import React from 'react';
import './index.css'

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitedBefore: localStorage.getItem('visitedBefore')
        }
    }

    componentDidMount() {
        if (!this.state.visitedBefore) {
            setTimeout(() => {
                document.getElementsByClassName('notification')[0].classList.toggle('show');
            }, 2000)
            setTimeout(() => {
                document.getElementsByClassName('notification')[0].classList.toggle('show');
            }, 10000)
            localStorage.setItem('visitedBefore', true)
        }
    }

    render() { 
        return (
            <div className="notification">
                <h3>Try refreshing the page!</h3>
            </div>
        )
    }
}
 
export default Notification;