import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";

import { BLOCK_COORDS, N, NUMBERS } from "typings";
import { fillBlock, IReducer } from 'reducers'
import { Button } from 'components'

interface IProps {
    label: any
    value: NUMBERS
}

interface IState {
    selectedBlock?: BLOCK_COORDS,
    selectedValue: N
}

const NumberedButton: FC<IProps> = ({ label, value }) => {
    console.log(label, value)
    const state = useSelector<IReducer, IState>(({ selectedBlock, workingGrid }) => ({
        selectedBlock,
        selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0
    }))
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const fill = useCallback(() => {
        if (state.selectedBlock && state.selectedValue === 0) {
            dispatch(fillBlock(value, state.selectedBlock))
        }
    }, [dispatch, state.selectedBlock, state.selectedValue, value])
    const active = useCallback(() => {
        if (value === 9) return true
        return false
    }, [dispatch])
    console.log(active())
    return (
        <Button onClick={fill} disabled={active()}>{label}</Button>
    )
}

export default NumberedButton