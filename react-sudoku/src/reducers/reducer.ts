import { AnyAction } from 'redux'
import { GRID } from 'typings'
import { copyGrid, createFullGrid, getTotals, removeNumbers, compareArrays } from 'utils'
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
                totals
            }
        }
        case types.FULL_BLOCK: {
            if (state.workingGrid && state.solvedGrid) {
                if (state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value) {
                    alert('incorrect option')
                    return state
                }
                state.workingGrid[action.coords[0]][action.coords[1]] = action.value
                if (compareArrays(state.workingGrid, state.solvedGrid)) {
                    alert('puzzle completed')
                }
                const totals = getTotals(state.workingGrid)
                return { ...state, workingGrid: [...state.workingGrid] as GRID, totals: [...totals] }
            }
            return state
        }
        case types.SELECT_BLOCK:
            return { ...state, selectedBlock: action.coords }

        default:
            return state
    }
}

export default reducer
