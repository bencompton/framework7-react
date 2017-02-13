import * as React from 'react';
import {Page, Navbar, Timeline, TimelineItem, TimelineItemChild, List, ListItem, Card} from 'framework7-react';


export const TimelineHorizontalPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Timeline Horizontal" sliding />

            <Timeline horizontal col="33" tabletCol="20">
                <TimelineItem day="21" month="DEC">
                    <TimelineItemChild
                        inner
                        time="12:56"
                        title="Title 1"
                        subtitle="Subtitle 1"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
                    <TimelineItemChild
                        inner
                        time="13:15"
                        title="Title 2"
                        subtitle="Subtitle 2"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
                    <TimelineItemChild inner time="16:22" text="Do something" />
                </TimelineItem>
                <TimelineItem day="22" month="DEC">Plain text goes here</TimelineItem>
                <TimelineItem day="23" month="DEC">
                    <Card title="Card Header" content="Card Content" footer="Card Footer"></Card>
                    <Card content="Another Card Content"></Card>
                </TimelineItem>
                <TimelineItem day="24" month="DEC">
                    <List inset>
                        <ListItem link="#" title="Item 1" />
                        <ListItem link="#" title="Item 2" />
                        <ListItem link="#" title="Item 3" />
                    </List>
                </TimelineItem>
                <TimelineItem day="25" month="DEC">
                    <TimelineItemChild inner time="12:56" text="Task 1" ></TimelineItemChild>
                    <TimelineItemChild inner time="13:15" text="Task 2" ></TimelineItemChild>
                    <TimelineItemChild inner time="16:22" text="Task 3" ></TimelineItemChild>
                </TimelineItem>
            </Timeline>
        </Page>
    );
}
