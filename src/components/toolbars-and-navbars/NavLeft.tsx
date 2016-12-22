import * as React from 'react';

import {IFramework7AppContext, ThemeTypeEnum} from '../Framework7App';
//import {Link} from '../Link';

export interface INavLeftProps extends React.Props<any> {
    backLink?: boolean | string;
    sliding?: boolean;
}

export const NavLeft = (props: INavLeftProps, context: any) => {
    const themeIsMaterial = (context.framework7AppContext as IFramework7AppContext).themeType === ThemeTypeEnum.Material;

    const backLinkClass = classNames({
        'icon-only': props.backLink === true || props.backLink && themeIsMaterial
    });

    const backLinkText = props.backLink !== true && !themeIsMaterial ? props.backLink : undefined

    return (
        <div class="left">
            
            {props.children}
        </div>
    );
};

(NavLeft as any).contextTypes = {
    framework7AppContext: React.PropTypes.object
};

//{props.backLink ? <Link href="#" back icon="icon-back" text={backLinkText} className={backLinkClass} /> : null}