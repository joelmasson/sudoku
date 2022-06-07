import { GRID } from "typings";
import global from "global";
import { copyGrid, getRandomIndex, solveGrid } from "utils";

/**
 * Remove numbers from a grid to set up game
 * @param grid 9x9 sudoku grid
 * @param attempts Number of attempts to solve (higher == more difficult, default 5)
 * @returns 
 */
function removeNumbers(grid: GRID, attempts = 5) {
    while (attempts > 0) {
        let row = getRandomIndex()
        let col = getRandomIndex()

        while (grid[row][col] === 0) {
            row = getRandomIndex()
            col = getRandomIndex()
        }

        const backup = grid[row][col]
        grid[row][col] = 0

        const gridCopy = copyGrid(grid)
        global.counter = 0

        solveGrid(gridCopy)

        if (global.counter !== 1) {
            grid[row][col] = backup
            attempts--
        }
    }
    return grid
}

export default removeNumbers