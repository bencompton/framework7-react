import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, ContentBlock, Chip} from 'framework7-react';

const onChipDelete = (event) => {
    console.log('delete');
};

const chipMargin = {
    marginRight: ".5em"
};

export const ChipsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Chips" sliding />

            <ContentBlockTitle>Chips</ContentBlockTitle>
            <ContentBlock>
                <Chip text="Example Chip" style={chipMargin} />
                <Chip text="Another Chip" bg="red" color="white" style={chipMargin} />
                <Chip text="One More Chip" bg="green" color="white" style={chipMargin} />
                <Chip text="Jane Doe" media={'<img src="http://lorempixel.com/100/100/people/9/">'} style={chipMargin} />
                <Chip text="John Doe" bg="orange" media={'<img src="http://lorempixel.com/100/100/people/3/">'} style={chipMargin} />
                <Chip text="Another Chip" deleteable onDelete={onChipDelete} style={chipMargin} />
                <Chip text="John Doe" media={'<img src="http://lorempixel.com/100/100/people/3/">'} deleteable onDelete={onChipDelete} />
            </ContentBlock>
        </Page>
    );
}
