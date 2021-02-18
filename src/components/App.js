import React, {  useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {
    let date = new Date().toLocaleTimeString();
    const [time, setTime] = useState(date);

    const updateTime = () => {
        date = new Date().toLocaleTimeString();
        setTime(date);
    };
    useEffect(()=>{
        let interval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(interval);
        }
    },[])
    
    return (
            <div className="Clock">
                <h3 id="time">{time}</h3>
            </div>
    );
}

export default App;
