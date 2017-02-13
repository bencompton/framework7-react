import * as React from 'react';
import {Page, Navbar, ContentBlock, ContentBlockTitle, GridRow, GridCol, Preloader} from 'framework7-react';

const pStyle = {margin: '1em 0'};
const backgroundStyle = {background: '#333'};

export const PreloaderPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Preloader" sliding />

            <ContentBlockTitle>Preloader</ContentBlockTitle>
            <ContentBlock inner>
                <GridRow style={pStyle}>
                    <GridCol>
                        <Preloader></Preloader>
                    </GridCol>
                    <GridCol style={backgroundStyle}>
                        <Preloader color="white"></Preloader>
                    </GridCol>
                    <GridCol>
                        <Preloader size="44"></Preloader>
                    </GridCol>
                    <GridCol style={backgroundStyle}>
                        <Preloader size="44" color="white"></Preloader>
                    </GridCol>
                </GridRow>


                <GridRow style={pStyle}>
                    <GridCol>
                        <Preloader size="44" color="red"></Preloader>
                    </GridCol>
                    <GridCol>
                        <Preloader size="44" color="blue"></Preloader>
                    </GridCol>
                    <GridCol>
                        <Preloader size="44" color="green"></Preloader>
                    </GridCol>
                    <GridCol>
                        <Preloader size="44" color="multi"></Preloader>
                    </GridCol>
                </GridRow>
            </ContentBlock>
        </Page>
    );
}