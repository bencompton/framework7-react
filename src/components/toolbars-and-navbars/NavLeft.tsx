import * as React from 'react';
import * as classNames from 'classnames';

import {IFramework7AppContext, ThemeTypeEnum} from '../Framework7App';
import {Link} from '../Link';

export interface INavLeftProps extends React.Props<any> {
    backLink?: boolean | string;
    sliding?: boolean;
}

export const NavLeft = (props: INavLeftProps, context: any) => {
    const themeIsMaterial = (context.framework7AppContext as IFramework7AppContext).theme.material;

    const backLinkClass = classNames({
        'icon-only': props.backLink === true || props.backLink && themeIsMaterial
    });

    const backLinkText = props.backLink !== true && !themeIsMaterial ? props.backLink as string : undefined

    return (
        <div className="left">
            {props.backLink ? <Link href="#" back icon="icon-back" text={backLinkText} className={backLinkClass} /> : null}
            {props.children}
        </div>
    );
};

(NavLeft as any).contextTypes = {
    framework7AppContext: React.PropTypes.object
};