import * as React from 'react';
import {Page, Navbar, PhotoBrowser, Link} from 'framework7-react';
import {getFramework7} from '../App';

export interface IPhoto {
    url?: string,
    caption?: string
}

export interface IPhotoBrowserPageState {
    photos: IPhoto[]
}

export const PhotoBrowserPageDefaultState = [{
        url: 'http://lorempixel.com/400/400/nature/1/',
        caption: 'Ants on grass'
    },
        'http://placekitten.com/600/600',
        'http://lorempixel.com/400/400/nature/2/',
    {
        url: 'http://lorempixel.com/400/400/nature/3/',
        caption: 'Beautiful mountains in Zhangjiajie, China'
    }, {
        url: 'http://lorempixel.com/400/400/nature/4/',
        caption: 'Trees in the Fall'
    }
];

const photoStyle = {
    height: "20vw",
    width: "20%"
};

export class PhotoBrowserPage extends React.Component<any, IPhotoBrowserPageState> {
    private fw7: any;

    constructor() {
        super();
        this.state = {
            photos: PhotoBrowserPageDefaultState
        };

        this.fw7 = getFramework7();
    }

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Photo Browser" sliding />                        
                {
                    this.state.photos.map((photo, index) => {
                        return (
                            <Link key={index} onClick={() => {this.openPhotoBrowser(index)}}>
                            {
                                this.getImage(photo, index)     
                            }                  
                            </Link>
                        );
                    })
                }
            </Page>
        ); 
    }

    private openPhotoBrowser(index:number) {
        let photoBrowser = this.fw7.photoBrowser({
            photos: this.state.photos,
            theme: "dark",
            onOpen: this.onOpen,
            onClose: this.onClose
        });

        photoBrowser.open(index);
    }

    private onOpen(index:number) {
        console.log('Photo Browser opened');
    }

    private onClose(index:number) {
        console.log('Photo Browser closed');
    }

    private getImage(photo: any, index: number ) {
        let imageSrc = '';

        if (typeof photo === 'string') {
            return (<img src={photo}  style={photoStyle} />);   
        } else if (typeof photo === 'object') {
            return (<img src={photo.url}  style={photoStyle} />);   
        }                        
    }   
}