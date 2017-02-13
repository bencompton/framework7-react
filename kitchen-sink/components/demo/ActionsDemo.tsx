import * as React from 'react';

import {Actions, ActionsGroup, ActionsLabel, ActionsButton} from 'framework7-react';

export interface IActionsDemoProps extends React.Props<any> {
    opened: boolean;
    onActionsClosed: () => void;
}

export const ActionsDemo = (props: IActionsDemoProps) => {
    return (
        <Actions opened={props.opened} onActionsClosed={props.onActionsClosed}>
            <ActionsGroup>
                <ActionsLabel>Hello</ActionsLabel>
                <ActionsButton>Button 1</ActionsButton>
                <ActionsButton>Button 2</ActionsButton>
            </ActionsGroup>
            <ActionsGroup>
                <ActionsButton color="red" bold>Cancel</ActionsButton>
            </ActionsGroup>
        </Actions>
    );
};