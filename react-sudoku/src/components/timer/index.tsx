import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IReducer } from "reducers";

interface IState {
    startOfGame?: string,
}

const Timer: FC = () => {
    const state = useSelector<IReducer, IState>(({ startOfGame }) => (
        { startOfGame }
    ))
    const [time, setTime] = useState('0');
    useEffect(() => {
        function lenghtOfGame() {
            if (state.startOfGame) {
                let initalStart = new Date(state.startOfGame)
                let endOfGame = new Date()
                let delta = Math.abs(endOfGame.getTime() - initalStart.getTime()) / 100;
                const days = Math.floor(delta / 86400);
                delta -= days * 86400;
                const hours = Math.floor(delta / 3600) % 24;
                delta -= hours * 3600;
                const minutes = Math.floor(delta / 60) % 60;
                delta -= minutes * 60;
                const seconds = Math.floor(delta % 60);
                return days + ':' + hours + ':' + minutes + ':' + seconds
            }
            return 'N/A'
        }
        // setTime(lenghtOfGame())
        let timer1 = setInterval(() => setTime(lenghtOfGame()), 1000);
        return () => {
            clearInterval(timer1);
        };
    }, [])
    return (
        <div>
            <span>TIME: {time}</span>
        </div>
    )
}

export default Timer