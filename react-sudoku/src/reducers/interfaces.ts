import { GRID, BLOCK_COORDS, TOTALS, RECORD, SCOREBOARD } from "typings";

export interface IReducer {
    challengeGrid?: GRID,
    selectedBlock?: BLOCK_COORDS,
    solvedGrid?: GRID,
    workingGrid?: GRID,
    totals?: TOTALS,
    displaySaveModal?: boolean,
    startOfGame?: string,
    errors?: number,
    score?: string,
    scoreboard?: SCOREBOARD
}