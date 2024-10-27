import React, {useState} from "react";
import Forward from "../Forward";
import Backward from "../Backward";
import "./style.css";

const Data=[
    {
        title:"How we Meet",
        content:"Its look Like Garba Night rather Dandia Night 😆😆 ",
        img:"./1.jpg"
    },
    {
        title:"When We Fight For the First Time",
        content:"We became friends over time, and that night we fought for almost 4 hours until 2 AM. 🥹 She constantly made me persuade her that night 🤧",
        img:"./2.jpg"
    },
    {
        title:"I went for Pune in January for Intership",
        content:"This phase came, and we became closer to each other over time, spending more time together with this girl who didn't speak even a single word. 🙃 I constantly told her to make me a girlfriend from among her friends, and she got irritated by this. 🥲",
        img:"./3.jpg"
    },
    {
        title:"During The Valentine Period ",
        content:"This time, I realized that this is the girl I should hold hands with and walk with her until my she hold's with me. On February 14th, we both confessed ❤️ our feelings for each other, and we entered into a relationship; she became my girlfriend. 🥰 ",
        img:"./4.jpg"
    },
    {
        title:"Golden Period Of Relationship ",
        content:"During this period, we became closer to each other, sharing each other's happiness and sad moments, and we both are enjoying the `Pagalpanti`😉 ....  ",
        img:"./5.jpg"
    }
];

function Main() {
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0); 

    const handleToggle = () => {
        setIsForward(!isForward);
        setIndex((prevIndex) => (prevIndex + 1) % Data.length); 
        
    };

    const currentData = Data[index]; 

    return (
        <div>
            {isForward ? (
                <Forward
                    title={currentData.title}
                    content={currentData.content}
                    image={currentData.img} 
                    onClick={handleToggle}
                />
            ) : (
                <Backward
                    title={currentData.title}
                    content={currentData.content}
                    image={currentData.img} 
                    onClick={handleToggle}
                />
            )}
        </div>
    );
}
export default Main;