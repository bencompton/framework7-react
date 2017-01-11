import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, GridRow, GridCol} from 'framework7-react';

const columnStyle = {border: '1px solid #e5e5e5; padding:5px', textAlign: 'center'};

export const GridPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Grid" sliding></Navbar>

            <ContentBlockTitle>Grid</ContentBlockTitle>
            <ContentBlock inner>                
                <GridRow>
                    <GridCol>50%</GridCol>
                    <GridCol>50%</GridCol>
                </GridRow>
        
                <GridRow>
                    <GridCol>33%</GridCol>
                    <GridCol>33%</GridCol>
                    <GridCol>33%</GridCol>
                </GridRow>

                <GridRow>
                    <GridCol width="50" tabletWidth="80">50%</GridCol>
                    <GridCol width="25" tabletWidth="10">25%</GridCol>
                    <GridCol width="25" tabletWidth="10">25%</GridCol>
                </GridRow>
    
                <GridRow noGutter>
                    <GridCol width="66">66%</GridCol>
                    <GridCol width="33">33%</GridCol>
                </GridRow>                
            </ContentBlock>
        </Page>
    );
}