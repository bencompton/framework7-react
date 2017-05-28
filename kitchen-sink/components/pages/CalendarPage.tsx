import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, ContentBlock, Calendar} from 'framework7-react';

export const CalendarPage = (props: any, context: any) => {
    const themeType = 'ios'; //context.framework7AppContext.themeType;
    let calendarStyle = themeType === 'ios' ? { background: '#fff', margin: '-10px -15px' } : { background: '#fff', margin: '-16px -16px' };

    return (
        <Page>
            <Navbar backLink="Back" title="Calendar" sliding />
            <ContentBlockTitle>Default</ContentBlockTitle>
            <ContentBlock inner>
                <Calendar style={calendarStyle} />
            </ContentBlock>

            <ContentBlockTitle>Multiple</ContentBlockTitle>
            <ContentBlock inner>
                <Calendar style={calendarStyle} multiple={true} />
            </ContentBlock>

            <ContentBlockTitle>Range Picker</ContentBlockTitle>
            <ContentBlock inner>
                <Calendar style={calendarStyle} rangePicker={true} />
            </ContentBlock>
        </Page>
    );
};

Calendar.contextTypes = {
    framework7AppContext: React.PropTypes.object
}