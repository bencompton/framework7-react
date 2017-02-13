import * as React from 'react';
import {Page, Navbar, ContentBlockTitle, ContentBlock, List, ListItem, ListLabel, ListGroup, ListButton} from 'framework7-react';
import {getCurrentRoute} from '../App';

export class DynamicRoutePage extends React.Component<any, any> {
    private currentRoute: any;

    constructor(props: any, context: any) {
        super(props, context);

        this.currentRoute = getCurrentRoute();
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Lists" sliding></Navbar>

                <ContentBlock inner>
                    <ul>
                        <li><b>Url:</b> {this.currentRoute.url}</li>
                        <li><b>Path:</b> {this.currentRoute.path}</li>
                        <li><b>Hash:</b> {this.currentRoute.hash}</li>
                        <li><b>Params:</b>
                            <ul>                      
                            {
                                Object.keys(this.currentRoute.params).map((paramName, index) => {
                                    return (<li key={index}><b>{`${paramName}: `}</b>{this.currentRoute.params[paramName]}</li>);
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
                        <li><b>Route:</b> {this.currentRoute.route.path}</li>
                    </ul>
                </ContentBlock>
                <ContentBlock inner>
                    <p>Route <b>params</b> are also passed as component props:</p>
                    <ul>
                        <li><b>id:</b> {this.props.id}</li>
                        <li><b>post_id:</b> {this.props.post_id}</li>
                    </ul>
                </ContentBlock>
            </Page>
        );
    }
};