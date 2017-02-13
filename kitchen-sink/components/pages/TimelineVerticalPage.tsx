import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, Timeline, TimelineItem, List, ListItem, Card} from 'framework7-react';


export const TimelineVerticalPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Timeline Vertical" sliding />

            <ContentBlockTitle>Default</ContentBlockTitle>
            <Timeline>
                <TimelineItem day="21" month="DEC" inner content="Some text goes here"></TimelineItem>
                <TimelineItem day="22" month="DEC" inner content="Another text goes here"></TimelineItem>
                <TimelineItem day="23" month="DEC" inner content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat ipsam hic porro enim, accusamus perferendis, quas commodi alias quaerat eius nemo deleniti. Odio quasi quos quis iure, aperiam pariatur?"></TimelineItem>
                <TimelineItem day="24" month="DEC" inner content="One more text here"></TimelineItem>
            </Timeline>

            <ContentBlockTitle>Side By Side</ContentBlockTitle>
            <Timeline sides>
                <TimelineItem day="21" month="DEC" inner content="Some text goes here"></TimelineItem>
                <TimelineItem day="22" month="DEC" inner content="Another text goes here"></TimelineItem>
                <TimelineItem day="23" month="DEC" inner content="Just plain text"></TimelineItem>
                <TimelineItem day="24" month="DEC" inner content="One more text here"></TimelineItem>
            </Timeline>

            <ContentBlockTitle>Only Tablet Side By Side</ContentBlockTitle>
            <Timeline tabletSides>
                <TimelineItem day="21" month="DEC" inner content="Some text goes here"></TimelineItem>
                <TimelineItem day="22" month="DEC" inner content="Another text goes here"></TimelineItem>
                <TimelineItem day="23" month="DEC" inner content="Just plain text"></TimelineItem>
                <TimelineItem day="24" month="DEC" inner content="One more text here"></TimelineItem>
            </Timeline>

            <ContentBlockTitle>Forced Sides</ContentBlockTitle>
            <Timeline sides>
                <TimelineItem side="right" day="21" month="DEC" inner content="Some text goes here"></TimelineItem>
                <TimelineItem side="right" day="22" month="DEC" inner content="Another text goes here"></TimelineItem>
                <TimelineItem side="left" day="23" month="DEC" inner content="Just plain text"></TimelineItem>
                <TimelineItem side="left" day="24" month="DEC" inner content="One more text here"></TimelineItem>
            </Timeline>

            <ContentBlockTitle>Rich Content</ContentBlockTitle>
            <Timeline>
                <TimelineItem
                    day="21"
                    month="DEC"
                    inner
                    time="12:56"
                    title="Item Title"
                    subtitle="Item Subtitle"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat ipsam hic porro enim, accusamus perferendis, quas commodi alias quaerat eius nemo deleniti. Odio quasi quos quis iure, aperiam pariatur?" />
                <TimelineItem
                    day="22"
                    month="DEC"
                    inner
                    time="15:07"
                    title="Item Title"
                    subtitle="Item Subtitle"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat ipsam hic porro enim, accusamus perferendis, quas commodi alias quaerat eius nemo deleniti. Odio quasi quos quis iure, aperiam pariatur?" />
                <TimelineItem day="23" month="DEC">
                    <List inset>
                        <ListItem link="#" title="Item 1" />
                        <ListItem link="#" title="Item 2" />
                        <ListItem link="#" title="Item 3" />
                    </List>
                </TimelineItem>
                <TimelineItem day="24" month="DEC">
                    <Card title="Card Header" content="Card Content" footer="Card Footer" />
                </TimelineItem>
                <TimelineItem day="25" month="DEC">Plain text</TimelineItem>
            </Timeline>

            <ContentBlockTitle>Inside Content Block</ContentBlockTitle>
            <ContentBlock inner>
                <TimelineItem day="21" month="DEC" inner content="Some text goes here"></TimelineItem>
                <TimelineItem day="22" month="DEC" inner content="Another text goes here"></TimelineItem>
                <TimelineItem day="23" month="DEC" inner content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat ipsam hic porro enim, accusamus perferendis, quas commodi alias quaerat eius nemo deleniti. Odio quasi quos quis iure, aperiam pariatur?" />
                <TimelineItem day="24" month="DEC" inner content="One more text here"></TimelineItem>
            </ContentBlock>
        </Page>
    );
}
