import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { IReducer, saveScore } from "reducers";
import { Button } from 'components'
import { RECORD, STANDINGS } from "typings";

interface IState {
    score?: string,
    displaySaveModal?: boolean,
    errors?: number,
    standings?: STANDINGS
}

const SaveModule: FC = () => {
    const state = useSelector<IReducer, IState>(({ score, displaySaveModal, errors, standings }) => (
        { score, displaySaveModal, errors, standings }
    ))
    const [scoreSaved, setScoreSaved] = useState(false)
    const [user, setUser] = useState('')
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const saveRecord = useCallback(() => {
        dispatch(saveScore(user, state.score as string))
        setScoreSaved(true)
    }, [dispatch, state.score])
    function updateUser(event: any) {
        setUser(event.target.value)
    }
    return (
        <div>
            <input type="text" value={user} onChange={updateUser} />
            <span>TIME: {state.score}</span>
            <span>ERRORS: {state.errors}</span>
            <Button onClick={saveRecord} disabled={scoreSaved}>Save Score</Button>
        </div>
    )
}

export default SaveModule

