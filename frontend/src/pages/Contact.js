import React from "react";
import "./styles/contact.css"

class Contact extends React.Component{
    render(){
        return(
            <div className="wrapper-social">
               <p id="social">We are in social networks</p>
               <a href="https://t.me/Urzumoov"><i>Telegram</i></a>
               <br />
               <a href="https://github.com/Xudesh"><i>GitHub</i></a>
               <br />
               <a href="https://twitter.com/Xudesh"><i>TwitterX</i></a>

            </div>
        )
    }
}

export default Contact;