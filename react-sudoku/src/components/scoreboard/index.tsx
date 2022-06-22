import React, { FC } from "react";
import { useSelector } from "react-redux";

import { RECORD } from "typings";

const Scoreboard: FC = () => {
    const state = useSelector((records: any) => (
        records
    ))
    console.log(state)
    return (
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {state.scoreboard &&
                    state.scoreboard.map((record: RECORD, i: number) => (
                        <tr key={i}>
                            <td>{record.player}</td>
                            <td>{record.score}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Scoreboard