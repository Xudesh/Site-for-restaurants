import React from "react";
import "./styles/restaurant.css"

class Restaurant extends React.Component{
    render(){
        return(
            <div className="address_market">
                <a href="https://www.google.com/maps/place/Palisades+Village/@34.0476393,-118.5274437,17z/data=!4m14!1m7!3m6!1s0x80c2a37a471edf21:0x310e7b73f4553fe5!2sPalisades+Village!8m2!3d34.0476349!4d-118.5248688!16s%2Fg%2F11h14rmtc!3m5!1s0x80c2a37a471edf21:0x310e7b73f4553fe5!8m2!3d34.0476349!4d-118.5248688!16s%2Fg%2F11h14rmtc?authuser=0&entry=ttu"><img className="address_image"  src={ require("../img/GPS.png")} /></a>
                <h2 className="address_title">Address:</h2>
                <p className="address">Our restaurant is located in the state of Los Angeles "ROCK Street" "3 block" "212 establishments"</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        )
    }
}

export default Restaurant;