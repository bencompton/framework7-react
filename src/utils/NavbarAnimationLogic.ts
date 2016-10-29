import * as $ from 'jquery';

export const animateNavbars = (leftNavbarInner: JQuery, rightNavbarInner: JQuery, direction: string) => {
    if (direction === 'to-left') {
        rightNavbarInner.find('.sliding')
            .each(function() {
                var sliding = $(this);
                sliding.css('transform', 'translate3d(0,0,0)');

                if (sliding.hasClass('left') && sliding.find('.back .icon').length > 0) {
                    sliding.find('.back .icon').css('transform', 'translate3d(0,0,0)');
                }
            });

        leftNavbarInner.find('.sliding')
            .each(function() {
                var sliding = $(this);
                var rightText: any;

                if (sliding.hasClass('center') && rightNavbarInner.find('.sliding.left .back .icon').length > 0) {
                    rightText = rightNavbarInner.find('.sliding.left .back span');
                    if (rightText.length > 0) this.f7NavbarLeftOffset += rightText[0].offsetLeft;
                }
                if (sliding.hasClass('left') && sliding.find('.back .icon').length > 0) {
                    sliding.find('.back .icon')
                        .css('transform', 'translate3d(' + (-this.f7NavbarLeftOffset) + 'px,0,0)');
                }

                sliding.css('transform', 'translate3d(' + (this.f7NavbarLeftOffset) + 'px,0,0)');
            });
    }

    if (direction === 'to-right') {
        leftNavbarInner.find('.sliding')
            .each(function() {
                var sliding = $(this);
                sliding.css('transform', 'translate3d(0px,0,0)');

                if (sliding.hasClass('left') && sliding.find('.back .icon').length > 0) {
                    sliding.find('.back .icon').css('transform', 'translate3d(0px,0,0)');
                }
            });

        rightNavbarInner.find('.sliding')
            .each(function() {
                var sliding = $(this);

                if (sliding.hasClass('left') && sliding.find('.back .icon').length > 0) {
                    sliding.find('.back .icon')
                        .css('transform', 'translate3d(' + (-this.f7NavbarRightOffset) + 'px,0,0)');
                }

                sliding.css('transform', 'translate3d(' + (this.f7NavbarRightOffset) + 'px,0,0)');
            });
    }
};

