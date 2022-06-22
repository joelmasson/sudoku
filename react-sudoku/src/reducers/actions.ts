import { Action, AnyAction } from 'redux'

import { BLOCK_COORDS, NUMBERS, RECORD } from 'typings'

import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({ coords, type: types.FULL_BLOCK, value })

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
    coords,
    type: types.SELECT_BLOCK,
})

export const solveGame = (): Action => ({ type: types.SOLVE_GAME })

export const saveScore = (user: string, score: string): AnyAction => ({ type: types.SAVE_GAME, user, score })
