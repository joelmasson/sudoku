import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Card } from "components/styles";
import { RECORD } from "typings";

const Standings: FC = () => {
    const state = useSelector((records: any) => (
        records
    ))
    return (
        <Card>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Score</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    {state.standings &&
                        state.standings.map((record: RECORD, i: number) => (
                            <tr key={i}>
                                <td>{record.player}</td>
                                <td>{record.score}</td>
                                <td>{record.errors}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Card>
    )
}

export default Standings