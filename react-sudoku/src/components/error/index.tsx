import React, { FC } from "react";
import { useSelector } from "react-redux";
import { IReducer } from "reducers";

interface IState {
    errors?: number
}

const Errors: FC = () => {
    const state = useSelector<IReducer, IState>(({ errors }) => (
        { errors }
    ))
    return (
        <div>
            <span>ERRORS: {state.errors}</span>
        </div>
    )
}

export default Errors