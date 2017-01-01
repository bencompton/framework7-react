import * as React from 'react';
import {Page, Navbar, Card, CardHeader, CardContent, CardFooter} from 'framework7-react';

export const CardsPage = () => {
    return (
        <Page>
            <Navbar backLink="Back" title="Cards" sliding></Navbar>

            <Card title="Simple Card" content="Hello, i have simple content"></Card>
            <Card>
                <CardHeader>Header</CardHeader>
                <CardContent>Card Content</CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>
        </Page>
    );
}