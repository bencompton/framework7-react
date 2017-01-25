import * as React from 'react';

import {PickerModal, Toolbar, NavLeft, NavRight, Link, ContentBlock} from 'framework7-react';

export interface IPickerModalDemoProps {
    opened: boolean;
    closePicker: () => void;
}

export const PickerModalDemo = (props: IPickerModalDemoProps) => {
    return (
        <PickerModal opened={props.opened}>
            <Toolbar>
                <NavLeft />
                <NavRight>
                    <Link onClick={props.closePicker}>Done</Link>      
                </NavRight>
            </Toolbar>
            <ContentBlock>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iste qui architecto recusandae veniam delectus vero libero illo aliquid, fuga ratione vel facilis iure est fugiat sunt nihil, consectetur veritatis.</p>
            </ContentBlock>
        </PickerModal>
    );
};