import { GRID, N } from "typings";
/**
 * Function to check if the all of a specific number has been used
 * @param grid : 9x9 array consisting of values from 1-9;
 * @param value : The number that needs to be checked;
 * @returns Boolean
 */
function disableButton(grid: GRID, value: N): boolean {
    let counter = 0
    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++) if (grid[i][j] === value) counter++
    if (counter === 9) return true
    return false
}

export default disableButton