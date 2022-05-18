import { GRID, NUMBERS } from 'typings'
import { shuffle } from 'utils'

const gridExample: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const number: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
            shuffle(number)
            break;
        } else { }

    }

    grid[row][col] = 0
}

export default fillGrid