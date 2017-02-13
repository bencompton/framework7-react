import * as React from 'react';

import {Popup, View, Pages, Page, Navbar, NavRight, Link, ContentBlock} from 'framework7-react';

export interface IPopupDemoProps {
    opened: boolean;
    closePopup: () => void;
}

export const PopupDemo = (props: IPopupDemoProps) => {
    return (
        <Popup opened={props.opened} onPopupClosed={props.closePopup}>
            <View>
                <Pages>
                    <Page navbarFixed>
                        <Navbar title="Demo Popup">
                            <NavRight>
                                <Link onClick={props.closePopup}>Close</Link>
                            </NavRight>
                        </Navbar>

                        <ContentBlock>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis iste qui architecto recusandae veniam delectus vero libero illo aliquid, fuga ratione vel facilis iure est fugiat sunt nihil, consectetur veritatis.</p>
                            <p>Itaque impedit, nam, sed reprehenderit quaerat commodi veritatis ducimus eos nisi, at aliquam dolorum alias optio natus. Sit voluptate aperiam, cupiditate repellat quod fugiat non doloribus eveniet dolorem fugit nihil.</p>
                            <p>Error cumque sunt dolorem aut, similique accusantium delectus. Minima, natus. Doloremque ratione veniam cupiditate modi aspernatur debitis possimus iure id delectus! Totam eveniet, impedit minus deserunt aliquid facere laboriosam dignissimos.</p>
                            <p>Aliquid autem saepe sit cumque odit nihil eius consectetur impedit accusantium sunt, repudiandae quaerat cum! Esse autem ipsum aliquam, distinctio laborum excepturi facilis fuga vitae atque iusto eligendi, explicabo corporis.</p>
                            <p>Necessitatibus minima quidem fugit corporis reprehenderit saepe facilis perspiciatis sit, consectetur nulla officia, pariatur accusantium quas voluptas. Illum placeat eligendi dolor nihil libero culpa, ex quas voluptas deleniti, unde id.</p>
                        </ContentBlock>
                    </Page>
                </Pages>
            </View>
        </Popup>
    );
};