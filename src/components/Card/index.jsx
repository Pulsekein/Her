import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt="Card" className="card-image" />
        </div>
    );
}

export default Card;
