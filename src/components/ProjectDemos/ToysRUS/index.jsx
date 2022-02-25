import React from 'react';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Spotify from '../../Spotify';
import '../../../styles/main.css'
import '../index.css'
import toysrus from '../../../videos/toysrus.gif'
import privacy from '../../../images/privacy.png'
import { CodeBlock, dracula } from "react-code-blocks";

class ToysRUS extends React.Component {
    code = `let firstVisit = async() => {
        const config = {
            method: 'GET',
            url: 'https://www.toysrus.ca/en/home',
            jar: cookieJar,
            withCredentials: true,
            "headers": {
                ...
            }
        }
    
        let res = await axios(config)
            .catch(err => {
                console.log(err.response)
            });
    
        const $ = cheerio.load(res.data)
        let jscsrfToken = $('.js-csrf-token').val();
    
        return {
            'firstStatus': res.status,
            'jscsrfToken': jscsrfToken,
        }
    }`

    render() {
        return (
            <>
                <div className="back">
                    <Link to="/about"> <code> &lt; back to about </code> </Link>
                    <Spotify {...{side: 'right', hide: 'true'}}></Spotify>
                </div>
                <div className="description">
                    <div className="aurora">
                        <h1> ToysRUS Bot </h1>
                    </div>
                    <img src={toysrus} alt="" />
                    <h2>What is this?</h2>
                    <p>This is a script that attempts to buy a product off of ToysRUS. 
                        It might not seem practical, but the two main reasons I built this 
                        was to learn more about HTTP requests and how to spoof them with 
                        some amount of security involved as well as hoping to get a 
                        PS5 from the website :P</p>
                    <h2>How did I make it?</h2>
                    <p>I faced some hurdles in trying to make successful requests, but I got it in the end. 
                        I learned how to store session info across requests (cookies and cookie jar),
                        how to use the axios library to make requests, and how to use cheerio to parse the HTML.
                        Most requests also required a CSRF token, which I found by scraping the HTML and using in subsequent
                        requests. Overall, I learned a lot about spoofing basic HTTP requests.
                    </p>
                    <CodeBlock 
                        text={this.code}
                        language={'javascript'}
                        theme={dracula}
                    />
                    <p>For example, this is the first request that is carried out; it basically just visits the website to 
                        "establish a session", or in other words just generates the basic cookies needed to make other important
                        requests on the website like adding a product to the cart or submitting shipping information.
                    </p>
                    <img src={privacy} alt="" />
                    <h4>Using a test card, we got a decline!</h4>
                </div>
                <Footer />
            </>
        )
    }
}

export default ToysRUS;