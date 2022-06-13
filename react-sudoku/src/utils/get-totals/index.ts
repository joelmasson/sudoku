import { GRID, TOTALS } from "typings";
/**
 * Function to check if the grid is full
 * @param grid : 9x9 array consisting of values from 1-9;
 * @returns 
 */
function getTotals(grid: GRID): TOTALS {
    let totals: TOTALS = [{ 1: 0 }, { 2: 0 }, { 3: 0 }, { 4: 0 }, { 5: 0 }, { 6: 0 }, { 7: 0 }, { 8: 0 }, { 9: 0 }]
    for (let i = 0; i < 9; i++)
        totals.forEach(element => {
            let key: any = parseInt(Object.keys(element)[0])
            if (grid[i].includes(key)) {
                element[key]++
            }
        });
    return totals
}

export default getTotals