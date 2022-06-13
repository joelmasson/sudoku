import { GRID, BLOCK_COORDS, TOTALS } from "typings";

export interface IReducer {
    challengeGrid?: GRID,
    selectedBlock?: BLOCK_COORDS,
    solvedGrid?: GRID,
    workingGrid?: GRID,
    totals?: TOTALS
}