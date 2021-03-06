import React, { FC } from 'react';
import { Card, NewButton, Grid, Numbers, Errors, Timer } from 'components';

const Game: FC = () => {
    return (
        <Card>
            <NewButton />
            <div>
                <Timer />
                <Errors />
            </div>
            <Grid />
            <Numbers />
        </Card>
    )
}

export default Game