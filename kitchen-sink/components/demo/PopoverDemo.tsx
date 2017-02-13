import * as React from 'react';

import {Popover, ContentBlock} from 'framework7-react';

export interface IPopoverDemoProps {
    id: string;
}

export const PopoverDemo = (props: IPopoverDemoProps) => {
    return (
        <Popover id={props.id} style={{width: '200px'}}>
            <ContentBlock>
                <p>Hello, I'm a Popover</p>
            </ContentBlock>
        </Popover>
    );
};