import React, { Component } from 'react';
import './index.css';

class BallCursor extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          mouseX: 0,
          mouseY: 0,
          trailingX: 0,
          trailingY: 0,
          moving: false,
          timer: null
        };
        this.cursor = React.createRef();
        this.cursorTrailing = React.createRef();
        this.animationFrame = null;
      }
      
      componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove);
        this.moveCursor();
      }
      
      componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove)
        cancelAnimationFrame(this.animationFrame);
      }
      
      onMouseMove = (evt) => {
        clearTimeout(this.state.timer);
        this.setState({moving: true})

        const { clientX, clientY } = evt;
        this.setState({
          mouseX: clientX,
          mouseY: clientY,
        });

        this.setState({timer: setTimeout(() => {
                this.setState({moving: false})
            }, 500)
        });
      }
      
      moveCursor = () => {
        const { mouseX, mouseY, trailingX, trailingY } = this.state;
        const diffX = mouseX - trailingX;
        const diffY = mouseY - trailingY;
        //  Number in expression is coeficient of the delay. 10 for example. You can play with it. 
        this.setState({
          trailingX: trailingX + diffX / 10,
          trailingY: trailingY + diffY / 10,
        },
        () => {
        // Using refs and transform for better performance.
          this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          this.cursorTrailing.current.style.transform = `translate3d(${trailingX-10}px, ${trailingY-12}px, 0)`;
          this.animationFrame = requestAnimationFrame(this.moveCursor);
        });
      }
    
    render() {
        return (
            <><div className="cursors">
                <div
                    className="cursor"
                    ref={this.cursor} />
                <div
                    className='cursor'
                    ref={this.cursorTrailing}
                    style={this.state.moving ? {} : {opacity: '0'}} />
            </div></>
        )
    }
}
 
export default BallCursor;