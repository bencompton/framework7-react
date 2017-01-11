import * as React from 'react';
import {Page, Navbar, List, ListGroup, ListItem} from 'framework7-react';

const contacts = {
    'A': [
        'Aaron',
        'Abbie',
        'Adam',
        'Adele',
        'Agatha',
        'Agnes',
        'Albert',
        'Alexander'
    ],
    'B': [
        'Bailey',
        'Barclay',
        'Bartolo',
        'Bellamy',
        'Belle',
        'Benjamin'
    ],
    'C': [
        'Caiden',
        'Calvin',
        'Candy',
        'Carl',
        'Cherilyn',
        'Chester',
        'Chloe'
    ],
    'V': [
        'Vladimir'
    ]
};

export const ContactsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Contacts" sliding />

            <List contacts>
                {Object.keys(contacts).reduce((listGroups, nextGroupName) => {
                    return [
                        ...listGroups,
                        <ListGroup key={nextGroupName}>
                            <ListItem title={nextGroupName} groupTitle />
                            {contacts[nextGroupName].map(contactName => {
                                return <ListItem key={contactName} title={contactName} />;
                            })}
                        </ListGroup>
                    ];
                }, [])}
            </List>
        </Page>
    );
};