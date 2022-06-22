import React, { FC } from "react"
import { useSelector } from "react-redux"
import { IReducer } from "reducers";

import { TOTALS } from 'typings'

import Button from './button'

import { Container } from "./styles"

interface IState {
    totals?: TOTALS
}

const Numbers: FC = () => {
    const totals = useSelector<IReducer, IState>((totals) => (
        totals
    )).totals
    return (
        <Container>
            {totals?.map((value, i) => (
                <Button key={i} label={Object.keys(value)[0]} value={Object.values(value)[0]} />
            ))}
        </Container>
    )
}
export default Numbers