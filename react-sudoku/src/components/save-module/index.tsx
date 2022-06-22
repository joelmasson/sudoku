import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { IReducer, saveScore } from "reducers";
import { Button } from 'components'
import { RECORD, SCOREBOARD } from "typings";

interface IState {
    startOfGame?: string,
    displaySaveModal?: boolean,
    errors?: number,
    scoreboard?: SCOREBOARD
}

const SaveModule: FC = () => {
    const state = useSelector<IReducer, IState>(({ startOfGame, displaySaveModal, errors, scoreboard }) => (
        { startOfGame, displaySaveModal, errors, scoreboard }
    ))
    const [score, setScore] = useState('0');
    const [scoreSaved, setScoreSaved] = useState(false)
    const [user, setUser] = useState('')
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const saveRecord = useCallback(() => {
        dispatch(saveScore(user, score))
        setScoreSaved(true)
    }, [dispatch, state.scoreboard])
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
        setScore(lenghtOfGame())
    }, [state.startOfGame])
    function updateUser(event: any) {
        setUser(event.target.value)
    }
    return (
        <div>
            <input type="text" value={user} onChange={updateUser} />
            <span>TIME: {score}</span>
            <span>ERRORS: {state.errors}</span>
            <Button onClick={saveRecord} disabled={scoreSaved}>Save Score</Button>
        </div>
    )
}

export default SaveModule