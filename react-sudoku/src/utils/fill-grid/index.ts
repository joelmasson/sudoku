import { GRID, NUMBERS } from 'typings'
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare, shuffle } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * 
 * A backtracking / recusive function to check all possible combinations until a soltuion is found
 * @param grid : 9x9 sudoku grtid ;
 */
function fillGrid(grid: GRID) {
    let row = 0;
    let col = 0;

    for (let i = 0; i < 81; i++) {
        // to be able to inspect the value in the block
        row = Math.floor(i / 9);
        col = i % 9

        if (grid[row][col] === 0) {
            shuffle(numbers)
            for (const value of numbers) {
                // is it not in grid row
                if (!isInRow({ grid, row, value })) {
                    // is it not in gird col
                    if (!isInCol({ grid, col, value })) {
                        // is if not in square
                        const square = identifySquare({ col, grid, row })
                        if (!isInSquare({ square, value })) {
                            grid[row][col] = value
                            // check grid if full if yes return true
                            if (checkGrid(grid)) return true
                            // otherwise run fillGrid(grid)
                            else if (fillGrid(grid)) return true
                        }
                    }
                }
            }
            break;
        } else { }
    }
    grid[row][col] = 0
}

export default fillGrid