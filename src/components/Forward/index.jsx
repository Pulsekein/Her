import React from "react";
import Card from "../Card";
import "./style.css";

function Forward(props) {
    return (
        <div className="forward-container">
            <div className="card-container">
                <Card image={props.image} />
            </div>
            <div className="text-container">
                <h2>{props.title}</h2>
                <p>
                    {props.content}
                </p>
            </div>

            <button className="next-button" onClick={props.onClick}>
                Next
            </button>
        </div>
    );
}

export default Forward;
