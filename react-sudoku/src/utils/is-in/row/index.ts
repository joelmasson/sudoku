import { GRID, NUMBERS } from 'typings'

interface IInput {
    grid: GRID,
    row: number,
    value: NUMBERS
}
/**
 * returns true id the value is already in the current grid row
 * @param input 9x9 grid, row index and value
 * @returns boolean
 */
function isInRow({ grid, row, value }: IInput): boolean {
    return grid[row].includes(value)
}

export default isInRow