export const sizeNavbars = (viewContainer: JQuery) => {
    let app = { rtl: false, params: { material: false } };

    if (app.params.material) return;

    var navbarInner = viewContainer
        ? $(viewContainer).find('.navbar .navbar-inner:not(.cached)')
        : $('.navbar .navbar-inner:not(.cached)');

    navbarInner.each(function() {
        var n = $(this);
        if (n.hasClass('cached')) return;
        var left = app.rtl ? n.find('.right') : n.find('.left'),
            right = app.rtl ? n.find('.left') : n.find('.right'),
            center = n.find('.center'),
            subnavbar = n.find('.subnavbar'),
            noLeft = left.length === 0,
            noRight = right.length === 0,
            leftWidth = noLeft ? 0 : left.outerWidth(true),
            rightWidth = noRight ? 0 : right.outerWidth(true),
            centerWidth = center.outerWidth(true),
            navbarStyles = n[0].style,
            navbarWidth = n[0].offsetWidth -
                parseInt(((navbarStyles.paddingLeft === '') ? '0' : navbarStyles.paddingLeft), 10) -
                parseInt(((navbarStyles.paddingRight === '') ? '0' : navbarStyles.paddingRight), 10),
            onLeft = n.hasClass('navbar-on-left'),
            currLeft: any,
            diff: any;

        if (noRight) {
            currLeft = navbarWidth - centerWidth;
        }

        if (noLeft) {
            currLeft = 0;
        }

        if (!noLeft && !noRight) {
            currLeft = (navbarWidth - rightWidth - centerWidth + leftWidth) / 2;
        }

        var requiredLeft = (navbarWidth - centerWidth) / 2;

        if (navbarWidth - leftWidth - rightWidth > centerWidth) {
            if (requiredLeft < leftWidth) {
                requiredLeft = leftWidth;
            }
            if (requiredLeft + centerWidth > navbarWidth - rightWidth) {
                requiredLeft = navbarWidth - rightWidth - centerWidth;
            }
            diff = requiredLeft - currLeft;
        } else {
            diff = 0;
        }

        // RTL inverter
        var inverter = app.rtl ? -1 : 1;

        if (center.hasClass('sliding')) {
            let centerElement = center[0] as any;

            centerElement.f7NavbarLeftOffset = -(currLeft + diff) * inverter;
            centerElement.f7NavbarRightOffset = (navbarWidth - currLeft - diff - centerWidth) * inverter;
            if (onLeft) {
                var activeNavbarBackLink = n
                    .parent()
                    .find('.navbar-on-center')
                    .find('.left.sliding .back .icon ~ span');

                if (activeNavbarBackLink.length > 0) {
                    centerElement.f7NavbarLeftOffset += activeNavbarBackLink[0].offsetLeft;
                }

                center.css('transform', 'translate3d(' + centerElement.f7NavbarLeftOffset + 'px, 0, 0)');
            }
        }

        if (!noLeft && left.hasClass('sliding')) {
            let leftElement = left[0] as any;

            if (app.rtl) {
                leftElement.f7NavbarLeftOffset = -(navbarWidth - left[0].offsetWidth) / 2 * inverter;
                leftElement.f7NavbarRightOffset = leftWidth * inverter;
            } else {
                leftElement.f7NavbarLeftOffset = -leftWidth;
                leftElement.f7NavbarRightOffset = (navbarWidth - left[0].offsetWidth) / 2;

                if (left.find('.back .icon').length > 0) {
                    leftElement.f7NavbarRightOffset -= left.find('.back .icon')[0].offsetWidth;
                }
            }

            if (onLeft) left.css('transform', 'translate3d(' + leftElement.f7NavbarLeftOffset + 'px, 0, 0)');
        }

        if (!noRight && right.hasClass('sliding')) {
            let rightElement = right[0] as any;

            if (app.rtl) {
                rightElement.f7NavbarLeftOffset = -rightWidth * inverter;
                rightElement.f7NavbarRightOffset = (navbarWidth - right[0].offsetWidth) / 2 * inverter;
            } else {
                rightElement.f7NavbarLeftOffset = -(navbarWidth - right[0].offsetWidth) / 2;
                rightElement.f7NavbarRightOffset = rightWidth;
            }
            if (onLeft) right.css('transform', 'translate3d(' + rightElement.f7NavbarLeftOffset + 'px, 0, 0)');
        }

        if (subnavbar.length && subnavbar.hasClass('sliding')) {
            let subnavbarElement = subnavbar[0] as any;

            subnavbarElement.f7NavbarLeftOffset = app.rtl ? subnavbar[0].offsetWidth : -subnavbar[0].offsetWidth;
            subnavbarElement.f7NavbarRightOffset = -subnavbarElement.f7NavbarLeftOffset;
        }

        // Center left
        var centerLeft = diff;
        if (app.rtl && noLeft && noRight && center.length > 0) centerLeft = -centerLeft;
        center.css('left', centerLeft + 'px');
    });
};

export const prepareNavbar = (newNavbarInner: HTMLElement, oldNavbarInner: HTMLElement, newNavbarPosition: string) => {
    $(newNavbarInner).find('.sliding').each(function () {
        var sliding = $(this);
        var slidingOffset = newNavbarPosition === 'right' ? this.f7NavbarRightOffset : this.f7NavbarLeftOffset;

        if (sliding.hasClass('left') && sliding.find('.back .icon').length > 0) {
            sliding.find('.back .icon').css('transform', 'translate3d(' + (-slidingOffset) + 'px,0,0)');
        }

        sliding.css('transform', 'translate3d(' + slidingOffset + 'px,0,0)');
    });
}