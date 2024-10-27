import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate("/main");
    };

    return (
        <div className="home-container">
            <div className="heart">
                <p className="heart-text">Welcome Gunjan Sharma inside my ..</p>
                <button type="button" onClick={handleEnter}>Enter</button>
            </div>
        </div>
    );
}

export default Home;
