import React, {  useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

    const [time, setTime] = useState("");

    var date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeZone = "AM";
    if (hrs > 12) {
      hrs = hrs - 12;
      timeZone = "PM";
    }
    if (hrs === 0 && timeZone === "AM") hrs = 12;
    const updateTime = () => {
      sec = Number(sec) + 1;
      if (sec === 60) {
        sec = 0;
        min = Number(min) + 1;
        if (min === 60) {
          min = 0;
          hrs = Number(hrs) + 1;
          if (hrs === 12 && timeZone === "PM") {
            // hrs = 0;
            timeZone = "AM";
          } else if (hrs === 12 && timeZone === "AM") {
            timeZone = "PM";
          }
          if (hrs > 12 && timeZone === "PM") hrs = hrs - 12;
        }
      }
      if (min < 10) min = "0" + Number(min);
      if (sec < 10) sec = "0" + Number(sec);
      setTime(hrs + ":" + min + ":" + sec + " " + timeZone);
    };
    useEffect(() => {
      if (min < 10) min = "0" + min;
      if (sec < 10) sec = "0" + sec;
      setTime(hrs + ":" + min + ":" + sec + " " + timeZone);
      let clearSetInterval = setInterval(updateTime, 1000);
      return () => {
        clearInterval(clearSetInterval);
      };
    }, []); return (
            <div className="Clock">
                <h3 id="time">{time}</h3>
            </div>
    );
}

export default App;
