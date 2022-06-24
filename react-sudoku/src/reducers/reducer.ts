import { AnyAction } from 'redux'
import { GRID, RECORD } from 'typings'
import { copyGrid, createFullGrid, getTotals, removeNumbers, compareArrays, timeDiff } from 'utils'
import { IReducer } from './interfaces'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
    switch (action.type) {
        case types.CREATE_GRID: {
            const solvedGrid = createFullGrid()
            const gridCopy = copyGrid(solvedGrid)
            const challengeGrid = removeNumbers(gridCopy)
            const workingGrid = copyGrid(challengeGrid)
            const totals = getTotals(workingGrid)
            return {
                ...state,
                challengeGrid,
                solvedGrid,
                workingGrid,
                totals,
                score: '',
                standings: [],
                startOfGame: new Date().toUTCString(),
                errors: 0,
                displaySaveModal: false
            }
        }
        case types.FULL_BLOCK: {
            if (state.workingGrid && state.solvedGrid) {
                console.log(state.workingGrid, state.solvedGrid)
                if (state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value && action.value !== 0) {
                    console.log('err 1')
                    if (state.errors !== undefined) {
                        console.log(state.errors++)
                        return { ...state, errors: state.errors++ }
                    }
                    return state
                }
                state.workingGrid[action.coords[0]][action.coords[1]] = action.value
                if (compareArrays(state.workingGrid, state.solvedGrid)) {
                    return { ...state, displaySaveModal: !state.displaySaveModal, score: timeDiff(state.startOfGame as string) }
                }
                const totals = getTotals(state.workingGrid)
                return { ...state, workingGrid: [...state.workingGrid] as GRID, totals: [...totals] }
            }
            return state
        }
        case types.SELECT_BLOCK:
            return { ...state, selectedBlock: action.coords }
        case types.SAVE_GAME:
            if (state.standings) {
                console.log(state, action.user, action.score)
                state.standings.push({ player: action.user, score: action.score, errors: state.errors } as RECORD)
                return state
            }
            return state
        default:
            return state
    }
}

export default reducer
