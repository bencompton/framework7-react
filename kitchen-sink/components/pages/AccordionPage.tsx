import * as React from 'react';
import {
    Page,
    Navbar,
    ContentBlock,
    ContentBlockTitle,
    List,
    ListItem,
    AccordionContent,
    AccordionItem,
    AccordionToggle
} from 'framework7-react';

const onOpen = (event) => {
    console.log('open');
};

const onOpened = (event) =>{
    console.log('opened');
};

const onClose = (event) => {
    console.log('close');
};

const onClosed = (event) => {
    console.log('closed');
};

export const AccordionPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Accordion" sliding />

            <ContentBlockTitle>Accordion List</ContentBlockTitle>
            <List accordion>
                {
                    [1 ,2, 3].map(n => {
                        return (
                            <ListItem
                                key={n}
                                accordionItem
                                title={`Item ${n}`}
                                onAccordionOpen={onOpen}
                                onAccordionOpened={onOpened}
                                onAccordionClose={onClose}
                                onAccordionClosed={onClosed}
                            >
                                <AccordionContent>
                                    <ContentBlock>
                                        <p>{`Accordion content ${n}`}</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu felis volutpat, rutrum ex quis, lobortis ex. Curabitur quis mattis lorem. Nullam magna lacus, interdum vel maximus nec, vestibulum non quam. Phasellus ornare efficitur porttitor. Quisque neque diam, imperdiet in fermentum nec, congue vitae ante. Nullam imperdiet maximus commodo. Morbi pharetra id purus ac ultrices. Duis non posuere libero.</p>
                                    </ContentBlock>
                                </AccordionContent>
                            </ListItem>
                        );
                    })
                }
            </List>

            <ContentBlockTitle>Custom Collapsible</ContentBlockTitle>
            <ContentBlock inner>
                {
                    [1, 2, 3].map(n => {
                        return (
                            <AccordionItem key={n}>
                                <AccordionToggle><b>{`Item ${n}`}</b></AccordionToggle>
                                <AccordionContent>{`Content ${n}`}</AccordionContent>
                            </AccordionItem>
                        );
                    })
                }
            </ContentBlock>
        </Page>
    );
};

