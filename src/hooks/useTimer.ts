import {useState} from "react";

const useTimer = () => {

    const [expiryTime, setExpiryTime] = useState("15 aug 2022 18:00:00");
    const [countdownTime, setCountdownTime] = useState({
      countdownDays: 0,
      countdownHours: 0,
      countdownMinutes: 0,
      countdownSeconds: 0,
    });

    const timeInterval = setInterval(() => {
        const countdownDateTime = new Date(expiryTime).getTime();
        const currentTime = new Date().getTime();
        const remainingDayTime = countdownDateTime - currentTime;
        const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
        const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const totalSeconds = Math.floor(
        (remainingDayTime % (1000 * 60)) / 1000
        );

        const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
        };

        setCountdownTime(runningCountdownTime);

        if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime('false');
        }
    }, 1000);

    return countdownTime
};

export default useTimer; 

