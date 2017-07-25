"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var camelCase = function (str) {
    camelCase.replacement = camelCase.replacement || {};
    if (!camelCase.replacement[str]) {
        camelCase.replacement[str] = str.replace(/-([a-z])/g, function (m, w) {
            return w.toUpperCase();
        });
    }
    return camelCase.replacement[str];
};
var hasOwn = {}.hasOwnProperty;
var classNames = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var length = args.length;
    while (length--) {
        var arg = args[length];
        if (!arg)
            continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg)) {
            classes.push(classNames.apply(null, arg));
        }
        else if (argType === 'object') {
            var keys = Object.keys(arg);
            var length_1 = keys.length;
            while (length_1--) {
                var key = keys[length_1];
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(' ');
};
var renameEvent = function (eventName) {
    switch (eventName) {
        case 'keypress':
            return 'keyPress';
        case 'keyup':
            return 'keyUp';
        case 'keydown':
            return 'keyDown';
        case 'beforeinput':
            return 'beforeInput';
        case 'compositionstart':
            return 'compositionStart';
        case 'compositionupdate':
            return 'compositionUpdate';
        case 'compositionend':
            return 'compositionEnd';
        case 'dblclick':
            return 'doubleClick';
        case 'mousedown':
            return 'mouseDown';
        case 'mouseenter':
            return 'mouseEnter';
        case 'mouseleave':
            return 'mouseLeave';
        case 'mousemove':
            return 'mouseMove';
        case 'mouseout':
            return 'mouseOut';
        case 'mouseover':
            return 'mouseOver';
        case 'mouseup':
            return 'mouseUp';
        case 'focusin':
            return 'focus';
        case 'focusout':
            return 'blur';
        default:
            return eventName;
    }
};
var attributeMap = {
    autocapitalize: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoCapitalize'
    },
    autocomplete: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoComplete'
    },
    autocorrect: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoCorrect'
    },
    autofocus: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoFocus'
    },
    autosave: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'autoSave'
    },
    maxlength: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'maxLength'
    },
    minlength: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'minLength'
    },
    readonly: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'readOnly'
    },
    spellcheck: {
        componentNames: ['input', 'textarea', 'select'],
        renameTo: 'spellCheck'
    }
};
var handleRefs = function (element, vueComponent, events, props) {
    if (events) {
        var _loop_1 = function (eventName) {
            if (element && element.addEventListener && !(element.vueListeners && element.vueListeners[eventName])) {
                element.addEventListener(eventName, function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var eventHandler = events[eventName];
                    eventHandler.apply(vueComponent, args);
                }, true);
                element.vueListeners = element.vueListeners || {};
                element.vueListeners[eventName] = true;
            }
        };
        for (var eventName in events) {
            _loop_1(eventName);
        }
    }
    if (props['data-vue-ref']) {
        var vueRef = props['data-vue-ref'];
        vueRef.vueComponentInstance.$refs[vueRef.refName] = element;
    }
};
var renameAttribute = function (componentName, attribute) {
    var attributeMapForAttribute = attributeMap[attribute];
    if (attributeMapForAttribute && attributeMapForAttribute.componentNames.indexOf(componentName) > -1) {
        attribute = attributeMapForAttribute.renameTo;
    }
    return attribute;
};
var renameStyleProperties = function (stylesObject) {
    for (var property in stylesObject) {
        if (stylesObject.hasOwnProperty(property) && property.indexOf('-') !== -1) {
            var newPropertyName = camelCase(property);
            stylesObject[newPropertyName] = stylesObject[property];
            delete stylesObject[property];
        }
    }
    return stylesObject;
};
var PropsProcessor = (function () {
    function PropsProcessor() {
        this.handleEvents = function (resolvedComponent, eventHandlers, parentVueComponentInstance, props) {
            if (typeof resolvedComponent === 'string') {
            }
            else {
                if (eventHandlers) {
                    var _loop_2 = function (eventName) {
                        var camelCasedEventName = "" + camelCase('on-' + renameEvent(eventName));
                        props[camelCasedEventName] = function () {
                            var eventArgs = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                eventArgs[_i] = arguments[_i];
                            }
                            eventHandlers[eventName].apply(parentVueComponentInstance, eventArgs);
                        };
                    };
                    for (var eventName in eventHandlers) {
                        _loop_2(eventName);
                    }
                }
            }
        };
    }
    PropsProcessor.prototype.getProps = function (args, children, componentOrComponentName, resolvedComponent, vueComponentInstance) {
        this.addCurrentComponentAsParentOfChildren(children, vueComponentInstance);
        var props = {};
        this.getClasses(args, vueComponentInstance, props);
        this.getStyle(args, vueComponentInstance, props);
        this.getRef(args, vueComponentInstance, resolvedComponent, props);
        this.getPropsFromArgs(args, props);
        this.getChildren(children, args, props);
        this.convertAttrsToProps(args, componentOrComponentName, resolvedComponent, props);
        this.getInnerHTML(args, props);
        this.handleEvents(resolvedComponent, args.on, vueComponentInstance, props);
        this.handleRef(args.ref, vueComponentInstance, props);
        return props;
    };
    PropsProcessor.prototype.getClasses = function (args, vueComponent, props) {
        var classObject = {};
        if (args.class && typeof args.class === 'string') {
            classObject[args.class] = true;
        }
        else if (args.class) {
            classObject = args.class;
        }
        if (args.staticClass) {
            classObject[args.staticClass] = true;
        }
        var classes = [];
        for (var key in classObject) {
            if (classObject[key]) {
                classes.push(key);
            }
        }
        props.className = classes.join(' ');
    };
    PropsProcessor.prototype.getStyle = function (args, vueComponent, props) {
        var style;
        if (args.style) {
            if (typeof args.style === 'object') {
                style = args.style;
            }
            else {
                throw new Error('ReactifyVue only supports style attributes that are of type object');
            }
        }
        if (style) {
            props.style = renameStyleProperties(style);
        }
    };
    PropsProcessor.prototype.getRef = function (args, vueComponent, resolvedComponent, props) {
        props.ref = (function (events, vueComponent) {
            return function (element) {
                var events = args.on;
                handleRefs(element, vueComponent, events, props);
            };
        })(args.on, vueComponent);
    };
    PropsProcessor.prototype.getPropsFromArgs = function (args, props) {
        if (args.props) {
            for (var prop in args.props) {
                props[camelCase(prop)] = args.props[prop];
            }
        }
    };
    PropsProcessor.prototype.getChildren = function (children, args, props) {
        if (children && !(args.domProps && args.domProps.innerHTML)) {
            props.children = children;
        }
    };
    PropsProcessor.prototype.convertAttrsToProps = function (args, componentOrComponentName, resolvedComponent, props) {
        if (args.attrs) {
            for (var attr in args.attrs) {
                attr = renameAttribute(componentOrComponentName, attr);
                var resolvedVueComponent = resolvedComponent.vueComponent;
                var attrValue = args.attrs[attr];
                if (attrValue !== undefined || attrValue !== false) {
                    var camelCasedAttrName = camelCase(attr);
                    var vueComponentProp = resolvedVueComponent && resolvedVueComponent.props && resolvedVueComponent.props[camelCasedAttrName];
                    if (vueComponentProp) {
                        if (vueComponentProp === Boolean && attrValue !== false) {
                            props[camelCasedAttrName] = true;
                        }
                        else {
                            props[camelCasedAttrName] = attrValue;
                        }
                    }
                    else {
                        props[attr] = attrValue;
                    }
                }
            }
        }
    };
    PropsProcessor.prototype.getInnerHTML = function (args, props) {
        var dangerouslySetInnerHTML;
        if (args.domProps && args.domProps.innerHTML)
            dangerouslySetInnerHTML = { __html: args.domProps.innerHTML };
        if (dangerouslySetInnerHTML) {
            props.dangerouslySetInnerHTML = dangerouslySetInnerHTML;
        }
    };
    PropsProcessor.prototype.addCurrentComponentAsParentOfChildren = function (children, vueComponent) {
        var length = children && children.length;
        if (children && length && Array.isArray(children)) {
            for (var i = 0, length_2 = children.length; i < length_2; i++) {
                var child = children[i];
                if (child && child.tag && child.tag.indexOf('f7-') !== -1) {
                    child.props = __assign({}, child.props, { parentVueComponent: vueComponent });
                }
            }
        }
    };
    PropsProcessor.prototype.handleRef = function (refName, vueComponentInstance, props) {
        if (refName) {
            if (!vueComponentInstance.$refs)
                vueComponentInstance.$refs = {};
            props['data-vue-ref'] = {
                refName: refName,
                vueComponentInstance: vueComponentInstance
            };
        }
    };
    return PropsProcessor;
}());
exports.PropsProcessor = PropsProcessor;

//# sourceMappingURL=PropsProcessor.js.map
