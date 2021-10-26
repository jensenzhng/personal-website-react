import React from 'react';
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitedBefore: localStorage.getItem('visitedBefore')
        }
    }

    componentDidMount() {
        if (!this.state.visitedBefore) {
            toast.dark('Try refreshing the page for a new background! 😃', {
                position: "top-right",
                autoClose: 8000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                });
            localStorage.setItem('visitedBefore', true)
        }
    }

    render() { 
        return (
            <div className="Toastify">
                 <ToastContainer />
            </div>
        )
    }
}
 
export default Notification;