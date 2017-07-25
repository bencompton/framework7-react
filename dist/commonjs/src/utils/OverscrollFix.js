"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyOverscrollFix = function () {
    var touchTarget, touchScreenX, touchScreenY, conditionParentUntilTrue, disableScroll, scrollMap;
    conditionParentUntilTrue = function (element, condition) {
        var outcome = false;
        if (element === document.body) {
            return false;
        }
        outcome = condition(element);
        if (outcome) {
            return true;
        }
        else {
            return conditionParentUntilTrue(element.parentNode, condition);
        }
    };
    window.addEventListener('touchstart', function (e) {
        touchTarget = e.targetTouches[0].target;
        // a boolean map indicating if the element (or either of element parents, excluding the document.body) can be scrolled to the X direction.
        scrollMap = {};
        scrollMap.left = conditionParentUntilTrue(touchTarget, function (element) {
            return element.scrollLeft > 0 &&
                (window.getComputedStyle(element).overflow !== "hidden") &&
                (window.getComputedStyle(element).overflowX !== "hidden");
        });
        scrollMap.top = conditionParentUntilTrue(touchTarget, function (element) {
            return element.scrollTop > 0 &&
                (window.getComputedStyle(element).overflow !== "hidden") &&
                (window.getComputedStyle(element).overflowY !== "hidden");
        });
        scrollMap.right = conditionParentUntilTrue(touchTarget, function (element) {
            return element.scrollWidth > element.clientWidth &&
                element.scrollWidth - element.clientWidth > element.scrollLeft &&
                (window.getComputedStyle(element).overflow !== "hidden") &&
                (window.getComputedStyle(element).overflowX !== "hidden");
        });
        scrollMap.bottom = conditionParentUntilTrue(touchTarget, function (element) {
            return element.scrollHeight > element.clientHeight &&
                element.scrollHeight - element.clientHeight > element.scrollTop &&
                (window.getComputedStyle(element).overflow !== "hidden") &&
                (window.getComputedStyle(element).overflowY !== "hidden");
        });
        touchScreenX = e.targetTouches[0].screenX;
        touchScreenY = e.targetTouches[0].screenY;
        disableScroll = false;
    });
    window.addEventListener('touchmove', function (e) {
        var moveScreenX, moveScreenY;
        if (disableScroll) {
            e.preventDefault();
            return;
        }
        moveScreenX = e.targetTouches[0].screenX;
        moveScreenY = e.targetTouches[0].screenY;
        if (moveScreenX > touchScreenX && scrollMap.left ||
            moveScreenY < touchScreenY && scrollMap.bottom ||
            moveScreenX < touchScreenX && scrollMap.right ||
            moveScreenY > touchScreenY && scrollMap.top) {
            // You are scrolling either the element or its parent.
            // This will not affect document.body scroll.
        }
        else {
            // This will affect document.body scroll.
            e.preventDefault();
            disableScroll = true;
        }
    });
};

//# sourceMappingURL=OverscrollFix.js.map
