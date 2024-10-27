import React from "react";
import Card from "../Card";
import "./style.css";

function Backward(props){
    return (
        <div className="backward-container">
            <div className="text-container">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className="card-container">
                <Card image={props.image} />
            </div>
            <button className="next-button" onClick={props.onClick}>
                Next
            </button>
        </div>
    );
}
export default Backward;