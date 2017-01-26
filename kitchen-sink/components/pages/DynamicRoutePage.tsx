import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, ListLabel, ListGroup, ListButton} from 'framework7-react';
import {getCurrentRoute} from '../App';

export class DynamicRoutePage extends React.Component<any, any> {
    private currentRoute: any;

    constructor() {
        super();

        this.currentRoute = getCurrentRoute();
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Lists" sliding></Navbar>

                <ul>
                    <li><b>Url:</b> {this.currentRoute.url}</li>
                    <li><b>Path:</b> {this.currentRoute.path}</li>
                    <li><b>Hash:</b> {this.currentRoute.hash}</li>
                    <li><b>Params:</b>
                        <ul>                      
                        {
                            Object.keys(this.currentRoute.params).map((paramName, index) => {
                                return (<li key={index}><b>{`${paramName}:`}</b> {this.currentRoute.params[paramName]}</li>);
                            })
                        }                            
                        </ul>
                    </li>
                    <li><b>Query:</b>
                        <ul>
                        {
                            Object.keys(this.currentRoute.query).map((queryItem, index) => {
                                return (<li key={index}><b>{`${queryItem}:`}</b> {this.currentRoute.query[queryItem]}</li>);
                            })
                        }                        
                        </ul>
                    </li>
                    <li><b>Route:</b> {this.currentRoute.route}</li>
                </ul>
            </Page>
        );
    }
};