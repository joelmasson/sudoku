import React, { FC } from 'react';
import { Card, NewButton, Grid, Numbers, Errors, Timer } from 'components';

const Game: FC = () => {
    return (
        <Card>
            <h2>Press the button to start a new game.</h2>
            <NewButton />
        </Card>
    )
}

export default Game