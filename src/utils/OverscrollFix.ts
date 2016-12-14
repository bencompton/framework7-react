export const applyOverscrollFix = () => {
    let touchTarget: HTMLElement;
    let touchScreenX: number;
    let touchScreenY: number;
    let conditionParentUntilTrue: any;
    let disableScroll: boolean;
    let scrollMap: any;

    conditionParentUntilTrue = (element: HTMLElement, condition: any) => {
        let outcome: boolean = false;

        if (element === document.body) {
            return false;
        }

        outcome = condition(element);

        if (outcome) {
            return true;
        } else {
            return conditionParentUntilTrue(element.parentNode, condition);
        }
    };

    window.addEventListener('touchstart', (e: any) => {
        touchTarget = e.targetTouches[0].target;
        // a boolean map indicating if the element (or either of element parents, excluding the document.body) can be scrolled to the X direction.
        scrollMap = {};

        scrollMap.left = conditionParentUntilTrue(touchTarget, (element: HTMLElement) => {
            return element.scrollLeft > 0;
        });

        scrollMap.top = conditionParentUntilTrue(touchTarget, (element: HTMLElement) => {
            return element.scrollTop > 0;
        });

        scrollMap.right = conditionParentUntilTrue(touchTarget, (element: HTMLElement) => {
            return element.scrollWidth > element.clientWidth &&
                element.scrollWidth - element.clientWidth > element.scrollLeft;
        });

        scrollMap.bottom = conditionParentUntilTrue(touchTarget, (element: HTMLElement) => {
            return element.scrollHeight > element.clientHeight &&
                element.scrollHeight - element.clientHeight > element.scrollTop;
        });

        touchScreenX = e.targetTouches[0].screenX;
        touchScreenY = e.targetTouches[0].screenY;
        disableScroll = false;
    });

    window.addEventListener('touchmove', (e: any) => {
        let moveScreenX: number;
        let moveScreenY: number;

        if (disableScroll) {
            e.preventDefault();

            return;
        }

        moveScreenX = e.targetTouches[0].screenX;
        moveScreenY = e.targetTouches[0].screenY;

        if (
            moveScreenX > touchScreenX && scrollMap.left ||
            moveScreenY < touchScreenY && scrollMap.bottom ||
            moveScreenX < touchScreenX && scrollMap.right ||
            moveScreenY > touchScreenY && scrollMap.top
        ) {
            // You are scrolling either the element or its parent.
            // This will not affect document.body scroll.
        } else {
            // This will affect document.body scroll.

            e.preventDefault();

            disableScroll = true;
        }
    });
};