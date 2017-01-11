import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, GridRow, GridCol} from 'framework7-react';

const columnStyle = {border: '1px solid #e5e5e5', padding: '5px', textAlign: 'center'};
const rowStyle = { margin: '1em 0' };

export const GridPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Grid" sliding></Navbar>

            <ContentBlockTitle>Grid</ContentBlockTitle>
            <ContentBlock inner>                
                <GridRow style={rowStyle}>
                    <GridCol style={columnStyle}>50%</GridCol>
                    <GridCol style={columnStyle}>50%</GridCol>                    
                </GridRow>                
                <GridRow style={rowStyle}>
                    <GridCol style={columnStyle}>33%</GridCol>
                    <GridCol style={columnStyle}>33%</GridCol>
                    <GridCol style={columnStyle}>33%</GridCol>
                </GridRow>
                <GridRow style={rowStyle}>
                    <GridCol width="50" tabletWidth="80" style={columnStyle}>50%</GridCol>
                    <GridCol width="25" tabletWidth="10" style={columnStyle}>25%</GridCol>
                    <GridCol width="25" tabletWidth="10" style={columnStyle}>25%</GridCol>
                </GridRow>    
                <GridRow noGutter style={rowStyle}>
                    <GridCol width="66" style={columnStyle}>66%</GridCol>
                    <GridCol width="33" style={columnStyle}>33%</GridCol>
                </GridRow>                
            </ContentBlock>
        </Page>
    );
}