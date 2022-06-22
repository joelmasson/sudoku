import { GRID, BLOCK_COORDS, TOTALS, STANDINGS } from "typings";

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
    standings?: STANDINGS
}