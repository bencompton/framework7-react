import * as React from 'react';
import {Page, Navbar, Timeline, TimelineItem, TimelineItemChild, TimelineYear, TimelineMonth, List, ListItem, Card} from 'framework7-react';

const generateRandomDailyTasks = (maxNumberOfTasksPerDay: number) => {
    return (Array.apply(null, Array(Math.round(Math.random() * maxNumberOfTasksPerDay))).map((item, index) => {
        return (
            <TimelineItemChild
                key={index}
                inner
                time={`${Math.round(Math.random()*23)} :00`}
                text={`Task ${index + 1}`} />
        );
    }));
}

export const TimelineCalendarPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Timeline Calendar" sliding />

            <Timeline horizontal col="33" tablet-col="15">
                <TimelineYear title="2016">
                    <TimelineMonth title="December">
                    {
                        Array.apply(null, Array(11)).map((item, index) => {
                            return (
                                <TimelineItem  key={index} date={index + 21}>
                                {
                                    generateRandomDailyTasks(3)
                                }
                                </TimelineItem>
                            );
                        })
                    }
                    </TimelineMonth>
                </TimelineYear>
                <TimelineYear title="2017">
                    <TimelineMonth title="January">
                    {
                        Array.apply(null, Array(31)).map((item, index) => {
                            return (
                                <TimelineItem  key={index} date={index + 1}>
                                {
                                    generateRandomDailyTasks(4)
                                }
                                </TimelineItem>
                            );
                        })
                    }
                    </TimelineMonth>
                    <TimelineMonth title="February">
                    {
                        Array.apply(null, Array(28)).map((item, index) => {
                            return (
                                <TimelineItem  key={index} date={index + 1}>
                                {
                                    generateRandomDailyTasks(5)
                                }
                                </TimelineItem>
                            );
                        })
                    }
                    </TimelineMonth>
                </TimelineYear>
            </Timeline>
        </Page>
    );
}
