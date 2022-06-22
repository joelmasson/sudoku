import { Card, NewButton, Grid, Numbers } from 'components';
import React, { FC } from 'react';


const Game: FC = () => {
    return (
        <Card>
            <NewButton />
            <Grid />
            <Numbers />
        </Card>
    )
}

export default Game