/**
 * Framework7 React 0.9.2-1-beta
 * A React version of Framework7
 * https://github.com/bencompton/framework7-react#readme
 * 
 * Copyright 2017
 * 
 * http://www.framework7.io/
 * 
 * Licensed under APACHE 2.0
 * 
 * Released on: August 4, 2017
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["framework7-react"] = factory(require("React"));
	else
		root["framework7-react"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var accordionContent = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "accordion-item-content" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var accordionItem = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "accordion-item", class: { 'accordion-item-expanded': _vm.expanded }, on: { "accordion:open": _vm.onOpen, "accordion:opened": _vm.onOpened, "accordion:close": _vm.onClose, "accordion:closed": _vm.onClosed } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    expanded: Boolean
  },
  methods: {
    onOpen: function onOpen(event) {
      this.$emit('accordion:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('accordion:opened', event);
    },
    onClose: function onClose(event) {
      this.$emit('accordion:close', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('accordion:closed', event);
    }
  }
};

var accordionToggle = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "accordion-item-toggle" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var accordion = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "accordion-list" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var actionsButton = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "actions-modal-button", class: _vm.classesObject, on: { "click": _vm.onClick } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'color': String,
    'bold': Boolean,
    'close': {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classesObject: function classesObject() {
      var self = this;
      var co = {
        'actions-modal-button-bold': self.bold
      };
      if (self.color) {
        co['color-' + self.color] = true;
      }
      return co;
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (this.close && this.$f7) {
        this.$f7.closeModal(this.$parent.$parent.$el);
      }
      this.$emit('click', event);
    }
  }
};

var actionsGroup = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "actions-modal-group" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var actionsLabel = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "actions-modal-label", class: _vm.classesObject, on: { "click": _vm.onClick } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    color: String,
    bold: Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var self = this;
      var co = {
        'actions-modal-button-bold': self.bold
      };
      if (self.color) {
        co['color-' + self.color] = true;
      }
      return co;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var actions = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "actions-modal keep-on-close", class: { 'modal-in': _vm.opened }, on: { "actions:open": _vm.onOpen, "actions:opened": _vm.onOpened, "actions:close": _vm.onClose, "actions:closed": _vm.onClosed } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  mounted: function mounted() {
    var self = this;
    if (self.opened) {
      self.$el.style.display = 'block';
    } else {
      self.$el.style.display = 'none';
    }
  },
  watch: {
    opened: function opened(_opened) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      if (_opened) {
        self.$el.style.display = 'block';
        self.$f7.openModal(self.$el);
      } else {
        self.$el.style.display = 'none';
        self.$f7.closeModal(self.$el);
      }
    }
  },
  props: {
    opened: Boolean
  },
  methods: {
    onOpen: function onOpen(event) {
      this.$emit('actions:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('actions:opened', event);
    },
    onClose: function onClose(event) {
      this.$emit('actions:close', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('actions:closed', event);
    },
    onF7Init: function onF7Init() {
      var $$ = this.$$;
      if (!$$) {
        return;
      }
      if ($$('.modal-overlay').length === 0) {
        $$(this.$root.$el).append('<div class="modal-overlay' + (this.opened ? ' modal-overlay-visible' : '') + '"></div>');
      }
    },
    open: function open(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.openModal(self.$el, animated);
    },
    close: function close(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.closeModal(self.$el, animated);
    }
  }
};

var badge = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "badge", class: _vm.color ? 'color-' + _vm.color : '' }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'color': String
  }
};

var LinkMixin = {
  data: function data() {
    return {
      routeInfo: {
        activeTab: this.$route && this.$route.route.tab
      }
    };
  },
  props: {
    noLinkClass: Boolean,
    noFastclick: Boolean,

    external: Boolean,
    color: String,
    bg: String,
    theme: String,
    text: String,
    iconOnly: Boolean,
    icon: String,
    iconMaterial: String,
    iconIon: String,
    iconFa: String,
    iconF7: String,
    iconIfMaterial: String,
    iconIfIos: String,
    iconSize: [String, Number],
    rippleColor: String,
    href: {
      type: String,
      default: '#'
    },

    // Button
    round: Boolean,
    fill: Boolean,
    big: Boolean,
    raised: Boolean,

    // Router
    force: Boolean,
    reload: Boolean,
    animatePages: Boolean,
    ignoreCache: Boolean,
    pageName: String,
    template: String,

    // View
    view: String,

    // Panel
    openPanel: [Boolean, String],
    closePanel: [Boolean, String],

    // Popup
    openPopup: [Boolean, String],
    closePopup: [Boolean, String],

    // Popover
    openPopover: [Boolean, String],
    closePopover: [Boolean, String],

    // Login Screen
    openLoginScreen: [Boolean, String],
    closeLoginScreen: [Boolean, String],

    // Picker
    openPicker: [Boolean, String],
    closePicker: [Boolean, String],

    // Tab
    tabLink: [Boolean, String],
    routeTabLink: [Boolean, String],

    // Sortable
    openSortable: [Boolean, String],
    closeSortable: [Boolean, String],
    toggleSortable: [Boolean, String],

    // Active
    active: Boolean,

    // Badge
    badge: [String, Number],
    iconBadge: [String, Number],
    badgeColor: [String],

    // Back Link
    back: Boolean
  },
  computed: {
    attrsObject: function attrsObject() {
      var self = this;
      var ao = {
        href: self.href
      };
      var pd = self.$options.propsData;
      if ('force' in pd) {
        ao['data-force'] = self.force;
      }
      if ('reload' in pd) {
        ao['data-reload'] = 'true';
      }
      if ('animatePages' in pd && typeof pd.animatePages === 'boolean') {
        ao['data-animate-pages'] = pd.animatePages.toString();
      }
      if ('ignoreCache' in pd) {
        ao['data-ignore-cache'] = 'true';
      }
      if (self.pageName) {
        ao['data-page-name'] = self.pageName;
      }
      if (self.template) {
        ao['data-template'] = self.template;
      }
      if (self.view) {
        ao['data-view'] = self.view;
      }

      function trustyString(s) {
        if (typeof s === 'string' && s !== '') {
          return true;
        }
        return false;
      }

      if (trustyString(self.openPanel)) {
        ao['data-panel'] = self.openPanel;
      }
      if (trustyString(self.openPopup)) {
        ao['data-popup'] = self.openPopup;
      }
      if (trustyString(self.openPopover)) {
        ao['data-popover'] = self.openPopover;
      }
      if (trustyString(self.openPicker)) {
        ao['data-picker'] = self.openPicker;
      }
      if (trustyString(self.openLoginScreen)) {
        ao['data-login-screen'] = self.openLoginScreen;
      }
      if (trustyString(self.openSortable)) {
        ao['data-sortable'] = self.openSortable;
      }
      if (trustyString(self.toggleSortable)) {
        ao['data-sortable'] = self.toggleSortable;
      }

      if (trustyString(self.closePopup)) {
        ao['data-popup'] = self.closePopup;
      }
      if (trustyString(self.closePopover)) {
        ao['data-popover'] = self.closePopover;
      }
      if (trustyString(self.closePicker)) {
        ao['data-picker'] = self.closePicker;
      }
      if (trustyString(self.closeLoginScreen)) {
        ao['data-login-screen'] = self.closeLoginScreen;
      }
      if (trustyString(self.closeSortable)) {
        ao['data-sortable'] = self.closeSortable;
      }

      if (trustyString(self.tabLink)) {
        ao['data-tab'] = self.tabLink;
      }

      return ao;
    },
    classesObject: function classesObject() {
      var self = this;
      var co = {
        back: self.back,
        external: self.external,
        'no-fastclick': self.noFastclick
      };
      var pd = self.$options.propsData;
      if (self.rippleColor) {
        co['ripple-color-' + self.rippleColor] = true;
      }
      if (self.color) {
        co['color-' + self.color] = true;
      }
      if (self.theme) {
        co['theme-' + self.theme] = true;
      }
      if (self.bg) {
        co['bg-' + self.bg] = true;
      }

      // Button
      ['round', 'fill', 'big', 'raised'].forEach(function (prop, index) {
        if (self[prop]) {
          co['button-' + prop] = true;
        }
      });

      // Active
      if (self.routeInfo.activeTab) {
        var isActiveTab = self.routeTabLink && self.routeTabLink.replace('#', '') === self.routeInfo.activeTab.tabId;
        co.active = isActiveTab;
      } else {
        co.active = self.active;
      }

      function trustyBoolean(b) {
        if (b || b === '') {
          return true;
        }
        return false;
      }
      // Panel
      if (trustyBoolean(self.closePanel)) {
        co['close-panel'] = true;
      }
      if (self.openPanel || self.openPanel === '') {
        co['open-panel'] = true;
      }

      // Popup
      if (trustyBoolean(self.closePopup)) {
        co['close-popup'] = true;
      }
      if (self.openPopup || self.openPopup === '') {
        co['open-popup'] = true;
      }

      // Popover
      if (trustyBoolean(self.closePopover)) {
        co['close-popover'] = true;
      }
      if (self.openPopover || self.openPopover === '') {
        co['open-popover'] = true;
      }

      // Picker
      if (trustyBoolean(self.closePicker)) {
        co['close-picker'] = true;
      }
      if (self.openPicker || self.openPicker === '') {
        co['open-picker'] = true;
      }

      // Login Screen
      if (trustyBoolean(self.closeLoginScreen)) {
        co['close-login-screen'] = true;
      }
      if (self.openLoginScreen || self.openLoginScreen === '') {
        co['open-login-screen'] = true;
      }

      // Sortable
      if (trustyBoolean(self.closeSortable)) {
        co['close-sortable'] = true;
      }
      if (self.openSortable || self.openSortable === '') {
        co['open-sortable'] = true;
      }
      if (self.toggleSortable || self.toggleSortable === '') {
        co['toggle-sortable'] = true;
      }

      // Tab
      if (self.tabLink || self.tabLink === '') {
        co['tab-link'] = true;
      }

      return co;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onRouteChange: function onRouteChange(e) {
      if (e.route.tab) {
        this.$set(this.routeInfo, 'activeTab', e.route.tab);
      }
    }
  }
};

var button = {
  render: function render(c) {
    var iconEl,
        textEl,
        self = this;
    if (self.text) {
      textEl = c('span', {}, self.text);
    }
    if (self.icon || self.iconMaterial || self.iconIon || self.iconFa || self.iconF7 || self.iconIfMaterial || self.iconIfIos) {
      iconEl = c('f7-icon', { props: {
          material: self.iconMaterial,
          ion: self.iconIon,
          fa: self.iconFa,
          f7: self.iconF7,
          icon: self.icon,
          ifMaterial: self.iconIfMaterial,
          ifIos: self.iconIfIos,
          size: self.iconSize
        } });
    }
    self.classesObject.button = true;
    var linkEl = c('a', {
      class: self.classesObject,
      attrs: self.attrsObject,
      on: {
        click: self.onClick
      }
    }, [iconEl, textEl, self.$slots.default]);

    return linkEl;
  },
  mixins: [LinkMixin],
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var buttonsSegmented = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "buttons-row", class: _vm.colorComputed ? 'theme-' + _vm.colorComputed : '' }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'color': String,
    'theme': String,
    'bg': String
  },
  computed: {
    colorComputed: function colorComputed() {
      return this.color || this.theme || this.bg;
    }
  }
};

var CalendarDatePickerMixin = {
  props: {
    value: [String, Array, Number],
    monthNames: Array,
    monthNamesShort: Array,
    dayNames: Array,
    dayNamesShort: Array,
    firstDay: Number, // First day of the week, Monday
    weekendDays: Array, // Sunday and Saturday
    multiple: Boolean,
    rangePicker: Boolean,
    dateFormat: String,
    direction: String, // or 'vertical'
    minDate: [Date, String, Number],
    maxDate: [Date, String, Number],
    disabled: [Array, Function, Object], // dates range of disabled days
    events: [Array, Function, Object], // dates range of days with events
    rangesClasses: [Array, Function, Object], //array with custom classes date ranges
    touchMove: Boolean,
    animate: Boolean,
    closeOnSelect: Boolean,
    monthPicker: Boolean,
    yearPicker: Boolean,
    weekHeader: Boolean,
    // Common settings
    closeByOutsideClick: Boolean,
    scrollToInput: Boolean,
    inputReadOnly: Boolean,
    convertToPopover: Boolean,
    onlyInPopover: Boolean,
    toolbar: Boolean,
    toolbarTemplate: String,
    toolbarCloseText: String,
    headerPlaceholder: String,
    header: Boolean,
    footer: Boolean
  },
  computed: {
    calendarValue: function calendarValue() {
      var self = this;
      if (self.value && !Array.isArray(self.value)) {
        return [self.value];
      }
      return self.value;
    }
  },
  watch: {
    value: function value() {
      var self = this;
      if (self.f7Calendar) {
        var newValue = self.value;
        if (!Array.isArray(self.value)) {
          newValue = [self.value];
        }
        self.$nextTick(function () {
          self.f7Calendar.setValue(newValue);
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7Calendar && self.f7Calendar.destroy) {
      self.f7Calendar.destroy();
    }
  },
  methods: {
    getValue: function getValue() {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.value;
    },
    setValue: function setValue(values) {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.setValue(values);
    },
    nextMonth: function nextMonth(duration) {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.nextMonth(duration);
    },
    prevMonth: function prevMonth(duration) {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.prevMonth(duration);
    },
    nextYear: function nextYear() {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.nextYear();
    },
    prevYear: function prevYear() {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.prevYear();
    },
    setYearMonth: function setYearMonth(year, month, duration) {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.setYearMonth(year, month, duration);
    },
    open: function open() {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.open();
    },
    close: function close() {
      if (!this.f7Calendar) {
        return;
      }
      return this.f7Calendar.close();
    }
  }
};

var calendar = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "calendar-inline" });
  },
  staticRenderFns: [],
  mixins: [CalendarDatePickerMixin],
  methods: {
    onF7Init: function onF7Init(f7) {
      var self = this;
      if (typeof self.$options.propsData.footer === 'undefined') {
        self.$options.propsData.footer = false;
      }
      if (typeof self.$options.propsData.header === 'undefined') {
        self.$options.propsData.header = false;
      }
      var params = Object.assign(self.$options.propsData, {
        container: self.$el,
        value: self.calendarValue,
        onChange: function onChange(c, values, displayValues) {
          self.$emit('change', c, values, displayValues);
        },
        onMonthAdd: function onMonthAdd(c, monthContainer) {
          self.$emit('monthAdd', c, monthContainer);
        },
        onDayClick: function onDayClick(c, dayContainer, year, month, day) {
          self.$emit('dayClick', c, dayContainer, year, month, day);
        },
        onMonthYearChangeStart: function onMonthYearChangeStart(c, year, month) {
          self.$emit('monthYearChangeStart', c, year, month);
        },
        onMonthYearChangeEnd: function onMonthYearChangeEnd(c, year, month) {
          self.$emit('monthYearChangeEnd', c, year, month);
        },
        onOpen: function onOpen(c) {
          self.$emit('open', c);
        },
        onClose: function onClose(c) {
          self.$emit('close', c);
        }
      });
      self.f7Calendar = f7.calendar(params);
    }
  }
};

var cardContent = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "card-content" }, [_vm.inner ? _c('div', { staticClass: "card-content-inner" }, [_vm._t("default")], 2) : _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    inner: {
      type: Boolean,
      default: true
    }
  }
};

var cardFooter = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "card-footer" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var cardHeader = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "card-header" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var card = {
  render: function render(c) {
    var self = this;
    var headerEl, contentEl, contentChildEl, footerEl;

    if (self.title) {
      headerEl = c('f7-card-header', { domProps: { innerHTML: self.title } });
    }
    if (self.content) {
      contentChildEl = c('div', { domProps: { innerHTML: self.content } });
      contentEl = c('f7-card-content', { props: { inner: self.inner } }, [contentChildEl]);
    }
    if (self.footer) {
      footerEl = c('f7-card-footer', { domProps: { innerHTML: self.footer } });
    }

    return c('div', { staticClass: 'card' }, [headerEl, contentEl, footerEl, self.$slots.default]);
  },
  props: {
    'title': [String, Number],
    'content': [String, Number],
    'footer': [String, Number],
    'inner': {
      type: Boolean,
      default: true
    }
  }
};

var chip = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "chip", class: _vm.chipClassObject, on: { "click": _vm.onClick } }, [_vm.media ? _c('span', { staticClass: "chip-media", class: _vm.mediaClassObject, domProps: { "innerHTML": _vm._s(_vm.media) } }) : _vm._e(), _vm._v(" "), _vm.text ? _c('span', { staticClass: "chip-label", domProps: { "innerHTML": _vm._s(_vm.text) } }) : _vm._e(), _vm._v(" "), _vm.deleteable ? _c('a', { staticClass: "chip-delete", attrs: { "href": "#" }, on: { "click": _vm.onDeleteClick } }) : _vm._e()]);
  },
  staticRenderFns: [],
  props: {
    media: String,
    text: [String, Number],
    deleteable: Boolean,
    color: String,
    bg: String,
    mediaBg: String,
    mediaColor: String
  },
  computed: {
    mediaClassObject: function mediaClassObject() {
      var c = {};
      if (this.mediaColor) {
        c['color-' + this.mediaColor] = true;
      }
      if (this.mediaBg) {
        c['color-' + this.mediaBg] = true;
      }
      return c;
    },
    chipClassObject: function chipClassObject() {
      var c = {};
      if (this.color) {
        c['color-' + this.color] = true;
      }
      if (this.bg) {
        c['bg-' + this.bg] = true;
      }
      return c;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onDeleteClick: function onDeleteClick(event) {
      this.$emit('delete', event);
    }
  }
};

var contentBlockTitle = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content-block-title" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var contentBlock = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "content-block", class: _vm.classesObject, on: { "tab:show": _vm.onTabShow, "tab:hide": _vm.onTabHide } }, [_vm.inner ? _c('div', { staticClass: "content-block-inner" }, [_vm._t("default")], 2) : _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'inset': Boolean,
    'tablet-inset': Boolean,
    'inner': Boolean,
    'tabs': Boolean,
    'tab': Boolean,
    'active': Boolean,
    'no-hairlines': Boolean,
    'no-hairlines-between': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var self = this;
      return {
        'inset': self.inset,
        'tablet-inset': self.tabletInset,
        'tabs': self.tabs,
        'tab': self.tab,
        'active': self.active,
        'no-hairlines': self.noHairlines,
        'no-hairlines-between': self.noHairlinesBetween
      };
    }
  },
  methods: {
    onTabShow: function onTabShow(e) {
      this.$emit('tab:show', e);
    },
    onTabHide: function onTabHide(e) {
      this.$emit('tab:hide', e);
    }
  }
};

var dataTableActions = {
  render: function render(c) {
    var self = this;
    return c('div', { staticClass: 'data-table-actions' }, self.$slots.default);
  }
};

var dataTableCell = {
  render: function render(c) {
    var self = this;
    var heading = self.$parent && self.$parent.heading;
    return c(heading ? 'th' : 'td', {
      attrs: {
        'data-collapsible-title': self.collapsibleTitle
      },
      class: self.classesObject,
      on: {
        click: self.onClick
      }
    }, [self.$slots.default]);
  },
  props: {
    label: Boolean,
    numeric: Boolean,
    actions: Boolean,
    sortable: Boolean,
    checkbox: Boolean,
    order: {
      type: String,
      default: 'asc'
    },
    'sortable-active': Boolean,
    'collapsible-title': String,
    'active-sorting': Boolean,
    'tablet-only': Boolean,
    'tablet-landscape-only': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var self = this;
      return {
        'checkbox-cell': self.checkbox,
        'label-cell': self.label,
        'numeric-cell': self.numeric,
        'actions-cell': self.actions,
        'sortable-cell': self.sortable,
        'sortable-asc': self.order === 'asc',
        'sortable-desc': self.order === 'desc',
        'sortable-active': self.sortableActive,
        'tablet-only': self.tabletOnly,
        'tablet-landscape-only': self.tabletLandscapeOnly
      };
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var dataTableHeader = {
  render: function render(c) {
    var self = this;
    var headerEl, titleEl;
    if (self.title) {
      titleEl = c('div', {
        class: {
          'data-table-title': !self.selected,
          'data-table-title-selected': self.selected
        }
      }, [self.title]);
    }

    if (self.$slots.default) {
      self.$slots.default.map(function (el) {
        var tag = el.componentOptions && el.componentOptions.tag;
        if (tag === 'f7-table-title' && el.componentOptions.propsData) {
          el.componentOptions.propsData.selected = self.selected;
        }
      });
    }

    headerEl = c('div', {
      class: {
        'data-table-header': !self.selected,
        'data-table-header-selected': self.selected
      }
    }, [titleEl, self.$slots.default]);

    return c('div', { staticClass: 'card-header' }, [headerEl]);
  },
  props: {
    title: String,
    selected: Boolean
  }
};

var dataTableLinks = {
  render: function render(c) {
    var self = this;
    return c('div', { staticClass: 'data-table-links' }, self.$slots.default);
  }
};

var dataTableRow = {
  render: function render(c) {
    var self = this;
    var checkboxEl;
    if (self.selectable) {
      checkboxEl = c('f7-table-cell', { props: { checkbox: true } }, [c('label', { staticClass: 'form-checkbox' }, [c('input', {
        attrs: {
          type: 'checkbox'
        },
        domProps: {
          checked: self.selected
        },
        on: {
          change: self.onChange
        }
      }), c('i')])]);
    }
    return c('tr', {
      class: {
        'data-table-row-selected': self.selected
      }
    }, [checkboxEl, self.$slots.default]);
  },
  props: {
    heading: Boolean,
    selectable: Boolean,
    selected: Boolean
  },
  methods: {
    onChange: function onChange(event) {
      var self = this;
      self.$emit('change', event);
    }
  }
};

var dataTableTitle = {
  render: function render(c) {
    var self = this;
    return c('div', {
      class: {
        'data-table-title': !self.selected,
        'data-table-title-selected': self.selected
      }
    }, self.$slots.default);
  },
  props: {
    selected: Boolean
  }
};

var dataTable = {
  render: function render(c) {
    var self = this;

    // Split Rows into thead and tbody
    var theadEl = [];
    var theadEls = [];
    var tbodyEl = [];
    var tbodyEls = [];
    var beforeTableEls = [];
    var afterTableEls = [];

    var cells;
    if (self.headings) {
      cells = [];
      self.headings.forEach(function (heading, index) {
        var isNumeric = self.columns[index] && self.items[0][self.columns[index]] * 1 === parseFloat(self.items[0][self.columns[index]]);
        cells.push(c('f7-table-cell', {
          props: {
            label: index === 0 && !isNumeric,
            numeric: isNumeric
          }
        }, [heading]));
      });
      theadEls.push(c('f7-table-row', {
        props: {
          heading: true,
          selectable: self.selectable
        }
      }, cells));
    }
    if (self.items) {
      cells = [];
      self.items.forEach(function (item) {
        var cells = [];
        self.columns.forEach(function (column, index) {
          var isNumeric = item[column] * 1 === parseFloat(item[column]);
          cells.push(c('f7-table-cell', {
            props: {
              label: index === 0 && !isNumeric,
              numeric: isNumeric
            }
          }, [item[column]]));
        });
        tbodyEls.push(c('f7-table-row', {
          props: {
            selectable: self.selectable
          }
        }, cells));
      });
    }

    if (self.title) {
      beforeTableEls.push(c('f7-table-header', { props: { title: self.title } }));
    }

    var children = self.$slots.default || [];
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var tag = child.componentOptions && child.componentOptions.tag;
      var childProps = child.componentOptions && child.componentOptions.propsData;

      if (tag === 'f7-table-row') {
        if (childProps.heading === '' || childProps.heading === true) {
          theadEls.push(child);
        } else {
          tbodyEls.push(child);
        }
        if (self.selectable && !('selectable' in childProps)) {
          childProps.selectable = true;
        }
      } else {
        beforeTableEls.push(child);
      }

      if (tag === 'f7-table-header') {
        self.hasSelected = childProps.selected;
      }
    }
    if (theadEls.length > 0) {
      theadEl = c('thead', {}, theadEls);
    }
    tbodyEl = c('tbody', {}, tbodyEls);

    // Before Table
    beforeTableEls.push(self.$slots['before-table']);

    // After Table
    afterTableEls.push(self.$slots['after-table']);

    // Table
    var tableEl = c('table', {}, [theadEl, tbodyEl]);

    return c('div', {
      staticClass: 'data-table',
      class: {
        'data-table-collapsible': self.collapsible,
        'data-table-has-checked': self.hasSelected,
        'data-table-has-selected': self.hasSelected,
        'card': self.card
      }
    }, [beforeTableEls, tableEl, afterTableEls]);
  },
  props: {
    card: Boolean,
    collapsible: Boolean,
    selectable: Boolean,
    items: Array,
    title: String,
    headings: Array,
    columns: Array
  }
};

var datepicker = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "item-input" }, [_c('input', { attrs: { "type": "text", "name": _vm.name }, domProps: { "value": _vm.value } })]);
  },
  staticRenderFns: [],
  mixins: [CalendarDatePickerMixin],
  props: {
    name: String
  },
  methods: {
    onF7Init: function onF7Init(f7) {
      var self = this;
      var $$ = self.$$;
      var input = $$(self.$el).find('input');
      var params = Object.assign(self.$options.propsData, {
        input: input,
        value: self.calendarValue,
        onChange: function onChange(c, values, displayValues) {
          self.$emit('change', c, values, displayValues);
        },
        onMonthAdd: function onMonthAdd(c, monthContainer) {
          self.$emit('monthAdd', c, monthContainer);
        },
        onDayClick: function onDayClick(c, dayContainer, year, month, day) {
          self.$emit('dayClick', c, dayContainer, year, month, day);
        },
        onMonthYearChangeStart: function onMonthYearChangeStart(c, year, month) {
          self.$emit('monthYearChangeStart', c, year, month);
        },
        onMonthYearChangeEnd: function onMonthYearChangeEnd(c, year, month) {
          self.$emit('monthYearChangeEnd', c, year, month);
        },
        onOpen: function onOpen(c) {
          self.$emit('open', c);
        },
        onClose: function onClose(c) {
          self.$emit('close', c);
        }
      });
      self.f7Calendar = f7.calendar(params);
    }
  }
};

var fabSpeedDialAction = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { class: _vm.classesObject, attrs: { "href": "#" }, on: { "click": _vm.onClick } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'color': String,
    'closeSpeedDial': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var co = {};
      if (this.color) {
        co['color-' + this.color] = true;
      }
      if (this.closeSpeedDial) {
        co['close-speed-dial'] = true;
      }
      return co;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var fabSpeedDialActions = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "speed-dial-buttons", class: _vm.theme ? 'theme-' + _vm.theme : false }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    theme: String
  }
};

var fabSpeedDial = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "speed-dial", class: _vm.theme ? 'theme-' + _vm.theme : false }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    theme: String
  }
};

var fab = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { staticClass: "floating-button", class: _vm.color ? 'color-' + _vm.color : false, attrs: { "href": "#" }, on: { "click": _vm.onClick } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    color: String
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var formInput = {
  render: function render(c) {
    var inputEl;
    var self = this;
    var attrs = {
      name: self.name,
      type: self.type,
      placeholder: self.placeholder,
      id: self.id,
      value: self.valueComputed,
      size: self.size,
      accept: self.accept,
      autocomplete: self.autocomplete,
      autocorrect: self.autocorrect,
      autocapitalize: self.autocapitalize,
      spellcheck: self.spellcheck,
      autofocus: self.autofocus,
      autosave: self.autosave,
      checked: self.checkedComputed,
      disabled: self.disabled,
      max: self.max,
      maxlength: self.maxlength,
      min: self.min,
      minlength: self.minlength,
      step: self.step,
      multiple: self.multiple,
      readonly: self.readonly,
      required: self.required,
      color: self.color,
      pattern: self.pattern
    };
    var on = {
      focus: self.onFocus,
      blur: self.onBlur,
      input: self.onInput,
      change: self.onChange,
      click: self.onClick,
      keypress: self.onKeyPress,
      keyup: self.onKeyUp,
      keydown: self.onKeyDown,
      beforeinput: self.onBeforeInput,
      compositionstart: self.onCompositionStart,
      compositionupdate: self.onCompositionUpdate,
      compositionend: self.onCompositionEnd,
      focusin: self.onFocusIn,
      focusout: self.onFocusOut,
      dblclick: self.onDblClick,
      mousedown: self.onMouseDown,
      mouseenter: self.onMouseEnter,
      mouseleave: self.onMouseLeave,
      mousemove: self.onMouseMove,
      mouseout: self.onMouseOut,
      mouseover: self.onMouseOver,
      mouseup: self.onMouseUp,
      wheel: self.onWheel,
      select: self.onSelect
    };
    if (self.type === 'select' || self.type === 'textarea' || self.type === 'file') {
      delete attrs.value;
      if (self.type === 'select') {
        if (self.hasSelectModel) {
          inputEl = c('select', { attrs: attrs, on: on, style: self.inputStyle }, self.$slots.default);
        } else {
          inputEl = c('select', { attrs: attrs, on: on, style: self.inputStyle, domProps: { value: self.valueComputed } }, self.$slots.default);
        }
      } else if (self.type === 'file') {
        inputEl = c('input', { attrs: attrs, style: self.inputStyle, on: on }, self.$slots.default);
      } else {
        inputEl = c('textarea', { attrs: attrs, style: self.inputStyle, on: on, class: { resizable: self.resizable }, domProps: { value: self.valueComputed } }, self.$slots.default);
      }
    } else {
      if (self.$slots.default && self.$slots.default.length > 0 || !self.type) {
        inputEl = self.$slots.default;
      } else {
        if (self.type === 'switch') {
          inputEl = c('f7-switch', { props: attrs, on: on });
        } else if (self.type === 'range') {
          inputEl = c('f7-range', { props: attrs, on: on });
        } else {
          inputEl = c('input', { attrs: attrs, style: self.inputStyle, on: on, domProps: { value: self.valueComputed, checked: self.checkedComputed } });
        }
      }
    }

    var itemInput = self.wrap ? c('div', { staticClass: 'item-input' }, [inputEl]) : inputEl;
    return itemInput;
  },
  watch: {
    value: function value() {
      var self = this;
      if (!self.hasSelectModel) {
        return;
      }
      var $$ = self.$$;
      $$(self.$el).find('option').each(function (index, option) {
        if (self.value.indexOf(option.value) >= 0) {
          option.selected = true;
        } else {
          option.selected = false;
        }
      });
    }
  },
  mounted: function mounted() {
    var self = this;
    if (!self.hasSelectModel) {
      return;
    }
    var $$ = self.$$;
    $$(self.$el).find('option').each(function (index, option) {
      if (self.value.indexOf(option.value) >= 0) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  },
  props: {
    // Inputs
    type: String,
    name: String,
    placeholder: String,
    id: String,
    value: [String, Number, Boolean, Array, Object],
    inputValue: [String, Number],
    size: [String, Number],
    accept: [String, Number],
    autocomplete: [String],
    autocorrect: [String],
    autocapitalize: [String],
    spellcheck: [String],
    autofocus: Boolean,
    autosave: String,
    checked: Boolean,
    disabled: Boolean,
    max: [String, Number],
    min: [String, Number],
    step: [String, Number],
    maxlength: [String, Number],
    minlength: [String, Number],
    multiple: Boolean,
    readonly: Boolean,
    required: Boolean,
    inputStyle: String,
    pattern: String,
    resizable: Boolean,

    // Components
    color: String,
    wrap: {
      "type": Boolean,
      "default": true
    }
  },
  computed: {
    hasCheckboxModel: function hasCheckboxModel() {
      var self = this;
      return (self.type === 'checkbox' || self.type === 'switch') && (typeof self.$options.propsData.value !== 'undefined' && typeof self.value === 'boolean' || Array.isArray(self.value));
    },
    hasRadioModel: function hasRadioModel() {
      var self = this;
      return self.type === 'radio' && typeof self.inputValue !== 'undefined';
    },
    hasSelectModel: function hasSelectModel() {
      var self = this;
      return self.type === 'select' && Array.isArray(self.value);
    },
    valueComputed: function valueComputed() {
      var self = this;
      if (self.inputValue) {
        return self.inputValue;
      } else if (self.hasCheckboxModel) {
        return undefined;
      } else if (self.$options.propsData && self.$options.propsData.value !== undefined) {
        return self.value;
      } else if (!self.hasCheckboxModel && !self.hasRadioModel && !self.hasSelectModel && 'value' in self.$options.propsData) {
        return self.value;
      }
      return undefined;
    },
    checkedComputed: function checkedComputed() {
      var self = this;
      if (self.hasCheckboxModel) {
        if (self.inputValue && Array.isArray(self.value)) {
          return self.value.indexOf(self.inputValue) >= 0;
        }
        return self.value;
      } else if (self.hasRadioModel) {
        if (_typeof(self.value) !== _typeof(self.inputValue)) {
          return self.value.toString() === self.inputValue.toString();
        }
        return self.value === self.inputValue;
      } else {
        return self.checked;
      }
    }
  },
  methods: {
    onInput: function onInput(event) {
      if (this.hasSelectModel) {
        return;
      }
      if (event && event.type && event.type === 'input') {
        this.$emit('input', event.target.value);
      } else {
        this.$emit('input', event);
      }
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.$emit('blur', event);
    },
    onChange: function onChange(event) {
      var self = this;
      if (self.hasCheckboxModel) {
        if (Array.isArray(self.value)) {
          if (event.target.checked) {
            self.value.push(event.target.value);
          } else {
            self.value.splice(self.value.indexOf(event.target.value), 1);
          }
        } else {
          self.$emit('input', event.target.checked);
        }
        self.$emit('change', event);
      } else if (self.hasRadioModel) {
        self.$emit('input', event.target.value);
      } else if (self.hasSelectModel) {
        var values = Array.prototype.filter.call(event.target.options, function (option) {
          return option.selected;
        }).map(function (option) {
          var val = "_value" in option ? option._value : option.value;
          return val;
        });
        self.$emit('input', values);
      } else {
        self.$emit('change', event);
      }
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onKeyPress: function onKeyPress(event) {
      this.$emit('keypress', event);
    },
    onKeyUp: function onKeyUp(event) {
      this.$emit('keyup', event);
    },
    onKeyDown: function onKeyDown(event) {
      this.$emit('keydown', event);
    },
    onBeforeInput: function onBeforeInput(event) {
      this.$emit('beforeinput', event);
    },
    onCompositionStart: function onCompositionStart(event) {
      this.$emit('compositionstart', event);
    },
    onCompositionUpdate: function onCompositionUpdate(event) {
      this.$emit('compositionupdate', event);
    },
    onCompositionEnd: function onCompositionEnd(event) {
      this.$emit('compositionend', event);
    },
    onFocusIn: function onFocusIn(event) {
      this.$emit('focusin', event);
    },
    onFocusOut: function onFocusOut(event) {
      this.$emit('focusout', event);
    },
    onDblClick: function onDblClick(event) {
      this.$emit('dblclick', event);
    },
    onMouseDown: function onMouseDown(event) {
      this.$emit('mousedown', event);
    },
    onMouseEnter: function onMouseEnter(event) {
      this.$emit('mouseenter', event);
    },
    onMouseLeave: function onMouseLeave(event) {
      this.$emit('mouseleave', event);
    },
    onMouseMove: function onMouseMove(event) {
      this.$emit('mousemove', event);
    },
    onMouseOut: function onMouseOut(event) {
      this.$emit('mouseout', event);
    },
    onMouseOver: function onMouseOver(event) {
      this.$emit('mouseover', event);
    },
    onMouseUp: function onMouseUp(event) {
      this.$emit('mouseup', event);
    },
    onWheel: function onWheel(event) {
      this.$emit('wheel', event);
    },
    onSelect: function onSelect(event) {
      this.$emit('select', event);
    }
  }
};

var formLabel = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "item-title", class: { 'label': !_vm.floating, 'floating-label': _vm.floating } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    floating: Boolean
  }
};

var formRange = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "range-slider", class: _vm.color ? 'color-' + _vm.color : '' }, [_c('input', { style: _vm.inputStyle, attrs: { "type": "range", "name": _vm.name, "id": _vm.id, "disabled": _vm.disabled, "readonly": _vm.readonly, "required": _vm.required, "max": _vm.max, "min": _vm.min, "step": _vm.step }, domProps: { "value": _vm.value }, on: { "input": _vm.onInput, "change": _vm.onChange, "click": _vm.onClick } })]);
  },
  staticRenderFns: [],
  props: {
    name: String,
    id: String,
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    required: Boolean,
    inputStyle: String,
    max: [String, Number],
    min: [String, Number],
    step: [String, Number],

    color: String
  },
  methods: {
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onChange: function onChange(event) {
      this.$emit('change', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var formSwitch = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('label', { staticClass: "label-switch", class: _vm.color ? 'color-' + _vm.color : '', on: { "click": _vm.onClick } }, [_c('input', { style: _vm.inputStyle, attrs: { "type": "checkbox", "name": _vm.name, "id": _vm.id, "disabled": _vm.disabled, "readonly": _vm.readonly, "required": _vm.required }, domProps: { "value": _vm.valueComputed, "checked": _vm.checkedComputed }, on: { "input": _vm.onInput, "change": _vm.onChange } }), _vm._v(" "), _c('div', { staticClass: "checkbox" })]);
  },
  staticRenderFns: [],
  props: {
    name: String,
    id: String,
    value: [String, Number, Boolean, Array],
    inputValue: [String, Number],
    checked: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: Boolean,
    inputStyle: String,

    color: String
  },
  computed: {
    hasCheckboxModel: function hasCheckboxModel() {
      return typeof this.value === 'boolean' || Array.isArray(this.value);
    },
    valueComputed: function valueComputed() {
      var self = this;
      if (self.inputValue) {
        return self.inputValue;
      } else if (self.hasCheckboxModel) {
        return undefined;
      } else if (self.$options.propsData && self.$options.propsData.value) {
        return self.value;
      }
      return undefined;
    },
    checkedComputed: function checkedComputed() {
      var self = this;
      if (self.hasCheckboxModel) {
        if (self.inputValue && Array.isArray(self.value)) {
          return self.value.indexOf(self.inputValue) >= 0;
        }
        return self.value;
      } else {
        return self.checked;
      }
    }
  },
  methods: {
    onInput: function onInput(event) {
      this.$emit('input', event);
    },
    onChange: function onChange(event) {
      var self = this;
      if (self.hasCheckboxModel) {
        if (Array.isArray(self.value)) {
          if (event.target.checked) {
            self.value.push(event.target.value);
          } else {
            self.value.splice(self.value.indexOf(event.target.value), 1);
          }
          self.$emit('change', event);
        } else {
          self.$emit('input', event.target.checked);
        }
      } else {
        self.$emit('change', event);
      }
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var gridCol = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: 'col-' + _vm.width + (_vm.tabletWidth ? ' tablet-' + _vm.tabletWidth : '') }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'width': {
      type: [Number, String],
      default: 'auto'
    },
    'tablet-width': {
      type: [Number, String]
    }
  },
  data: function data() {
    return {};
  }
};

var gridRow = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "row", class: { 'no-gutter': _vm.noGutter } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'no-gutter': Boolean
  },
  data: function data() {
    return {};
  }
};

var icon = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('i', { staticClass: "icon", class: _vm.classesObject, style: { 'font-size': _vm.sizeComputed } }, [_vm._v(_vm._s(_vm.iconTextComputed)), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'color': String,
    'material': String, //Material Icons
    'f7': String, //Framework7 Icons
    'ion': String, //Ionicons
    'fa': String, //Font Awesome
    'icon': String, //Custom
    'if-material': String,
    'if-ios': String,
    'size': [String, Number]
  },
  computed: {
    sizeComputed: function sizeComputed() {
      var self = this;
      var size = self.size;
      if (typeof size === 'number' || parseFloat(size) === size * 1) {
        size = size + 'px';
      }
      return size;
    },
    iconTextComputed: function iconTextComputed() {
      var self = this;
      var text = self.material || self.f7;
      if (self.ifMaterial && self.$theme.material && (self.ifMaterial.indexOf('material:') >= 0 || self.ifMaterial.indexOf('f7:') >= 0)) {
        text = self.ifMaterial.split(':')[1];
      } else if (self.ifIos && self.$theme.ios && (self.ifIos.indexOf('material:') >= 0 || self.ifIos.indexOf('f7:') >= 0)) {
        text = self.ifIos.split(':')[1];
      }
      return text;
    },
    classesObject: function classesObject() {
      var co = {};
      var self = this;
      if (self.ifMaterial || self.ifIos) {
        var parts = self[self.$theme.material ? 'ifMaterial' : 'ifIos'].split(':');
        var prop = parts[0];
        var value = parts[1];
        if (prop === 'material' || prop === 'fa' || prop === 'f7') {
          co['fa'] = prop === 'fa';
          co['material-icons'] = prop === 'material';
          co['f7-icons'] = prop === 'f7';
        }
        if (prop === 'fa' || prop === 'ion') {
          co[prop + '-' + value] = true;
        }
        if (prop === 'icon') {
          co[value] = true;
        }
      } else {
        co = {
          'material-icons': this.material,
          'f7-icons': this.f7,
          'fa': this.fa
        };
        if (this.ion) {
          co['ion-' + this.ion] = true;
        }
        if (this.fa) {
          co['fa-' + this.fa] = true;
        }
        if (this.icon) {
          co[this.icon] = true;
        }
      }
      if (this.color) {
        co['color-' + this.color] = true;
      }
      return co;
    }
  }
};

var link = {
  mixins: [LinkMixin],
  render: function render(c) {
    var iconEl,
        textEl,
        isTabbarLabel,
        badgeEl,
        iconBadgeEl,
        self = this;
    isTabbarLabel = (self.tabLink || self.tabLink === '') && self.$parent && self.$parent.tabbar && self.$parent.labels;
    if (self.text) {
      if (self.badge) {
        badgeEl = c('f7-badge', { props: { color: self.badgeColor } }, self.badge);
      }
      textEl = c('span', { class: { 'tabbar-label': isTabbarLabel } }, [self.text, badgeEl]);
    }
    if (self.icon || self.iconMaterial || self.iconIon || self.iconFa || self.iconF7 || self.iconIfMaterial && self.$theme.material || self.iconIfIos && self.$theme.ios) {
      if (self.iconBadge) {
        iconBadgeEl = c('f7-badge', { props: { color: self.badgeColor } }, self.iconBadge);
      }
      iconEl = c('f7-icon', { props: {
          material: self.iconMaterial,
          ion: self.iconIon,
          fa: self.iconFa,
          f7: self.iconF7,
          icon: self.icon,
          ifMaterial: self.iconIfMaterial,
          ifIos: self.iconIfIos,
          size: self.iconSize
        } }, [iconBadgeEl]);
    }
    if (!self.text && self.$slots.default && self.$slots.default.length === 0 || self.iconOnly || !self.text && !self.$slots.default) {
      self.classesObject['icon-only'] = true;
    }
    self.classesObject.link = self.noLinkClass || isTabbarLabel ? false : true;
    var linkEl = c('a', {
      class: self.classesObject,
      attrs: self.attrsObject,
      on: {
        click: self.onClick
      }
    }, [iconEl, textEl, self.$slots.default]);
    return linkEl;
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var listButton = {
  render: function render(c) {
    var self = this;
    var linkEl;
    if (self.title) {
      linkEl = c('a', {
        staticClass: 'item-link list-button',
        attrs: self.attrsObject,
        class: self.classesObject,
        domProps: {
          innerHTML: self.title
        },
        on: {
          click: self.onClick
        }
      });
    } else {
      linkEl = c('a', {
        staticClass: 'item-link list-button',
        attrs: self.attrsObject,
        class: self.classesObject,
        on: {
          click: self.onClick
        }
      }, [self.$slots.default]);
    }
    return c('li', {}, [linkEl]);
  },
  props: {
    'title': [String, Number],
    'link': [Boolean, String],
    'href': [Boolean, String],
    'external': Boolean,
    'link-external': Boolean,
    'back': Boolean,
    'link-back': Boolean,
    'no-fastclick': Boolean,
    'link-no-fastlick': Boolean,

    color: String,

    // Router
    force: Boolean,
    reload: Boolean,
    animatePages: Boolean,
    ignoreCache: Boolean,
    pageName: String,
    template: String,

    // View
    view: String,

    // Panel
    openPanel: [Boolean, String],
    closePanel: [Boolean, String],

    // Popup
    openPopup: [Boolean, String],
    closePopup: [Boolean, String],

    // Popover
    openPopover: [Boolean, String],
    closePopover: [Boolean, String],

    // Login Screen
    openLoginScreen: [Boolean, String],
    closeLoginScreen: [Boolean, String],

    // Picker
    openPicker: [Boolean, String],
    closePicker: [Boolean, String],

    // Tab
    tabLink: [Boolean, String],

    // Sortable
    openSortable: [Boolean, String],
    closeSortable: [Boolean, String],
    toggleSortable: [Boolean, String]
  },
  computed: {
    attrsObject: function attrsObject() {
      var self = this;
      var ao = {
        href: typeof self.link === 'boolean' && typeof self.href === 'boolean' ? '#' : self.link || self.href
      };
      var pd = self.$options.propsData;
      if ('force' in pd) {
        ao['data-force'] = self.force;
      }
      if ('reload' in pd) {
        ao['data-reload'] = 'true';
      }
      if ('animatePages' in pd && typeof pd.animatePages === 'boolean') {
        ao['data-animate-pages'] = pd.animatePages.toString();
      }
      if ('ignoreCache' in pd) {
        ao['data-ignore-cache'] = 'true';
      }
      if (self.pageName) {
        ao['data-page-name'] = self.pageName;
      }
      if (self.template) {
        ao['data-template'] = self.template;
      }
      if (self.view) {
        ao['data-view'] = self.view;
      }

      function trustyString(s) {
        if (typeof s === 'string' && s !== '') {
          return true;
        }
        return false;
      }

      if (trustyString(self.openPanel)) {
        ao['data-panel'] = self.openPanel;
      }
      if (trustyString(self.openPopup)) {
        ao['data-popup'] = self.openPopup;
      }
      if (trustyString(self.openPopover)) {
        ao['data-popover'] = self.openPopover;
      }
      if (trustyString(self.openPicker)) {
        ao['data-picker'] = self.openPicker;
      }
      if (trustyString(self.openLoginScreen)) {
        ao['data-login-screen'] = self.openLoginScreen;
      }
      if (trustyString(self.openSortable)) {
        ao['data-sortable'] = self.openSortable;
      }
      if (trustyString(self.toggleSortable)) {
        ao['data-sortable'] = self.toggleSortable;
      }

      if (trustyString(self.closePopup)) {
        ao['data-popup'] = self.closePopup;
      }
      if (trustyString(self.closePopover)) {
        ao['data-popover'] = self.closePopover;
      }
      if (trustyString(self.closePicker)) {
        ao['data-picker'] = self.closePicker;
      }
      if (trustyString(self.closeLoginScreen)) {
        ao['data-login-screen'] = self.closeLoginScreen;
      }
      if (trustyString(self.closeSortable)) {
        ao['data-sortable'] = self.closeSortable;
      }

      if (trustyString(self.tabLink)) {
        ao['data-tab'] = self.tabLink;
      }

      return ao;
    },
    classesObject: function classesObject() {
      var self = this;
      var co = {
        'external': self.external || self.linkExternal,
        'back': self.back || self.linkBack,
        'no-fastclick': self.noFastclick || self.linkNoFastclick
      };

      function trustyBoolean(b) {
        if (b || b === '') {
          return true;
        }
        return false;
      }

      // Panel
      if (trustyBoolean(self.closePanel)) {
        co['close-panel'] = true;
      }
      if (self.openPanel || self.openPanel === '') {
        co['open-panel'] = true;
      }

      // Popup
      if (trustyBoolean(self.closePopup)) {
        co['close-popup'] = true;
      }
      if (self.openPopup || self.openPopup === '') {
        co['open-popup'] = true;
      }

      // Popover
      if (trustyBoolean(self.closePopover)) {
        co['close-popover'] = true;
      }
      if (self.openPopover || self.openPopover === '') {
        co['open-popover'] = true;
      }

      // Picker
      if (trustyBoolean(self.closePicker)) {
        co['close-picker'] = true;
      }
      if (self.openPicker || self.openPicker === '') {
        co['open-picker'] = true;
      }

      // Login Screen
      if (trustyBoolean(self.closeLoginScreen)) {
        co['close-login-screen'] = true;
      }
      if (self.openLoginScreen || self.openLoginScreen === '') {
        co['open-login-screen'] = true;
      }

      // Sortable
      if (trustyBoolean(self.closeSortable)) {
        co['close-sortable'] = true;
      }
      if (self.openSortable || self.openSortable === '') {
        co['open-sortable'] = true;
      }
      if (self.toggleSortable || self.toggleSortable === '') {
        co['toggle-sortable'] = true;
      }

      // Tab
      if (trustyBoolean(self.tabLink)) {
        co['tab-link'] = true;
      }

      // Color
      if (self.color) {
        co['color-' + self.color] = true;
      }

      return co;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var listGroup = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "list-block-group" }, [_c('ul', [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  props: {
    'media-list': Boolean,
    'sortable': Boolean
  },
  computed: {
    sortableComputed: function sortableComputed() {
      return this.sortable || this.$parent.sortable;
    },
    mediaListComputed: function mediaListComputed() {
      return this.mediaList || this.$parent.mediaList;
    }
  },
  data: function data() {
    return {};
  }
};

var listItemContent = {
  render: function render(c) {
    var titleEl, afterWrapEl, afterEl, badgeEl, innerEl, titleRowEl, subtitleEl, textEl, mediaEl, inputEl, inputIconEl;
    var self = this;
    var slotsContentStart = [],
        slotsContent = [],
        slotsInnerStart = [],
        slotsInner = [],
        slotsAfterStart = [],
        slotsAfter = [],
        slotsMediaStart = [],
        slotsMedia = [];
    if (self.$slots.default && self.$slots.default.length > 0) {
      for (var i = 0; i < self.$slots.default.length; i++) {
        var slotName = self.$slots.default[i].data ? self.$slots.default[i].data.slot : undefined;
        if (slotName && slotName === 'content-start') {
          slotsContentStart.push(self.$slots.default[i]);
        }
        if (slotName && slotName === 'content') {
          slotsContent.push(self.$slots.default[i]);
        }
        if (slotName && slotName === 'after-start') {
          slotsAfterStart.push(self.$slots.default[i]);
        }
        if (slotName && slotName === 'after') {
          slotsAfter.push(self.$slots.default[i]);
        }
        if (slotName && slotName === 'media-start') {
          slotsMediaStart.push(self.$slots.default[i]);
        }
        if (slotName && slotName === 'media') {
          slotsMedia.push(self.$slots.default[i]);
        }
        if (slotName && slotName === 'inner-start') {
          slotsInnerStart.push(self.$slots.default[i]);
        }
        if (!slotName || slotName && slotName === 'inner') {
          slotsInner.push(self.$slots.default[i]);
        }
      }
    }
    // Input
    if (self.radio || self.checkbox) {
      inputEl = c('input', {
        attrs: {
          value: self.value,
          name: self.name,
          checked: self.checked,
          readonly: self.readonly,
          disabled: self.disabled,
          required: self.required,
          type: self.radio ? 'radio' : 'checkbox'
        },
        on: {
          change: self.onChange
        },
        domProps: {
          checked: self.checked
        }
      });
    }
    // Media
    if (self.media || self.checkbox || self.radio && self.$theme.material || slotsMediaStart.length || slotsMedia.length) {
      if (self.checkbox || self.radio && self.$theme.material) {
        if (self.media) {
          inputIconEl = '<i class="icon icon-form-' + (self.radio ? 'radio' : 'checkbox') + '"></i>';
          mediaEl = c('div', { 'class': { 'item-media': true }, domProps: { innerHTML: inputIconEl + (self.media ? self.media : '') } });
        } else {
          var iconClasses = { 'icon': true };
          iconClasses['icon-form-' + (self.radio ? 'radio' : 'checkbox')] = true;
          inputIconEl = c('i', { 'class': iconClasses });
          mediaEl = c('div', { 'class': { 'item-media': true } }, [slotsMediaStart, inputIconEl, slotsMedia]);
        }
      } else {
        if (self.media) {
          mediaEl = c('div', { staticClass: 'item-media', domProps: { innerHTML: self.media } });
        } else {
          mediaEl = c('div', { staticClass: 'item-media' }, [slotsMediaStart, slotsMedia]);
        }
      }
    }
    // Inner Elements
    if (self.title) {
      titleEl = c('div', { staticClass: 'item-title', domProps: { innerHTML: self.title } }, [self.title]);
    }
    if (self.subtitle) {
      subtitleEl = c('div', { staticClass: 'item-subtitle', domProps: { innerHTML: self.subtitle } }, [self.subtitle]);
    }
    if (self.text) {
      textEl = c('div', { staticClass: 'item-text', domProps: { innerHTML: self.text } });
    }
    if (self.after || self.badge || slotsAfter.length) {
      if (self.after) {
        afterEl = c('span', { domProps: { innerHTML: self.after } });
      }
      if (self.badge) {
        badgeEl = c('f7-badge', { props: { color: self.badgeColor } }, [self.badge]);
      }
      afterWrapEl = c('div', { staticClass: 'item-after' }, [slotsAfterStart, afterEl, badgeEl, slotsAfter]);
    }
    if (self.mediaList) {
      titleRowEl = c('div', { staticClass: 'item-title-row' }, [titleEl, afterWrapEl]);
    }
    innerEl = c('div', { staticClass: 'item-inner' }, self.mediaList ? [slotsInnerStart, titleRowEl, subtitleEl, textEl, slotsInner] : [slotsInnerStart, titleEl, afterWrapEl, slotsInner]);
    // Finalize
    return c(self.checkbox || self.radio ? 'label' : 'div', { staticClass: 'item-content', 'class': { 'label-checkbox': self.checkbox, 'label-radio': self.radio }, on: { click: self.onClick } }, [slotsContentStart, inputEl, mediaEl, innerEl, slotsContent]);
  },
  props: {
    'title': [String, Number],
    'text': [String, Number],
    'media': String,
    'subtitle': [String, Number],
    'after': [String, Number],
    'badge': [String, Number],
    'badge-color': String,
    'media-list': Boolean,

    'checkbox': Boolean,
    'checked': Boolean,
    'radio': Boolean,
    'name': String,
    'value': [String, Number, Boolean, Array],
    'input-value': [String, Number],
    'readonly': Boolean,
    'required': Boolean,
    'disabled': Boolean
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onChange: function onChange(event) {
      this.$emit('change', event);
    }
  }
};

var listItemSwipeoutActions = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: 'swipeout-actions-' + _vm.sideComputed }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'left': Boolean,
    'right': Boolean,
    'side': String
  },
  computed: {
    sideComputed: function sideComputed() {
      if (!this.side) {
        if (this.left) {
          return 'left';
        }
        if (this.right) {
          return 'right';
        }
        return 'right';
      }
      return this.side;
    }
  },
  data: function data() {
    return {};
  }
};

var listItemSwipeoutButton = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('a', { class: _vm.classObject, attrs: { "href": "#" }, on: { "click": _vm.onClick } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'overswipe': Boolean,
    'close': Boolean,
    'delete': Boolean,
    'color': String,
    'bg': String
  },
  computed: {
    classObject: function classObject() {
      var co = {
        'swipeout-overswipe': this.overswipe,
        'swipeout-delete': this.delete,
        'swipeout-close': this.close
      };
      if (this.color) {
        co['bg-' + this.color] = true;
      }
      if (this.bg) {
        co['bg-' + this.bg] = true;
      }
      return co;
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  }
};

var listItem = {
  render: function render(c) {
    var liChildren, linkEl, itemContentEl;
    var self = this;
    function trustyBoolean(b) {
      if (b || b === '') {
        return true;
      }
      return false;
    }
    function trustyString(s) {
      if (typeof s === 'string' && s !== '') {
        return true;
      }
      return false;
    }

    // Item Content
    itemContentEl = c('f7-list-item-content', {
      props: {
        'title': self.title,
        'text': self.text,
        'media': self.media,
        'subtitle': self.subtitle,
        'after': self.after,
        'badge': self.badge,
        'badge-color': self.badgeColor,
        'media-list': self.mediaListComputed,
        'accordion-item': self.accordionItem,

        'checkbox': self.checkbox,
        'checked': self.checkedComputed,
        'radio': self.radio,
        'name': self.name,
        'value': self.valueComputed,
        'readonly': self.readonly,
        'required': self.required,
        'disabled': self.disabled
      },
      on: self.link || self.accordionItem || self.smartSelect ? {} : { click: self.onClick, change: self.onChange }
    }, [self.$slots['content-start'], self.$slots.content, self.$slots['media-start'], self.$slots.media, self.$slots['inner-start'], self.$slots.inner, self.$slots['after-start'], self.$slots.after, self.swipeout || self.accordionItem ? [] : self.$slots.default]);

    // Link
    if (self.link || self.accordionItem || self.smartSelect) {
      linkEl = c('a', {
        attrs: {
          href: self.link === true || self.accordionItem || self.smartSelect ? '#' : self.link,
          'target': self.linkTarget,
          'data-searchbar': self.smartSelectSearchbar,
          'data-searchbar-placeholder': self.smartSelectSearchbarPlaceholder,
          'data-searchbar-cancel': self.smartSelectSearchbarCancel,
          'data-page-title': self.smartSelectPageTitle,
          'data-back-text': self.smartSelectBackText,
          'data-back-on-select': self.smartSelectBackOnSelect,
          'data-virtual-list': self.smartSelectVirtualList,
          'data-virtual-list-height': self.smartSelectVirtualListHeight,
          'data-open-in': self.smartSelectOpenIn,
          'data-navbar-theme': self.smartSelectNavbarTheme,
          'data-form-theme': self.smartSelectFormTheme,

          'data-view': trustyString(self.linkView) ? self.linkView : false,
          'data-panel': trustyString(self.linkOpenPanel) ? self.linkOpenPanel : false,
          'data-popup': trustyString(self.linkOpenPopup) ? self.linkOpenPopup : false,
          'data-popover': trustyString(self.linkOpenPopover) ? self.linkOpenPopover : false,
          'data-picker': trustyString(self.linkOpenPicker) ? self.linkOpenPicker : false,
          'data-login-screen': trustyString(self.linkOpenLoginScreen) ? self.linkOpenLoginScreen : false,
          'data-sortable': trustyString(self.linkOpenSortable) ? self.linkOpenSortable : trustyString(self.linkToggleSortable) ? self.linkToggleSortable : false,

          'data-force': self.linkForce,
          'data-reload': self.linkReload,
          'data-animate-pages': 'linkAnimatePages' in self.$options.propsData ? self.linkAnimatePages.toString() : undefined,
          'data-ignore-cache': self.linkIgnoreCache,
          'data-page-name': typeof self.linkPageName === 'string' ? self.linkPageName : false,
          'data-template': typeof self.linkTemplate === 'string' ? self.linkTemplate : false
        },
        'class': {
          'item-link': true,
          'external': self.linkExternal,
          'back': self.linkBack,
          'no-fastclick': self.linkNoFastclick,
          'smart-select': self.smartSelect,
          'close-panel': trustyBoolean(self.linkClosePanel),
          'open-panel': self.linkOpenPanel || self.linkOpenPanel === '',
          'close-popup': trustyBoolean(self.linkClosePopup),
          'open-popup': self.linkOpenPopup || self.linkOpenPopup === '',
          'close-popover': trustyBoolean(self.linkClosePopover),
          'open-popover': self.linkOpenPopover || self.linkOpenPopover === '',
          'close-picker': trustyBoolean(self.linkClosePicker),
          'open-picker': self.linkOpenPicker || self.linkOpenPicker === '',
          'close-login-screen': trustyBoolean(self.linkCloseLoginScreen),
          'open-login-screen': self.linkOpenLoginScreen || self.linkOpenLoginScreen === '',
          'close-sortable': trustyBoolean(self.linkCloseSortable),
          'open-sortable': self.linkOpenSortable || self.linkOpenSortable === '',
          'toggle-sortable': self.linkToggleSortable || self.linkToggleSortable === ''
        },
        on: {
          click: self.onClick
        }
      }, [itemContentEl]);
    }

    if (self.dividerOrGroupTitle) {
      liChildren = [c('span', self.$slots.default || self.title)];
    } else {
      var linkItemEl = self.link || self.smartSelect || self.accordionItem ? linkEl : itemContentEl;
      if (self.swipeout) {
        liChildren = [c('div', { 'class': { 'swipeout-content': true } }, [linkItemEl])];
      } else {
        liChildren = [linkItemEl];
      }
      if (self.sortableComputed) {
        liChildren.push(c('div', { 'class': { 'sortable-handler': true } }));
      }
      if (self.swipeout || self.accordionItem) {
        liChildren.push(self.$slots.default);
      }
      liChildren.unshift(self.$slots['root-start']);
      liChildren.push(self.$slots.root);
    }

    return c('li', {
      'class': {
        'item-divider': self.divider,
        'list-group-title': self.groupTitle,
        'swipeout': self.swipeout,
        'accordion-item': self.accordionItem,
        'accordion-item-expanded': self.accordionExpanded
      },
      on: {
        'swipeout:open': self.onSwipeoutOpen,
        'swipeout:opened': self.onSwipeoutOpened,
        'swipeout:close': self.onSwipeoutClose,
        'swipeout:closed': self.onSwipeoutClosed,
        'swipeout:delete': self.onSwipeoutDelete,
        'swipeout:deleted': self.onSwipeoutDeleted,
        'swipeout': self.onSwipeout,
        'accordion:open': self.onAccOpen,
        'accordion:opened': self.onAccOpened,
        'accordion:close': self.onAccClose,
        'accordion:closed': self.onAccClosed
      }
    }, liChildren);
  },
  props: {
    'title': [String, Number],
    'text': [String, Number],
    'media': String,
    'subtitle': [String, Number],

    // Link Props
    'link': [Boolean, String],
    'link-external': Boolean,
    'link-back': Boolean,
    'link-no-fastclick': Boolean,

    'link-force': Boolean,
    'link-reload': Boolean,
    'link-animate-pages': Boolean,
    'link-ignore-cache': Boolean,
    'link-page-name': String,
    'link-template': String,
    'link-target': String,

    'link-view': String,
    'link-open-panel': [Boolean, String],
    'link-close-panel': [Boolean, String],
    'link-open-popup': [Boolean, String],
    'link-close-popup': [Boolean, String],
    'link-open-popover': [Boolean, String],
    'link-close-popover': [Boolean, String],
    'link-open-login-screen': [Boolean, String],
    'link-close-login-screen': [Boolean, String],
    'link-open-picker': [Boolean, String],
    'link-close-picker': [Boolean, String],

    'after': [String, Number],
    'badge': [String, Number],
    'badge-color': String,
    'media-item': Boolean,
    'media-list-item': Boolean,
    'media-list': Boolean,
    'divider': Boolean,
    'group-title': Boolean,
    'swipeout': Boolean,
    'sortable': Boolean,
    'accordion-item': Boolean,
    'accordion-expanded': Boolean,

    // Smart Select
    'smart-select': Boolean,
    'smart-select-searchbar': Boolean,
    'smart-select-searchbar-placeholder': String,
    'smart-select-searchbar-cancel': String,
    'smart-select-page-title': String,
    'smart-select-back-text': String,
    'smart-select-back-on-select': Boolean,
    'smart-select-virtual-list': Boolean,
    'smart-select-virtual-list-height': Number,
    'smart-select-open-in': String, //popup or picker or page
    'smart-select-navbar-theme': String,
    'smart-select-form-theme': String,

    // Inputs
    'checkbox': Boolean,
    'checked': Boolean,
    'radio': Boolean,
    'name': String,
    'value': [String, Number, Boolean, Array],
    'input-value': [String, Number],
    'readonly': Boolean,
    'required': Boolean,
    'disabled': Boolean
  },
  computed: {
    dividerOrGroupTitle: function dividerOrGroupTitle() {
      return this.divider || this.groupTitle;
    },
    sortableComputed: function sortableComputed() {
      return this.sortable || this.$parent.sortable || this.$parent.sortableComputed;
    },
    mediaListComputed: function mediaListComputed() {
      return this.mediaList || this.mediaItem || this.$parent.mediaList || this.$parent.mediaListComputed;
    },
    hasCheckboxModel: function hasCheckboxModel() {
      var self = this;
      return self.checkbox && (typeof self.$options.propsData.value !== 'undefined' && typeof self.value === 'boolean' || Array.isArray(self.value));
    },
    hasRadioModel: function hasRadioModel() {
      var self = this;
      return self.radio && typeof self.inputValue !== 'undefined';
    },
    valueComputed: function valueComputed() {
      var self = this;
      if (self.inputValue) {
        return self.inputValue;
      } else if (self.hasCheckboxModel) {
        return undefined;
      } else {
        return self.value;
      }
    },
    checkedComputed: function checkedComputed() {
      var self = this;
      if (self.hasCheckboxModel) {
        if (self.inputValue && Array.isArray(self.value)) {
          return self.value.indexOf(self.inputValue) >= 0;
        }
        return self.value;
      } else if (self.hasRadioModel) {
        if (_typeof(self.value) !== _typeof(self.inputValue)) {
          return self.value.toString() === self.inputValue.toString();
        }
        return self.value === self.inputValue;
      } else {
        return self.checked;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (event.target.tagName.toLowerCase() !== 'input') {
        this.$emit('click', event);
      }
    },
    onSwipeoutDeleted: function onSwipeoutDeleted(event) {
      this.$emit('swipeout:deleted', event);
    },
    onSwipeoutDelete: function onSwipeoutDelete(event) {
      this.$emit('swipeout:delete', event);
    },
    onSwipeoutClose: function onSwipeoutClose(event) {
      this.$emit('swipeout:close', event);
    },
    onSwipeoutClosed: function onSwipeoutClosed(event) {
      this.$emit('swipeout:closed', event);
    },
    onSwipeoutOpen: function onSwipeoutOpen(event) {
      this.$emit('swipeout:open', event);
    },
    onSwipeoutOpened: function onSwipeoutOpened(event) {
      this.$emit('swipeout:opened', event);
    },
    onSwipeout: function onSwipeout(event) {
      this.$emit('swipeout', event);
    },
    onAccClose: function onAccClose(event) {
      this.$emit('accordion:close', event);
    },
    onAccClosed: function onAccClosed(event) {
      this.$emit('accordion:closed', event);
    },
    onAccOpen: function onAccOpen(event) {
      this.$emit('accordion:open', event);
    },
    onAccOpened: function onAccOpened(event) {
      this.$emit('accordion:opened', event);
    },
    onChange: function onChange(event) {
      var self = this;
      if (self.hasCheckboxModel) {
        if (Array.isArray(self.value)) {
          if (event.target.checked) {
            self.value.push(event.target.value);
          } else {
            self.value.splice(self.value.indexOf(event.target.value), 1);
          }
        } else {
          self.$emit('input', event.target.checked);
        }
        self.$emit('change', event);
      } else if (self.hasRadioModel) {
        self.$emit('input', event.target.value);
      } else {
        self.$emit('change', event);
      }
    }
  }
};

var listLabel = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "list-block-label" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var list = {
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (!(self.virtual && self.virtualInit && self.f7VirtualList)) {
      return;
    }
    if (self.f7VirtualList.destroy) {
      self.f7VirtualList.destroy();
    }
  },
  watch: {
    virtualItems: function virtualItems() {
      // Items Updated
      var self = this;
      if (!(self.virtual && self.virtualInit && self.f7VirtualList)) {
        return;
      }
      self.f7VirtualList.replaceAllItems(self.virtualItems);
    }
  },
  render: function render(c) {
    var blockEl, blockChildren;
    var self = this;

    blockChildren = self.grouped ? self.$slots.default : c('ul', {}, self.$slots.default);
    var outOfList = [],
        ulSlots = [];
    if (self.$slots.default) {
      for (var i = 0; i < self.$slots.default.length; i++) {
        var tag = self.$slots.default[i].tag;
        if (tag && !(tag == 'li' || tag.indexOf('list-item') >= 0 || tag.indexOf('list-button') >= 0)) {
          outOfList.push(self.$slots.default[i]);
        } else {
          ulSlots.push(self.$slots.default[i]);
        }
      }
    }
    blockEl = c(self.form ? 'form' : 'div', {
      staticClass: 'list-block',
      'class': {
        'inset': self.inset,
        'tablet-inset': self.tabletInset,
        'media-list': self.mediaList,
        'sortable': self.sortable,
        'accordion-list': self.accordion,
        'contacts-block': self.contacts,
        'virtual-list': self.virtual,
        'tab': self.tab,
        'active': self.active,
        'no-hairlines': self.noHairlines,
        'no-hairlines-between': self.noHairlinesBetween,
        'store-data': self.storeData
      },
      on: {
        'sortable:open': self.onSortableOpen,
        'sortable:close': self.onSortableClose,
        'sortable:sort': self.onSortableSort,
        'tab:show': self.onTabShow,
        'tab:hide': self.onTabHide
      }
    }, [ulSlots.length > 0 ? [c('ul', {}, ulSlots), outOfList] : outOfList]);
    return blockEl;
  },
  props: {
    'inset': Boolean,
    'tablet-inset': Boolean,
    'media-list': Boolean,
    'grouped': Boolean,
    'sortable': Boolean,
    'label': String,
    'accordion': Boolean,
    'contacts': Boolean,

    'no-hairlines': Boolean,
    'no-hairlines-between': Boolean,

    // Tab
    'tab': Boolean,
    'active': Boolean,

    // Form
    'form': Boolean,
    'store-data': Boolean,

    // Virtual List
    'virtual': Boolean,
    'virtual-init': {
      type: Boolean,
      default: true
    },
    'virtual-items': [Array, Object],
    'virtual-height': [Number, Function],
    'virtual-rows-before': Number,
    'virtual-rows-after': Number,
    'virtual-cols': {
      type: Number,
      default: 1
    },
    'virtual-cache': {
      type: Boolean,
      default: true
    },
    'virtual-filtered-only': {
      type: Boolean,
      default: false
    },
    'virtual-search-by-item': Function,
    'virtual-search-all': Function,
    'virtual-render-item': Function,
    'virtual-empty-template': String
  },
  methods: {
    onSortableOpen: function onSortableOpen(event) {
      this.$emit('sortable:open', event);
    },
    onSortableClose: function onSortableClose(event) {
      this.$emit('sortable:close', event);
    },
    onSortableSort: function onSortableSort(event) {
      this.$emit('sortable:sort', event, event.detail);
    },
    onTabShow: function onTabShow(e) {
      this.$emit('tab:show', e);
    },
    onTabHide: function onTabHide(e) {
      this.$emit('tab:hide', e);
    },
    onF7Init: function onF7Init(f7) {
      var self = this;
      // Init Virtual List
      if (!(self.virtual && self.virtualInit)) {
        return;
      }
      var $$ = self.$$;
      var $el = $$(self.$el);
      var templateScript = $el.find('script');
      var template = templateScript.html();
      if (!template && templateScript.length > 0) {
        template = templateScript[0].outerHTML;
        template = /\<script type="text\/template7"\>(.*)<\/script>/.exec(template)[1];
      }
      if (!template && !self.virtualRenderItem) {
        return;
      }
      if (template) {
        template = self.$t7.compile(template);
      }

      self.f7VirtualList = f7.virtualList(self.$el, {
        items: self.virtualItems || [],
        template: template,
        height: self.virtualHeight || undefined,
        cols: self.virtualCols,
        rowsBefore: self.virtualRowsBefore || undefined,
        rowsAfter: self.virtualRowsAfter || undefined,
        showFilteredItemsOnly: self.virtualFilteredOnly,
        searchByItem: self.virtualSearchByItem,
        searchAll: self.virtualSearchAll,
        renderItem: self.virtualRenderItem,
        emptyTemplate: self.virtualEmptyTemplate,
        onItemBeforeInsert: function onItemBeforeInsert(list, item) {
          self.$emit('virtual:itembeforeinsert', list, item);
        },
        onBeforeClear: function onBeforeClear(list, fragment) {
          self.$emit('virtual:beforeclear', list, fragment);
        },
        onItemsBeforeInsert: function onItemsBeforeInsert(list, fragment) {
          self.$emit('virtual:itemsbeforeinsert', list, fragment);
        },
        onItemsAfterInsert: function onItemsAfterInsert(list, fragment) {
          self.$emit('virtual:itemsafterinsert', list, fragment);
        }
      });
    }
  }
};

var loginScreenTitle = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "login-screen-title" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [] };

var loginScreen = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "login-screen", class: _vm.classesObject, on: { "loginscreen:open": _vm.onOpen, "loginscreen:opened": _vm.onOpened, "loginscreen:close": _vm.onClose, "loginscreen:closed": _vm.onClosed } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  mounted: function mounted() {
    var self = this;
    if (self.opened) {
      self.$el.style.display = 'block';
    }
  },
  watch: {
    opened: function opened(_opened2) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      var $$ = self.$$;
      if (_opened2) {
        self.$f7.loginScreen(self.$el);
      } else {
        if (!$$(self.$el).hasClass('modal-in')) {
          return;
        }
        self.$f7.closeModal(self.$el);
      }
    }
  },
  props: {
    theme: String,
    layout: String,
    opened: Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'modal-in': this.opened,
        'modal-out': !this.opened
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    }
  },
  methods: {
    onOpen: function onOpen(event) {
      this.$emit('loginscreen:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('loginscreen:opened', event);
    },
    onClose: function onClose(event) {
      this.$emit('loginscreen:close', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('loginscreen:closed', event);
    },
    open: function open(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.loginScreen(self.$el, animated);
    },
    close: function close(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.closeModal(self.$el, animated);
    }
  }
};

var message = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { class: _vm.classesObject, on: { "click": _vm.onClick } }, [_vm._v("\n  " + _vm._s(_vm.day) + " "), _vm.time ? _c('span', [_vm._v(_vm._s(_vm.time))]) : _vm._e(), _vm._v(" "), _vm._t("start"), _vm._v(" "), _vm.name ? _c('div', { staticClass: "message-name", on: { "click": _vm.onNameClick } }, [_vm._v(_vm._s(_vm.name))]) : _vm._e(), _vm._v(" "), _c('div', { staticClass: "message-text", on: { "click": _vm.onTextClick } }, [_vm._t("default", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _vm.date ? _c('div', { staticClass: "message-date" }, [_vm._v(_vm._s(_vm.date))]) : _vm._e()], 2), _vm._v(" "), _vm.avatar ? _c('div', { staticClass: "message-avatar", style: { 'background-image': 'url(' + _vm.avatar + ')' }, on: { "click": _vm.onAvatarClick } }) : _vm._e(), _vm._v(" "), _vm.label ? _c('div', { staticClass: "message-label" }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _vm._t("end")], 2);
  },
  staticRenderFns: [],
  props: {
    text: String,
    name: String,
    avatar: String,
    type: {
      type: String,
      default: 'sent'
    },
    label: String,
    day: String,
    date: String,
    time: String,
    last: {
      type: Boolean,
      default: true
    },
    first: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classesObject: function classesObject() {
      var co = {};
      var self = this;
      if (self.day || self.time) {
        co['messages-date'] = self.day || self.time;
      } else {
        var newPosition = 'bottom';
        if (self.$parent.newFirst) {
          newPosition = 'top';
        }
        // co['message-appear-from-' + newPosition] = true;
        co['message-date'] = self.day || self.time;
        co['message'] = !(self.day || self.time);
        co['message-' + self.type] = true;
        co['message-with-avatar'] = self.avatar;
        co['message-first'] = self.first;
        co['message-last'] = self.last;
        co['message-with-tail'] = self.last;
      }
      return co;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onNameClick: function onNameClick(event) {
      this.$emit('click:name', event);
    },
    onTextClick: function onTextClick(event) {
      this.$emit('click:text', event);
    },
    onAvatarClick: function onAvatarClick(event) {
      this.$emit('click:avatar', event);
    }
  }
};

var messagebar = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "toolbar messagebar" }, [_vm._t("before-inner"), _vm._v(" "), _c('div', { staticClass: "toolbar-inner" }, [_vm._t("before-textarea"), _vm._v(" "), _c('textarea', { ref: "area", attrs: { "placeholder": _vm.placeholder, "disabled": _vm.disabled, "name": _vm.name, "readonly": _vm.readonly }, on: { "input": _vm.onInput, "change": _vm.onChange, "focus": _vm.onFocus, "blur": _vm.onBlur } }, [_vm._v(_vm._s(_vm.value))]), _vm._v(" "), _vm._t("after-textarea"), _vm._v(" "), _vm.sendLink && _vm.sendLink.indexOf('<') >= 0 ? _c('f7-link', { domProps: { "innerHTML": _vm._s(_vm.sendLink) }, on: { "click": _vm.onClick } }) : _c('f7-link', { on: { "click": _vm.onClick } }, [_vm._t("send-link", [_vm._v(_vm._s(_vm.sendLink))])], 2), _vm._v(" "), _vm._t("default")], 2), _vm._v(" "), _vm._t("after-inner")], 2);
  },
  staticRenderFns: [],
  beforeDestroy: function beforeDestroy() {
    if (this.f7Messagebar && this.f7Messagebar.destroy) {
      this.f7Messagebar.destroy();
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Message'
    },
    init: {
      type: Boolean,
      default: true
    },
    maxHeight: Number,
    sendLink: String,
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean,
    name: String
  },
  methods: {
    getValue: function getValue() {
      if (!this.f7Messagebar) {
        return;
      }
      return this.f7Messagebar.value();
    },
    setValue: function setValue(newValue) {
      if (!this.f7Messagebar) {
        return;
      }
      return this.f7Messagebar.value(newValue);
    },
    clear: function clear() {
      if (!this.f7Messagebar) {
        return;
      }
      return this.f7Messagebar.clear();
    },
    onChange: function onChange(event) {
      this.$emit('change', event);
    },
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.$emit('blur', event);
    },
    onClick: function onClick(event) {
      var value = this.$refs.area.value;
      var clear = this.f7Messagebar ? this.f7Messagebar.clear : function () {};
      this.$emit('submit', value, clear);
      this.$emit('click', event);
    },
    onF7Init: function onF7Init() {
      var self = this;
      if (!self.init) {
        return;
      }
      self.f7Messagebar = self.$f7.messagebar(self.$el, {
        maxHeight: self.maxHeight
      });
    }
  }
};

var messages = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "messages" }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  beforeDestroy: function beforeDestroy() {
    if (this.f7Messages && this.f7Messages.destroy) {
      this.f7Messages.destroy();
    }
  },
  beforeUpdate: function beforeUpdate(a, b) {
    var self = this;
    if (!self.init) {
      return;
    }
    self.$children.forEach(function (el) {
      self.$$(el.$el).addClass('message-appeared');
    });
  },
  updated: function updated(a, b) {
    var self = this;
    if (!self.init) {
      return;
    }
    self.$children.forEach(function (el) {
      var $el = self.$$(el.$el);
      if (!$el.hasClass('message-appeared')) {
        $el.addClass('message-appear-from-bottom');
      }
    });
    if (this.f7Messages && this.f7Messages.layout && this.autoLayout) {
      this.f7Messages.layout();
    }
    if (this.f7Messages && this.f7Messages.layout && this.autoLayout) {
      this.f7Messages.scrollMessages();
    }
  },
  props: {
    autoLayout: {
      type: Boolean,
      default: true
    },
    newMessagesFirst: Boolean,
    messages: Array,
    scrollMessages: {
      type: Boolean,
      default: true
    },
    scrollMessagesOnlyOnEdge: Boolean,
    init: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    addMessage: function addMessage(messageParameters, method, animate) {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.addMessage(messageParameters, method, animate);
    },
    appendMessage: function appendMessage(messageParameters, animate) {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.appendMessage(messageParameters, animate);
    },
    prependMessage: function prependMessage(messageParameters, animate) {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.prependMessage(messageParameters, animate);
    },
    addMessages: function addMessages(messages, method, animate) {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.addMessages(messages, method, animate);
    },
    removeMessage: function removeMessage(message) {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.removeMessage(message);
    },
    removeMessages: function removeMessages(messages) {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.removeMessages(messages);
    },
    scroll: function scroll() {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.scrollMessages();
    },
    layout: function layout() {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.layout();
    },
    clean: function clean() {
      if (!this.f7Messages) {
        return;
      }
      return this.f7Messages.clean();
    },
    onF7Init: function onF7Init(f7) {
      var self = this;
      if (!self.init) {
        return;
      }
      self.f7Messages = f7.messages(self.$el, {
        autoLayout: self.autoLayout,
        newMessagesFirst: self.newMessagesFirst,
        messages: self.messages,
        scrollMessages: self.scrollMessages,
        scrollMessagesOnlyOnEdge: self.scrollMessagesOnlyOnEdge
      });
    }
  }
};

var navCenter = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "center", class: { sliding: _vm.sliding } }, [_vm._t("default", [_vm._v(_vm._s(_vm.title))])], 2);
  },
  staticRenderFns: [],
  props: {
    sliding: Boolean,
    title: String
  }
};

var navLeft = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "left", class: { sliding: _vm.sliding } }, [_vm.backLink ? _c('f7-link', { class: { 'icon-only': _vm.backLink === true || _vm.backLink && _vm.$theme.material }, attrs: { "href": _vm.backLinkUrl || _vm.backLinkHref || '#', "back": "", "icon": "icon-back", "text": _vm.backLink !== true && !_vm.$theme.material ? _vm.backLink : undefined }, on: { "click": _vm.onBackClick } }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    backLink: [Boolean, String],
    backLinkUrl: String,
    backLinkHref: String,
    sliding: Boolean
  },
  methods: {
    onBackClick: function onBackClick(e) {
      this.$emit('back-click', e);
      this.$emit('click:back', e);
    }
  }
};

var navRight = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "right", class: { sliding: _vm.sliding } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    sliding: Boolean
  }
};

var navbar = {
  render: function render(c) {
    var self = this,
        innerEl,
        leftEl,
        centerEl;
    if (self.inner) {
      if (self.backLink) {
        leftEl = c('f7-nav-left', {
          props: {
            backLink: self.backLink,
            sliding: self.sliding,
            backLinkHref: self.backLinkUrl || self.backLinkHref
          },
          on: {
            'back-click': self.onBackClick
          }
        });
      }
      if (self.title) {
        centerEl = c('f7-nav-center', {
          props: {
            title: self.title,
            sliding: self.sliding
          }
        });
      }
      innerEl = c('div', { staticClass: 'navbar-inner' }, [leftEl, centerEl, self.$slots.default]);
    }
    return c('div', {
      staticClass: 'navbar',
      class: self.classesObject,
      on: {
        'navbar:beforeinit': self.onBeforeInit,
        'navbar:init': self.onInit,
        'navbar:reinit': self.onReinit,
        'navbar:beforeremove': self.onBeforeRemove
      }
    }, [self.$slots['before-inner'], innerEl, self.$slots['after-inner']]);
  },
  updated: function updated() {
    var self = this;
    self.$nextTick(function () {
      self.$f7.sizeNavbars();
    });
  },
  props: {
    backLink: [Boolean, String],
    backLinkUrl: String,
    backLinkHref: String,
    sliding: Boolean,
    title: String,
    theme: String,
    layout: String,
    hidden: Boolean,
    noShadow: Boolean,
    inner: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'navbar-hidden': this.hidden
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      if (this.noShadow) {
        co['no-shadow'] = true;
      }
      return co;
    }
  },
  methods: {
    hide: function hide(animated) {
      if (!this.$f7) {
        return;
      }
      return this.$f7.hideNavbar(this.$el, animated);
    },
    show: function show(animated) {
      if (!this.$f7) {
        return;
      }
      return this.$f7.showNavbar(this.$el, animated);
    },
    size: function size() {
      if (!this.$f7 || this.$theme.material) {
        return;
      }
      return this.$f7.sizeNavbars();
    },
    onBeforeInit: function onBeforeInit(e) {
      this.$emit('navbar:beforeinit', e);
    },
    onInit: function onInit(e) {
      this.$emit('navbar:init', e);
    },
    onReinit: function onReinit(e) {
      this.$emit('navbar:reinit', e);
    },
    onBeforeRemove: function onBeforeRemove(e) {
      this.$emit('navbar:beforeremove', e);
    },
    onBackClick: function onBackClick(e) {
      this.$emit('back-click', e);
      this.$emit('click:back', e);
    }
  }
};

var pageContent = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "page-content", class: _vm.classesObject, on: { "tab:show": _vm.onTabShow, "tab:hide": _vm.onTabHide } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'tab': Boolean,
    'active': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var self = this;
      return {
        'tab': self.tab,
        'active': self.active
      };
    }
  },
  methods: {
    onTabShow: function onTabShow(e) {
      this.$emit('tab:show', e);
    },
    onTabHide: function onTabHide(e) {
      this.$emit('tab:hide', e);
    }
  }
};

var page = {
  render: function render(c) {
    var pageEl,
        pageContentEl,
        ptrEl,
        infiniteEl,
        fixedList = [],
        staticList = [];
    var self = this;

    if (self.pullToRefresh && self.ptrLayer && self.pullToRefreshLayer) {
      ptrEl = c('div', { class: { 'pull-to-refresh-layer': true } }, [c('div', { class: { 'preloader': true } }), c('div', { class: { 'pull-to-refresh-arrow': true } })]);
    }
    if ((self.infiniteScroll || self.infiniteScroll === '') && self.infiniteScrollPreloader) {
      infiniteEl = c('div', { class: { 'infinite-scroll-preloader': true } }, [c('div', { class: { 'preloader': true } })]);
    }

    var fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab speed-dial floating-button'.split(' ');

    var tag, child, withSubnavbar, withMessages, withSearchbar;

    var i, j;
    if (self.$slots.default) {
      for (i = 0; i < self.$slots.default.length; i++) {
        child = self.$slots.default[i];
        tag = child.tag;
        if (!tag) {
          staticList.push(child);
          continue;
        }
        var isFixed = false;
        if (tag.indexOf('messages') >= 0) {
          withMessages = true;
        }
        if (tag.indexOf('subnavbar') >= 0) {
          withSubnavbar = true;
        }
        if (tag.indexOf('searchbar') >= 0) {
          withSearchbar = true;
        }
        for (j = 0; j < fixedTags.length; j++) {
          if (tag.indexOf(fixedTags[j]) >= 0) {
            isFixed = true;
          }
        }
        if (isFixed) {
          fixedList.push(child);
        } else {
          staticList.push(child);
        }
      }
    }

    if (fixedList.length > 0 && withSearchbar) {
      fixedList.push(c('div', { class: { 'searchbar-overlay': true } }));
    }
    if (withMessages) {
      self.classesObjectPageContent['messages-content'] = true;
    }
    if (!self.noPageContent) {
      pageContentEl = c('div', {
        staticClass: 'page-content',
        class: self.classesObjectPageContent,
        attrs: {
          'data-ptr-distance': self.pullToRefreshDistance || self.ptrDistance,
          'data-distance': self.infiniteScrollDistance
        },
        on: {
          'ptr:pullstart': self.onPtrPullstart,
          'ptr:pullmove': self.onPtrPullmove,
          'ptr:pullend': self.onPtrPullend,
          'ptr:refresh': self.onPtrRefresh,
          'ptr:done': self.onPtrRefreshdone,
          'infinite': self.onInfinite
        }
      }, self.infiniteScroll === 'top' ? [ptrEl, infiniteEl, self.$slots.static, staticList] : [ptrEl, self.$slots.static, staticList, infiniteEl]);
    } else {
      pageContentEl = [];
      if (self.$slots.default && fixedList.length > 0) {
        for (i = 0; i < self.$slots.default.length; i++) {
          if (fixedList.indexOf(self.$slots.default[i]) < 0) {
            pageContentEl.push(self.$slots.default[i]);
          }
        }
      } else {
        pageContentEl = [self.$slots.default];
      }
    }
    fixedList.push(self.$slots.fixed);

    if (withSubnavbar) {
      self.classesObjectPage['with-subnavbar'] = true;
    }
    pageEl = c('div', {
      staticClass: 'page',
      class: self.classesObjectPage,
      attrs: {
        'data-page': self.name
      },
      on: {
        'page:beforeinit': self.onPageBeforeInit,
        'page:init': self.onPageInit,
        'page:reinit': self.onPageReinit,
        'page:beforeanimation': self.onPageBeforeAnimation,
        'page:afteranimation': self.onPageAfterAnimation,
        'page:beforeremove': self.onPageBeforeRemove,
        'page:back': self.onPageBack,
        'page:afterback': self.onPageAfterBack
      }
    }, [fixedList, pageContentEl]);

    return pageEl;
  },
  props: {
    'name': String,
    'cached': Boolean,
    'navbar-fixed': Boolean,
    'navbar-through': Boolean,
    'toolbar-fixed': Boolean,
    'toolbar-through': Boolean,
    'tabbar-fixed': Boolean,
    'tabbar-through': Boolean,
    'tabbar-labels-fixed': Boolean,
    'tabbar-labels-through': Boolean,
    'with-subnavbar': Boolean,
    'subnavbar': Boolean,
    'no-navbar': Boolean,
    'no-toolbar': Boolean,
    'no-tabbar': Boolean,
    'pull-to-refresh': Boolean,
    'pull-to-refresh-distance': Number,
    'ptr-distance': Number,
    'pull-to-refresh-layer': {
      type: Boolean,
      default: true
    },
    'ptr-layer': {
      type: Boolean,
      default: true
    },
    'infinite-scroll': [Boolean, String],
    'infinite-scroll-distance': Number,
    'infinite-scroll-preloader': {
      type: Boolean,
      default: true
    },
    'hide-bars-on-scroll': Boolean,
    'hide-navbar-on-scroll': Boolean,
    'hide-toolbar-on-scroll': Boolean,
    'hide-tabbar-on-scroll': Boolean,
    'messages': Boolean,
    'tabs': Boolean,
    'no-page-content': Boolean,
    'login-screen': Boolean,
    'theme': String,
    'layout': String,
    'no-swipeback': Boolean
  },
  computed: {
    classesObjectPage: function classesObjectPage() {
      var co = {
        'cached': this.cached,
        'navbar-fixed': this.navbarFixed || this.navbarThrough && this.$theme.material,
        'navbar-through': this.navbarThrough,
        'toolbar-fixed': this.toolbarFixed,
        'toolbar-through': this.toolbarThrough,
        'tabbar-fixed': this.tabbarFixed,
        'tabbar-through': this.tabbarThrough,
        'tabbar-labels-fixed': this.tabbarLabelsFixed,
        'tabbar-labels-through': this.tabbarLabelsThrough,
        'with-subnavbar': this.subnavbar || this.withSubnavbar,
        'no-navbar': this.noNavbar,
        'no-toolbar': this.noToolbar,
        'no-tabbar': this.noTabbar,
        'tabs': this.tabs,
        'no-swipeback': this.noSwipeback
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    },
    classesObjectPageContent: function classesObjectPageContent() {
      return {
        'pull-to-refresh-content': this.pullToRefresh,
        'infinite-scroll': this.infiniteScroll || this.infiniteScroll === '',
        'infinite-scroll-top': this.infiniteScroll === 'top',
        'hide-bars-on-scroll': this.hideBarsOnScroll,
        'hide-navbar-on-scroll': this.hideNavbarOnScroll,
        'hide-toolbar-on-scroll': this.hideToolbarOnScroll,
        'hide-tabbar-on-scroll': this.hideTabbarOnScroll,
        'messages-content': this.messages,
        'login-screen-content': this.loginScreen
      };
    }
  },
  methods: {
    onPtrPullstart: function onPtrPullstart(event) {
      this.$emit('ptr:pullstart', event);
    },
    onPtrPullmove: function onPtrPullmove(event) {
      this.$emit('ptr:pullmove', event);
    },
    onPtrPullend: function onPtrPullend(event) {
      this.$emit('ptr:pullend', event);
    },
    onPtrRefresh: function onPtrRefresh(event) {
      this.$emit('ptr:refresh', event, event.detail.done);
    },
    onPtrRefreshdone: function onPtrRefreshdone(event) {
      this.$emit('ptr:done', event);
    },
    onInfinite: function onInfinite(event) {
      this.$emit('infinite', event);
    },
    onPageBeforeInit: function onPageBeforeInit(event) {
      this.f7PageData = event.detail.page;
      this.$emit('page:beforeinit', event, event.detail.page);
    },
    onPageInit: function onPageInit(event) {
      this.$emit('page:init', event, event.detail.page);
    },
    onPageReinit: function onPageReinit(event) {
      this.$emit('page:reinit', event, event.detail.page);
    },
    onPageBeforeAnimation: function onPageBeforeAnimation(event) {
      this.$emit('page:beforeanimation', event, event.detail.page);
    },
    onPageAfterAnimation: function onPageAfterAnimation(event) {
      this.$emit('page:afteranimation', event, event.detail.page);
    },
    onPageBeforeRemove: function onPageBeforeRemove(event) {
      this.$emit('page:beforeremove', event, event.detail.page);
    },
    onPageBack: function onPageBack(event) {
      this.$emit('page:back', event, event.detail.page);
    },
    onPageAfterBack: function onPageAfterBack(event) {
      this.$emit('page:afterback', event, event.detail.page);
    }
  }
};

var pages = {
  render: function render(c) {
    var self = this;
    var pages = [];
    for (var pageId in self.pages) {
      var page = self.pages[pageId];
      pages.push(c(page.component, { tag: 'component', props: self.$route && self.$route.params, key: pageId }));
    }
    return c('div', {
      staticClass: 'pages',
      ref: 'pages',
      class: self.classesObject,
      on: {
        'page:beforeremove': self.onPageBeforeRemove
      }
    }, [self.$slots.default, pages]);
  },
  props: {
    'navbar-fixed': Boolean,
    'navbar-through': Boolean,
    'toolbar-fixed': Boolean,
    'toolbar-through': Boolean,
    'tabbar-fixed': Boolean,
    'tabbar-through': Boolean,
    'tabbar-labels-fixed': Boolean,
    'tabbar-labels-through': Boolean,
    'theme': String,
    'layout': String
  },
  data: function data() {
    return {
      pages: {}
    };
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'navbar-fixed': this.navbarFixed || this.navbarThrough && this.$theme.material,
        'navbar-through': this.navbarThrough,
        'toolbar-fixed': this.toolbarFixed,
        'toolbar-through': this.toolbarThrough,
        'tabbar-fixed': this.tabbarFixed,
        'tabbar-through': this.tabbarThrough,
        'tabbar-labels-fixed': this.tabbarLabelsFixed,
        'tabbar-labels-through': this.tabbarLabesThrough
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    }
  },
  methods: {
    onPageBeforeRemove: function onPageBeforeRemove(e) {
      var this$1 = this;

      var idToRemove;
      for (var id in this$1.pages) {
        if (e.target === this$1.pages[id].pageElement) {
          idToRemove = id;
          break;
        }
      }
      if (idToRemove) {
        this.$delete(this.pages, idToRemove);
      }
    },
    onRouteChange: function onRouteChange(event) {
      var self = this;
      var pageComponent = event.route.component;
      var view = event.view;
      var currentView = self.$parent.f7View || self.$parent.$el.f7View;

      if (view !== currentView) {
        return;
      }

      var previousRoute = self.$f7Router.findMatchingRoute(view.url) || { route: { path: '/', pagePath: '/' } };
      var pageRouteChanged = previousRoute.route.pagePath !== event.route.pagePath;
      var childRouteChanged = !pageRouteChanged && previousRoute.route.path !== event.route.path;
      var shouldUpdatePages = pageRouteChanged || !childRouteChanged && (event.options.reload || view.params.allowDuplicateUrls);

      if (!shouldUpdatePages) {
        return;
      }

      var id = new Date().getTime();

      self.$set(self.pages, id, { component: pageComponent });

      view.allowPageChange = false;

      self.$nextTick(function () {
        var newPage = view.pagesContainer.querySelector('.page:last-child');

        self.pages[id].pageElement = newPage;

        view.allowPageChange = true;

        var options = Object.assign(event.options, {
          pageElement: newPage
        });

        if (options.isBack) {
          view.router.back(options);
        } else {
          view.router.load(options);
        }
      });
    }
  }
};

var panel = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "panel", class: _vm.classesObject, on: { "panel:open": _vm.onOpen, "panel:opened": _vm.onOpened, "panel:close": _vm.onClose, "panel:closed": _vm.onClosed, "panel:overlay-click": _vm.onOverlayClick, "panel:swipe": _vm.onPanelSwipe } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'side': String,
    'effect': String,
    'cover': Boolean,
    'reveal': Boolean,
    'left': Boolean,
    'right': Boolean,
    'theme': String,
    'layout': String,
    'opened': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var self = this;
      var side = self.side || (self.left ? 'left' : 'right');
      var effect = self.effect || (self.reveal ? 'reveal' : 'cover');
      var co = {};
      co['panel-' + side] = true;
      co['panel-' + effect] = true;
      if (self.layout) {
        co['layout-' + self.layout] = true;
      }
      if (self.theme) {
        co['theme-' + self.theme] = true;
      }
      co.active = self.opened;
      return co;
    }
  },
  watch: {
    opened: function opened(_opened3) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      var side = self.side || (self.left ? 'left' : 'right');
      if (_opened3) {
        self.$f7.openPanel(side);
      } else {
        self.$f7.closePanel(side);
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    if (self.opened) {
      self.$el.style.display = 'block';
    }
    var $$ = self.$$;
    if (!$$) {
      return;
    }
    var side = self.side || (self.left ? 'left' : 'right');
    var effect = self.effect || (self.reveal ? 'reveal' : 'cover');
    if (self.opened) {
      $$('body').addClass('with-panel-' + side + '-' + effect);
    }
  },
  methods: {
    onOpen: function onOpen(event) {
      this.$emit('panel:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('panel:opened', event);
    },
    onClose: function onClose(event) {
      this.$emit('panel:open', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('panel:closed', event);
    },
    onOverlayClick: function onOverlayClick(event) {
      this.$emit('panel:overlay-click', event);
    },
    onPanelSwipe: function onPanelSwipe(event) {
      this.$emit('panel:swipe', event);
    },
    onF7Init: function onF7Init() {
      var $$ = this.$$;
      if (!$$) {
        return;
      }
      if ($$('.panel-overlay').length === 0) {
        $$('<div class="panel-overlay"></div>').insertBefore(this.$el);
      }
    },
    open: function open(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      var side = self.side || (self.left ? 'left' : 'right');
      self.$f7.openPanel(side, animated);
    },
    close: function close(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      self.$f7.closePanel(animated);
    }
  }
};

var photoBrowser = {
  render: function render() {},
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7PhotoBrowser && self.f7PhotoBrowser.destroy) {
      self.f7PhotoBrowser.destroy();
    }
  },
  props: {
    init: {
      type: Boolean,
      default: true
    },
    params: Object,
    photos: Array,
    initialSlide: Number,
    spaceBetween: Number,
    speed: Number,
    zoom: Boolean,
    zoomMax: Number,
    zoomMin: Number,
    exposition: Boolean,
    expositionHideCaptions: Boolean,
    type: String,
    navbar: Boolean,
    toolbar: Boolean,
    theme: String,
    captionsTheme: String,
    swipeToClose: Boolean,
    backLinkText: String,
    ofText: String,
    loop: Boolean,
    lazyLoading: Boolean,
    lazyLoadingInPrevNext: Boolean,
    lazyLoadingOnTransitionStart: Boolean
  },
  methods: {
    open: function open(index) {
      return this.f7PhotoBrowser.open(index);
    },
    close: function close() {
      return this.f7PhotoBrowser.close();
    },
    toggleZoom: function toggleZoom() {
      return this.f7PhotoBrowser.toggleZoom();
    },
    toggleExposition: function toggleExposition() {
      return this.f7PhotoBrowser.toggleExposition();
    },
    enableExposition: function enableExposition() {
      return this.f7PhotoBrowser.enableExposition();
    },
    disableExposition: function disableExposition() {
      return this.f7PhotoBrowser.disableExposition();
    },
    onF7Init: function onF7Init(f7) {
      var self = this;
      // Init Virtual List
      if (!self.init) {
        return;
      }
      var params = self.$options.propsData;
      self.f7PhotoBrowser = f7.photoBrowser(self.params || {
        photos: params.photos,
        initialSlide: params.initialSlide,
        spaceBetween: params.spaceBetween,
        speed: params.speed,
        zoom: params.zoom,
        zoomMax: params.zoomMax,
        zoomMin: params.zoomMin,
        exposition: params.exposition,
        expositionHideCaptions: params.expositionHideCaptions,
        type: params.type,
        navbar: params.navbar,
        toolbar: params.toolbar,
        theme: params.theme,
        captionsTheme: params.captionsTheme,
        swipeToClose: params.swipeToClose,
        backLinkText: params.backLinkText,
        ofText: params.ofText,
        loop: params.loop,
        lazyLoading: params.lazyLoading,
        lazyLoadingInPrevNext: params.lazyLoadingInPrevNext,
        lazyLoadingOnTransitionStart: params.lazyLoadingOnTransitionStart,
        onOpen: function onOpen(pb) {
          self.$emit('open', pb);
        },
        onClose: function onClose(pb) {
          self.$emit('close', pb);
        },
        onSwipeToClose: function onSwipeToClose(pb) {
          self.$emit('swipeToClose', pb);
        },
        onSlideChangeStart: function onSlideChangeStart(swiper) {
          self.$emit('slideChangeStart', swiper);
        },
        onSlideChangeEnd: function onSlideChangeEnd(swiper) {
          self.$emit('slideChangeEnd', swiper);
        },
        onTransitionStart: function onTransitionStart(swiper) {
          self.$emit('transitionStart', swiper);
        },
        onTransitionEnd: function onTransitionEnd(swiper) {
          self.$emit('transitionEnd', swiper);
        },
        onClick: function onClick(swiper, event) {
          self.$emit('click', swiper, event);
        },
        onTap: function onTap(swiper, event) {
          self.$emit('tap', swiper, event);
        },
        onDoubleTap: function onDoubleTap(swiper, event) {
          self.$emit('doubleTap', swiper, event);
        },
        onLazyImageLoad: function onLazyImageLoad(swiper, event) {
          self.$emit('lazyImageLoad', swiper, event);
        },
        onLazyImageReady: function onLazyImageReady(swiper, event) {
          self.$emit('lazyImageReady', swiper, event);
        }
      });
    }
  }
};

var pickerModal = {
  render: function render(c) {
    var pickerEl,
        innerEl,
        fixedList = [],
        staticList = [];
    var self = this;

    var fixedTags = 'navbar toolbar tabbar subnavbar searchbar messagebar fab speed-dial floating-button'.split(' ');

    var tag, child;

    if (self.$slots.default) {
      for (var i = 0; i < self.$slots.default.length; i++) {
        child = self.$slots.default[i];
        tag = child.tag;
        if (!tag) {
          staticList.push(child);
          continue;
        }
        var isFixed = false;
        for (var j = 0; j < fixedTags.length; j++) {
          if (tag.indexOf(fixedTags[j]) >= 0) {
            isFixed = true;
          }
        }
        if (isFixed) {
          fixedList.push(child);
        } else {
          staticList.push(child);
        }
      }
    }

    innerEl = c('div', {
      staticClass: 'picker-modal-inner'
    }, staticList);

    return c('div', {
      class: self.classesObject,
      staticClass: 'picker-modal',
      on: {
        'picker:open': self.onOpen,
        'picker:opened': self.onOpened,
        'picker:close': self.onClose,
        'picker:closed': self.onClosed
      }
    }, [fixedList, innerEl]);
  },
  mounted: function mounted() {
    var self = this;
    if (self.opened) {
      self.$el.style.display = 'block';
    }
  },
  watch: {
    opened: function opened(_opened4) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      if (_opened4) {
        self.$f7.pickerModal(self.$el);
      } else {
        self.$f7.closeModal(self.$el);
      }
    }
  },
  props: {
    'opened': Boolean,
    'theme': String,
    'layout': String,
    'overlay': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'modal-in': this.opened,
        'modal-out': !this.opened
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    }
  },
  methods: {
    onOpen: function onOpen(event) {
      if (this.overlay) {
        this.$$('.picker-modal-overlay').addClass('modal-overlay-visible');
      }
      this.$emit('picker:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('picker:opened', event);
    },
    onClose: function onClose(event) {
      if (this.overlay) {
        this.$$('.picker-modal-overlay').removeClass('modal-overlay-visible');
      }
      this.$emit('picker:close', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('picker:closed', event);
    },
    onF7Init: function onF7Init() {
      var $$ = this.$$;
      if (!$$) {
        return;
      }
      if ($$('.picker-modal-overlay').length === 0 && (this.$theme && this.$theme.material || this.overlay)) {
        $$(this.$root.$el).append('<div class="picker-modal-overlay ' + (this.opened ? ' modal-overlay-visible' : '') + '"></div>');
      }
    },
    open: function open(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.pickerModal(self.$el, undefined, animated);
    },
    close: function close(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.closeModal(self.$el, animated);
    }
  }
};

var popover = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "popover", on: { "popover:open": _vm.onOpen, "popover:opened": _vm.onOpened, "popover:close": _vm.onClose, "popover:closed": _vm.onClosed } }, [_c('div', { staticClass: "popover-angle" }), _vm._v(" "), _c('div', { staticClass: "popover-content" }, [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  methods: {
    onOpen: function onOpen(event) {
      this.$emit('popover:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('popover:opened', event);
    },
    onClose: function onClose(event) {
      this.$emit('popover:close', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('popover:closed', event);
    },
    open: function open(target, animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.popover(self.$el, target, undefined, animated);
    },
    close: function close(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.closeModal(self.$el, animated);
    }
  }
};

var popup = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "popup", class: _vm.classesObject, on: { "popup:open": _vm.onOpen, "popup:opened": _vm.onOpened, "popup:close": _vm.onClose, "popup:closed": _vm.onClosed } }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  mounted: function mounted() {
    var self = this;
    if (self.opened) {
      self.$el.style.display = 'block';
    }
  },
  watch: {
    opened: function opened(_opened5) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      var $$ = self.$$;
      if (_opened5) {
        self.$f7.popup(self.$el);
      } else {
        if (!$$(self.$el).hasClass('modal-in')) {
          return;
        }
        self.$f7.closeModal(self.$el);
      }
    }
  },
  props: {
    'tablet-fullscreen': Boolean,
    'theme': String,
    'layout': String,
    'opened': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'tablet-fullscreen': this.tabletFullscreen,
        'modal-in': this.opened,
        'modal-out': !this.opened
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    }
  },
  methods: {
    onOpen: function onOpen(event) {
      this.$emit('popup:open', event);
    },
    onOpened: function onOpened(event) {
      this.$emit('popup:opened', event);
    },
    onClose: function onClose(event) {
      this.$emit('popup:close', event);
    },
    onClosed: function onClosed(event) {
      this.$emit('popup:closed', event);
    },
    onF7Init: function onF7Init() {
      var $$ = this.$$;
      if (!$$) {
        return;
      }
      if ($$('.popup-overlay').length === 0) {
        $$(this.$root.$el).append('<div class="popup-overlay ' + (this.opened ? ' modal-overlay-visible' : '') + '"></div>');
      }
    },
    open: function open(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.popup(self.$el, undefined, animated);
    },
    close: function close(animated) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.closeModal(self.$el, animated);
    }
  }
};

var preloader = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "preloader", class: _vm.color ? 'color-' + _vm.color + ' preloader-' + _vm.color : '', style: { 'width': _vm.sizeComputed ? _vm.sizeComputed + 'px' : '', 'height': _vm.sizeComputed ? _vm.sizeComputed + 'px' : '' } }, [_vm.$theme.material ? _c('span', { staticClass: "preloader-inner" }, [_c('span', { staticClass: "preloader-inner-gap" }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]) : _vm._e()]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "preloader-inner-left" }, [_c('span', { staticClass: "preloader-inner-half-circle" })]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { staticClass: "preloader-inner-right" }, [_c('span', { staticClass: "preloader-inner-half-circle" })]);
  }],
  props: {
    'color': String,
    'size': [Number, String]
  },
  computed: {
    sizeComputed: function sizeComputed() {
      var s = this.size;
      if (s && typeof s === 'string' && s.indexOf('px') >= 0) {
        s = s.replace('px', '');
      }
      return s;
    }
  }
};

var progressbar = {
  render: function render(c) {
    var self = this;
    var color = self.color;
    var progress = self.progress;
    var infinite = self.infinite;
    return c('span', {
      staticClass: 'progressbar',
      class: [color ? 'color-' + color + ' progressbar-' + color : '', infinite ? 'progressbar-infinite' : ''].join(' ')
    }, [c('span', {
      style: {
        'transform': progress ? 'translate3d(' + (-100 + progress) + '%,0,0)' : ''
      }
    })]);
  },
  props: {
    'color': String,
    'progress': Number,
    'infinite': Boolean
  },
  methods: {
    set: function set(progress, speed) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.setProgressbar(self.$el, progress, speed);
    },
    show: function show(container, progress, color) {
      var self = this;
      if (!self.$f7) {
        return;
      }
      return self.$f7.showProgressbar(container, progress, color);
    }
  }
};

var searchbar = {
  render: function render(c) {
    var self = this;
    var clearEl, cancelEl, inputEl, inputWrapEl;
    inputEl = c('input', {
      attrs: {
        'placeholder': self.placeholder,
        'type': 'search'
      },
      on: {
        input: self.onInput,
        change: self.onChange,
        focus: self.onFocus,
        blur: self.onBlur
      }
    });
    if (self.clearButtonComputed) {
      clearEl = c('a', {
        staticClass: 'searchbar-clear',
        attrs: {
          'href': '#'
        },
        on: {
          click: self.onClearClick
        }
      });
    }
    if (self.cancelLink) {
      cancelEl = c('a', {
        staticClass: 'searchbar-cancel',
        attrs: {
          'href': '#'
        },
        domProps: {
          innerHTML: self.cancelLink
        },
        on: {
          click: self.onCancelClick
        }
      });
    }
    inputWrapEl = c('div', { staticClass: 'searchbar-input' }, [inputEl, clearEl]);

    return c(self.form ? 'form' : 'div', {
      staticClass: 'searchbar',
      class: {
        'no-shadow': self.noShadow
      },
      on: {
        'submit': self.onSubmit,
        'searchbar:search': self.onSearch,
        'searchbar:enable': self.onEnable,
        'searchbar:disable': self.onDisable,
        'searchbar:clear': self.onClear
      }
    }, [self.$slots['before-input'], inputWrapEl, self.$slots['after-input'], cancelEl, self.$slots.default]);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.f7Searchbar && this.f7Searchbar.destroy) {
      this.f7Searchbar.destroy();
    }
  },
  props: {
    noShadow: Boolean,
    form: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    cancelLink: String,
    clear: Boolean,
    clearButton: {
      type: Boolean,
      default: true
    },

    // SB Params
    params: Object,
    searchList: [String, Object],
    searchIn: {
      type: String,
      default: '.item-title'
    },
    searchBy: String,
    found: [String, Object],
    notFound: [String, Object],
    overlay: [String, Object],
    ignore: {
      type: String,
      default: '.searchbar-ignore'
    },
    customSearch: {
      type: Boolean,
      default: false
    },
    removeDiacritics: {
      type: Boolean,
      default: false
    },
    hideDividers: {
      type: Boolean,
      default: true
    },
    hideGroups: {
      type: Boolean,
      default: true
    },
    init: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    clearButtonComputed: function clearButtonComputed() {
      var self = this;
      var cb = self.clearButton;
      if (self.$options.propsData.clear === false) {
        cb = false;
      }
      return cb;
    }
  },
  methods: {
    search: function search(query) {
      if (!this.f7Searchbar) {
        return;
      }
      return this.f7Searchbar.search(query);
    },
    enable: function enable() {
      if (!this.f7Searchbar) {
        return;
      }
      return this.f7Searchbar.enable();
    },
    disable: function disable() {
      if (!this.f7Searchbar) {
        return;
      }
      return this.f7Searchbar.disable();
    },
    empty: function empty() {
      if (!this.f7Searchbar) {
        return;
      }
      return this.f7Searchbar.clear();
    },
    onChange: function onChange(event) {
      this.$emit('change', event);
    },
    onInput: function onInput(event) {
      this.$emit('input', event.target.value);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.$emit('blur', event);
    },
    onSubmit: function onSubmit(event) {
      this.$emit('submit', event);
    },
    onSearch: function onSearch(event) {
      if (!event.detail) {
        return;
      }
      this.$emit('searchbar:search', event.detail.query, event.detail.foundItems);
    },
    onClear: function onClear(event) {
      this.$emit('searchbar:clear', event);
    },
    onEnable: function onEnable(event) {
      this.$emit('searchbar:enable', event);
    },
    onDisable: function onDisable(event) {
      this.$emit('searchbar:disable', event);
    },
    onClearClick: function onClearClick(event) {
      this.$emit('click:clear', event);
    },
    onCancelClick: function onCancelClick(event) {
      this.$emit('click:cancel', event);
    },
    onF7Init: function onF7Init() {
      var self = this;
      if (!self.init) {
        return;
      }
      self.f7Searchbar = self.$f7.searchbar(self.$el, self.params || {
        searchList: self.searchList,
        searchIn: self.searchIn,
        searchBy: self.searchBy,
        found: self.found,
        notFound: self.notFound,
        overlay: self.overlay,
        ignore: self.ignore,
        customSearch: self.customSearch,
        removeDiacritics: self.removeDiacritics,
        hideDividers: self.hideDividers,
        hideGroups: self.hideGroups
      });
    }
  }
};

var statusbar = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "statusbar-overlay", class: _vm.theme ? 'theme-' + _vm.theme : undefined });
  },
  staticRenderFns: [],
  props: {
    theme: String
  }
};

var subnavbar = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "subnavbar", class: _vm.sliding ? 'sliding' : false }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    sliding: Boolean
  }
};

var swiperSlide = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "swiper-slide" }, [_vm.zoom ? _c('div', { staticClass: "swiper-zoom-container" }, [_vm._t("default")], 2) : _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'zoom': Boolean
  }
};

var swiper = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "swiper-container" }, [_c('div', { staticClass: "swiper-wrapper" }, [_vm._t("default")], 2), _vm._v(" "), _vm.paginationComputed === true ? _c('div', { staticClass: "swiper-pagination" }) : _vm._e(), _vm._v(" "), _vm.scrollbarComputed === true ? _c('div', { staticClass: "swiper-scrollbar" }) : _vm._e(), _vm._v(" "), _vm.nextButtonComputed === true ? _c('div', { staticClass: "swiper-button-next" }) : _vm._e(), _vm._v(" "), _vm.prevButtonComputed === true ? _c('div', { staticClass: "swiper-button-prev" }) : _vm._e()]);
  },
  staticRenderFns: [],
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (!self.init) {
      return;
    }
    if (self.swiper && self.swiper.destroy) {
      self.swiper.destroy();
    }
  },
  props: {
    'params': Object,
    'pagination': [Boolean, String, Object],
    'scrollbar': [Boolean, String, Object],
    'next-button': [Boolean, String, Object],
    'prev-button': [Boolean, String, Object],
    init: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    paramsComputed: function paramsComputed() {
      return this.params || {};
    },
    paginationComputed: function paginationComputed() {
      var self = this;
      if (self.pagination === true || self.pagination === '') {
        self.paramsComputed.pagination = '.swiper-pagination';
        return true;
      } else if (_typeof(self.pagination) === 'object' || typeof self.pagination === 'string') {
        self.paramsComputed.pagination = self.pagination;
        return true;
      }
      return false;
    },
    scrollbarComputed: function scrollbarComputed() {
      var self = this;
      if (self.scrollbar || self.scrollbar === '') {
        self.paramsComputed.scrollbar = '.swiper-scrollbar';
        return true;
      } else if (_typeof(self.scrollbar) === 'object' || typeof self.scrollbar === 'string') {
        self.paramsComputed.scrollbar = self.scrollbar;
        return true;
      }
      return false;
    },
    nextButtonComputed: function nextButtonComputed() {
      var self = this;
      if (self.nextButton || self.nextButton === '') {
        self.paramsComputed.nextButton = '.swiper-button-next';
        return true;
      } else if (_typeof(self.nextButton) === 'object' || typeof self.nextButton === 'string') {
        self.paramsComputed.nextButton = self.nextButton;
        return true;
      }
      return false;
    },
    prevButtonComputed: function prevButtonComputed() {
      var self = this;
      if (self.prevButton || self.prevButton === '') {
        self.paramsComputed.prevButton = '.swiper-button-prev';
        return true;
      } else if (_typeof(self.prevButton) === 'object' || typeof self.prevButton === 'string') {
        self.paramsComputed.prevButton = self.prevButton;
        return true;
      }
      return false;
    }
  },
  methods: {
    onF7Init: function onF7Init() {
      if (!this.init) {
        return;
      }
      this.swiper = new window.Swiper(this.$el, this.paramsComputed);
    }
  }
};

var tab = {
  props: {
    'active': Boolean,
    'id': String
  },
  data: function data() {
    return {
      routeInfo: {
        activeTab: this.$route && this.$route.route.tab
      }
    };
  },
  render: function render(c) {
    var self = this;

    var activeTab = self.routeInfo.activeTab;

    return c('div', {
      staticClass: 'tab',
      attrs: {
        id: self.id
      },
      class: {
        'active': activeTab ? activeTab.tabId === self.id : self.active
      },
      on: {
        'tab:show': self.onTabShow,
        'tab:hide': self.onTabHide
      }
    }, [activeTab && activeTab.tabId === self.id ? c(activeTab.component, { tag: 'component', props: self.$route.params }) : self.$slots.default]);
  },
  methods: {
    show: function show(animated) {
      if (!this.$f7) {
        return;
      }
      this.$f7.showTab(this.$el, animated);
    },
    onTabShow: function onTabShow(e) {
      this.$emit('tab:show', e);
    },
    onTabHide: function onTabHide(e) {
      this.$emit('tab:hide', e);
    },
    onRouteChange: function onRouteChange(e) {
      if (e.route.tab) {
        var currentlyActiveTabId = this.routeInfo.activeTab && this.routeInfo.activeTab.tabId;
        var nextActiveTabId = e.route.tab.tabId;
        var thisTabId = this.id;

        if (thisTabId === currentlyActiveTabId && nextActiveTabId !== thisTabId) {
          this.$$(this.$el).trigger('tab:hide');
        } else if (thisTabId !== currentlyActiveTabId && nextActiveTabId === thisTabId) {
          this.$$(this.$el).trigger('tab:show');
        }

        this.$set(this.routeInfo, 'activeTab', e.route.tab);
      }
    }
  }
};

var tabs = {
  render: function render(c) {
    var self = this;
    var tabs = c('div', { staticClass: 'tabs' }, [self.$slots.default]);
    if (self.animated || self.swipeable) {
      return c('div', { class: self.classesObject }, [tabs]);
    } else {
      return tabs;
    }
  },
  props: {
    'animated': Boolean,
    'swipeable': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      return {
        'tabs-animated-wrap': this.animated,
        'tabs-swipeable-wrap': this.swipeable
      };
    }
  }
};

var template7Template = {
  render: function render(c) {
    return c('script', { attrs: { type: 'text/template7' } }, this.$slots.default);
  }
};

var timelineItemChild = {
  render: function render(c) {
    var self = this;
    var timeEl, titleEl, subtitleEl, textEl;

    if (self.time) {
      timeEl = c('div', { staticClass: 'timeline-item-time', domProps: { innerHTML: self.time } });
    }
    if (self.title) {
      titleEl = c('div', { staticClass: 'timeline-item-title', domProps: { innerHTML: self.title } });
    }
    if (self.subtitle) {
      subtitleEl = c('div', { staticClass: 'timeline-item-subtitle', domProps: { innerHTML: self.subtitle } });
    }
    if (self.text) {
      textEl = c('div', { staticClass: 'timeline-item-text', domProps: { innerHTML: self.text } });
    }

    if (self.content) {
      return c('div', {
        class: {
          'timeline-item-inner': self.inner,
          'timeline-item-child': !self.inner
        },
        domProps: {
          innerHTML: self.content
        }
      });
    } else {
      return c('div', {
        class: {
          'timeline-item-inner': self.inner,
          'timeline-item-child': !self.inner
        }
      }, [timeEl, titleEl, subtitleEl, textEl, self.$slots.default]);
    }
  },
  props: {
    inner: Boolean,
    content: String,
    time: String,
    title: String,
    subtitle: String,
    text: String
  }
};

var timelineItem = {
  render: function render(c) {
    var self = this;
    var timeEl, titleEl, subtitleEl, textEl, dateEl, dividerEl, contentEl, innerEl;
    if (self.day || self.month) {
      dateEl = c('div', { staticClass: 'timeline-item-date', domProps: { innerHTML: [self.day, '<small>' + self.month + '</small>'].join(' ') } });
    } else {
      dateEl = c('div', { staticClass: 'timeline-item-date', domProps: { innerHTML: self.date } });
    }

    dividerEl = c('div', { staticClass: 'timeline-item-divider' });

    if (self.time) {
      timeEl = c('div', { staticClass: 'timeline-item-time', domProps: { innerHTML: self.time } });
    }
    if (self.title) {
      titleEl = c('div', { staticClass: 'timeline-item-title', domProps: { innerHTML: self.title } });
    }
    if (self.subtitle) {
      subtitleEl = c('div', { staticClass: 'timeline-item-subtitle', domProps: { innerHTML: self.subtitle } });
    }
    if (self.text) {
      textEl = c('div', { staticClass: 'timeline-item-text', domProps: { innerHTML: self.text } });
    }

    if (self.inner) {
      if (self.content) {
        innerEl = c('div', { staticClass: 'timeline-item-inner', domProps: { innerHTML: self.content } });
      } else {
        innerEl = c('div', { staticClass: 'timeline-item-inner' }, [timeEl, titleEl, subtitleEl, textEl, self.$slots.default]);
      }
    } else {
      innerEl = [timeEl, titleEl, subtitleEl, textEl, self.$slots.default];
    }
    if (self.content && !self.inner) {
      contentEl = c('div', { staticClass: 'timeline-item-content', domProps: { innerHTML: self.content } });
    } else {
      contentEl = c('div', { staticClass: 'timeline-item-content' }, [innerEl]);
    }
    return c('div', {
      staticClass: 'timeline-item',
      class: {
        'timeline-item-left': self.side === 'left',
        'timeline-item-right': self.side === 'right'
      }
    }, [dateEl, dividerEl, contentEl]);
  },
  props: {
    date: [String, Number, Date],
    day: [String, Number],
    month: [String, Number],
    inner: Boolean,
    content: String,
    side: String,
    time: String,
    title: String,
    subtitle: String,
    text: String
  }
};

var timelineMonth = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "timeline-month" }, [_vm.month || _vm.title ? _c('div', { staticClass: "timeline-month-title" }, [_c('span', { domProps: { "innerHTML": _vm._s(_vm.month || _vm.title) } })]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    month: [Number, String],
    title: [Number, String]
  }
};

var timelineYear = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "timeline-year" }, [_vm.year || _vm.title ? _c('div', { staticClass: "timeline-year-title" }, [_c('span', { domProps: { "innerHTML": _vm._s(_vm.year || _vm.title) } })]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    year: [Number, String],
    title: [Number, String]
  }
};

var timeline = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "timeline", class: _vm.classesObject }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'sides': Boolean,
    'tablet-sides': Boolean,
    'col': [Number, String],
    'tablet-col': [Number, String],
    'horizontal': Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var co = {};
      var self = this;
      if (self.sides) {
        co['timeline-sides'] = true;
      }
      if (self.tabletSides) {
        co['tablet-sides'] = true;
      }
      if (self.horizontal) {
        co['timeline-horizontal'] = true;
      }
      if (self.col) {
        co['col-' + self.col] = true;
      }
      if (self.tabletCol) {
        co['tablet-' + self.tabletCol] = true;
      }
      return co;
    }
  }
};

var toolbar = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "toolbar", class: _vm.classesObject }, [_vm._t("before-inner"), _vm._v(" "), _c('div', { staticClass: "toolbar-inner" }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("after-inner")], 2);
  },
  staticRenderFns: [],
  props: {
    bottom: Boolean,
    tabbar: Boolean,
    labels: Boolean,
    scrollable: Boolean,
    theme: String,
    layout: String,
    hidden: Boolean,
    noShadow: Boolean
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'toolbar-bottom': this.bottom,
        'tabbar': this.tabbar,
        'tabbar-labels': this.labels,
        'tabbar-scrollable': this.scrollable,
        'toolbar-hidden': this.hidden
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      if (this.noShadow) {
        co['no-shadow'] = true;
      }
      return co;
    }
  },
  methods: {
    hide: function hide(animated) {
      if (!this.$f7) {
        return;
      }
      return this.$f7.hideToolbar(this.$el, animated);
    },
    show: function show(animated) {
      if (!this.$f7) {
        return;
      }
      return this.$f7.showToolbar(this.$el, animated);
    }
  }
};

var view = {
  render: function render(c) {
    var hasNavbar,
        hasPages,
        pagesEl,
        navbarEl,
        self = this;
    if (self.$slots.default) {
      for (var i = 0; i < self.$slots.default.length; i++) {
        var child = self.$slots.default[i];
        if (child.tag && child.tag.indexOf('navbar') >= 0) {
          hasNavbar = true;
        }
        if (child.tag && child.tag.indexOf('pages') >= 0) {
          hasPages = true;
        }
      }
    }
    if (!hasPages) {
      pagesEl = c('f7-pages');
    }
    if (!hasNavbar && self.$theme.ios && (self.dynamicNavbar || self.navbarThrough || self.params && self.params.dynamicNavbar)) {
      navbarEl = c('f7-navbar', { props: { inner: false } });
    }

    return c('div', {
      class: self.classesObject,
      on: {
        'swipeback:move': self.onSwipeBackMove,
        'swipeback:beforechange': self.onSwipeBackBeforeChange,
        'swipeback:afterchange': self.onSwipeBackAfterChange,
        'swipeback:beforereset': self.onSwipeBackBeforeReset,
        'swipeback:afterreset': self.onSwipeBackAfterReset,
        'tab:show': self.onTabShow,
        'tab:hide': self.onTabHide
      }
    }, [navbarEl, pagesEl, self.$slots.default]);
  },
  beforeDestroy: function beforeDestroy() {
    var self = this;
    if (self.f7View && self.f7View.destroy) {
      self.f7View.destroy();
    }
  },
  props: {
    'main': Boolean,
    'navbar-fixed': Boolean,
    'navbar-through': Boolean,
    'toolbar-fixed': Boolean,
    'toolbar-through': Boolean,
    'tabbar-fixed': Boolean,
    'tabbar-through': Boolean,
    'tabbar-labels-fixed': Boolean,
    'tabbar-labels-through': Boolean,

    'tab': Boolean,
    'active': Boolean,

    'dynamic-navbar': Boolean,
    'dom-cache': Boolean,
    'links-view': [String, Object],
    'reload-pages': Boolean,
    'unique-history': Boolean,
    'unique-history-ignore-get-parameters': Boolean,
    'allow-duplicate-urls': Boolean,
    'swipe-back-page': Boolean,
    'swipe-back-page-animate-shadow': Boolean,
    'swipe-back-page-animate-opacity': Boolean,
    'swipe-back-page-active-area': Boolean,
    'swipe-back-page-threshold': Boolean,
    'animate-pages': Boolean,
    'preload-previous-page': Boolean,
    'name': String,

    'params': Object,

    'url': String,
    'init': {
      type: Boolean,
      default: true
    },

    'theme': String,
    'layout': String
  },
  computed: {
    classesObject: function classesObject() {
      var co = {
        'view': true,
        'view-main': this.main,
        'active': this.active,
        'tab': this.tab,
        'navbar-fixed': this.navbarFixed || this.navbarThrough && this.$theme.material,
        'navbar-through': this.navbarThrough,
        'toolbar-fixed': this.toolbarFixed,
        'toolbar-through': this.toolbarThrough,
        'tabbar-fixed': this.tabbarFixed,
        'tabbar-through': this.tabbarThrough,
        'tabbar-labels-fixed': this.tabbarLabelsFixed,
        'tabbar-labels-through': this.tabbarLabesThrough
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    }

  },
  methods: {
    onF7Init: function onF7Init(f7) {
      var self = this;
      if (!self.init) {
        return;
      }
      var propsData = self.$options.propsData;
      var params = self.params || {
        name: self.name,
        url: self.url,
        dynamicNavbar: propsData.dynamicNavbar,
        domCache: typeof propsData.domCache === 'undefined' ? true : propsData.domCache,
        linksView: propsData.linksView,
        reloadPages: propsData.reloadPages,
        uniqueHistory: propsData.uniqueHistory,
        uniqueHistoryIgnoreGetParameters: propsData.uniqueHistoryIgnoreGetParameters,
        allowDuplicateUrls: propsData.allowDuplicateUrls,
        swipeBackPage: propsData.swipeBackPage,
        swipeBackPageAnimateShadow: propsData.swipeBackPageAnimateShadow,
        swipeBackPageAnimateOpacity: propsData.swipeBackPageAnimateOpacity,
        swipeBackPageActiveArea: propsData.swipeBackPageActiveArea,
        swipeBackPageThreshold: propsData.swipeBackPageThreshold,
        animatePages: propsData.animatePages,
        preloadPreviousPage: propsData.preloadPreviousPage
      };

      var $$ = self.$$;
      var pagesContainer = $$(self.$el).find('.pages')[0];

      // Include page by route
      if (pagesContainer.querySelectorAll('.page').length === 0 && params.url) {
        // Find Matching Route
        var matchingRoute = self.$f7Router.findMatchingRoute(params.url);
        if (!matchingRoute) {
          return;
        }
        // Find Pages Vue Component
        var pagesVue = pagesContainer.__vue__;
        // Generate Page Id
        var id = new Date().getTime();
        // Push New Page component
        self.$set(pagesVue.pages, id, { component: matchingRoute.route.component });

        self.$nextTick(function () {
          // Page element
          var newPage = pagesContainer.querySelector('.page:first-child');
          pagesVue.pages[id].pageElement = newPage;

          // Move Navbar
          var newNavbar;
          var dynamicNavbar = self.$theme.ios && params.dynamicNavbar;

          if (dynamicNavbar) {
            newNavbar = $$(newPage).find('.navbar-inner:first-child');
            $$(self.$el).children('.navbar').append(newNavbar);
            $$(newPage).find('.navbar').remove();
          }

          // Init Page and Navbar Callbacks
          f7.initPageWithCallback(newPage);
          if (dynamicNavbar && newNavbar) {
            f7.initNavbarWithCallback(newNavbar);
          }
        });
      }
      // Init View
      self.f7View = f7.addView(self.$el, params);
    },
    onSwipeBackMove: function onSwipeBackMove(event) {
      this.$emit('swipeback:move', event, event.detail);
    },
    onSwipeBackBeforeChange: function onSwipeBackBeforeChange(event) {
      this.$emit('swipeback:beforechange', event, event.detail);
    },
    onSwipeBackAfterChange: function onSwipeBackAfterChange(event) {
      this.$emit('swipeback:afterchange', event, event.detail);
    },
    onSwipeBackBeforeReset: function onSwipeBackBeforeReset(event) {
      this.$emit('swipeback:beforereset', event, event.detail);
    },
    onSwipeBackAfterReset: function onSwipeBackAfterReset(event) {
      this.$emit('swipeback:afterreset', event, event.detail);
    },
    onTabShow: function onTabShow(e) {
      this.$emit('tab:show', e);
    },
    onTabHide: function onTabHide(e) {
      this.$emit('tab:hide', e);
    }
  }
};

var views = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "views", class: _vm.classObject }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    'navbar-fixed': Boolean,
    'navbar-through': Boolean,
    'toolbar-fixed': Boolean,
    'toolbar-through': Boolean,
    'tabbar-fixed': Boolean,
    'tabbar-through': Boolean,
    'tabbar-labels-fixed': Boolean,
    'tabbar-labels-through': Boolean,
    'tabs': Boolean,
    'theme': String,
    'layout': String
  },
  computed: {
    classObject: function classObject() {
      var co = {
        'tabs': this.tabs,
        'navbar-fixed': this.navbarFixed || this.navbarThrough && this.$theme.material,
        'navbar-through': this.navbarThrough,
        'toolbar-fixed': this.toolbarFixed,
        'toolbar-through': this.toolbarThrough,
        'tabbar-fixed': this.tabbarFixed,
        'tabbar-through': this.tabbarThrough,
        'tabbar-labels-fixed': this.tabbarLabelsFixed,
        'tabbar-labels-through': this.tabbarLabelsThrough
      };
      if (this.theme) {
        co['theme-' + this.theme] = true;
      }
      if (this.layout) {
        co['layout-' + this.layout] = true;
      }
      return co;
    }
  }
};

exports.VueAccordionContent = accordionContent;
exports.VueAccordionItem = accordionItem;
exports.VueAccordionToggle = accordionToggle;
exports.VueAccordion = accordion;
exports.VueActionsButton = actionsButton;
exports.VueActionsGroup = actionsGroup;
exports.VueActionsLabel = actionsLabel;
exports.VueActions = actions;
exports.VueBadge = badge;
exports.VueButton = button;
exports.VueButtonsSegmented = buttonsSegmented;
exports.VueCalendar = calendar;
exports.VueCardContent = cardContent;
exports.VueCardFooter = cardFooter;
exports.VueCardHeader = cardHeader;
exports.VueCard = card;
exports.VueChip = chip;
exports.VueContentBlockTitle = contentBlockTitle;
exports.VueContentBlock = contentBlock;
exports.VueDataTableActions = dataTableActions;
exports.VueDataTableCell = dataTableCell;
exports.VueDataTableHeader = dataTableHeader;
exports.VueDataTableLinks = dataTableLinks;
exports.VueDataTableRow = dataTableRow;
exports.VueDataTableTitle = dataTableTitle;
exports.VueDataTable = dataTable;
exports.VueDatepicker = datepicker;
exports.VueFabSpeedDialAction = fabSpeedDialAction;
exports.VueFabSpeedDialActions = fabSpeedDialActions;
exports.VueFabSpeedDial = fabSpeedDial;
exports.VueFab = fab;
exports.VueFormInput = formInput;
exports.VueFormLabel = formLabel;
exports.VueFormRange = formRange;
exports.VueFormSwitch = formSwitch;
exports.VueGridCol = gridCol;
exports.VueGridRow = gridRow;
exports.VueIcon = icon;
exports.VueLink = link;
exports.VueListButton = listButton;
exports.VueListGroup = listGroup;
exports.VueListItemContent = listItemContent;
exports.VueListItemSwipeoutActions = listItemSwipeoutActions;
exports.VueListItemSwipeoutButton = listItemSwipeoutButton;
exports.VueListItem = listItem;
exports.VueListLabel = listLabel;
exports.VueList = list;
exports.VueLoginScreenTitle = loginScreenTitle;
exports.VueLoginScreen = loginScreen;
exports.VueMessage = message;
exports.VueMessagebar = messagebar;
exports.VueMessages = messages;
exports.VueNavCenter = navCenter;
exports.VueNavLeft = navLeft;
exports.VueNavRight = navRight;
exports.VueNavbar = navbar;
exports.VuePageContent = pageContent;
exports.VuePage = page;
exports.VuePages = pages;
exports.VuePanel = panel;
exports.VuePhotoBrowser = photoBrowser;
exports.VuePickerModal = pickerModal;
exports.VuePopover = popover;
exports.VuePopup = popup;
exports.VuePreloader = preloader;
exports.VueProgressbar = progressbar;
exports.VueSearchbar = searchbar;
exports.VueStatusbar = statusbar;
exports.VueSubnavbar = subnavbar;
exports.VueSwiperSlide = swiperSlide;
exports.VueSwiper = swiper;
exports.VueTab = tab;
exports.VueTabs = tabs;
exports.VueTemplate7Template = template7Template;
exports.VueTimelineItemChild = timelineItemChild;
exports.VueTimelineItem = timelineItem;
exports.VueTimelineMonth = timelineMonth;
exports.VueTimelineYear = timelineYear;
exports.VueTimeline = timeline;
exports.VueToolbar = toolbar;
exports.VueView = view;
exports.VueViews = views;
exports.VueCalendarDatePickerMixin = CalendarDatePickerMixin;
exports.VueLinkMixin = LinkMixin;
//# sourceMappingURL=framework7-vue.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var prop_types_1 = __webpack_require__(32);
var change_case_1 = __webpack_require__(12);
var ReactifyVue_1 = __webpack_require__(104);
var Framework7_1 = __webpack_require__(7);
var Framework7_2 = __webpack_require__(7);
var nextComponentId = 0;
exports.reactifyF7Vue = function (args) {
    var innerComponent = ReactifyVue_1.reactifyVue({
        component: args.component,
        name: "F7" + args.name,
        tag: args.tag,
        slots: !args.slots ? null : args.slots.reduce(function (slotMap, currentSlotName) {
            return __assign({}, slotMap, (_a = {}, _a[currentSlotName] = change_case_1.camelCase(currentSlotName) + 'Slot', _a));
            var _a;
        }, {}),
        events: !args.events ? null : args.events.reduce(function (eventMap, currentEventName) {
            return __assign({}, eventMap, (_a = {}, _a[currentEventName] = change_case_1.camelCase('on-' + currentEventName.split(':').join('-')), _a));
            var _a;
        }, {}),
        instantiatedComponents: args.instantiatedComponents,
        args: __assign({}, args.args, { $$: Framework7_1.Dom7, $t7: Framework7_2.Template7 }),
        mixin: args.mixin
    });
    var reactClass = (function (_super) {
        __extends(reactClass, _super);
        function reactClass(props, context) {
            var _this = _super.call(this, props, context) || this;
            var framework7AppContext = _this.context.framework7AppContext;
            framework7AppContext.getFramework7(function (f7) {
                _this.framework7 = f7;
            });
            Object.defineProperty(args.component, '$f7Router', {
                get: framework7AppContext.getRouter,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(args.component, '$route', {
                get: framework7AppContext.getCurrentRoute,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(args.component, '$f7', {
                get: function () { return _this.framework7; },
                enumerable: true,
                configurable: true
            });
            _this.componentId = nextComponentId++;
            return _this;
        }
        reactClass.prototype.componentWillUnmount = function () {
            var framework7AppContext = this.context.framework7AppContext;
            framework7AppContext.unregisterRouteChange(this.componentId);
        };
        reactClass.prototype.render = function () {
            var _this = this;
            var props = this.props;
            var framework7AppContext = this.context.framework7AppContext;
            var innerEl = React.createElement(innerComponent, __assign({}, props, { $theme: framework7AppContext.theme, __onMount: function (self) {
                    var tag = args.tag;
                    framework7AppContext.getFramework7(function (f7) {
                        if (self.vueComponent.onF7Init) {
                            self.vueComponent.onF7Init(f7);
                        }
                    });
                    framework7AppContext.onRouteChange(_this.componentId, function (route) {
                        if (self.vueComponent.onRouteChange) {
                            self.vueComponent.onRouteChange(route);
                        }
                    });
                } }));
            return innerEl;
        };
        return reactClass;
    }(React.Component));
    reactClass.tag = args.tag;
    reactClass.vueComponent = args.component;
    reactClass.contextTypes = {
        framework7AppContext: prop_types_1.object
    };
    return reactClass;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(5)

var NON_WORD_REGEXP = __webpack_require__(119)
var CAMEL_CASE_REGEXP = __webpack_require__(117)
var CAMEL_CASE_UPPER_REGEXP = __webpack_require__(118)

/**
 * Sentence case a string.
 *
 * @param  {string} str
 * @param  {string} locale
 * @param  {string} replacement
 * @return {string}
 */
module.exports = function (str, locale, replacement) {
  if (str == null) {
    return ''
  }

  replacement = typeof replacement !== 'string' ? ' ' : replacement

  function replace (match, index, value) {
    if (index === 0 || index === (value.length - match.length)) {
      return ''
    }

    return replacement
  }

  str = String(str)
    // Support camel case ("camelCase" -> "camel Case").
    .replace(CAMEL_CASE_REGEXP, '$1 $2')
    // Support odd camel case ("CAMELCase" -> "CAMEL Case").
    .replace(CAMEL_CASE_UPPER_REGEXP, '$1 $2')
    // Remove all non-word characters and replace with a single space.
    .replace(NON_WORD_REGEXP, replace)

  // Lower case the entire string.
  return lowerCase(str, locale)
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  az: {
    regexp: /[\u0069]/g,
    map: {
      '\u0069': '\u0130'
    }
  },
  lt: {
    regexp: /[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,
    map: {
      '\u0069\u0307': '\u0049',
      '\u006A\u0307': '\u004A',
      '\u012F\u0307': '\u012E',
      '\u0069\u0307\u0300': '\u00CC',
      '\u0069\u0307\u0301': '\u00CD',
      '\u0069\u0307\u0303': '\u0128'
    }
  }
}

/**
 * Upper case a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toUpperCase()
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Special language-specific overrides.
 *
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 *
 * @type {Object}
 */
var LANGUAGES = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  az: {
    regexp: /[\u0130]/g,
    map: {
      '\u0130': '\u0069',
      '\u0049': '\u0131',
      '\u0049\u0307': '\u0069'
    }
  },
  lt: {
    regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
    map: {
      '\u0049': '\u0069\u0307',
      '\u004A': '\u006A\u0307',
      '\u012E': '\u012F\u0307',
      '\u00CC': '\u0069\u0307\u0300',
      '\u00CD': '\u0069\u0307\u0301',
      '\u0128': '\u0069\u0307\u0303'
    }
  }
}

/**
 * Lowercase a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  var lang = LANGUAGES[locale]

  str = str == null ? '' : String(str)

  if (lang) {
    str = str.replace(lang.regexp, function (m) { return lang.map[m] })
  }

  return str.toLowerCase()
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
 * Framework7 1.6.4
 * Full featured mobile HTML framework for building iOS & Android apps
 * 
 * http://framework7.io/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: May 31, 2017
 */window.Dom7=module.exports.Dom7=function(){'use strict';var Dom7=function Dom7(arr){var self=this;// Create array-like object
for(var i=0;i<arr.length;i+=1){self[i]=arr[i];}self.length=arr.length;// Return collection with methods
return this;};function $(selector,context){var arr=[];var i=0;if(selector&&!context){if(selector instanceof Dom7){return selector;}}if(selector){// String
if(typeof selector==='string'){var els;var tempParent;var html=selector.trim();if(html.indexOf('<')>=0&&html.indexOf('>')>=0){var toCreate='div';if(html.indexOf('<li')===0){toCreate='ul';}if(html.indexOf('<tr')===0){toCreate='tbody';}if(html.indexOf('<td')===0||html.indexOf('<th')===0){toCreate='tr';}if(html.indexOf('<tbody')===0){toCreate='table';}if(html.indexOf('<option')===0){toCreate='select';}tempParent=document.createElement(toCreate);tempParent.innerHTML=html;for(i=0;i<tempParent.childNodes.length;i+=1){arr.push(tempParent.childNodes[i]);}}else{if(!context&&selector[0]==='#'&&!selector.match(/[ .<>:~]/)){// Pure ID selector
els=[document.getElementById(selector.trim().split('#')[1])];}else{// Other selectors
els=(context||document).querySelectorAll(selector.trim());}for(i=0;i<els.length;i+=1){if(els[i]){arr.push(els[i]);}}}}else if(selector.nodeType||selector===window||selector===document){// Node/element
arr.push(selector);}else if(selector.length>0&&selector[0].nodeType){// Array of elements or instance of Dom
for(i=0;i<selector.length;i+=1){arr.push(selector[i]);}}}return new Dom7(arr);}// Remove Diacritics
var defaultDiacriticsRemovalap=[{base:'A',letters:'A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},{base:'AA',letters:'\uA732'},{base:'AE',letters:'\xC6\u01FC\u01E2'},{base:'AO',letters:'\uA734'},{base:'AU',letters:'\uA736'},{base:'AV',letters:'\uA738\uA73A'},{base:'AY',letters:'\uA73C'},{base:'B',letters:'B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'},{base:'C',letters:'C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E'},{base:'D',letters:'D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'},{base:'DZ',letters:'\u01F1\u01C4'},{base:'Dz',letters:'\u01F2\u01C5'},{base:'E',letters:'E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},{base:'F',letters:'F\u24BB\uFF26\u1E1E\u0191\uA77B'},{base:'G',letters:'G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'},{base:'H',letters:'H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'},{base:'I',letters:'I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},{base:'J',letters:'J\u24BF\uFF2A\u0134\u0248'},{base:'K',letters:'K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'},{base:'L',letters:'L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'},{base:'LJ',letters:'\u01C7'},{base:'Lj',letters:'\u01C8'},{base:'M',letters:'M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'},{base:'N',letters:'N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'},{base:'NJ',letters:'\u01CA'},{base:'Nj',letters:'\u01CB'},{base:'O',letters:'O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C'},{base:'OI',letters:'\u01A2'},{base:'OO',letters:'\uA74E'},{base:'OU',letters:'\u0222'},{base:'OE',letters:'\x8C\u0152'},{base:'oe',letters:'\x9C\u0153'},{base:'P',letters:'P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'},{base:'Q',letters:'Q\u24C6\uFF31\uA756\uA758\u024A'},{base:'R',letters:'R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'},{base:'S',letters:'S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'},{base:'T',letters:'T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'},{base:'TZ',letters:'\uA728'},{base:'U',letters:'U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},{base:'V',letters:'V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'},{base:'VY',letters:'\uA760'},{base:'W',letters:'W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'},{base:'X',letters:'X\u24CD\uFF38\u1E8A\u1E8C'},{base:'Y',letters:'Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'},{base:'Z',letters:'Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'},{base:'a',letters:'a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250'},{base:'aa',letters:'\uA733'},{base:'ae',letters:'\xE6\u01FD\u01E3'},{base:'ao',letters:'\uA735'},{base:'au',letters:'\uA737'},{base:'av',letters:'\uA739\uA73B'},{base:'ay',letters:'\uA73D'},{base:'b',letters:'b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'},{base:'c',letters:'c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184'},{base:'d',letters:'d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'},{base:'dz',letters:'\u01F3\u01C6'},{base:'e',letters:'e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},{base:'f',letters:'f\u24D5\uFF46\u1E1F\u0192\uA77C'},{base:'g',letters:'g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'},{base:'h',letters:'h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'},{base:'hv',letters:'\u0195'},{base:'i',letters:'i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},{base:'j',letters:'j\u24D9\uFF4A\u0135\u01F0\u0249'},{base:'k',letters:'k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'},{base:'l',letters:'l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'},{base:'lj',letters:'\u01C9'},{base:'m',letters:'m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'},{base:'n',letters:'n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5'},{base:'nj',letters:'\u01CC'},{base:'o',letters:'o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275'},{base:'oi',letters:'\u01A3'},{base:'ou',letters:'\u0223'},{base:'oo',letters:'\uA74F'},{base:'p',letters:'p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'},{base:'q',letters:'q\u24E0\uFF51\u024B\uA757\uA759'},{base:'r',letters:'r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'},{base:'s',letters:'s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'},{base:'t',letters:'t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'},{base:'tz',letters:'\uA729'},{base:'u',letters:'u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'},{base:'v',letters:'v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'},{base:'vy',letters:'\uA761'},{base:'w',letters:'w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'},{base:'x',letters:'x\u24E7\uFF58\u1E8B\u1E8D'},{base:'y',letters:'y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'},{base:'z',letters:'z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'}];var diacriticsMap={};for(var i=0;i<defaultDiacriticsRemovalap.length;i+=1){var letters=defaultDiacriticsRemovalap[i].letters;for(var j=0;j<letters.length;j+=1){diacriticsMap[letters[j]]=defaultDiacriticsRemovalap[i].base;}}var Utils={parseUrlQuery:function parseUrlQuery(url){var query={};var urlToParse=url||window.location.href;var i;var params;var param;var length;if(typeof urlToParse==='string'&&urlToParse.length){urlToParse=urlToParse.indexOf('?')>-1?urlToParse.replace(/\S*\?/,''):'';params=urlToParse.split('&').filter(function(paramsPart){return paramsPart!=='';});length=params.length;for(i=0;i<length;i+=1){param=params[i].replace(/#\S+/g,'').split('=');query[decodeURIComponent(param[0])]=typeof param[1]==='undefined'?undefined:decodeURIComponent(param[1])||'';}}return query;},isArray:function isArray(arr){return Array.isArray(arr);},each:function each(obj,callback){// Check it's iterable
// TODO: Should probably raise a value error here
if((typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'){return;}// Don't bother continuing without a callback
if(!callback){return;}if(Array.isArray(obj)||obj instanceof Dom7){// Array
for(var i=0;i<obj.length;i++){// If callback returns false
if(callback(i,obj[i])===false){// Break out of the loop
return;}}}else{// Object
for(var prop in obj){// Check the propertie belongs to the object
// not it's prototype
if(obj.hasOwnProperty(prop)){// If the callback returns false
if(callback(prop,obj[prop])===false){// Break out of the loop;
return;}}}}},unique:function unique(arr){var uniqueArray=[];for(var i=0;i<arr.length;i+=1){if(uniqueArray.indexOf(arr[i])===-1){uniqueArray.push(arr[i]);}}return uniqueArray;},serializeObject:function serializeObject(obj,parents){if(parents===void 0)parents=[];if(typeof obj==='string'){return obj;}var resultArray=[];var separator='&';var newParents;function varName(name){if(parents.length>0){var parentParts='';for(var j=0;j<parents.length;j+=1){if(j===0){parentParts+=parents[j];}else{parentParts+="["+encodeURIComponent(parents[j])+"]";}}return parentParts+"["+encodeURIComponent(name)+"]";}return encodeURIComponent(name);}function varValue(value){return encodeURIComponent(value);}for(var prop in obj){if(obj.hasOwnProperty(prop)){var toPush=void 0;if(Array.isArray(obj[prop])){toPush=[];for(var i=0;i<obj[prop].length;i+=1){if(!Array.isArray(obj[prop][i])&&_typeof(obj[prop][i])==='object'){newParents=parents.slice();newParents.push(prop);newParents.push(String(i));toPush.push(Utils.serializeObject(obj[prop][i],newParents));}else{toPush.push(varName(prop)+"[]="+varValue(obj[prop][i]));}}if(toPush.length>0){resultArray.push(toPush.join(separator));}}else if(obj[prop]===null||obj[prop]===''){resultArray.push(varName(prop)+"=");}else if(_typeof(obj[prop])==='object'){// Object, convert to named array
newParents=parents.slice();newParents.push(prop);toPush=Utils.serializeObject(obj[prop],newParents);if(toPush!==''){resultArray.push(toPush);}}else if(typeof obj[prop]!=='undefined'&&obj[prop]!==''){// Should be string or plain value
resultArray.push(varName(prop)+"="+varValue(obj[prop]));}else if(obj[prop]===''){resultArray.push(varName(prop));}}}return resultArray.join(separator);},toCamelCase:function toCamelCase(string){return string.toLowerCase().replace(/-(.)/g,function(match,group1){return group1.toUpperCase();});},dataset:function dataset(el){return $(el).dataset();},getTranslate:function getTranslate(el,axis){if(axis===void 0)axis='x';var curStyle=window.getComputedStyle(el,null);var matrix;var curTransform;var transformMatrix;if(window.WebKitCSSMatrix){curTransform=curStyle.transform||curStyle.webkitTransform;if(curTransform.split(',').length>6){curTransform=curTransform.split(', ').map(function map(a){return a.replace(',','.');}).join(', ');}// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
transformMatrix=new window.WebKitCSSMatrix(curTransform==='none'?'':curTransform);}else{transformMatrix=curStyle.transform||curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix=transformMatrix.toString().split(',');}if(axis==='x'){// Latest Chrome and webkits Fix
if(window.WebKitCSSMatrix){curTransform=transformMatrix.m41;}// Crazy IE10 Matrix
else if(matrix.length===16){curTransform=parseFloat(matrix[12]);}// Normal Browsers
else{curTransform=parseFloat(matrix[4]);}}if(axis==='y'){// Latest Chrome and webkits Fix
if(window.WebKitCSSMatrix){curTransform=transformMatrix.m42;}// Crazy IE10 Matrix
else if(matrix.length===16){curTransform=parseFloat(matrix[13]);}// Normal Browsers
else{curTransform=parseFloat(matrix[5]);}}return curTransform||0;},requestAnimationFrame:function requestAnimationFrame(callback){if(window.requestAnimationFrame){return window.requestAnimationFrame(callback);}else if(window.webkitRequestAnimationFrame){return window.webkitRequestAnimationFrame(callback);}return window.setTimeout(callback,1000/60);},cancelAnimationFrame:function cancelAnimationFrame(id){if(window.cancelAnimationFrame){return window.cancelAnimationFrame(id);}else if(window.webkitCancelAnimationFrame){return window.webkitCancelAnimationFrame(id);}return window.clearTimeout(id);},supportTouch:!!('ontouchstart'in window||window.DocumentTouch&&document instanceof window.DocumentTouch),removeDiacritics:function removeDiacritics(str){return str.replace(/[^\u0000-\u007E]/g,function(a){return diacriticsMap[a]||a;});},extend:function extend(){var args=[],len$1=arguments.length;while(len$1--){args[len$1]=arguments[len$1];}var to=Object(args[0]);for(var i=1;i<args.length;i+=1){var nextSource=args[i];if(nextSource!==undefined&&nextSource!==null){var keysArray=Object.keys(Object(nextSource));for(var nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex+=1){var nextKey=keysArray[nextIndex];var desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);if(desc!==undefined&&desc.enumerable){if(_typeof(to[nextKey])==='object'&&_typeof(nextSource[nextKey])==='object'){Utils.extend(to[nextKey],nextSource[nextKey]);}else{to[nextKey]=nextSource[nextKey];}}}}}return to;}};// Aliases
Utils.parseQuery=Utils.parseUrlQuery;Utils.param=Utils.serializeObject;// Global Ajax Setup
var globalAjaxOptions={};$.ajaxSetup=function ajaxSetup(options){if(options.type&&!options.method){options.method=options.type;}Utils.each(options,function(optionName,optionValue){globalAjaxOptions[optionName]=optionValue;});};// JSONP Requests
var jsonpRequests=0;// Ajax
function ajax(options){var defaults={method:'GET',data:false,async:true,cache:true,user:'',password:'',headers:{},xhrFields:{},statusCode:{},processData:true,dataType:'text',contentType:'application/x-www-form-urlencoded',timeout:0};var callbacks=['beforeSend','error','complete','success','statusCode'];// For jQuery guys
if(options.type){options.method=options.type;}// Global options
var globals=globalAjaxOptions;// Merge global and defaults
Utils.each(globals,function(globalOptionName,globalOptionValue){if(callbacks.indexOf(globalOptionName)<0){defaults[globalOptionName]=globalOptionValue;}});// Function to run XHR callbacks and events
function fireAjaxCallback(eventName,eventData,callbackName){var a=arguments;if(eventName){$(document).trigger(eventName,eventData);}if(callbackName){// Global callback
if(callbackName in globals){globals[callbackName](a[3],a[4],a[5],a[6]);}// Options callback
if(options[callbackName]){options[callbackName](a[3],a[4],a[5],a[6]);}}}// Merge options and defaults
Utils.each(defaults,function(prop,defaultValue){if(!(prop in options)){options[prop]=defaultValue;}});// Default URL
if(!options.url){options.url=window.location.toString();}// Parameters Prefix
var paramsPrefix=options.url.indexOf('?')>=0?'&':'?';// UC method
var method=options.method.toUpperCase();// Data to modify GET URL
if((method==='GET'||method==='HEAD'||method==='OPTIONS'||method==='DELETE')&&options.data){var stringData;if(typeof options.data==='string'){// Should be key=value string
if(options.data.indexOf('?')>=0){stringData=options.data.split('?')[1];}else{stringData=options.data;}}else{// Should be key=value object
stringData=Utils.serializeObject(options.data);}if(stringData.length){options.url+=paramsPrefix+stringData;if(paramsPrefix==='?'){paramsPrefix='&';}}}// JSONP
if(options.dataType==='json'&&options.url.indexOf('callback=')>=0){var callbackName="f7jsonp_"+(Date.now()+(jsonpRequests+=1));var abortTimeout;var callbackSplit=options.url.split('callback=');var requestUrl=callbackSplit[0]+"callback="+callbackName;if(callbackSplit[1].indexOf('&')>=0){var addVars=callbackSplit[1].split('&').filter(function(el){return el.indexOf('=')>0;}).join('&');if(addVars.length>0){requestUrl+="&"+addVars;}}// Create script
var script=document.createElement('script');script.type='text/javascript';script.onerror=function onerror(){clearTimeout(abortTimeout);fireAjaxCallback(undefined,undefined,'error',null,'scripterror');fireAjaxCallback('ajaxComplete ajax:complete',{scripterror:true},'complete',null,'scripterror');};script.src=requestUrl;// Handler
window[callbackName]=function jsonpCallback(data){clearTimeout(abortTimeout);fireAjaxCallback(undefined,undefined,'success',data);script.parentNode.removeChild(script);script=null;delete window[callbackName];};document.querySelector('head').appendChild(script);if(options.timeout>0){abortTimeout=setTimeout(function(){script.parentNode.removeChild(script);script=null;fireAjaxCallback(undefined,undefined,'error',null,'timeout');},options.timeout);}return;}// Cache for GET/HEAD requests
if(method==='GET'||method==='HEAD'||method==='OPTIONS'||method==='DELETE'){if(options.cache===false){options.url+=paramsPrefix+"_nocache"+Date.now();}}// Create XHR
var xhr=new XMLHttpRequest();// Save Request URL
xhr.requestUrl=options.url;xhr.requestParameters=options;// Open XHR
xhr.open(method,options.url,options.async,options.user,options.password);// Create POST Data
var postData=null;if((method==='POST'||method==='PUT'||method==='PATCH')&&options.data){if(options.processData){var postDataInstances=[ArrayBuffer,Blob,Document,FormData];// Post Data
if(postDataInstances.indexOf(options.data.constructor)>=0){postData=options.data;}else{// POST Headers
var boundary="---------------------------"+Date.now().toString(16);if(options.contentType==='multipart\/form-data'){xhr.setRequestHeader('Content-Type',"multipart/form-data; boundary="+boundary);}else{xhr.setRequestHeader('Content-Type',options.contentType);}postData='';var data=Utils.serializeObject(options.data);if(options.contentType==='multipart\/form-data'){boundary="---------------------------"+Date.now().toString(16);data=data.split('&');var newData=[];for(var i=0;i<data.length;i+=1){newData.push('Content-Disposition: form-data; name="'+_data[i].split('=')[0]+'"\r\n\r\n'+_data[i].split('=')[1]+'\r\n');}postData="--"+boundary+"\r\n"+newData.join("--"+boundary+"\r\n")+"--"+boundary+"--\r\n";}else{postData=data;}}}else{postData=options.data;}}// Additional headers
if(options.headers){Utils.each(options.headers,function(headerName,headerCallback){xhr.setRequestHeader(headerName,headerCallback);});}// Check for crossDomain
if(typeof options.crossDomain==='undefined'){options.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(options.url)&&RegExp.$2!==window.location.host;}if(!options.crossDomain){xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');}if(options.xhrFields){Utils.each(options.xhrFields,function(fieldName,fieldValue){xhr[fieldName]=fieldValue;});}var xhrTimeout;// Handle XHR
xhr.onload=function onload(e){if(xhrTimeout){clearTimeout(xhrTimeout);}if(xhr.status>=200&&xhr.status<300||xhr.status===0){var responseData;if(options.dataType==='json'){try{responseData=JSON.parse(xhr.responseText);fireAjaxCallback('ajaxSuccess ajax:success',{xhr:xhr},'success',responseData,xhr.status,xhr);}catch(err){fireAjaxCallback('ajaxError ajax:error',{xhr:xhr,parseerror:true},'error',xhr,'parseerror');}}else{responseData=xhr.responseType==='text'||xhr.responseType===''?xhr.responseText:xhr.response;fireAjaxCallback('ajaxSuccess ajax:success',{xhr:xhr},'success',responseData,xhr.status,xhr);}}else{fireAjaxCallback('ajaxError ajax:error',{xhr:xhr},'error',xhr,xhr.status);}if(options.statusCode){if(globals.statusCode&&globals.statusCode[xhr.status]){globals.statusCode[xhr.status](xhr);}if(options.statusCode[xhr.status]){options.statusCode[xhr.status](xhr);}}fireAjaxCallback('ajaxComplete ajax:complete',{xhr:xhr},'complete',xhr,xhr.status);};xhr.onerror=function onerror(e){if(xhrTimeout){clearTimeout(xhrTimeout);}fireAjaxCallback('ajaxError ajax:error',{xhr:xhr},'error',xhr,xhr.status);fireAjaxCallback('ajaxComplete ajax:complete',{xhr:xhr,error:true},'complete',xhr,'error');};// Ajax start callback
fireAjaxCallback('ajaxStart ajax:start',{xhr:xhr},'start',xhr);fireAjaxCallback(undefined,undefined,'beforeSend',xhr);// Timeout
if(options.timeout>0){xhr.onabort=function onabort(){if(xhrTimeout){clearTimeout(xhrTimeout);}};xhrTimeout=setTimeout(function(){xhr.abort();fireAjaxCallback('ajaxError ajax:error',{xhr:xhr,timeout:true},'error',xhr,'timeout');fireAjaxCallback('ajaxComplete ajax:complete',{xhr:xhr,timeout:true},'complete',xhr,'timeout');},options.timeout);}// Send XHR
xhr.send(postData);// Return XHR object
return xhr;}function ajaxShortcut(method){var args=[],len=arguments.length-1;while(len-->0){args[len]=arguments[len+1];}var url;var data;var success;var error;var dataType;if(typeof args[1]==='function'){var assign;assign=args,url=assign[0],success=assign[1],error=assign[2],dataType=assign[3];}else{var assign$1;assign$1=args,url=assign$1[0],data=assign$1[1],success=assign$1[2],error=assign$1[3],dataType=assign$1[4];}[success,error].forEach(function(callback){if(typeof callback==='string'){dataType=callback;if(callback===success){success=undefined;}else{error=undefined;}}});dataType=dataType||(method==='getJSON'?'json':undefined);return $.ajax({url:url,method:method==='post'?'POST':'GET',data:data,success:success,error:error,dataType:dataType});}function get(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}args.unshift('get');return ajaxShortcut.apply(this,args);}function post(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}args.unshift('post');return ajaxShortcut.apply(this,args);}function getJSON(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}args.unshift('getJSON');return ajaxShortcut.apply(this,args);}var Scroll={scrollTo:function scrollTo(left,top,duration,easing,callback){if(easing===void 0)easing='swing';if(arguments.length===4&&typeof easing==='function'){callback=easing;easing=undefined;}return this.each(function animate(){var el=this;var currentTop;var currentLeft;var maxTop;var maxLeft;var newTop;var newLeft;var scrollTop;var scrollLeft;var animateTop=top>0||top===0;var animateLeft=left>0||left===0;if(typeof easing==='undefined'){easing='swing';}if(animateTop){currentTop=el.scrollTop;if(!duration){el.scrollTop=top;}}if(animateLeft){currentLeft=el.scrollLeft;if(!duration){el.scrollLeft=left;}}if(!duration){return;}if(animateTop){maxTop=el.scrollHeight-el.offsetHeight;newTop=Math.max(Math.min(top,maxTop),0);}if(animateLeft){maxLeft=el.scrollWidth-el.offsetWidth;newLeft=Math.max(Math.min(left,maxLeft),0);}var startTime=null;if(animateTop&&newTop===currentTop){animateTop=false;}if(animateLeft&&newLeft===currentLeft){animateLeft=false;}function render(time){if(time===void 0)time=new Date().getTime();if(startTime===null){startTime=time;}var progress=Math.max(Math.min((time-startTime)/duration,1),0);var easeProgress=easing==='linear'?progress:0.5-Math.cos(progress*Math.PI)/2;var done;if(animateTop){scrollTop=currentTop+easeProgress*(newTop-currentTop);}if(animateLeft){scrollLeft=currentLeft+easeProgress*(newLeft-currentLeft);}if(animateTop&&newTop>currentTop&&scrollTop>=newTop){el.scrollTop=newTop;done=true;}if(animateTop&&newTop<currentTop&&scrollTop<=newTop){el.scrollTop=newTop;done=true;}if(animateLeft&&newLeft>currentLeft&&scrollLeft>=newLeft){el.scrollLeft=newLeft;done=true;}if(animateLeft&&newLeft<currentLeft&&scrollLeft<=newLeft){el.scrollLeft=newLeft;done=true;}if(done){if(callback){callback();}return;}if(animateTop){el.scrollTop=scrollTop;}if(animateLeft){el.scrollLeft=scrollLeft;}Utils.requestAnimationFrame(render);}Utils.requestAnimationFrame(render);});},scrollTop:function scrollTop(top,duration,easing,callback){if(arguments.length===3&&typeof easing==='function'){callback=easing;easing=undefined;}var dom=this;if(typeof top==='undefined'){if(dom.length>0){return dom[0].scrollTop;}return null;}return dom.scrollTo(undefined,top,duration,easing,callback);},scrollLeft:function scrollLeft(left,duration,easing,callback){if(arguments.length===3&&typeof easing==='function'){callback=easing;easing=undefined;}var dom=this;if(typeof left==='undefined'){if(dom.length>0){return dom[0].scrollLeft;}return null;}return dom.scrollTo(left,undefined,duration,easing,callback);}};var Methods={// Classes and attributes
addClass:function addClass(className){var this$1=this;if(typeof className==='undefined'){return this;}var classes=className.split(' ');for(var i=0;i<classes.length;i+=1){for(var j=0;j<this.length;j+=1){if(typeof this$1[j].classList!=='undefined'){this$1[j].classList.add(classes[i]);}}}return this;},removeClass:function removeClass(className){var this$1=this;var classes=className.split(' ');for(var i=0;i<classes.length;i+=1){for(var j=0;j<this.length;j+=1){if(typeof this$1[j].classList!=='undefined'){this$1[j].classList.remove(classes[i]);}}}return this;},hasClass:function hasClass(className){if(!this[0]){return false;}return this[0].classList.contains(className);},toggleClass:function toggleClass(className){var this$1=this;var classes=className.split(' ');for(var i=0;i<classes.length;i+=1){for(var j=0;j<this.length;j+=1){if(typeof this$1[j].classList!=='undefined'){this$1[j].classList.toggle(classes[i]);}}}return this;},attr:function attr(attrs,value){var arguments$1=arguments;var this$1=this;if(arguments.length===1&&typeof attrs==='string'){// Get attr
if(this[0]){return this[0].getAttribute(attrs);}return undefined;}// Set attrs
for(var i=0;i<this.length;i+=1){if(arguments$1.length===2){// String
this$1[i].setAttribute(attrs,value);}else{// Object
for(var attrName in attrs){this$1[i][attrName]=attrs[attrName];this$1[i].setAttribute(attrName,attrs[attrName]);}}}return this;},removeAttr:function removeAttr(attr){var this$1=this;for(var i=0;i<this.length;i+=1){this$1[i].removeAttribute(attr);}return this;},prop:function prop(props,value){var arguments$1=arguments;var this$1=this;if(arguments.length===1&&typeof props==='string'){// Get prop
if(this[0]){return this[0][props];}}else{// Set props
for(var i=0;i<this.length;i+=1){if(arguments$1.length===2){// String
this$1[i][props]=value;}else{// Object
for(var propName in props){this$1[i][propName]=props[propName];}}}return this;}},data:function data(key,value){var this$1=this;var el;if(typeof value==='undefined'){el=this[0];// Get value
if(el){if(el.dom7ElementDataStorage&&key in el.dom7ElementDataStorage){return el.dom7ElementDataStorage[key];}var dataKey=el.getAttribute("data-"+key);if(dataKey){return dataKey;}return undefined;}return undefined;}// Set value
for(var i=0;i<this.length;i+=1){el=this$1[i];if(!el.dom7ElementDataStorage){el.dom7ElementDataStorage={};}el.dom7ElementDataStorage[key]=value;}return this;},removeData:function removeData(key){var this$1=this;for(var i=0;i<this.length;i+=1){var el=this$1[i];if(el.dom7ElementDataStorage&&el.dom7ElementDataStorage[key]){el.dom7ElementDataStorage[key]=null;delete el.dom7ElementDataStorage[key];}}},dataset:function dataset(){var el=this[0];if(!el){return undefined;}var dataset={};if(el.dataset){for(var dataKey in el.dataset){dataset[dataKey]=el.dataset[dataKey];}}else{for(var i=0;i<el.attributes.length;i+=1){var attr=el.attributes[i];if(attr.name.indexOf('data-')>=0){dataset[Utils.toCamelCase(attr.name.split('data-')[1])]=attr.value;}}}for(var key in dataset){if(dataset[key]==='false'){dataset[key]=false;}else if(dataset[key]==='true'){dataset[key]=true;}else if(parseFloat(dataset[key])===dataset[key]*1){dataset[key]*=1;}}return dataset;},val:function val(value){var this$1=this;if(typeof value==='undefined'){if(this[0]){if(this[0].multiple&&this[0].nodeName.toLowerCase()==='select'){var values=[];for(var i=0;i<this[0].selectedOptions.length;i+=1){values.push(this$1[0].selectedOptions[i].value);}return values;}return this[0].value;}return undefined;}for(var i$1=0;i$1<this.length;i$1+=1){this$1[i$1].value=value;}return this;},// Transforms
transform:function transform(transform$1){var this$1=this;for(var i=0;i<this.length;i+=1){var elStyle=this$1[i].style;elStyle.webkitTransform=transform$1;elStyle.transform=transform$1;}return this;},transition:function transition(duration){var this$1=this;if(typeof duration!=='string'){duration=duration+"ms";}for(var i=0;i<this.length;i+=1){var elStyle=this$1[i].style;elStyle.webkitTransitionDuration=duration;elStyle.transitionDuration=duration;}return this;},// Events
on:function on(){var this$1=this;var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var eventType=args[0];var targetSelector;var listener;var capture=false;if(typeof args[1]==='function'){targetSelector=false;listener=args[1];capture=args[2];}else{targetSelector=args[1];listener=args[2];capture=args[3];}function handleLiveEvent(e){var target=e.target;var eventData=e.target.dom7EventData||[];eventData.unshift(e);if($(target).is(targetSelector)){listener.apply(target,eventData);}else{var parents=$(target).parents();for(var k=0;k<parents.length;k+=1){if($(parents[k]).is(targetSelector)){listener.apply(parents[k],eventData);}}}}function handleEvent(e){var eventData=e.target.dom7EventData||[];eventData.unshift(e);listener.apply(this,eventData);}var events=eventType.split(' ');var j;for(var i=0;i<this.length;i+=1){var el=this$1[i];if(!targetSelector){for(j=0;j<events.length;j+=1){if(!el.dom7Listeners){el.dom7Listeners=[];}el.dom7Listeners.push({type:eventType,listener:listener,proxyListener:handleEvent});el.addEventListener(events[j],handleEvent,capture);}}else{// Live events
for(j=0;j<events.length;j+=1){if(!el.dom7LiveListeners){el.dom7LiveListeners=[];}el.dom7LiveListeners.push({type:eventType,listener:listener,proxyListener:handleLiveEvent});el.addEventListener(events[j],handleLiveEvent,capture);}}}return this;},off:function off(){var this$1=this;var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var eventType=args[0];var targetSelector;var listener;var capture=false;if(typeof args[1]==='function'){targetSelector=false;listener=args[1];capture=args[2];}else{targetSelector=args[1];listener=args[2];capture=args[3];}var events=eventType.split(' ');for(var i=0;i<events.length;i+=1){for(var j=0;j<this.length;j+=1){var el=this$1[j];if(!targetSelector){if(el.dom7Listeners){for(var k=0;k<el.dom7Listeners.length;k+=1){if(listener){if(el.dom7Listeners[k].listener===listener){el.removeEventListener(events[i],el.dom7Listeners[k].proxyListener,capture);}}else if(el.dom7Listeners[k].type===events[i]){el.removeEventListener(events[i],el.dom7Listeners[k].proxyListener,capture);}}}}else if(el.dom7LiveListeners){for(var k$1=0;k$1<el.dom7LiveListeners.length;k$1+=1){if(listener){if(el.dom7LiveListeners[k$1].listener===listener){el.removeEventListener(events[i],el.dom7LiveListeners[k$1].proxyListener,capture);}}else if(el.dom7Listeners[k$1].type===events[i]){el.removeEventListener(events[i],el.dom7LiveListeners[k$1].proxyListener,capture);}}}}}return this;},once:function once(eventName,targetSelector,listener,capture){var dom=this;if(typeof targetSelector==='function'){listener=arguments[1];capture=arguments[2];targetSelector=false;}function proxy(e){var eventData=e.target.dom7EventData||[];listener.apply(this,eventData);dom.off(eventName,targetSelector,proxy,capture);}return dom.on(eventName,targetSelector,proxy,capture);},trigger:function trigger(){var this$1=this;var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var events=args[0].split(' ');var eventData=args[1];for(var i=0;i<events.length;i+=1){for(var j=0;j<this.length;j+=1){var evt=void 0;try{evt=new CustomEvent(events[i],{detail:eventData,bubbles:true,cancelable:true});}catch(e){evt=document.createEvent('Event');evt.initEvent(events[i],true,true);evt.detail=eventData;}this$1[j].dom7EventData=args.filter(function(data,dataIndex){return dataIndex>0;});this$1[j].dispatchEvent(evt);this$1[j].dom7EventData=[];delete this$1[j].dom7EventData;}}return this;},transitionEnd:function transitionEnd(callback){var events=['webkitTransitionEnd','transitionend'];var dom=this;var i;function fireCallBack(e){/* jshint validthis:true */if(e.target!==this){return;}callback.call(this,e);for(i=0;i<events.length;i+=1){dom.off(events[i],fireCallBack);}}if(callback){for(i=0;i<events.length;i+=1){dom.on(events[i],fireCallBack);}}return this;},animationEnd:function animationEnd(callback){var events=['webkitAnimationEnd','animationend'];var dom=this;var i;function fireCallBack(e){callback(e);for(i=0;i<events.length;i+=1){dom.off(events[i],fireCallBack);}}if(callback){for(i=0;i<events.length;i+=1){dom.on(events[i],fireCallBack);}}return this;},// Sizing/Styles
width:function width(){if(this[0]===window){return window.innerWidth;}if(this.length>0){return parseFloat(this.css('width'));}return null;},outerWidth:function outerWidth(includeMargins){if(this.length>0){if(includeMargins){var styles=this.styles();return this[0].offsetWidth+parseFloat(styles.getPropertyValue('margin-right'))+parseFloat(styles.getPropertyValue('margin-left'));}return this[0].offsetWidth;}return null;},height:function height(){if(this[0]===window){return window.innerHeight;}if(this.length>0){return parseFloat(this.css('height'));}return null;},outerHeight:function outerHeight(includeMargins){if(this.length>0){if(includeMargins){var styles=this.styles();return this[0].offsetHeight+parseFloat(styles.getPropertyValue('margin-top'))+parseFloat(styles.getPropertyValue('margin-bottom'));}return this[0].offsetHeight;}return null;},offset:function offset(){if(this.length>0){var el=this[0];var box=el.getBoundingClientRect();var body=document.body;var clientTop=el.clientTop||body.clientTop||0;var clientLeft=el.clientLeft||body.clientLeft||0;var scrollTop=el===window?window.scrollY:el.scrollTop;var scrollLeft=el===window?window.scrollX:el.scrollLeft;return{top:box.top+scrollTop-clientTop,left:box.left+scrollLeft-clientLeft};}return null;},hide:function hide(){var this$1=this;for(var i=0;i<this.length;i+=1){this$1[i].style.display='none';}return this;},show:function show(){var this$1=this;for(var i=0;i<this.length;i+=1){this$1[i].style.display='block';}return this;},styles:function styles(){if(this[0]){return window.getComputedStyle(this[0],null);}},css:function css(props,value){var this$1=this;var i;if(arguments.length===1){if(typeof props==='string'){if(this[0]){return window.getComputedStyle(this[0],null).getPropertyValue(props);}}else{for(i=0;i<this.length;i+=1){for(var prop in props){this$1[i].style[prop]=props[prop];}}return this;}}if(arguments.length===2&&typeof props==='string'){for(i=0;i<this.length;i+=1){this$1[i].style[props]=value;}return this;}return this;},// Dom manipulation
// Iterate over the collection passing elements to `callback`
each:function each(callback){var this$1=this;// Don't bother continuing without a callback
if(!callback){return this;}// Iterate over the current collection
for(var i=0;i<this.length;i+=1){// If the callback returns false
if(callback.call(this$1[i],i,this$1[i])===false){// End the loop early
return this$1;}}// Return `this` to allow chained DOM operations
return this;},filter:function filter(callback){var matchedItems=[];var dom=this;for(var i=0;i<dom.length;i+=1){if(callback.call(dom[i],i,dom[i])){matchedItems.push(dom[i]);}}return new Dom7(matchedItems);},html:function html(html$1){var this$1=this;if(typeof html$1==='undefined'){return this[0]?this[0].innerHTML:undefined;}for(var i=0;i<this.length;i+=1){this$1[i].innerHTML=html$1;}return this;},text:function text(text$1){var this$1=this;if(typeof text$1==='undefined'){if(this[0]){return this[0].textContent.trim();}return null;}for(var i=0;i<this.length;i+=1){this$1[i].textContent=text$1;}return this;},is:function is(selector){var el=this[0];var compareWith;var i;if(!el||typeof selector==='undefined'){return false;}if(typeof selector==='string'){if(el.matches){return el.matches(selector);}else if(el.webkitMatchesSelector){return el.webkitMatchesSelector(selector);}else if(el.msMatchesSelector){return el.msMatchesSelector(selector);}compareWith=$(selector);for(i=0;i<compareWith.length;i+=1){if(compareWith[i]===el){return true;}}return false;}else if(selector===document){return el===document;}else if(selector===window){return el===window;}if(selector.nodeType||selector instanceof Dom7){compareWith=selector.nodeType?[selector]:selector;for(i=0;i<compareWith.length;i+=1){if(compareWith[i]===el){return true;}}return false;}return false;},indexOf:function indexOf(el){var this$1=this;for(var i=0;i<this.length;i+=1){if(this$1[i]===el){return i;}}},index:function index(){var child=this[0];var i;if(child){i=0;while((child=child.previousSibling)!==null){if(child.nodeType===1){i+=1;}}return i;}},eq:function eq(index){if(typeof index==='undefined'){return this;}var length=this.length;var returnIndex;if(index>length-1){return new Dom7([]);}if(index<0){returnIndex=length+index;if(returnIndex<0){return new Dom7([]);}return new Dom7([this[returnIndex]]);}return new Dom7([this[index]]);},append:function append(){var this$1=this;var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var newChild;for(var k=0;k<args.length;k+=1){newChild=args[k];for(var i=0;i<this.length;i+=1){if(typeof newChild==='string'){var tempDiv=document.createElement('div');tempDiv.innerHTML=newChild;while(tempDiv.firstChild){this$1[i].appendChild(tempDiv.firstChild);}}else if(newChild instanceof Dom7){for(var j=0;j<newChild.length;j+=1){this$1[i].appendChild(newChild[j]);}}else{this$1[i].appendChild(newChild);}}}return this;},appendTo:function appendTo(parent){$(parent).append(this);return this;},prepend:function prepend(newChild){var this$1=this;var i;var j;for(i=0;i<this.length;i+=1){if(typeof newChild==='string'){var tempDiv=document.createElement('div');tempDiv.innerHTML=newChild;for(j=tempDiv.childNodes.length-1;j>=0;j-=1){this$1[i].insertBefore(tempDiv.childNodes[j],this$1[i].childNodes[0]);}}else if(newChild instanceof Dom7){for(j=0;j<newChild.length;j+=1){this$1[i].insertBefore(newChild[j],this$1[i].childNodes[0]);}}else{this$1[i].insertBefore(newChild,this$1[i].childNodes[0]);}}return this;},prependTo:function prependTo(parent){$(parent).prepend(this);return this;},insertBefore:function insertBefore(selector){var this$1=this;var before=$(selector);for(var i=0;i<this.length;i+=1){if(before.length===1){before[0].parentNode.insertBefore(this$1[i],before[0]);}else if(before.length>1){for(var j=0;j<before.length;j+=1){before[j].parentNode.insertBefore(this$1[i].cloneNode(true),before[j]);}}}},insertAfter:function insertAfter(selector){var this$1=this;var after=$(selector);for(var i=0;i<this.length;i+=1){if(after.length===1){after[0].parentNode.insertBefore(this$1[i],after[0].nextSibling);}else if(after.length>1){for(var j=0;j<after.length;j+=1){after[j].parentNode.insertBefore(this$1[i].cloneNode(true),after[j].nextSibling);}}}},next:function next(selector){if(this.length>0){if(selector){if(this[0].nextElementSibling&&$(this[0].nextElementSibling).is(selector)){return new Dom7([this[0].nextElementSibling]);}return new Dom7([]);}if(this[0].nextElementSibling){return new Dom7([this[0].nextElementSibling]);}return new Dom7([]);}return new Dom7([]);},nextAll:function nextAll(selector){var nextEls=[];var el=this[0];if(!el){return new Dom7([]);}while(el.nextElementSibling){var next=el.nextElementSibling;if(selector){if($(next).is(selector)){nextEls.push(next);}}else{nextEls.push(next);}el=next;}return new Dom7(nextEls);},prev:function prev(selector){if(this.length>0){var el=this[0];if(selector){if(el.previousElementSibling&&$(el.previousElementSibling).is(selector)){return new Dom7([el.previousElementSibling]);}return new Dom7([]);}if(el.previousElementSibling){return new Dom7([el.previousElementSibling]);}return new Dom7([]);}return new Dom7([]);},prevAll:function prevAll(selector){var prevEls=[];var el=this[0];if(!el){return new Dom7([]);}while(el.previousElementSibling){var prev=el.previousElementSibling;if(selector){if($(prev).is(selector)){prevEls.push(prev);}}else{prevEls.push(prev);}el=prev;}return new Dom7(prevEls);},siblings:function siblings(selector){return this.nextAll(selector).add(this.prevAll(selector));},parent:function parent(selector){var this$1=this;var parents=[];for(var i=0;i<this.length;i+=1){if(this$1[i].parentNode!==null){if(selector){if($(this$1[i].parentNode).is(selector)){parents.push(this$1[i].parentNode);}}else{parents.push(this$1[i].parentNode);}}}return $(Utils.unique(parents));},parents:function parents(selector){var this$1=this;var parents=[];for(var i=0;i<this.length;i+=1){var parent=this$1[i].parentNode;while(parent){if(selector){if($(parent).is(selector)){parents.push(parent);}}else{parents.push(parent);}parent=parent.parentNode;}}return $(Utils.unique(parents));},closest:function closest(selector){var closest=this;if(typeof selector==='undefined'){return new Dom7([]);}if(!closest.is(selector)){closest=closest.parents(selector).eq(0);}return closest;},find:function find(selector){var this$1=this;var foundElements=[];for(var i=0;i<this.length;i+=1){var found=this$1[i].querySelectorAll(selector);for(var j=0;j<found.length;j+=1){foundElements.push(found[j]);}}return new Dom7(foundElements);},children:function children(selector){var this$1=this;var children=[];for(var i=0;i<this.length;i+=1){var childNodes=this$1[i].childNodes;for(var j=0;j<childNodes.length;j+=1){if(!selector){if(childNodes[j].nodeType===1){children.push(childNodes[j]);}}else if(childNodes[j].nodeType===1&&$(childNodes[j]).is(selector)){children.push(childNodes[j]);}}}return new Dom7(Utils.unique(children));},remove:function remove(){var this$1=this;for(var i=0;i<this.length;i+=1){if(this$1[i].parentNode){this$1[i].parentNode.removeChild(this$1[i]);}}return this;},detach:function detach(){return this.remove();},add:function add(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var dom=this;var i;var j;for(i=0;i<args.length;i+=1){var toAdd=$(args[i]);for(j=0;j<toAdd.length;j+=1){dom[dom.length]=toAdd[j];dom.length+=1;}}return dom;},empty:function empty(){var this$1=this;for(var i=0;i<this.length;i+=1){var el=this$1[i];if(el.nodeType===1){for(var j=0;j<el.childNodes.length;j+=1){if(el.childNodes[j].parentNode){el.childNodes[j].parentNode.removeChild(el.childNodes[j]);}}el.textContent='';}}return this;}};// Shortcuts
var shortcuts='click blur focus focusin focusout keyup keydown keypress submit change mousedown mousemove mouseup mouseenter mouseleave mouseout mouseover touchstart touchend touchmove resize scroll'.split(' ');var notTrigger='resize scroll'.split(' ');function createMethod(name){Methods[name]=function eventShortcut(targetSelector,listener,capture){var this$1=this;if(typeof targetSelector==='undefined'){for(var i=0;i<this.length;i+=1){if(notTrigger.indexOf(name)<0){if(name in this$1[i]){this$1[i][name]();}else{$(this$1[i]).trigger(name);}}}return this;}return this.on(name,targetSelector,listener,capture);};}for(var i$1=0;i$1<shortcuts.length;i$1+=1){createMethod(shortcuts[i$1]);}function animate(initialProps,initialParams){var els=this;var a={props:$.extend({},initialProps),params:$.extend({duration:300,easing:'swing'// or 'linear'
/* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */},initialParams),elements:els,animating:false,que:[],easingProgress:function easingProgress(easing,progress){if(easing==='swing'){return 0.5-Math.cos(progress*Math.PI)/2;}if(typeof easing==='function'){return easing(progress);}return progress;},stop:function stop(){if(a.frameId){Utils.cancelAnimationFrame(a.frameId);}a.animating=false;a.elements.each(function(index,el){var element=el;delete element.dom7AnimateInstance;});a.que=[];},done:function done(complete){a.animating=false;a.elements.each(function(index,el){var element=el;delete element.dom7AnimateInstance;});if(complete){complete(els);}if(a.que.length>0){var que=a.que.shift();a.animate(que[0],que[1]);}},animate:function animate(props,params){if(a.animating){a.que.push([props,params]);return a;}var elements=[];// Define & Cache Initials & Units
a.elements.each(function(index,el){var initialFullValue;var initialValue;var unit;var finalValue;var finalFullValue;if(!el.dom7AnimateInstance){a.elements[index].dom7AnimateInstance=a;}elements[index]={container:el};Object.keys(props).forEach(function(prop){initialFullValue=window.getComputedStyle(el,null).getPropertyValue(prop).replace(',','.');initialValue=parseFloat(initialFullValue);unit=initialFullValue.replace(initialValue,'');finalValue=parseFloat(props[prop]);finalFullValue=props[prop]+unit;elements[index][prop]={initialFullValue:initialFullValue,initialValue:initialValue,unit:unit,finalValue:finalValue,finalFullValue:finalFullValue,currentValue:initialValue};});});var startTime=null;var time;var elementsDone=0;var propsDone=0;var done;var began=false;a.animating=true;function render(){time=new Date().getTime();var progress;var easeProgress;// let el;
if(!began){began=true;if(params.begin){params.begin(els);}}if(startTime===null){startTime=time;}if(params.progress){params.progress(els,Math.max(Math.min((time-startTime)/params.duration,1),0),startTime+params.duration-time<0?0:startTime+params.duration-time,startTime);}elements.forEach(function(element){var el=element;if(done||el.done){return;}Object.keys(props).forEach(function(prop){if(done||el.done){return;}progress=Math.max(Math.min((time-startTime)/params.duration,1),0);easeProgress=a.easingProgress(params.easing,progress);var ref=el[prop];var initialValue=ref.initialValue;var finalValue=ref.finalValue;var unit=ref.unit;el[prop].currentValue=initialValue+easeProgress*(finalValue-initialValue);var currentValue=el[prop].currentValue;if(finalValue>initialValue&&currentValue>=finalValue||finalValue<initialValue&&currentValue<=finalValue){el.container.style[prop]=finalValue+unit;propsDone+=1;if(propsDone===Object.keys(props).length){el.done=true;elementsDone+=1;}if(elementsDone===elements.length){done=true;}}if(done){a.done(params.complete);return;}el.container.style[prop]=currentValue+unit;});});if(done){return;}// Then call
a.frameId=Utils.requestAnimationFrame(render);}a.frameId=Utils.requestAnimationFrame(render);return a;}};if(a.elements.length===0){return els;}var animateInstance;for(var i=0;i<a.elements.length;i+=1){if(a.elements[i].dom7AnimateInstance){animateInstance=a.elements[i].dom7AnimateInstance;}else{a.elements[i].dom7AnimateInstance=a;}}if(!animateInstance){animateInstance=a;}if(initialProps==='stop'){animateInstance.stop();}else{animateInstance.animate(a.props,a.params);}return els;}function stop(){var els=this;for(var i=0;i<els.length;i+=1){if(els[i].dom7AnimateInstance){els[i].dom7AnimateInstance.stop();}}}function dom7(){// Utils & Helpers
Object.keys(Utils).forEach(function(key){$[key]=Utils[key];});// Methods
Object.keys(Methods).forEach(function(key){Dom7.prototype[key]=Methods[key];});// Scroll
Object.keys(Scroll).forEach(function(key){Dom7.prototype[key]=Scroll[key];});// Animate
Dom7.prototype.animate=animate;Dom7.prototype.stop=stop;// Ajax
$.ajax=ajax;$.get=get;$.post=post;$.getJSON=getJSON;// Link to prototype
$.fn=Dom7.prototype;return $;}var dom7$1=dom7();return dom7$1;}();window.Template7=module.exports.Template7=function(){'use strict';var template7Context;if(typeof window!=='undefined'){template7Context=window;}else if(typeof global!=='undefined'){template7Context=global;}else{template7Context=undefined;}function isArray(arr){return Array.isArray?Array.isArray(arr):Object.prototype.toString.apply(arr)==='[object Array]';}function isFunction(func){return typeof func==='function';}function escape(string){return(typeof template7Context!=='undefined'&&template7Context.escape?template7Context.escape(string):string).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}var quoteSingleRexExp=new RegExp('\'','g');var quoteDoubleRexExp=new RegExp('"','g');function helperToSlices(string){var helperParts=string.replace(/[{}#}]/g,'').split(' ');var slices=[];var shiftIndex;var i;var j;for(i=0;i<helperParts.length;i+=1){var part=helperParts[i];var blockQuoteRegExp=void 0;var openingQuote=void 0;if(i===0){slices.push(part);}else if(part.indexOf('"')===0||part.indexOf('\'')===0){blockQuoteRegExp=part.indexOf('"')===0?quoteDoubleRexExp:quoteSingleRexExp;openingQuote=part.indexOf('"')===0?'"':'\'';// Plain String
if(part.match(blockQuoteRegExp).length===2){// One word string
slices.push(part);}else{// Find closed Index
shiftIndex=0;for(j=i+1;j<helperParts.length;j+=1){part+=" "+helperParts[j];if(helperParts[j].indexOf(openingQuote)>=0){shiftIndex=j;slices.push(part);break;}}if(shiftIndex){i=shiftIndex;}}}else if(part.indexOf('=')>0){// Hash
var hashParts=part.split('=');var hashName=hashParts[0];var hashContent=hashParts[1];if(!blockQuoteRegExp){blockQuoteRegExp=hashContent.indexOf('"')===0?quoteDoubleRexExp:quoteSingleRexExp;openingQuote=hashContent.indexOf('"')===0?'"':'\'';}if(hashContent.match(blockQuoteRegExp).length!==2){shiftIndex=0;for(j=i+1;j<helperParts.length;j+=1){hashContent+=" "+helperParts[j];if(helperParts[j].indexOf(openingQuote)>=0){shiftIndex=j;break;}}if(shiftIndex){i=shiftIndex;}}var hash=[hashName,hashContent.replace(blockQuoteRegExp,'')];slices.push(hash);}else{// Plain variable
slices.push(part);}}return slices;}function stringToBlocks(string){var blocks=[];var i;var j;if(!string){return[];}var stringBlocks=string.split(/({{[^{^}]*}})/);for(i=0;i<stringBlocks.length;i+=1){var block=stringBlocks[i];if(block===''){continue;}if(block.indexOf('{{')<0){blocks.push({type:'plain',content:block});}else{if(block.indexOf('{/')>=0){continue;}if(block.indexOf('{#')<0&&block.indexOf(' ')<0&&block.indexOf('else')<0){// Simple variable
blocks.push({type:'variable',contextName:block.replace(/[{}]/g,'')});continue;}// Helpers
var helperSlices=helperToSlices(block);var helperName=helperSlices[0];var isPartial=helperName==='>';var helperContext=[];var helperHash={};for(j=1;j<helperSlices.length;j+=1){var slice=helperSlices[j];if(isArray(slice)){// Hash
helperHash[slice[0]]=slice[1]==='false'?false:slice[1];}else{helperContext.push(slice);}}if(block.indexOf('{#')>=0){// Condition/Helper
var helperContent='';var elseContent='';var toSkip=0;var shiftIndex=void 0;var foundClosed=false;var foundElse=false;var depth=0;for(j=i+1;j<stringBlocks.length;j+=1){if(stringBlocks[j].indexOf('{{#')>=0){depth+=1;}if(stringBlocks[j].indexOf('{{/')>=0){depth-=1;}if(stringBlocks[j].indexOf("{{#"+helperName)>=0){helperContent+=stringBlocks[j];if(foundElse){elseContent+=stringBlocks[j];}toSkip+=1;}else if(stringBlocks[j].indexOf("{{/"+helperName)>=0){if(toSkip>0){toSkip-=1;helperContent+=stringBlocks[j];if(foundElse){elseContent+=stringBlocks[j];}}else{shiftIndex=j;foundClosed=true;break;}}else if(stringBlocks[j].indexOf('else')>=0&&depth===0){foundElse=true;}else{if(!foundElse){helperContent+=stringBlocks[j];}if(foundElse){elseContent+=stringBlocks[j];}}}if(foundClosed){if(shiftIndex){i=shiftIndex;}blocks.push({type:'helper',helperName:helperName,contextName:helperContext,content:helperContent,inverseContent:elseContent,hash:helperHash});}}else if(block.indexOf(' ')>0){if(isPartial){helperName='_partial';if(helperContext[0]){helperContext[0]="\""+helperContext[0].replace(/"|'/g,'')+"\"";}}blocks.push({type:'helper',helperName:helperName,contextName:helperContext,hash:helperHash});}}}return blocks;}var Template7=function Template7(template){var t=this;t.template=template;function getCompileVar(name,ctx){var variable=ctx;var parts;var levelsUp=0;if(name.indexOf('../')===0){var newDepth=variable.split('_')[1]-levelsUp;levelsUp=name.split('../').length-1;variable="ctx_"+(newDepth>=1?newDepth:1);parts=name.split('../')[levelsUp].split('.');}else if(name.indexOf('@global')===0){variable='Template7.global';parts=name.split('@global.')[1].split('.');}else if(name.indexOf('@root')===0){variable='root';parts=name.split('@root.')[1].split('.');}else{parts=name.split('.');}for(var i=0;i<parts.length;i+=1){var part=parts[i];if(part.indexOf('@')===0){if(i>0){variable+="[(data && data."+part.replace('@','')+")]";}else{variable="(data && data."+name.replace('@','')+")";}}else if(isFinite(part)){variable+="["+part+"]";}else if(part==='this'||part.indexOf('this.')>=0||part.indexOf('this[')>=0||part.indexOf('this(')>=0){variable=part.replace('this',ctx);}else{variable+="."+part;}}return variable;}function getCompiledArguments(contextArray,ctx){var arr=[];for(var i=0;i<contextArray.length;i+=1){if(/^['"]/.test(contextArray[i])){arr.push(contextArray[i]);}else if(/^(true|false|\d+)$/.test(contextArray[i])){arr.push(contextArray[i]);}else{arr.push(getCompileVar(contextArray[i],ctx));}}return arr.join(', ');}function compile(template,depth){if(template===void 0)template=t.template;if(depth===void 0)depth=1;if(typeof template!=='string'){throw new Error('Template7: Template must be a string');}var blocks=stringToBlocks(template);var ctx="ctx_"+depth;if(blocks.length===0){return function empty(){return'';};}function getCompileFn(block,newDepth){if(block.content){return compile(block.content,newDepth);}return function empty(){return'';};}function getCompileInverse(block,newDepth){if(block.inverseContent){return compile(block.inverseContent,newDepth);}return function empty(){return'';};}var resultString='';if(depth===1){resultString+="(function ("+ctx+", data, root) {\n";}else{resultString+="(function ("+ctx+", data) {\n";}if(depth===1){resultString+='function isArray(arr){return Object.prototype.toString.apply(arr) === \'[object Array]\';}\n';resultString+='function isFunction(func){return (typeof func === \'function\');}\n';resultString+='function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';resultString+='root = root || ctx_1 || {};\n';}resultString+='var r = \'\';\n';var i;for(i=0;i<blocks.length;i+=1){var block=blocks[i];// Plain block
if(block.type==='plain'){resultString+="r +='"+block.content.replace(/\r/g,'\\r').replace(/\n/g,'\\n').replace(/'/g,'\\'+'\'')+"';";continue;}var variable=void 0;var compiledArguments=void 0;// Variable block
if(block.type==='variable'){variable=getCompileVar(block.contextName,ctx);resultString+="r += c("+variable+", "+ctx+");";}// Helpers block
if(block.type==='helper'){if(block.helperName in t.helpers){compiledArguments=getCompiledArguments(block.contextName,ctx);resultString+="r += (Template7.helpers."+block.helperName+").call("+ctx+", "+(compiledArguments&&compiledArguments+", ")+"{hash:"+JSON.stringify(block.hash)+", data: data || {}, fn: "+getCompileFn(block,depth+1)+", inverse: "+getCompileInverse(block,depth+1)+", root: root});";}else if(block.contextName.length>0){throw new Error("Template7: Missing helper: \""+block.helperName+"\"");}else{variable=getCompileVar(block.helperName,ctx);resultString+="if ("+variable+") {";resultString+="if (isArray("+variable+")) {";resultString+="r += (Template7.helpers.each).call("+ctx+", "+variable+", {hash:"+JSON.stringify(block.hash)+", data: data || {}, fn: "+getCompileFn(block,depth+1)+", inverse: "+getCompileInverse(block,depth+1)+", root: root});";resultString+='}else {';resultString+="r += (Template7.helpers.with).call("+ctx+", "+variable+", {hash:"+JSON.stringify(block.hash)+", data: data || {}, fn: "+getCompileFn(block,depth+1)+", inverse: "+getCompileInverse(block,depth+1)+", root: root});";resultString+='}}';}}}resultString+='\nreturn r;})';return eval.call(template7Context,resultString);}t.compile=function _compile(template){if(!t.compiled){t.compiled=compile(template);}return t.compiled;};};Template7.prototype={options:{},partials:{},helpers:{_partial:function _partial(partialName,options){var p=Template7.prototype.partials[partialName];if(!p||p&&!p.template){return'';}if(!p.compiled){p.compiled=new Template7(p.template).compile();}var ctx=this;for(var hashName in options.hash){ctx[hashName]=options.hash[hashName];}return p.compiled(ctx,options.data,options.root);},escape:function escape$1(context,options){if(typeof context!=='string'){throw new Error('Template7: Passed context to "escape" helper should be a string');}return escape(context);},if:function if$1(context,options){var ctx=context;if(isFunction(ctx)){ctx=ctx.call(this);}if(ctx){return options.fn(this,options.data);}return options.inverse(this,options.data);},unless:function unless(context,options){var ctx=context;if(isFunction(ctx)){ctx=ctx.call(this);}if(!ctx){return options.fn(this,options.data);}return options.inverse(this,options.data);},each:function each(context,options){var ctx=context;var ret='';var i=0;if(isFunction(ctx)){ctx=ctx.call(this);}if(isArray(ctx)){if(options.hash.reverse){ctx=ctx.reverse();}for(i=0;i<ctx.length;i+=1){ret+=options.fn(ctx[i],{first:i===0,last:i===ctx.length-1,index:i});}if(options.hash.reverse){ctx=ctx.reverse();}}else{for(var key in ctx){i+=1;ret+=options.fn(ctx[key],{key:key});}}if(i>0){return ret;}return options.inverse(this);},with:function with$1(context,options){var ctx=context;if(isFunction(ctx)){ctx=context.call(this);}return options.fn(ctx);},join:function join(context,options){var ctx=context;if(isFunction(ctx)){ctx=ctx.call(this);}return ctx.join(options.hash.delimiter||options.hash.delimeter);},js:function js(expression,options){var func;if(expression.indexOf('return')>=0){func="(function(){"+expression+"})";}else{func="(function(){return ("+expression+")})";}return eval.call(this,func).call(this);},js_compare:function js_compare(expression,options){var func;if(expression.indexOf('return')>=0){func="(function(){"+expression+"})";}else{func="(function(){return ("+expression+")})";}var condition=eval.call(this,func).call(this);if(condition){return options.fn(this,options.data);}return options.inverse(this,options.data);}}};function t7(template,data){if(arguments.length===2){var instance=new Template7(template);var rendered=instance.compile()(data);instance=null;return rendered;}return new Template7(template);}t7.registerHelper=function registerHelper(name,fn){Template7.prototype.helpers[name]=fn;};t7.unregisterHelper=function unregisterHelper(name){Template7.prototype.helpers[name]=undefined;delete Template7.prototype.helpers[name];};t7.registerPartial=function registerPartial(name,template){Template7.prototype.partials[name]={template:template};};t7.unregisterPartial=function unregisterPartial(name){if(Template7.prototype.partials[name]){Template7.prototype.partials[name]=undefined;delete Template7.prototype.partials[name];}};t7.compile=function compile(template,options){var instance=new Template7(template,options);return instance.compile();};t7.options=Template7.prototype.options;t7.helpers=Template7.prototype.helpers;t7.partials=Template7.prototype.partials;return t7;}();(function(){'use strict';/*===========================
    Framework 7
    ===========================*/window.Framework7=module.exports.Framework7=function(params){// App
var app=this;// Version
app.version='1.6.0';// Default Parameters
app.params={//
root:'body',//
cache:true,cacheIgnore:[],cacheIgnoreGetParameters:false,cacheDuration:1000*60*10,// Ten minutes
preloadPreviousPage:true,uniqueHistory:false,uniqueHistoryIgnoreGetParameters:false,dynamicPageUrl:'content-{{index}}',allowDuplicateUrls:false,router:true,routerRemoveTimeout:false,routerRemoveWithTimeout:false,// Push State
pushState:false,pushStateRoot:undefined,pushStateNoAnimation:false,pushStateSeparator:'#!/',pushStateOnLoad:true,// Fast clicks
fastClicks:true,fastClicksDistanceThreshold:10,fastClicksDelayBetweenClicks:50,fastClicksExclude:'',// CSS selector
// Tap Hold
tapHold:false,tapHoldDelay:750,tapHoldPreventClicks:true,// Active State
activeState:true,activeStateElements:'a, button, label, span',// Animate Nav Back Icon
animateNavBackIcon:false,// Swipe Back
swipeBackPage:true,swipeBackPageThreshold:0,swipeBackPageActiveArea:30,swipeBackPageAnimateShadow:true,swipeBackPageAnimateOpacity:true,// Ajax
ajaxLinks:undefined,// or CSS selector
// External Links
externalLinks:'.external',// CSS selector
// Sortable
sortable:true,// Scroll toolbars
hideNavbarOnPageScroll:false,hideToolbarOnPageScroll:false,hideTabbarOnPageScroll:false,showBarsOnPageScrollEnd:true,showBarsOnPageScrollTop:true,// Swipeout
swipeout:true,swipeoutActionsNoFold:false,swipeoutNoFollow:false,swipeoutRemoveWithTimeout:false,// Smart Select Back link template
smartSelectOpenIn:'page',// or 'popup' or 'picker'
smartSelectBackText:'Back',smartSelectPopupCloseText:'Close',smartSelectPickerCloseText:'Done',smartSelectSearchbar:false,smartSelectBackOnSelect:false,// Tap Navbar or Statusbar to scroll to top
scrollTopOnNavbarClick:false,scrollTopOnStatusbarClick:false,// Panels
panelLeftBreakpoint:null,panelRightBreakpoint:null,swipePanel:false,// or 'left' or 'right'
swipePanelActiveArea:0,swipePanelCloseOpposite:true,swipePanelOnlyClose:false,swipePanelNoFollow:false,swipePanelThreshold:0,panelsCloseByOutside:true,// Modals
modalButtonOk:'OK',modalButtonCancel:'Cancel',modalUsernamePlaceholder:'Username',modalPasswordPlaceholder:'Password',modalTitle:'Framework7',modalCloseByOutside:false,actionsCloseByOutside:true,popupCloseByOutside:true,popoverCloseByOutside:true,modalPreloaderTitle:'Loading... ',modalStack:true,modalsMoveToRoot:true,// Lazy Load
imagesLazyLoadThreshold:0,imagesLazyLoadSequential:true,// Name space
viewClass:'view',viewMainClass:'view-main',viewsClass:'views',// Notifications defaults
notificationCloseOnClick:false,notificationCloseIcon:true,notificationCloseButtonText:'Close',// Animate Pages
animatePages:true,// Template7
templates:{},template7Data:{},template7Pages:false,precompileTemplates:false,// Material
material:false,materialPageLoadDelay:0,materialPreloaderSvg:'<svg xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>',materialPreloaderHtml:'<span class="preloader-inner">'+'<span class="preloader-inner-gap"></span>'+'<span class="preloader-inner-left">'+'<span class="preloader-inner-half-circle"></span>'+'</span>'+'<span class="preloader-inner-right">'+'<span class="preloader-inner-half-circle"></span>'+'</span>'+'</span>',materialRipple:true,materialRippleElements:'.ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, a.floating-button, .floating-button > a, .speed-dial-buttons a, .form-checkbox, .form-radio, .data-table .sortable-cell',// Auto init
init:true};// Extend defaults with parameters
for(var param in params){app.params[param]=params[param];}// DOM lib
var $=Dom7;// Template7 lib
var t7=Template7;app._compiledTemplates={};// App Root
app.root=$(app.params.root);app.root.eq(0).addClass('framework7-root');// Touch events
app.touchEvents={start:app.support.touch?'touchstart':'mousedown',move:app.support.touch?'touchmove':'mousemove',end:app.support.touch?'touchend':'mouseup'};// Link to local storage
app.ls=window.localStorage;// RTL
app.rtl=$('body').css('direction')==='rtl';if(app.rtl)$('html').attr('dir','rtl');// Overwrite statusbar overlay
if(typeof app.params.statusbarOverlay!=='undefined'){if(app.params.statusbarOverlay)$('html').addClass('with-statusbar-overlay');else $('html').removeClass('with-statusbar-overlay');}else if(app.device.ios&&(window.cordova||window.phonegap)){$(document).on('resume',function(){if(app.device.needsStatusBar()){$('html').addClass('with-statusbar-overlay');}},false);}/*======================================================
        ************   Views   ************
        ======================================================*/app.views=[];var View=function View(selector,params){var defaults={dynamicNavbar:false,domCache:false,linksView:undefined,reloadPages:false,uniqueHistory:app.params.uniqueHistory,uniqueHistoryIgnoreGetParameters:app.params.uniqueHistoryIgnoreGetParameters,allowDuplicateUrls:app.params.allowDuplicateUrls,swipeBackPage:app.params.swipeBackPage,swipeBackPageAnimateShadow:app.params.swipeBackPageAnimateShadow,swipeBackPageAnimateOpacity:app.params.swipeBackPageAnimateOpacity,swipeBackPageActiveArea:app.params.swipeBackPageActiveArea,swipeBackPageThreshold:app.params.swipeBackPageThreshold,animatePages:app.params.animatePages,preloadPreviousPage:app.params.preloadPreviousPage};var i;// Params
params=params||{};// Disable dynamic navbar for material theme
if(params.dynamicNavbar&&app.params.material)params.dynamicNavbar=false;// Extend params with defaults
for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}}// View
var view=this;view.params=params;// Selector
view.selector=selector;// Container
var container=$(selector);view.container=container[0];// Fix Selector
if(typeof selector!=='string'){// Supposed to be HTMLElement or Dom7
selector=(container.attr('id')?'#'+container.attr('id'):'')+(container.attr('class')?'.'+container.attr('class').replace(/ /g,'.').replace('.active',''):'');view.selector=selector;}// Is main
view.main=container.hasClass(app.params.viewMainClass);// Content cache
view.contentCache={};// Context cache
view.contextCache={};// Pages cache
view.pagesCache={};view.pageElementsCache={};// Store View in element for easy access
container[0].f7View=view;// Pages
view.pagesContainer=container.find('.pages')[0];view.initialPages=[];view.initialPagesUrl=[];view.initialNavbars=[];if(view.params.domCache){var initialPages=container.find('.page');for(i=0;i<initialPages.length;i++){view.initialPages.push(initialPages[i]);view.initialPagesUrl.push('#'+initialPages.eq(i).attr('data-page'));}if(view.params.dynamicNavbar){var initialNavbars=container.find('.navbar-inner');for(i=0;i<initialNavbars.length;i++){view.initialNavbars.push(initialNavbars[i]);}}}view.allowPageChange=true;// Location
var docLocation=document.location.href;// History
view.history=[];var viewURL=docLocation;var pushStateSeparator=app.params.pushStateSeparator;var pushStateRoot=app.params.pushStateRoot;if(app.params.pushState&&view.main){if(pushStateRoot){viewURL=pushStateRoot;}else{if(pushStateSeparator&&viewURL.indexOf(pushStateSeparator)>=0&&viewURL.indexOf(pushStateSeparator+'#')<0)viewURL=viewURL.split(pushStateSeparator)[0];}}// Active Page
var currentPage,currentPageData;if(!view.activePage){currentPage=$(view.pagesContainer).find('.page-on-center');if(currentPage.length===0){currentPage=$(view.pagesContainer).find('.page:not(.cached)');currentPage=currentPage.eq(currentPage.length-1);}if(currentPage.length>0){currentPageData=currentPage[0].f7PageData;}}// View startup URL
if(view.params.domCache&&currentPage){view.url=container.attr('data-url')||view.params.url||'#'+currentPage.attr('data-page');view.pagesCache[view.url]=currentPage.attr('data-page');}else view.url=container.attr('data-url')||view.params.url||viewURL;// Update current page Data
if(currentPageData){currentPageData.view=view;currentPageData.url=view.url;if(view.params.domCache&&view.params.dynamicNavbar&&!currentPageData.navbarInnerContainer){currentPageData.navbarInnerContainer=view.initialNavbars[view.initialPages.indexOf(currentPageData.container)];}view.activePage=currentPageData;currentPage[0].f7PageData=currentPageData;}// Store to history main view's url
if(view.url){view.history.push(view.url);}// Touch events
var isTouched=false,isMoved=false,touchesStart={},isScrolling,activePage=[],previousPage=[],viewContainerWidth,touchesDiff,allowViewTouchMove=true,touchStartTime,activeNavbar=[],previousNavbar=[],activeNavElements,previousNavElements,activeNavBackIcon,previousNavBackIcon,dynamicNavbar,pageShadow,pageOpacity,el;view.handleTouchStart=function(e){if(!allowViewTouchMove||!view.params.swipeBackPage||isTouched||app.swipeoutOpenedEl||!view.allowPageChange)return;isMoved=false;isTouched=true;isScrolling=undefined;touchesStart.x=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;touchesStart.y=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;touchStartTime=new Date().getTime();dynamicNavbar=view.params.dynamicNavbar&&container.find('.navbar-inner').length>1;};view.handleTouchMove=function(e){if(!isTouched)return;var pageX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;var pageY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){isScrolling=!!(isScrolling||Math.abs(pageY-touchesStart.y)>Math.abs(pageX-touchesStart.x));}if(isScrolling||e.f7PreventSwipeBack||app.preventSwipeBack){isTouched=false;return;}if(!isMoved){var cancel=false;// Calc values during first move fired
viewContainerWidth=container.width();var target=$(e.target);var swipeout=target.hasClass('swipeout')?target:target.parents('.swipeout');if(swipeout.length>0){if(!app.rtl&&swipeout.find('.swipeout-actions-left').length>0)cancel=true;if(app.rtl&&swipeout.find('.swipeout-actions-right').length>0)cancel=true;}activePage=target.is('.page')?target:target.parents('.page');if(activePage.hasClass('no-swipeback'))cancel=true;previousPage=container.find('.page-on-left:not(.cached)');var notFromBorder=touchesStart.x-container.offset().left>view.params.swipeBackPageActiveArea;if(app.rtl){notFromBorder=touchesStart.x<container.offset().left-container[0].scrollLeft+viewContainerWidth-view.params.swipeBackPageActiveArea;}else{notFromBorder=touchesStart.x-container.offset().left>view.params.swipeBackPageActiveArea;}if(notFromBorder)cancel=true;if(previousPage.length===0||activePage.length===0)cancel=true;if(cancel){isTouched=false;return;}if(view.params.swipeBackPageAnimateShadow&&!app.device.android){pageShadow=activePage.find('.swipeback-page-shadow');if(pageShadow.length===0){pageShadow=$('<div class="swipeback-page-shadow"></div>');activePage.append(pageShadow);}}if(view.params.swipeBackPageAnimateOpacity){pageOpacity=previousPage.find('.swipeback-page-opacity');if(pageOpacity.length===0){pageOpacity=$('<div class="swipeback-page-opacity"></div>');previousPage.append(pageOpacity);}}if(dynamicNavbar){activeNavbar=container.find('.navbar-on-center:not(.cached)');previousNavbar=container.find('.navbar-on-left:not(.cached)');activeNavElements=activeNavbar.find('.left, .center, .right, .subnavbar, .fading');previousNavElements=previousNavbar.find('.left, .center, .right, .subnavbar, .fading');if(app.params.animateNavBackIcon){activeNavBackIcon=activeNavbar.find('.left.sliding .back .icon');previousNavBackIcon=previousNavbar.find('.left.sliding .back .icon');}}// Close/Hide Any Picker
if($('.picker-modal.modal-in').length>0){app.closeModal($('.picker-modal.modal-in'));}}e.f7PreventPanelSwipe=true;isMoved=true;e.preventDefault();// RTL inverter
var inverter=app.rtl?-1:1;// Touches diff
touchesDiff=(pageX-touchesStart.x-view.params.swipeBackPageThreshold)*inverter;if(touchesDiff<0)touchesDiff=0;var percentage=touchesDiff/viewContainerWidth;// Swipe Back Callback
var callbackData={percentage:percentage,activePage:activePage[0],previousPage:previousPage[0],activeNavbar:activeNavbar[0],previousNavbar:previousNavbar[0]};if(view.params.onSwipeBackMove){view.params.onSwipeBackMove(callbackData);}container.trigger('swipeBackMove swipeback:move',callbackData);// Transform pages
var activePageTranslate=touchesDiff*inverter;var previousPageTranslate=(touchesDiff/5-viewContainerWidth/5)*inverter;if(app.device.pixelRatio===1){activePageTranslate=Math.round(activePageTranslate);previousPageTranslate=Math.round(previousPageTranslate);}activePage.transform('translate3d('+activePageTranslate+'px,0,0)');if(view.params.swipeBackPageAnimateShadow&&!app.device.android)pageShadow[0].style.opacity=1-1*percentage;previousPage.transform('translate3d('+previousPageTranslate+'px,0,0)');if(view.params.swipeBackPageAnimateOpacity)pageOpacity[0].style.opacity=1-1*percentage;// Dynamic Navbars Animation
if(dynamicNavbar){var i;for(i=0;i<activeNavElements.length;i++){el=$(activeNavElements[i]);if(!el.is('.subnavbar.sliding'))el[0].style.opacity=1-percentage*1.3;if(el[0].className.indexOf('sliding')>=0){var activeNavTranslate=percentage*el[0].f7NavbarRightOffset;if(app.device.pixelRatio===1)activeNavTranslate=Math.round(activeNavTranslate);el.transform('translate3d('+activeNavTranslate+'px,0,0)');if(app.params.animateNavBackIcon){if(el[0].className.indexOf('left')>=0&&activeNavBackIcon.length>0){activeNavBackIcon.transform('translate3d('+-activeNavTranslate+'px,0,0)');}}}}for(i=0;i<previousNavElements.length;i++){el=$(previousNavElements[i]);if(!el.is('.subnavbar.sliding'))el[0].style.opacity=percentage*1.3-0.3;if(el[0].className.indexOf('sliding')>=0){var previousNavTranslate=el[0].f7NavbarLeftOffset*(1-percentage);if(app.device.pixelRatio===1)previousNavTranslate=Math.round(previousNavTranslate);el.transform('translate3d('+previousNavTranslate+'px,0,0)');if(app.params.animateNavBackIcon){if(el[0].className.indexOf('left')>=0&&previousNavBackIcon.length>0){previousNavBackIcon.transform('translate3d('+-previousNavTranslate+'px,0,0)');}}}}}};view.handleTouchEnd=function(e){if(!isTouched||!isMoved){isTouched=false;isMoved=false;return;}isTouched=false;isMoved=false;if(touchesDiff===0){$([activePage[0],previousPage[0]]).transform('');if(dynamicNavbar){activeNavElements.transform('').css({opacity:''});previousNavElements.transform('').css({opacity:''});if(activeNavBackIcon&&activeNavBackIcon.length>0)activeNavBackIcon.transform('');if(previousNavBackIcon&&activeNavBackIcon.length>0)previousNavBackIcon.transform('');}return;}var timeDiff=new Date().getTime()-touchStartTime;var pageChanged=false;// Swipe back to previous page
if(timeDiff<300&&touchesDiff>10||timeDiff>=300&&touchesDiff>viewContainerWidth/2){activePage.removeClass('page-on-center').addClass('page-on-right');previousPage.removeClass('page-on-left').addClass('page-on-center');if(dynamicNavbar){activeNavbar.removeClass('navbar-on-center').addClass('navbar-on-right');previousNavbar.removeClass('navbar-on-left').addClass('navbar-on-center');}pageChanged=true;}// Reset custom styles
// Add transitioning class for transition-duration
$([activePage[0],previousPage[0]]).transform('').addClass('page-transitioning');if(dynamicNavbar){activeNavElements.css({opacity:''}).each(function(){var translate=pageChanged?this.f7NavbarRightOffset:0;var sliding=$(this);sliding.transform('translate3d('+translate+'px,0,0)');if(app.params.animateNavBackIcon){if(sliding.hasClass('left')&&activeNavBackIcon.length>0){activeNavBackIcon.addClass('page-transitioning').transform('translate3d('+-translate+'px,0,0)');}}}).addClass('page-transitioning');previousNavElements.transform('').css({opacity:''}).each(function(){var translate=pageChanged?0:this.f7NavbarLeftOffset;var sliding=$(this);sliding.transform('translate3d('+translate+'px,0,0)');if(app.params.animateNavBackIcon){if(sliding.hasClass('left')&&previousNavBackIcon.length>0){previousNavBackIcon.addClass('page-transitioning').transform('translate3d('+-translate+'px,0,0)');}}}).addClass('page-transitioning');}allowViewTouchMove=false;view.allowPageChange=false;// Swipe Back Callback
var callbackData={activePage:activePage[0],previousPage:previousPage[0],activeNavbar:activeNavbar[0],previousNavbar:previousNavbar[0]};if(pageChanged){// Update View's URL
var url=view.history[view.history.length-2];view.url=url;// Page before animation callback
app.pageBackCallback('before',view,{pageContainer:activePage[0],url:url,position:'center',newPage:previousPage,oldPage:activePage,swipeBack:true});app.pageAnimCallback('before',view,{pageContainer:previousPage[0],url:url,position:'left',newPage:previousPage,oldPage:activePage,swipeBack:true});if(view.params.onSwipeBackBeforeChange){view.params.onSwipeBackBeforeChange(callbackData);}container.trigger('swipeBackBeforeChange swipeback:beforechange',callbackData);}else{if(view.params.onSwipeBackBeforeReset){view.params.onSwipeBackBeforeReset(callbackData);}container.trigger('swipeBackBeforeReset swipeback:beforereset',callbackData);}activePage.transitionEnd(function(){$([activePage[0],previousPage[0]]).removeClass('page-transitioning');if(dynamicNavbar){activeNavElements.removeClass('page-transitioning').css({opacity:''});previousNavElements.removeClass('page-transitioning').css({opacity:''});if(activeNavBackIcon&&activeNavBackIcon.length>0)activeNavBackIcon.removeClass('page-transitioning');if(previousNavBackIcon&&previousNavBackIcon.length>0)previousNavBackIcon.removeClass('page-transitioning');}allowViewTouchMove=true;view.allowPageChange=true;if(pageChanged){if(app.params.pushState&&view.main)history.back();// Page after animation callback
app.pageBackCallback('after',view,{pageContainer:activePage[0],url:url,position:'center',newPage:previousPage,oldPage:activePage,swipeBack:true});app.pageAnimCallback('after',view,{pageContainer:previousPage[0],url:url,position:'left',newPage:previousPage,oldPage:activePage,swipeBack:true});app.router.afterBack(view,activePage,previousPage);if(view.params.onSwipeBackAfterChange){view.params.onSwipeBackAfterChange(callbackData);}container.trigger('swipeBackAfterChange swipeback:afterchange',callbackData);}else{if(view.params.onSwipeBackAfterReset){view.params.onSwipeBackAfterReset(callbackData);}container.trigger('swipeBackAfterReset swipeback:afterreset',callbackData);}if(pageShadow&&pageShadow.length>0)pageShadow.remove();if(pageOpacity&&pageOpacity.length>0)pageOpacity.remove();});};view.attachEvents=function(detach){var action=detach?'off':'on';var passiveListener=app.touchEvents.start==='touchstart'&&app.support.passiveListener?{passive:true,capture:false}:false;var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;container[action](app.touchEvents.start,view.handleTouchStart,passiveListener);container[action](app.touchEvents.move,view.handleTouchMove,activeListener);container[action](app.touchEvents.end,view.handleTouchEnd,passiveListener);};view.detachEvents=function(){view.attachEvents(true);};// Init
if(view.params.swipeBackPage&&!app.params.material){view.attachEvents();}// Check view name to delete unwanted characters
if(view.params.name)view.params.name=view.params.name.replace(/[^a-zA-Z]/g,'');// Add view to app
app.views.push(view);if(view.main){app.mainView=view;app.views.main=view;}else if(view.params.name){app[view.params.name+'View']=view;app.views[view.params.name]=view;}// Router
view.router={load:function load(options){return app.router.load(view,options);},back:function back(options){return app.router.back(view,options);},// Shortcuts
loadPage:function loadPage(options){options=options||{};if(typeof options==='string'){var url=options;options={};if(url&&url.indexOf('#')===0&&view.params.domCache){options.pageName=url.split('#')[1];}else options.url=url;}return app.router.load(view,options);},loadContent:function loadContent(content){return app.router.load(view,{content:content});},reloadPage:function reloadPage(url){return app.router.load(view,{url:url,reload:true});},reloadContent:function reloadContent(content){return app.router.load(view,{content:content,reload:true});},reloadPreviousPage:function reloadPreviousPage(url){return app.router.load(view,{url:url,reloadPrevious:true,reload:true});},reloadPreviousContent:function reloadPreviousContent(content){return app.router.load(view,{content:content,reloadPrevious:true,reload:true});},refreshPage:function refreshPage(){var options={url:view.url,reload:true,ignoreCache:true};if(options.url&&options.url.indexOf('#')===0){if(view.params.domCache&&view.pagesCache[options.url]){options.pageName=view.pagesCache[options.url];options.url=undefined;delete options.url;}else if(view.contentCache[options.url]){options.content=view.contentCache[options.url];options.url=undefined;delete options.url;}}return app.router.load(view,options);},refreshPreviousPage:function refreshPreviousPage(){var options={url:view.history[view.history.length-2],reload:true,reloadPrevious:true,ignoreCache:true};if(options.url&&options.url.indexOf('#')===0&&view.params.domCache&&view.pagesCache[options.url]){options.pageName=view.pagesCache[options.url];options.url=undefined;delete options.url;}return app.router.load(view,options);}};// Aliases for temporary backward compatibility
view.loadPage=view.router.loadPage;view.loadContent=view.router.loadContent;view.reloadPage=view.router.reloadPage;view.reloadContent=view.router.reloadContent;view.reloadPreviousPage=view.router.reloadPreviousPage;view.reloadPreviousContent=view.router.reloadPreviousContent;view.refreshPage=view.router.refreshPage;view.refreshPreviousPage=view.router.refreshPreviousPage;view.back=view.router.back;// Bars methods
view.hideNavbar=function(animated){return app.hideNavbar(container.find('.navbar'),animated);};view.showNavbar=function(animated){return app.showNavbar(container.find('.navbar'),animated);};view.hideToolbar=function(animated){return app.hideToolbar(container.find('.toolbar'),animated);};view.showToolbar=function(animated){return app.showToolbar(container.find('.toolbar'),animated);};// Push State on load
if(app.params.pushState&&app.params.pushStateOnLoad&&view.main){var pushStateUrl;var pushStateUrlSplit=docLocation.split(pushStateSeparator)[1];if(pushStateRoot){pushStateUrl=docLocation.split(app.params.pushStateRoot+pushStateSeparator)[1];}else if(pushStateSeparator&&docLocation.indexOf(pushStateSeparator)>=0&&docLocation.indexOf(pushStateSeparator+'#')<0){pushStateUrl=pushStateUrlSplit;}var pushStateAnimatePages=app.params.pushStateNoAnimation?false:undefined;var historyState=history.state;if(pushStateUrl){if(pushStateUrl.indexOf('#')>=0&&view.params.domCache&&historyState&&historyState.pageName&&'viewIndex'in historyState){app.router.load(view,{pageName:historyState.pageName,url:historyState.url,animatePages:pushStateAnimatePages,pushState:false});}else if(pushStateUrl.indexOf('#')>=0&&view.params.domCache&&view.initialPagesUrl.indexOf(pushStateUrl)>=0){app.router.load(view,{pageName:pushStateUrl.replace('#',''),animatePages:pushStateAnimatePages,pushState:false});}else app.router.load(view,{url:pushStateUrl,animatePages:pushStateAnimatePages,pushState:false});}else if(view.params.domCache&&docLocation.indexOf(pushStateSeparator+'#')>=0){if(historyState&&historyState.pageName&&'viewIndex'in historyState){app.router.load(view,{pageName:historyState.pageName,url:historyState.url,animatePages:pushStateAnimatePages,pushState:false});}else if(pushStateSeparator&&pushStateUrlSplit.indexOf('#')===0){if(view.initialPagesUrl.indexOf(pushStateUrlSplit)){app.router.load(view,{pageName:pushStateUrlSplit.replace('#',''),animatePages:pushStateAnimatePages,pushState:false});}}}}// Destroy
view.destroy=function(){view.detachEvents();if(view.main){app.mainView=null;delete app.mainView;app.views.main=null;delete app.views.main;}else if(view.params.name){app[view.params.name+'View']=null;delete app[view.params.name+'View'];app.views[view.params.name]=null;delete app.views[view.params.name];}container.removeAttr('data-page');container[0].f7View=null;delete container[0].f7View;app.views.splice(app.views.indexOf(view),1);// Delete props & methods
for(var prop in view){if(view.hasOwnProperty(prop)){view[prop]=null;delete view[prop];}}view=null;};// Plugin hook
app.pluginHook('addView',view);// Return view
return view;};app.addView=function(selector,params){return new View(selector,params);};app.getCurrentView=function(index){var popoverView=$('.popover.modal-in .view');var popupView=$('.popup.modal-in .view');var panelView=$('.panel.active .view');var appViews=$('.views');// Find active view as tab
var appView=appViews.children('.view');// Propably in tabs or split view
if(appView.length>1){if(appView.hasClass('tab')){// Tabs
appView=appViews.children('.view.active');}else{// Split View, leave appView intact
}}if(popoverView.length>0&&popoverView[0].f7View)return popoverView[0].f7View;if(popupView.length>0&&popupView[0].f7View)return popupView[0].f7View;if(panelView.length>0&&panelView[0].f7View)return panelView[0].f7View;if(appView.length>0){if(appView.length===1&&appView[0].f7View)return appView[0].f7View;if(appView.length>1){var currentViews=[];for(var i=0;i<appView.length;i++){if(appView[i].f7View)currentViews.push(appView[i].f7View);}if(currentViews.length>0&&typeof index!=='undefined')return currentViews[index];if(currentViews.length>1)return currentViews;if(currentViews.length===1)return currentViews[0];return undefined;}}return undefined;};/*======================================================
        ************   Navbars && Toolbars   ************
        ======================================================*/// On Navbar Init Callback
app.navbarInitCallback=function(view,pageContainer,navbarContainer,navbarInnerContainer){if(!navbarContainer&&navbarInnerContainer)navbarContainer=$(navbarInnerContainer).parent('.navbar')[0];if(!navbarInnerContainer||navbarInnerContainer.f7NavbarInitialized&&view&&!view.params.domCache)return;var navbarData={container:navbarContainer,innerContainer:navbarInnerContainer};var pageData=pageContainer&&pageContainer.f7PageData;var eventData={page:pageData,navbar:navbarData};if(navbarInnerContainer.f7NavbarInitialized&&(view&&view.params.domCache||!view&&$(navbarContainer).parents('.popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal').length>0)){// Reinit Navbar
app.reinitNavbar(navbarContainer,navbarInnerContainer);// Plugin hook
app.pluginHook('navbarReinit',eventData);// Event
$(navbarInnerContainer).trigger('navbarReinit navbar:reinit',eventData);return;}navbarInnerContainer.f7NavbarInitialized=true;// Before Init
app.pluginHook('navbarBeforeInit',navbarData,pageData);$(navbarInnerContainer).trigger('navbarBeforeInit navbar:beforeinit',eventData);// Initialize Navbar
app.initNavbar(navbarContainer,navbarInnerContainer);// On init
app.pluginHook('navbarInit',navbarData,pageData);$(navbarInnerContainer).trigger('navbarInit navbar:init',eventData);};// Navbar Remove Callback
app.navbarRemoveCallback=function(view,pageContainer,navbarContainer,navbarInnerContainer){if(!navbarContainer&&navbarInnerContainer)navbarContainer=$(navbarInnerContainer).parent('.navbar')[0];var navbarData={container:navbarContainer,innerContainer:navbarInnerContainer};var pageData;if(pageContainer){pageData=pageContainer.f7PageData;}var eventData={page:pageData,navbar:navbarData};app.pluginHook('navbarBeforeRemove',navbarData,pageData);$(navbarInnerContainer).trigger('navbarBeforeRemove navbar:beforeremove',eventData);navbarData=null;pageData=null;};app.initNavbar=function(navbarContainer,navbarInnerContainer){// Init Subnavbar Searchbar
if(app.initSearchbar)app.initSearchbar(navbarInnerContainer);};app.reinitNavbar=function(navbarContainer,navbarInnerContainer){// Re init navbar methods
};app.initNavbarWithCallback=function(navbarContainer){navbarContainer=$(navbarContainer);var viewContainer=navbarContainer.parents('.'+app.params.viewClass);var view;if(viewContainer.length===0)return;if(navbarContainer.parents('.navbar-through').length===0&&viewContainer.find('.navbar-through').length===0)return;view=viewContainer[0].f7View||undefined;navbarContainer.find('.navbar-inner').each(function(){var navbarInnerContainer=this;var pageContainer;if($(navbarInnerContainer).attr('data-page')){// For dom cache
pageContainer=viewContainer.find('.page[data-page="'+$(navbarInnerContainer).attr('data-page')+'"]')[0];}if(!pageContainer){var pages=viewContainer.find('.page');if(pages.length===1){pageContainer=pages[0];}else{viewContainer.find('.page').each(function(){if(this.f7PageData&&this.f7PageData.navbarInnerContainer===navbarInnerContainer){pageContainer=this;}});}}app.navbarInitCallback(view,pageContainer,navbarContainer[0],navbarInnerContainer);});};// Size Navbars
app.sizeNavbars=function(viewContainer){if(app.params.material)return;var navbarInner=viewContainer?$(viewContainer).find('.navbar .navbar-inner:not(.cached)'):$('.navbar .navbar-inner:not(.cached)');navbarInner.each(function(){var n=$(this);if(n.hasClass('cached'))return;var left=app.rtl?n.find('.right'):n.find('.left'),right=app.rtl?n.find('.left'):n.find('.right'),center=n.find('.center'),subnavbar=n.find('.subnavbar'),noLeft=left.length===0,noRight=right.length===0,leftWidth=noLeft?0:left.outerWidth(true),rightWidth=noRight?0:right.outerWidth(true),centerWidth=center.outerWidth(true),navbarStyles=n.styles(),navbarWidth=n[0].offsetWidth-parseInt(navbarStyles.paddingLeft,10)-parseInt(navbarStyles.paddingRight,10),onLeft=n.hasClass('navbar-on-left'),currLeft,diff;if(noRight){currLeft=navbarWidth-centerWidth;}if(noLeft){currLeft=0;}if(!noLeft&&!noRight){currLeft=(navbarWidth-rightWidth-centerWidth+leftWidth)/2;}var requiredLeft=(navbarWidth-centerWidth)/2;if(navbarWidth-leftWidth-rightWidth>centerWidth){if(requiredLeft<leftWidth){requiredLeft=leftWidth;}if(requiredLeft+centerWidth>navbarWidth-rightWidth){requiredLeft=navbarWidth-rightWidth-centerWidth;}diff=requiredLeft-currLeft;}else{diff=0;}// RTL inverter
var inverter=app.rtl?-1:1;if(center.hasClass('sliding')){center[0].f7NavbarLeftOffset=-(currLeft+diff)*inverter;center[0].f7NavbarRightOffset=(navbarWidth-currLeft-diff-centerWidth)*inverter;if(onLeft){if(app.params.animateNavBackIcon){var activeNavbarBackLink=n.parent().find('.navbar-on-center').find('.left.sliding .back .icon ~ span');if(activeNavbarBackLink.length>0){center[0].f7NavbarLeftOffset+=activeNavbarBackLink[0].offsetLeft;}}center.transform('translate3d('+center[0].f7NavbarLeftOffset+'px, 0, 0)');}}if(!noLeft&&left.hasClass('sliding')){if(app.rtl){left[0].f7NavbarLeftOffset=-(navbarWidth-left[0].offsetWidth)/2*inverter;left[0].f7NavbarRightOffset=leftWidth*inverter;}else{left[0].f7NavbarLeftOffset=-leftWidth;left[0].f7NavbarRightOffset=(navbarWidth-left[0].offsetWidth)/2;if(app.params.animateNavBackIcon&&left.find('.back .icon').length>0){left[0].f7NavbarRightOffset-=left.find('.back .icon')[0].offsetWidth;}}if(onLeft)left.transform('translate3d('+left[0].f7NavbarLeftOffset+'px, 0, 0)');}if(!noRight&&right.hasClass('sliding')){if(app.rtl){right[0].f7NavbarLeftOffset=-rightWidth*inverter;right[0].f7NavbarRightOffset=(navbarWidth-right[0].offsetWidth)/2*inverter;}else{right[0].f7NavbarLeftOffset=-(navbarWidth-right[0].offsetWidth)/2;right[0].f7NavbarRightOffset=rightWidth;}if(onLeft)right.transform('translate3d('+right[0].f7NavbarLeftOffset+'px, 0, 0)');}if(subnavbar.length&&subnavbar.hasClass('sliding')){subnavbar[0].f7NavbarLeftOffset=app.rtl?subnavbar[0].offsetWidth:-subnavbar[0].offsetWidth;subnavbar[0].f7NavbarRightOffset=-subnavbar[0].f7NavbarLeftOffset;}// Center left
var centerLeft=diff;if(app.rtl&&noLeft&&noRight&&center.length>0)centerLeft=-centerLeft;center.css({left:centerLeft+'px'});});};// Hide/Show Navbars/Toolbars
app.hideNavbar=function(navbarContainer,animated){if(typeof animated==='undefined')animated=true;$(navbarContainer).addClass('navbar-hidden'+(!animated?' not-animated':''));return true;};app.showNavbar=function(navbarContainer,animated){if(typeof animated==='undefined')animated=true;var navbar=$(navbarContainer);if(animated){navbar.removeClass('not-animated');navbar.addClass('navbar-hiding').removeClass('navbar-hidden').transitionEnd(function(){navbar.removeClass('navbar-hiding');});}else{navbar.removeClass('navbar-hidden navbar-hiding not-animated');}return true;};app.hideToolbar=function(toolbarContainer,animated){if(typeof animated==='undefined')animated=true;$(toolbarContainer).addClass('toolbar-hidden'+(!animated?' not-animated':''));return true;};app.showToolbar=function(toolbarContainer,animated){if(typeof animated==='undefined')animated=true;var toolbar=$(toolbarContainer);if(animated){toolbar.removeClass('not-animated');toolbar.addClass('toolbar-hiding').removeClass('toolbar-hidden').transitionEnd(function(){toolbar.removeClass('toolbar-hiding'+(!animated?' not-animated':''));});}else{toolbar.removeClass('toolbar-hidden toolbar-hiding not-animated');}};/*======================================================
        ************   Searchbar   ************
        ======================================================*/var Searchbar=function Searchbar(container,params){var defaults={input:null,clearButton:null,cancelButton:null,searchList:null,searchIn:'.item-title',searchBy:'',found:null,notFound:null,overlay:null,ignore:'.searchbar-ignore',customSearch:false,removeDiacritics:false,hideDividers:true,hideGroups:true/* Callbacks
                onSearch
                onEnable
                onDisable
                onClear
                */};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'||params[def]===null&&defaults.hasOwnProperty(def)){params[def]=defaults[def];}}// Instance
var s=this;// Material
s.material=app.params.material;// Params
s.params=params;// Container
container=$(container);s.container=container;// Active
s.active=false;// Input
s.input=s.params.input?$(s.params.input):s.container.find('input[type="search"]');s.clearButton=s.params.clearButton?$(s.params.clearButton):s.container.find('.searchbar-clear');s.cancelButton=s.params.cancelButton?$(s.params.cancelButton):s.container.find('.searchbar-cancel');// Search List
s.searchList=$(s.params.searchList);// Is Virtual List
s.isVirtualList=s.searchList.hasClass('virtual-list');// Is In Page
s.pageContainer=s.container.parents('.page').eq(0);// Overlay
if(!s.params.overlay){s.overlay=s.pageContainer.length>0?s.pageContainer.find('.searchbar-overlay'):$('.searchbar-overlay');}else{s.overlay=$(s.params.overlay);}// Found and not found
if(!s.params.found){s.found=s.pageContainer.length>0?s.pageContainer.find('.searchbar-found'):$('.searchbar-found');}else{s.found=$(s.params.found);}if(!s.params.notFound){s.notFound=s.pageContainer.length>0?s.pageContainer.find('.searchbar-not-found'):$('.searchbar-not-found');}else{s.notFound=$(s.params.notFound);}// Set Cancel button
var cancelMarginProp=app.rtl?'margin-left':'margin-right';var cancelButtonHasMargin=false;s.setCancelButtonMargin=function(){s.cancelButton.transition(0).show();s.cancelButton.css(cancelMarginProp,-s.cancelButton[0].offsetWidth+'px');var clientLeft=s.cancelButton[0].clientLeft;s.cancelButton.transition('');cancelButtonHasMargin=true;};// Trigger
s.triggerEvent=function(eventName,callbackName,eventData){s.container.trigger(eventName,eventData);if(s.searchList.length>0)s.searchList.trigger(eventName,eventData);if(callbackName&&s.params[callbackName])s.params[callbackName](s,eventData);};// Enable/disalbe
s.enable=function(e){function _enable(){if((s.searchList.length||s.params.customSearch)&&!s.container.hasClass('searchbar-active')&&!s.query)s.overlay.addClass('searchbar-overlay-active');s.container.addClass('searchbar-active');if(s.cancelButton.length>0&&!s.material){if(!cancelButtonHasMargin){s.setCancelButtonMargin();}s.cancelButton.css(cancelMarginProp,'0px');}s.triggerEvent('enableSearch searchbar:enable','onEnable');s.active=true;}if(app.device.ios&&!app.params.material&&e&&e.type==='focus'){setTimeout(function(){_enable();},400);}else{_enable();}};s.disable=function(){s.input.val('').trigger('change');s.container.removeClass('searchbar-active searchbar-not-empty');if(s.cancelButton.length>0&&!s.material)s.cancelButton.css(cancelMarginProp,-s.cancelButton[0].offsetWidth+'px');if(s.searchList.length||s.params.customSearch)s.overlay.removeClass('searchbar-overlay-active');s.active=false;function _disable(){s.input.blur();}if(app.device.ios){setTimeout(function(){_disable();},400);}else{_disable();}s.triggerEvent('disableSearch searchbar:disable','onDisable');};// Clear
s.clear=function(e){if(!s.query&&e&&$(e.target).hasClass('searchbar-clear')){s.disable();return;}var previousQuery=s.value;s.input.val('').trigger('change').focus();s.triggerEvent('clearSearch searchbar:clear','onClear',{previousQuery:previousQuery});};// Search
s.handleInput=function(){setTimeout(function(){var value=s.input.val().trim();if((s.searchList.length>0||s.params.customSearch)&&(s.params.searchIn||s.isVirtualList))s.search(value,true);},0);};var previousQuery='';var virtualList;s.search=function(query,internal){if(previousQuery&&query.trim()===previousQuery)return;previousQuery=query.trim();if(!internal){if(!s.active){s.enable();}s.input.val(query);}s.query=s.value=query;// Add active/inactive classes on overlay
if(query.length===0){s.container.removeClass('searchbar-not-empty');if(s.searchList.length&&s.container.hasClass('searchbar-active'))s.overlay.addClass('searchbar-overlay-active');}else{s.container.addClass('searchbar-not-empty');if(s.searchList.length&&s.container.hasClass('searchbar-active'))s.overlay.removeClass('searchbar-overlay-active');}if(s.params.customSearch){s.triggerEvent('search searchbar:search','onSearch',{query:query});return;}var foundItems=[],_vlQuery;if(s.isVirtualList){virtualList=s.searchList[0].f7VirtualList;if(query.trim()===''){virtualList.resetFilter();s.notFound.hide();s.found.show();return;}_vlQuery=s.params.removeDiacritics?$.removeDiacritics(query):query;if(virtualList.params.searchAll){foundItems=virtualList.params.searchAll(_vlQuery,virtualList.items)||[];}else if(virtualList.params.searchByItem){for(var i=0;i<virtualList.items.length;i++){if(virtualList.params.searchByItem(_vlQuery,i,virtualList.params.items[i])){foundItems.push(i);}}}}else{var values;if(s.params.removeDiacritics)values=$.removeDiacritics(query.trim().toLowerCase()).split(' ');else{values=query.trim().toLowerCase().split(' ');}s.searchList.find('li').removeClass('hidden-by-searchbar').each(function(index,el){el=$(el);var compareWithText=[];el.find(s.params.searchIn).each(function(){var itemText=$(this).text().trim().toLowerCase();if(s.params.removeDiacritics)itemText=$.removeDiacritics(itemText);compareWithText.push(itemText);});compareWithText=compareWithText.join(' ');var wordsMatch=0;for(var i=0;i<values.length;i++){if(compareWithText.indexOf(values[i])>=0)wordsMatch++;}if(wordsMatch!==values.length&&!(s.params.ignore&&el.is(s.params.ignore))){el.addClass('hidden-by-searchbar');}else{foundItems.push(el[0]);}});if(s.params.hideDividers){s.searchList.find('.item-divider, .list-group-title').each(function(){var title=$(this);var nextElements=title.nextAll('li');var hide=true;for(var i=0;i<nextElements.length;i++){var nextEl=$(nextElements[i]);if(nextEl.hasClass('list-group-title')||nextEl.hasClass('item-divider'))break;if(!nextEl.hasClass('hidden-by-searchbar')){hide=false;}}var ignore=s.params.ignore&&title.is(s.params.ignore);if(hide&&!ignore)title.addClass('hidden-by-searchbar');else title.removeClass('hidden-by-searchbar');});}if(s.params.hideGroups){s.searchList.find('.list-group').each(function(){var group=$(this);var ignore=s.params.ignore&&group.is(s.params.ignore);var notHidden=group.find('li:not(.hidden-by-searchbar)');if(notHidden.length===0&&!ignore){group.addClass('hidden-by-searchbar');}else{group.removeClass('hidden-by-searchbar');}});}}s.triggerEvent('search searchbar:search','onSearch',{query:query,foundItems:foundItems});if(foundItems.length===0){s.notFound.show();s.found.hide();}else{s.notFound.hide();s.found.show();}if(s.isVirtualList){virtualList.filterItems(foundItems);}};// Events
function preventSubmit(e){e.preventDefault();}s.attachEvents=function(destroy){var method=destroy?'off':'on';s.container[method]('submit',preventSubmit);if(!s.material)s.cancelButton[method]('click',s.disable);s.overlay[method]('click',s.disable);s.input[method]('focus',s.enable);s.input[method]('change keydown keypress keyup compositionend',s.handleInput);s.clearButton[method]('click',s.clear);};s.detachEvents=function(){s.attachEvents(true);};// Init Destroy
s.init=function(){s.attachEvents();};s.destroy=function(){if(!s)return;s.detachEvents();s=null;};// Init
s.init();s.container[0].f7Searchbar=s;return s;};app.searchbar=function(container,params){return new Searchbar(container,params);};app.initSearchbar=function(container){container=$(container);var searchbar=container.hasClass('searchbar')?container:container.find('.searchbar');if(searchbar.length===0)return;if(!searchbar.hasClass('searchbar-init'))return;var sb=app.searchbar(searchbar,searchbar.dataset());function onBeforeRemove(){if(sb)sb.destroy();}if(container.hasClass('page')){container.once('pageBeforeRemove',onBeforeRemove);}else if(container.hasClass('navbar-inner')){container.once('navbarBeforeRemove',onBeforeRemove);}};/*======================================================
        ************   Messagebar   ************
        ======================================================*/var Messagebar=function Messagebar(container,params){var defaults={textarea:null,maxHeight:null};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'||params[def]===null){params[def]=defaults[def];}}// Instance
var m=this;// Params
m.params=params;// Container
m.container=$(container);if(m.container.length===0)return;// Textarea
m.textarea=m.params.textarea?$(m.params.textarea):m.container.find('textarea');// Is In Page
m.pageContainer=m.container.parents('.page').eq(0);m.pageContent=m.pageContainer.find('.page-content');// Initial Sizes
m.pageContentPadding=parseInt(m.pageContent.css('padding-bottom'));m.initialBarHeight=m.container[0].offsetHeight;m.initialAreaHeight=m.textarea[0].offsetHeight;// Resize textarea
m.sizeTextarea=function(){// Reset
m.textarea.css({'height':''});var height=m.textarea[0].offsetHeight;var diff=height-m.textarea[0].clientHeight;var scrollHeight=m.textarea[0].scrollHeight;// Update
if(scrollHeight+diff>height){var newAreaHeight=scrollHeight+diff;var newBarHeight=m.initialBarHeight+(newAreaHeight-m.initialAreaHeight);var maxBarHeight=m.params.maxHeight||m.container.parents('.view')[0].offsetHeight-88;if(newBarHeight>maxBarHeight){newBarHeight=parseInt(maxBarHeight,10);newAreaHeight=newBarHeight-m.initialBarHeight+m.initialAreaHeight;}m.textarea.css('height',newAreaHeight+'px');m.container.css('height',newBarHeight+'px');var onBottom=m.pageContent[0].scrollTop===m.pageContent[0].scrollHeight-m.pageContent[0].offsetHeight;if(m.pageContent.length>0){m.pageContent.css('padding-bottom',newBarHeight+'px');if(m.pageContent.find('.messages-new-first').length===0&&onBottom){m.pageContent.scrollTop(m.pageContent[0].scrollHeight-m.pageContent[0].offsetHeight);}}}else{if(m.pageContent.length>0){m.container.css({'height':'','bottom':''});m.pageContent.css({'padding-bottom':''});}}};// Clear
m.clear=function(){m.textarea.val('').trigger('change');};m.value=function(value){if(typeof value==='undefined')return m.textarea.val();else m.textarea.val(value).trigger('change');};// Handle textarea
m.textareaTimeout=undefined;m.handleTextarea=function(e){clearTimeout(m.textareaTimeout);m.textareaTimeout=setTimeout(function(){m.sizeTextarea();},0);};//Events
function preventSubmit(e){e.preventDefault();}m.attachEvents=function(destroy){var method=destroy?'off':'on';m.container[method]('submit',preventSubmit);m.textarea[method]('change keydown keypress keyup paste cut',m.handleTextarea);};m.detachEvents=function(){m.attachEvents(true);};// Init Destroy
m.init=function(){m.attachEvents();};m.destroy=function(){m.detachEvents();m=null;};// Init
m.init();m.container[0].f7Messagebar=m;return m;};app.messagebar=function(container,params){return new Messagebar(container,params);};app.initPageMessagebar=function(pageContainer){pageContainer=$(pageContainer);var messagebar=pageContainer.hasClass('messagebar')?pageContainer:pageContainer.find('.messagebar');if(messagebar.length===0)return;if(!messagebar.hasClass('messagebar-init'))return;var mb=app.messagebar(messagebar,messagebar.dataset());// Destroy on page remove
function pageBeforeRemove(){mb.destroy();pageContainer.off('page:beforeremove',pageBeforeRemove);}if(pageContainer.hasClass('page')){pageContainer.on('page:beforeremove',pageBeforeRemove);}};/*======================================================
        ************   XHR   ************
        ======================================================*/// XHR Caching
app.cache=[];app.removeFromCache=function(url){var index=false;for(var i=0;i<app.cache.length;i++){if(app.cache[i].url===url)index=i;}if(index!==false)app.cache.splice(index,1);};// XHR
app.xhr=false;app.get=function(url,view,ignoreCache,callback){// should we ignore get params or not
var _url=url;if(app.params.cacheIgnoreGetParameters&&url.indexOf('?')>=0){_url=url.split('?')[0];}if(app.params.cache&&!ignoreCache&&url.indexOf('nocache')<0&&app.params.cacheIgnore.indexOf(_url)<0){// Check is the url cached
for(var i=0;i<app.cache.length;i++){if(app.cache[i].url===_url){// Check expiration
if(new Date().getTime()-app.cache[i].time<app.params.cacheDuration){// Load from cache
callback(app.cache[i].content);return false;}}}}app.xhr=$.ajax({url:url,method:'GET',beforeSend:app.params.onAjaxStart,complete:function complete(xhr,status){if(status!=='error'&&status!=='timeout'&&xhr.status>=200&&xhr.status<300||xhr.status===0){if(app.params.cache&&xhr.responseText!==''){app.removeFromCache(_url);app.cache.push({url:_url,time:new Date().getTime(),content:xhr.responseText});}callback(xhr.responseText,false);}else{callback(xhr.responseText,true);}if(app.params.onAjaxComplete)app.params.onAjaxComplete(xhr);},error:function error(xhr){callback(xhr.responseText,true);if(app.params.onAjaxError)app.params.onAjaxError(xhr);}});if(view)view.xhr=app.xhr;return app.xhr;};/*======================================================
        ************   Pages   ************
        ======================================================*/// Page Callbacks API
app.pageCallbacks={};app.onPage=function(callbackName,pageName,callback){if(pageName&&pageName.split(' ').length>1){var pageNames=pageName.split(' ');var returnCallbacks=[];for(var i=0;i<pageNames.length;i++){returnCallbacks.push(app.onPage(callbackName,pageNames[i],callback));}returnCallbacks.remove=function(){for(var i=0;i<returnCallbacks.length;i++){returnCallbacks[i].remove();}};returnCallbacks.trigger=function(){for(var i=0;i<returnCallbacks.length;i++){returnCallbacks[i].trigger();}};return returnCallbacks;}var callbacks=app.pageCallbacks[callbackName][pageName];if(!callbacks){callbacks=app.pageCallbacks[callbackName][pageName]=[];}app.pageCallbacks[callbackName][pageName].push(callback);return{remove:function remove(){var removeIndex;for(var i=0;i<callbacks.length;i++){if(callbacks[i].toString()===callback.toString()){removeIndex=i;}}if(typeof removeIndex!=='undefined')callbacks.splice(removeIndex,1);},trigger:callback};};//Create callbacks methods dynamically
function createPageCallback(callbackName){var capitalized=callbackName.replace(/^./,function(match){return match.toUpperCase();});app['onPage'+capitalized]=function(pageName,callback){return app.onPage(callbackName,pageName,callback);};}var pageCallbacksNames='beforeInit init reinit beforeAnimation afterAnimation back afterBack beforeRemove'.split(' ');for(var i=0;i<pageCallbacksNames.length;i++){app.pageCallbacks[pageCallbacksNames[i]]={};createPageCallback(pageCallbacksNames[i]);}app.triggerPageCallbacks=function(callbackName,pageName,pageData){var allPagesCallbacks=app.pageCallbacks[callbackName]['*'];if(allPagesCallbacks){for(var j=0;j<allPagesCallbacks.length;j++){allPagesCallbacks[j](pageData);}}var callbacks=app.pageCallbacks[callbackName][pageName];if(!callbacks||callbacks.length===0)return;for(var i=0;i<callbacks.length;i++){callbacks[i](pageData);}};// On Page Init Callback
app.pageInitCallback=function(view,params){var pageContainer=params.pageContainer;if(!pageContainer)return;if(pageContainer.f7PageInitialized&&view&&!view.params.domCache)return;var pageQuery=params.query;if(!pageQuery){if(params.url&&params.url.indexOf('?')>0){pageQuery=$.parseUrlQuery(params.url||'');}else if(pageContainer.f7PageData&&pageContainer.f7PageData.query){pageQuery=pageContainer.f7PageData.query;}else{pageQuery={};}}// Page Data
var pageData={container:pageContainer,url:params.url,query:pageQuery,name:$(pageContainer).attr('data-page'),view:view,from:params.position,context:params.context,navbarInnerContainer:params.navbarInnerContainer,fromPage:params.fromPage};if(params.fromPage&&!params.fromPage.navbarInnerContainer&&params.oldNavbarInnerContainer){params.fromPage.navbarInnerContainer=params.oldNavbarInnerContainer;}if(pageContainer.f7PageInitialized&&(view&&view.params.domCache||!view&&$(pageContainer).parents('.popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal').length>0)){// Reinit Page
app.reinitPage(pageContainer);// Callbacks
app.pluginHook('pageReinit',pageData);if(app.params.onPageReinit)app.params.onPageReinit(app,pageData);app.triggerPageCallbacks('reinit',pageData.name,pageData);$(pageData.container).trigger('pageReinit page:reinit',{page:pageData});return;}pageContainer.f7PageInitialized=true;// Store pagedata in page
pageContainer.f7PageData=pageData;// Update View's activePage
if(view&&!params.preloadOnly&&!params.reloadPrevious){// Add data-page on view
$(view.container).attr('data-page',pageData.name);// Update View active page data
view.activePage=pageData;}// Before Init Callbacks
app.pluginHook('pageBeforeInit',pageData);if(app.params.onPageBeforeInit)app.params.onPageBeforeInit(app,pageData);app.triggerPageCallbacks('beforeInit',pageData.name,pageData);$(pageData.container).trigger('pageBeforeInit page:beforeinit',{page:pageData});// Init page
app.initPage(pageContainer);// Init Callback
app.pluginHook('pageInit',pageData);if(app.params.onPageInit)app.params.onPageInit(app,pageData);app.triggerPageCallbacks('init',pageData.name,pageData);$(pageData.container).trigger('pageInit page:init',{page:pageData});};app.pageRemoveCallback=function(view,pageContainer,position){var pageContext;if(!pageContainer)return;if(pageContainer.f7PageData)pageContext=pageContainer.f7PageData.context;// Page Data
var pageData={container:pageContainer,name:$(pageContainer).attr('data-page'),view:view,url:pageContainer.f7PageData&&pageContainer.f7PageData.url,query:pageContainer.f7PageData&&pageContainer.f7PageData.query,navbarInnerContainer:pageContainer.f7PageData&&pageContainer.f7PageData.navbarInnerContainer,from:position,context:pageContext};// Before Init Callback
app.pluginHook('pageBeforeRemove',pageData);if(app.params.onPageBeforeRemove)app.params.onPageBeforeRemove(app,pageData);app.triggerPageCallbacks('beforeRemove',pageData.name,pageData);$(pageData.container).trigger('pageBeforeRemove page:beforeremove',{page:pageData});pageData=null;};app.pageBackCallback=function(callback,view,params){// Page Data
var pageContainer=params.pageContainer;var pageContext;if(!pageContainer)return;if(pageContainer.f7PageData)pageContext=pageContainer.f7PageData.context;var pageData={container:pageContainer,name:$(pageContainer).attr('data-page'),url:pageContainer.f7PageData&&pageContainer.f7PageData.url,query:pageContainer.f7PageData&&pageContainer.f7PageData.query,view:view,from:params.position,context:pageContext,navbarInnerContainer:pageContainer.f7PageData&&pageContainer.f7PageData.navbarInnerContainer,swipeBack:params.swipeBack};if(callback==='after'){app.pluginHook('pageAfterBack',pageData);if(app.params.onPageAfterBack)app.params.onPageAfterBack(app,pageData);app.triggerPageCallbacks('afterBack',pageData.name,pageData);$(pageContainer).trigger('pageAfterBack page:afterback',{page:pageData});}if(callback==='before'){app.pluginHook('pageBack',pageData);if(app.params.onPageBack)app.params.onPageBack(app,pageData);app.triggerPageCallbacks('back',pageData.name,pageData);$(pageData.container).trigger('pageBack page:back',{page:pageData});}};app.pageAnimCallback=function(callback,view,params){var pageContainer=params.pageContainer;var pageContext;if(!pageContainer)return;if(pageContainer.f7PageData)pageContext=pageContainer.f7PageData.context;var pageQuery=params.query;if(!pageQuery){if(params.url&&params.url.indexOf('?')>0){pageQuery=$.parseUrlQuery(params.url||'');}else if(pageContainer.f7PageData&&pageContainer.f7PageData.query){pageQuery=pageContainer.f7PageData.query;}else{pageQuery={};}}// Page Data
var pageData={container:pageContainer,url:params.url,query:pageQuery,name:$(pageContainer).attr('data-page'),view:view,from:params.position,context:pageContext,swipeBack:params.swipeBack,navbarInnerContainer:pageContainer.f7PageData&&pageContainer.f7PageData.navbarInnerContainer,fromPage:params.fromPage};var oldPage=params.oldPage,newPage=params.newPage;// Update page date
pageContainer.f7PageData=pageData;if(callback==='after'){app.pluginHook('pageAfterAnimation',pageData);if(app.params.onPageAfterAnimation)app.params.onPageAfterAnimation(app,pageData);app.triggerPageCallbacks('afterAnimation',pageData.name,pageData);$(pageData.container).trigger('pageAfterAnimation page:afteranimation',{page:pageData});}if(callback==='before'){// Add data-page on view
$(view.container).attr('data-page',pageData.name);// Update View's activePage
if(view)view.activePage=pageData;// Hide/show navbar dynamically
if(newPage.hasClass('no-navbar')&&!oldPage.hasClass('no-navbar')){view.hideNavbar();}if(!newPage.hasClass('no-navbar')&&(oldPage.hasClass('no-navbar')||oldPage.hasClass('no-navbar-by-scroll'))){view.showNavbar();}// Hide/show navbar toolbar
if(newPage.hasClass('no-toolbar')&&!oldPage.hasClass('no-toolbar')){view.hideToolbar();}if(!newPage.hasClass('no-toolbar')&&(oldPage.hasClass('no-toolbar')||oldPage.hasClass('no-toolbar-by-scroll'))){view.showToolbar();}// Hide/show tabbar
var tabBar;if(newPage.hasClass('no-tabbar')&&!oldPage.hasClass('no-tabbar')){tabBar=$(view.container).find('.tabbar');if(tabBar.length===0)tabBar=$(view.container).parents('.'+app.params.viewsClass).find('.tabbar');app.hideToolbar(tabBar);}if(!newPage.hasClass('no-tabbar')&&(oldPage.hasClass('no-tabbar')||oldPage.hasClass('no-tabbar-by-scroll'))){tabBar=$(view.container).find('.tabbar');if(tabBar.length===0)tabBar=$(view.container).parents('.'+app.params.viewsClass).find('.tabbar');app.showToolbar(tabBar);}oldPage.removeClass('no-navbar-by-scroll no-toolbar-by-scroll');// Callbacks
app.pluginHook('pageBeforeAnimation',pageData);if(app.params.onPageBeforeAnimation)app.params.onPageBeforeAnimation(app,pageData);app.triggerPageCallbacks('beforeAnimation',pageData.name,pageData);$(pageData.container).trigger('pageBeforeAnimation page:beforeanimation',{page:pageData});}};// Init Page Events and Manipulations
app.initPage=function(pageContainer){pageContainer=$(pageContainer);if(pageContainer.length===0)return;// Size navbars on page load
if(app.sizeNavbars)app.sizeNavbars(pageContainer.parents('.'+app.params.viewClass)[0]);// Init messages
if(app.initPageMessages)app.initPageMessages(pageContainer);// Init forms storage
if(app.initFormsStorage)app.initFormsStorage(pageContainer);// Init smart select
if(app.initSmartSelects)app.initSmartSelects(pageContainer);// Init slider
if(app.initPageSwiper)app.initPageSwiper(pageContainer);// Init pull to refres
if(app.initPullToRefresh)app.initPullToRefresh(pageContainer);// Init infinite scroll
if(app.initPageInfiniteScroll)app.initPageInfiniteScroll(pageContainer);// Init searchbar
if(app.initSearchbar)app.initSearchbar(pageContainer);// Init message bar
if(app.initPageMessagebar)app.initPageMessagebar(pageContainer);// Init scroll toolbars
if(app.initPageScrollToolbars)app.initPageScrollToolbars(pageContainer);// Init lazy images
if(app.initImagesLazyLoad)app.initImagesLazyLoad(pageContainer);// Init progress bars
if(app.initPageProgressbar)app.initPageProgressbar(pageContainer);// Init resizeable textareas
if(app.initPageResizableTextarea)app.initPageResizableTextarea(pageContainer);// Init Data Table
if(app.initPageDataTables)app.initPageDataTables(pageContainer);// Init Material Preloader
if(app.params.material&&app.initPageMaterialPreloader)app.initPageMaterialPreloader(pageContainer);// Init Material Inputs
if(app.params.material&&app.initPageMaterialInputs)app.initPageMaterialInputs(pageContainer);// Init Material Tabbar
if(app.params.material&&app.initPageMaterialTabbar)app.initPageMaterialTabbar(pageContainer);};app.reinitPage=function(pageContainer){pageContainer=$(pageContainer);if(pageContainer.length===0)return;// Size navbars on page reinit
if(app.sizeNavbars)app.sizeNavbars(pageContainer.parents('.'+app.params.viewClass)[0]);// Reinit slider
if(app.reinitPageSwiper)app.reinitPageSwiper(pageContainer);// Reinit lazy load
if(app.reinitLazyLoad)app.reinitLazyLoad(pageContainer);};app.initPageWithCallback=function(pageContainer){pageContainer=$(pageContainer);var viewContainer=pageContainer.parents('.'+app.params.viewClass);if(viewContainer.length===0)return;var view=viewContainer[0].f7View||undefined;var url=view&&view.url?view.url:undefined;if(viewContainer&&pageContainer.attr('data-page')){viewContainer.attr('data-page',pageContainer.attr('data-page'));}app.pageInitCallback(view,{pageContainer:pageContainer[0],url:url,position:'center'});};/*======================================================
        ************   Navigation / Router   ************
        ======================================================*/app.router={_remove:function _remove(el){if(app.params.routerRemoveTimeout||app.params.routerRemoveWithTimeout){setTimeout(function(){$(el).remove();},0);}else $(el).remove();},_modalsSelector:'.popup, .modal, .popover, .actions-modal, .picker-modal, .login-screen',// Temporary DOM Element
temporaryDom:document.createElement('div'),// Find page or navbar in passed container which are related to View
findElement:function findElement(selector,container,view,notCached){container=$(container);if(notCached)selector=selector+':not(.cached)';var found=container.find(selector).filter(function(index,el){return $(el).parents(app.router._modalsSelector).length===0;});if(found.length>1){if(typeof view.selector==='string'){// Search in related view
found=container.find(view.selector+' '+selector);}if(found.length>1){// Search in main view
found=container.find('.'+app.params.viewMainClass+' '+selector);}}if(found.length===1)return found;else{// Try to find non cached
if(!notCached)found=app.router.findElement(selector,container,view,true);if(found&&found.length===1)return found;if(found&&found.length>1)return $(found[0]);else return undefined;}},// Set pages classes for animationEnd
animatePages:function animatePages(leftPage,rightPage,direction){// Loading new page
var removeClasses='page-on-center page-on-right page-on-left';if(direction==='to-left'){leftPage.removeClass(removeClasses).addClass('page-from-center-to-left');rightPage.removeClass(removeClasses).addClass('page-from-right-to-center');}// Go back
if(direction==='to-right'){leftPage.removeClass(removeClasses).addClass('page-from-left-to-center');rightPage.removeClass(removeClasses).addClass('page-from-center-to-right');}},// Prepare navbar before animarion
prepareNavbar:function prepareNavbar(newNavbarInner,oldNavbarInner,newNavbarPosition){$(newNavbarInner).find('.sliding').each(function(){var sliding=$(this);var slidingOffset=newNavbarPosition==='right'?this.f7NavbarRightOffset:this.f7NavbarLeftOffset;if(app.params.animateNavBackIcon){if(sliding.hasClass('left')&&sliding.find('.back .icon').length>0){sliding.find('.back .icon').transform('translate3d('+-slidingOffset+'px,0,0)');}}sliding.transform('translate3d('+slidingOffset+'px,0,0)');});},// Set navbars classes for animation
animateNavbars:function animateNavbars(leftNavbarInner,rightNavbarInner,direction){// Loading new page
var removeClasses='navbar-on-right navbar-on-center navbar-on-left';if(direction==='to-left'){rightNavbarInner.removeClass(removeClasses).addClass('navbar-from-right-to-center');rightNavbarInner.find('.sliding').each(function(){var sliding=$(this);sliding.transform('translate3d(0px,0,0)');if(app.params.animateNavBackIcon){if(sliding.hasClass('left')&&sliding.find('.back .icon').length>0){sliding.find('.back .icon').transform('translate3d(0px,0,0)');}}});leftNavbarInner.removeClass(removeClasses).addClass('navbar-from-center-to-left');leftNavbarInner.find('.sliding').each(function(){var sliding=$(this);var rightText;if(app.params.animateNavBackIcon){if(sliding.hasClass('center')&&rightNavbarInner.find('.sliding.left .back .icon').length>0){rightText=rightNavbarInner.find('.sliding.left .back span');if(rightText.length>0)this.f7NavbarLeftOffset+=rightText[0].offsetLeft;}if(sliding.hasClass('left')&&sliding.find('.back .icon').length>0){sliding.find('.back .icon').transform('translate3d('+-this.f7NavbarLeftOffset+'px,0,0)');}}sliding.transform('translate3d('+this.f7NavbarLeftOffset+'px,0,0)');});}// Go back
if(direction==='to-right'){leftNavbarInner.removeClass(removeClasses).addClass('navbar-from-left-to-center');leftNavbarInner.find('.sliding').each(function(){var sliding=$(this);sliding.transform('translate3d(0px,0,0)');if(app.params.animateNavBackIcon){if(sliding.hasClass('left')&&sliding.find('.back .icon').length>0){sliding.find('.back .icon').transform('translate3d(0px,0,0)');}}});rightNavbarInner.removeClass(removeClasses).addClass('navbar-from-center-to-right');rightNavbarInner.find('.sliding').each(function(){var sliding=$(this);if(app.params.animateNavBackIcon){if(sliding.hasClass('left')&&sliding.find('.back .icon').length>0){sliding.find('.back .icon').transform('translate3d('+-this.f7NavbarRightOffset+'px,0,0)');}}sliding.transform('translate3d('+this.f7NavbarRightOffset+'px,0,0)');});}},preprocess:function preprocess(view,content,url,next){// Plugin hook
app.pluginHook('routerPreprocess',view,content,url,next);// Preprocess by plugin
content=app.pluginProcess('preprocess',content);if(view&&view.params&&view.params.preprocess){content=view.params.preprocess(content,url,next);if(typeof content!=='undefined'){next(content);}}else if(app.params.preprocess){content=app.params.preprocess(content,url,next);if(typeof content!=='undefined'){next(content);}}else{next(content);}},preroute:function preroute(view,options,isBack){if(isBack)options.isBack=true;app.pluginHook('routerPreroute',view,options);if(app.params.preroute&&app.params.preroute(view,options)===false||view&&view.params.preroute&&view.params.preroute(view,options)===false){return true;}else{return false;}},template7Render:function template7Render(view,options){var url=options.url,content=options.content,//initial content
t7_rendered_content=options.content,// will be rendered using Template7
context=options.context,// Context data for Template7
contextName=options.contextName,template=options.template;// Template 7 compiled template
var t7_ctx,t7_template;if(typeof content==='string'){if(url){if(app.template7Cache[url]&&!options.ignoreCache)t7_template=t7.cache[url];else{t7_template=t7.compile(content);t7.cache[url]=t7_template;}}else t7_template=t7.compile(content);}else if(template){t7_template=template;}if(context){t7_ctx=context;if(context&&url){view.contextCache[url]=context;}}else{if(contextName){if(contextName.indexOf('.')>=0){var _ctx_path=contextName.split('.');var _ctx=t7.data[_ctx_path[0]];for(var i=1;i<_ctx_path.length;i++){if(_ctx_path[i])_ctx=_ctx[_ctx_path[i]];}t7_ctx=_ctx;}else t7_ctx=t7.data[contextName];}if(!t7_ctx&&url){t7_ctx=t7.data['url:'+url];}if(!t7_ctx&&typeof content==='string'&&!template){//try to find by page name in content
var pageNameMatch=content.match(/(data-page=["'][^"^']*["'])/);if(pageNameMatch){var page=pageNameMatch[0].split('data-page=')[1].replace(/['"]/g,'');if(page)t7_ctx=t7.data['page:'+page];}}if(!t7_ctx&&template&&t7.templates){// Try to find matched template name in t7.templates
for(var templateName in t7.templates){if(t7.templates[templateName]===template)t7_ctx=t7.data[templateName];}}if(!t7_ctx&&url&&url in view.contextCache){t7_ctx=view.contextCache[url];}if(!t7_ctx){t7_ctx={};}}if(t7_template&&t7_ctx){if(typeof t7_ctx==='function')t7_ctx=t7_ctx();if(url){// Extend data with URL query
var query=$.parseUrlQuery(url);t7_ctx.url_query={};for(var key in query){t7_ctx.url_query[key]=query[key];}}try{t7_rendered_content=t7_template(t7_ctx);}catch(e){t7_rendered_content='';if(window.console&&window.console.error){console.error(e);}}}return{content:t7_rendered_content,context:t7_ctx};}};app.router._load=function(view,options){// Plugin hook
app.pluginHook('routerLoad',view,options);var url=options.url,content=options.content,//initial content
t7_rendered={content:options.content},template=options.template,// Template 7 compiled template
pageName=options.pageName,viewContainer=$(view.container),pagesContainer=$(view.pagesContainer),animatePages=options.animatePages,newPage,oldPage,pagesInView,i,oldNavbarInner,newNavbarInner,navbar,dynamicNavbar,reloadPosition,isDynamicPage=typeof url==='undefined'&&content||template,pushState=options.pushState,pageElement=options.pageElement;if(typeof animatePages==='undefined')animatePages=view.params.animatePages;// Render with Template7
if(app.params.template7Pages&&typeof content==='string'||template){t7_rendered=app.router.template7Render(view,options);if(t7_rendered.content&&!content){content=t7_rendered.content;}}app.router.temporaryDom.innerHTML='';// Parse DOM
if(!pageName&&!pageElement){if(typeof content==='string'||url&&typeof content==='string'){app.router.temporaryDom.innerHTML=t7_rendered.content;}else{if('length'in content&&content.length>1){for(var ci=0;ci<content.length;ci++){$(app.router.temporaryDom).append(content[ci]);}}else{$(app.router.temporaryDom).append(content);}}}// Reload position
reloadPosition=options.reload&&(options.reloadPrevious?'left':'center');// Find new page
if(pageName)newPage=pagesContainer.find('.page[data-page="'+pageName+'"]');else{if(pageElement)newPage=$(pageElement);else newPage=app.router.findElement('.page',app.router.temporaryDom,view);}// If page not found exit
if(!newPage||newPage.length===0||pageName&&view.activePage&&view.activePage.name===pageName){view.allowPageChange=true;return;}newPage.addClass(options.reload?'page-on-'+reloadPosition:'page-on-right');// Find old page (should be the last one) and remove older pages
pagesInView=pagesContainer.children('.page:not(.cached)');if(pageElement){pagesInView=pagesInView.filter(function(index,page){if(page!==pageElement)return page;});}if(options.reload&&options.reloadPrevious&&pagesInView.length===1){view.allowPageChange=true;return;}if(options.reload){oldPage=pagesInView.eq(pagesInView.length-1);}else{if(pagesInView.length>1){for(i=0;i<pagesInView.length-2;i++){if(!view.params.domCache){app.pageRemoveCallback(view,pagesInView[i],'left');app.router._remove(pagesInView[i]);}else{$(pagesInView[i]).addClass('cached');}}if(!view.params.domCache){app.pageRemoveCallback(view,pagesInView[i],'left');app.router._remove(pagesInView[i]);}else{$(pagesInView[i]).addClass('cached');}}oldPage=pagesContainer.children('.page:not(.cached)');}if(pageElement&&oldPage.length>1){oldPage=oldPage.filter(function(index,page){if(page!==pageElement)return page;});}if(view.params.domCache||pageElement)newPage.removeClass('cached');// Dynamic navbar
if(view.params.dynamicNavbar){dynamicNavbar=true;// Find navbar
if(pageName){newNavbarInner=viewContainer.find('.navbar-inner[data-page="'+pageName+'"]');}else{newNavbarInner=app.router.findElement('.navbar-inner',app.router.temporaryDom,view);}if(!newNavbarInner||newNavbarInner.length===0){// Look in page
newNavbarInner=newPage.find('.navbar-inner');if(!newNavbarInner||newNavbarInner.length===0){// Set false
dynamicNavbar=false;}else{if(newNavbarInner.parent('.navbar').length>0){newNavbarInner.prependTo(newPage);}}}if(dynamicNavbar&&newPage.find('.navbar').length>0){app.router._remove(newPage.find('.navbar').filter(function(index,el){return $(el).parents(app.router._modalsSelector).length===0;}));}navbar=viewContainer.children('.navbar');if(options.reload){oldNavbarInner=navbar.find('.navbar-inner:not(.cached):last-child');}else{oldNavbarInner=navbar.find('.navbar-inner:not(.cached)');if(oldNavbarInner.length>0){for(i=0;i<oldNavbarInner.length-1;i++){if(!view.params.domCache){app.navbarRemoveCallback(view,pagesInView[i],navbar[0],oldNavbarInner[i]);app.router._remove(oldNavbarInner[i]);}else $(oldNavbarInner[i]).addClass('cached');}if(!newNavbarInner&&oldNavbarInner.length===1){if(!view.params.domCache){app.navbarRemoveCallback(view,pagesInView[0],navbar[0],oldNavbarInner[0]);app.router._remove(oldNavbarInner[0]);}else $(oldNavbarInner[0]).addClass('cached');}oldNavbarInner=navbar.find('.navbar-inner:not(.cached)');}}}if(dynamicNavbar){newNavbarInner.addClass(options.reload?'navbar-on-'+reloadPosition:'navbar-on-right');if(view.params.domCache||pageElement)newNavbarInner.removeClass('cached');newPage[0].f7RelatedNavbar=newNavbarInner[0];newNavbarInner[0].f7RelatedPage=newPage[0];}// save content areas into view's cache
if(!url){var newPageName=pageName||newPage.attr('data-page');if(isDynamicPage)url='#'+app.params.dynamicPageUrl.replace(/{{name}}/g,newPageName).replace(/{{index}}/g,view.history.length-(options.reload?1:0));else url='#'+newPageName;if(!view.params.domCache){view.contentCache[url]=content;}if(view.params.domCache&&pageName){view.pagesCache[url]=pageName;}}else if(url&&pageElement){view.pageElementsCache[url]={page:newPage,navbarInner:newNavbarInner};}// Push State
if(app.params.pushState&&!options.reloadPrevious&&view.main){if(typeof pushState==='undefined')pushState=true;var pushStateRoot=app.params.pushStateRoot||'';var method=options.reload?'replaceState':'pushState';if(pushState){if(!isDynamicPage&&!pageName){history[method]({url:url,viewIndex:app.views.indexOf(view)},'',pushStateRoot+app.params.pushStateSeparator+url);}else if(isDynamicPage&&content){history[method]({content:typeof content==='string'?content:'',url:url,viewIndex:app.views.indexOf(view)},'',pushStateRoot+app.params.pushStateSeparator+url);}else if(pageName){history[method]({pageName:pageName,url:url,viewIndex:app.views.indexOf(view)},'',pushStateRoot+app.params.pushStateSeparator+url);}}}// Update View history
view.url=url;if(options.reload){var lastUrl=view.history[view.history.length-(options.reloadPrevious?2:1)];if(lastUrl&&lastUrl.indexOf('#')===0&&lastUrl in view.contentCache&&lastUrl!==url&&view.history.indexOf(lastUrl)===-1){view.contentCache[lastUrl]=null;delete view.contentCache[lastUrl];}else if(lastUrl&&lastUrl in view.pageElementsCache&&lastUrl!==url&&(view.history.indexOf(lastUrl)===-1||view.history.indexOf(lastUrl)===view.history.length-1)){view.pageElementsCache[lastUrl]=null;delete view.pageElementsCache[lastUrl];}if(lastUrl&&lastUrl in view.contextCache&&lastUrl!==url&&(view.history.indexOf(lastUrl)===-1||view.history.indexOf(lastUrl)===view.history.length-1)){view.contextCache[lastUrl]=null;delete view.contextCache[lastUrl];}view.history[view.history.length-(options.reloadPrevious?2:1)]=url;}else{view.history.push(url);}// Unique history
var historyBecameUnique=false;if(view.params.uniqueHistory){var _history=view.history;var _url=url;if(view.params.uniqueHistoryIgnoreGetParameters){_history=[];_url=url.split('?')[0];for(i=0;i<view.history.length;i++){_history.push(view.history[i].split('?')[0]);}}if(_history.indexOf(_url)!==_history.lastIndexOf(_url)){view.history=view.history.slice(0,_history.indexOf(_url));view.history.push(url);historyBecameUnique=true;}}// Dom manipulations
if(options.reloadPrevious){oldPage=oldPage.prev('.page');newPage.insertBefore(oldPage);if(dynamicNavbar){oldNavbarInner=oldNavbarInner.prev('.navbar-inner');newNavbarInner.insertAfter(oldNavbarInner);}}else{pagesContainer.append(newPage[0]);if(dynamicNavbar)navbar.append(newNavbarInner[0]);}// Remove Old Page And Navbar
if(options.reload){if(view.params.domCache&&view.initialPages.indexOf(oldPage[0])>=0){oldPage.addClass('cached');if(dynamicNavbar)oldNavbarInner.addClass('cached');}else{app.pageRemoveCallback(view,oldPage[0],reloadPosition);if(dynamicNavbar)app.navbarRemoveCallback(view,oldPage[0],navbar[0],oldNavbarInner[0]);app.router._remove(oldPage);if(dynamicNavbar)app.router._remove(oldNavbarInner);}}// Page Init Events
app.pageInitCallback(view,{pageContainer:newPage[0],url:url,position:options.reload?reloadPosition:'right',navbarInnerContainer:dynamicNavbar?newNavbarInner&&newNavbarInner[0]:undefined,oldNavbarInnerContainer:dynamicNavbar?oldNavbarInner&&oldNavbarInner[0]:undefined,context:t7_rendered.context||options.context,query:options.query,fromPage:oldPage&&oldPage.length&&oldPage[0].f7PageData,reload:options.reload,reloadPrevious:options.reloadPrevious});// Navbar init event
if(dynamicNavbar){app.navbarInitCallback(view,newPage[0],navbar[0],newNavbarInner[0],url,options.reload?reloadPosition:'right');}if(options.reload){view.allowPageChange=true;if(historyBecameUnique)view.refreshPreviousPage();return;}if(dynamicNavbar&&animatePages){app.router.prepareNavbar(newNavbarInner,oldNavbarInner,'right');}// Force reLayout
var clientLeft=newPage[0].clientLeft;// Before Anim Callback
app.pageAnimCallback('before',view,{pageContainer:newPage[0],url:url,position:'right',oldPage:oldPage,newPage:newPage,query:options.query,fromPage:oldPage&&oldPage.length&&oldPage[0].f7PageData});function afterAnimation(){view.allowPageChange=true;newPage.removeClass('page-from-right-to-center page-on-right page-on-left').addClass('page-on-center');oldPage.removeClass('page-from-center-to-left page-on-center page-on-right').addClass('page-on-left');if(dynamicNavbar){newNavbarInner.removeClass('navbar-from-right-to-center navbar-on-left navbar-on-right').addClass('navbar-on-center');oldNavbarInner.removeClass('navbar-from-center-to-left navbar-on-center navbar-on-right').addClass('navbar-on-left');}app.pageAnimCallback('after',view,{pageContainer:newPage[0],url:url,position:'right',oldPage:oldPage,newPage:newPage,query:options.query,fromPage:oldPage&&oldPage.length&&oldPage[0].f7PageData});if(app.params.pushState&&view.main)app.pushStateClearQueue();if(!(view.params.swipeBackPage||view.params.preloadPreviousPage)){if(view.params.domCache){oldPage.addClass('cached');if(dynamicNavbar)oldNavbarInner.addClass('cached');}else{if(!(url.indexOf('#')===0&&newPage.attr('data-page').indexOf('smart-select-')===0)){app.pageRemoveCallback(view,oldPage[0],'left');if(dynamicNavbar)app.navbarRemoveCallback(view,oldPage[0],navbar[0],oldNavbarInner[0]);app.router._remove(oldPage);if(dynamicNavbar)app.router._remove(oldNavbarInner);}}}if(view.params.uniqueHistory&&historyBecameUnique){view.refreshPreviousPage();}}if(animatePages){// Set pages before animation
if(app.params.material&&app.params.materialPageLoadDelay){setTimeout(function(){app.router.animatePages(oldPage,newPage,'to-left',view);},app.params.materialPageLoadDelay);}else{app.router.animatePages(oldPage,newPage,'to-left',view);}// Dynamic navbar animation
if(dynamicNavbar){setTimeout(function(){app.router.animateNavbars(oldNavbarInner,newNavbarInner,'to-left',view);},0);}newPage.animationEnd(function(){afterAnimation();});}else{if(dynamicNavbar)newNavbarInner.find('.sliding, .sliding .back .icon').transform('');afterAnimation();}};app.router.load=function(view,options){options=options||{};if(app.routerPreOptions){options=app.routerPreOptions(view,options)||{};}if(options.component&&app.componentLoader){try{app.componentLoader(view,options,function(newOptions){app.router.load(view,newOptions);});}catch(e){}return;}if(app.router.preroute(view,options)){return false;}var url=options.url;var content=options.content;var pageName=options.pageName;var pageElement=options.pageElement;if(pageName){if(pageName.indexOf('?')>0){options.query=$.parseUrlQuery(pageName);options.pageName=pageName=pageName.split('?')[0];}}var template=options.template;if(view.params.reloadPages===true)options.reload=true;if(!view.allowPageChange)return false;if(url&&view.url===url&&!options.reload&&!view.params.allowDuplicateUrls)return false;view.allowPageChange=false;if(app.xhr&&view.xhr&&view.xhr===app.xhr){app.xhr.abort();app.xhr=false;}function proceed(content){app.router.preprocess(view,content,url,function(content){options.content=content;app.router._load(view,options);});}if(content||pageName||pageElement){proceed(content);return;}else if(template){app.router._load(view,options);return;}if(!options.url||options.url==='#'){view.allowPageChange=true;return;}app.get(options.url,view,options.ignoreCache,function(content,error){if(error){view.allowPageChange=true;return;}proceed(content);});};app.router._back=function(view,options){options=options||{};app.pluginHook('routerBack',view,options);var url=options.url,content=options.content,t7_rendered={content:options.content},// will be rendered using Template7
template=options.template,// Template 7 compiled template
animatePages=options.animatePages,preloadOnly=options.preloadOnly,pushState=options.pushState,ignoreCache=options.ignoreCache,force=options.force,pageName=options.pageName,pageElement=options.pageElement;var viewContainer=$(view.container),pagesContainer=$(view.pagesContainer),pagesInView=pagesContainer.children('.page:not(.cached)'),oldPage,newPage,oldNavbarInner,newNavbarInner,navbar,navbarInners,dynamicNavbar,manipulateDom=true;if(typeof animatePages==='undefined')animatePages=view.params.animatePages;// Render with Template7
if(app.params.template7Pages&&typeof content==='string'||template){t7_rendered=app.router.template7Render(view,options);if(t7_rendered.content&&!content){content=t7_rendered.content;}}// Animation
function afterAnimation(){app.pageBackCallback('after',view,{pageContainer:oldPage[0],url:url,position:'center',oldPage:oldPage,newPage:newPage});app.pageAnimCallback('after',view,{pageContainer:newPage[0],url:url,position:'left',oldPage:oldPage,newPage:newPage,query:options.query,fromPage:oldPage&&oldPage.length&&oldPage[0].f7PageData});app.router.afterBack(view,oldPage[0],newPage[0]);}function animateBack(){// Page before animation callback
app.pageBackCallback('before',view,{pageContainer:oldPage[0],url:url,position:'center',oldPage:oldPage,newPage:newPage});app.pageAnimCallback('before',view,{pageContainer:newPage[0],url:url,position:'left',oldPage:oldPage,newPage:newPage,query:options.query,fromPage:oldPage&&oldPage.length&&oldPage[0].f7PageData});if(animatePages){// Set pages before animation
app.router.animatePages(newPage,oldPage,'to-right',view);// Dynamic navbar animation
if(dynamicNavbar){setTimeout(function(){app.router.animateNavbars(newNavbarInner,oldNavbarInner,'to-right',view);},0);}newPage.animationEnd(function(){afterAnimation();});}else{if(dynamicNavbar)newNavbarInner.find('.sliding, .sliding .back .icon').transform('');afterAnimation();}}function parseNewPage(){app.router.temporaryDom.innerHTML='';// Parse DOM
if(typeof content==='string'||url&&typeof content==='string'){app.router.temporaryDom.innerHTML=t7_rendered.content;}else{if('length'in content&&content.length>1){for(var ci=0;ci<content.length;ci++){$(app.router.temporaryDom).append(content[ci]);}}else{$(app.router.temporaryDom).append(content);}}if(pageElement)newPage=$(pageElement);else newPage=app.router.findElement('.page',app.router.temporaryDom,view);if(view.params.dynamicNavbar){// Find navbar
newNavbarInner=app.router.findElement('.navbar-inner',app.router.temporaryDom,view);}}function setPages(){// If pages not found or there are still more than one, exit
if(!newPage||newPage.length===0){view.allowPageChange=true;return;}if(view.params.dynamicNavbar&&typeof dynamicNavbar==='undefined'){if(!newNavbarInner||newNavbarInner.length===0){dynamicNavbar=false;}else{dynamicNavbar=true;}}newPage.addClass('page-on-left').removeClass('cached');if(dynamicNavbar){navbar=viewContainer.children('.navbar');navbarInners=navbar.find('.navbar-inner:not(.cached)');newNavbarInner.addClass('navbar-on-left').removeClass('cached');}// Remove/hide previous page in force mode
if(force){var pageToRemove,navbarToRemove;pageToRemove=$(pagesInView[pagesInView.length-2]);if(dynamicNavbar)navbarToRemove=$(pageToRemove[0]&&pageToRemove[0].f7RelatedNavbar||navbarInners[navbarInners.length-2]);if(view.params.domCache&&view.initialPages.indexOf(pageToRemove[0])>=0){if(pageToRemove.length&&pageToRemove[0]!==newPage[0])pageToRemove.addClass('cached');if(dynamicNavbar&&navbarToRemove.length&&navbarToRemove[0]!==newNavbarInner[0]){navbarToRemove.addClass('cached');}}else{var removeNavbar=dynamicNavbar&&navbarToRemove.length;if(pageToRemove.length){app.pageRemoveCallback(view,pageToRemove[0],'right');if(removeNavbar){app.navbarRemoveCallback(view,pageToRemove[0],navbar[0],navbarToRemove[0]);}app.router._remove(pageToRemove);if(removeNavbar)app.router._remove(navbarToRemove);}else if(removeNavbar){app.navbarRemoveCallback(view,pageToRemove[0],navbar[0],navbarToRemove[0]);app.router._remove(navbarToRemove);}}pagesInView=pagesContainer.children('.page:not(.cached)');if(dynamicNavbar){navbarInners=viewContainer.children('.navbar').find('.navbar-inner:not(.cached)');}if(view.history.indexOf(url)>=0){view.history=view.history.slice(0,view.history.indexOf(url)+2);}else{if(view.history[[view.history.length-2]]){view.history[view.history.length-2]=url;}else{view.history.unshift(url);}}}oldPage=$(pagesInView[pagesInView.length-1]);if(view.params.domCache){if(oldPage[0]===newPage[0]){oldPage=pagesContainer.children('.page.page-on-center');if(oldPage.length===0&&view.activePage)oldPage=$(view.activePage.container);}}if(dynamicNavbar&&!oldNavbarInner){oldNavbarInner=$(navbarInners[navbarInners.length-1]);if(view.params.domCache){if(oldNavbarInner[0]===newNavbarInner[0]){oldNavbarInner=navbar.children('.navbar-inner.navbar-on-center:not(.cached)');}if(oldNavbarInner.length===0){oldNavbarInner=navbar.children('.navbar-inner[data-page="'+oldPage.attr('data-page')+'"]');}}if(oldNavbarInner.length===0||newNavbarInner[0]===oldNavbarInner[0])dynamicNavbar=false;}if(dynamicNavbar){if(manipulateDom)newNavbarInner.insertBefore(oldNavbarInner);newNavbarInner[0].f7RelatedPage=newPage[0];newPage[0].f7RelatedNavbar=newNavbarInner[0];}if(manipulateDom)newPage.insertBefore(oldPage);// Page Init Events
app.pageInitCallback(view,{pageContainer:newPage[0],url:url,position:'left',navbarInnerContainer:dynamicNavbar?newNavbarInner[0]:undefined,oldNavbarInnerContainer:dynamicNavbar?oldNavbarInner&&oldNavbarInner[0]:undefined,context:t7_rendered.context,query:options.query,fromPage:oldPage&&oldPage.length&&oldPage[0].f7PageData,preloadOnly:preloadOnly});if(dynamicNavbar){app.navbarInitCallback(view,newPage[0],navbar[0],newNavbarInner[0],url,'right');}if(dynamicNavbar&&newNavbarInner.hasClass('navbar-on-left')&&animatePages){app.router.prepareNavbar(newNavbarInner,oldNavbarInner,'left');}if(preloadOnly){view.allowPageChange=true;return;}// Update View's URL
view.url=url;// Force reLayout
var clientLeft=newPage[0].clientLeft;animateBack();// Push state
if(app.params.pushState&&view.main){if(typeof pushState==='undefined')pushState=true;if(!preloadOnly&&history.state&&pushState){history.back();}}return;}// Simple go back when we have pages on left
if(pagesInView.length>1&&!force){// Exit if only preloadOnly
if(preloadOnly){view.allowPageChange=true;return;}// Update View's URL
view.url=view.history[view.history.length-2];url=view.url;// Define old and new pages
newPage=$(pagesInView[pagesInView.length-2]);oldPage=$(pagesInView[pagesInView.length-1]);// Dynamic navbar
if(view.params.dynamicNavbar){dynamicNavbar=true;// Find navbar
navbarInners=viewContainer.children('.navbar').find('.navbar-inner:not(.cached)');newNavbarInner=$(navbarInners[0]);oldNavbarInner=$(navbarInners[1]);if(newNavbarInner.length===0||oldNavbarInner.length===0||oldNavbarInner[0]===newNavbarInner[0]){dynamicNavbar=false;}}manipulateDom=false;setPages();return;}if(!force){// Go back when there is no pages on left
if(!preloadOnly){view.url=view.history[view.history.length-2];url=view.url;}if(content){parseNewPage();setPages();return;}else if(pageName){// Get dom cached pages
newPage=$(viewContainer).find('.page[data-page="'+pageName+'"]');if(view.params.dynamicNavbar){newNavbarInner=$(viewContainer).children('.navbar').find('.navbar-inner[data-page="'+pageName+'"]');if(newNavbarInner.length===0&&newPage[0].f7RelatedNavbar){newNavbarInner=$(newPage[0].f7RelatedNavbar);}if(newNavbarInner.length===0&&newPage[0].f7PageData){newNavbarInner=$(newPage[0].f7PageData.navbarInnerContainer);}}setPages();return;}else if(url&&url in view.pageElementsCache){newPage=view.pageElementsCache[url].page;newNavbarInner=view.pageElementsCache[url].navbarInner;setPages();return;}else{view.allowPageChange=true;return;}}else{if(url&&url===view.url||pageName&&view.activePage&&view.activePage.name===pageName){view.allowPageChange=true;return;}// Go back with force url
if(content){parseNewPage();setPages();return;}else if(pageName&&view.params.domCache){if(pageName)url='#'+pageName;newPage=$(viewContainer).find('.page[data-page="'+pageName+'"]');if(newPage[0].f7PageData&&newPage[0].f7PageData.url){url=newPage[0].f7PageData.url;}if(view.params.dynamicNavbar){newNavbarInner=$(viewContainer).children('.navbar').find('.navbar-inner[data-page="'+pageName+'"]');if(newNavbarInner.length===0&&newPage[0].f7RelatedNavbar){newNavbarInner=$(newPage[0].f7RelatedNavbar);}if(newNavbarInner.length===0&&newPage[0].f7PageData){newNavbarInner=$(newPage[0].f7PageData.navbarInnerContainer);}}setPages();return;}else if(pageElement&&url){newPage=$(pageElement);if(view.params.dynamicNavbar){newNavbarInner=newPage.find('.navbar-inner').filter(function(index,el){return $(el).parents(app.router._modalsSelector).length===0;});if(newNavbarInner.length>0){newPage.prepend(newNavbarInner);app.router._remove(newPage.find('.navbar').filter(function(index,el){return $(el).parents(app.router._modalsSelector).length===0;}));}}setPages();return;}else{view.allowPageChange=true;return;}}};app.router.back=function(view,options){options=options||{};if(app.routerPreOptions){options=app.routerPreOptions(view,options)||{};}if(options.component&&app.componentLoader){try{app.componentLoader(view,options,function(newOptions){app.router.load(view,newOptions);});}catch(e){}return;}if(app.router.preroute(view,options,true)){return false;}var url=options.url;var content=options.content;var pageName=options.pageName;var pageElement=options.pageElement;if(pageName){if(pageName.indexOf('?')>0){options.query=$.parseUrlQuery(pageName);options.pageName=pageName=pageName.split('?')[0];}}var force=options.force;if(!view.allowPageChange)return false;view.allowPageChange=false;if(app.xhr&&view.xhr&&view.xhr===app.xhr){app.xhr.abort();app.xhr=false;}var pagesInView=$(view.pagesContainer).find('.page:not(.cached)');function proceed(content){app.router.preprocess(view,content,url,function(content){options.content=content;app.router._back(view,options);});}if(pagesInView.length>1&&!force){// Simple go back to previos page in view
app.router._back(view,options);return;}if(!force){url=view.history[view.history.length-2]||options.url;if(!options.url)options.url=url;if(!url){view.allowPageChange=true;return;}if(url.indexOf('#')===0&&view.contentCache[url]){proceed(view.contentCache[url]);return;}else if(url.indexOf('#')===0&&view.params.domCache){if(!pageName)options.pageName=url.split('#')[1];proceed();return;}else if(url&&url in view.pageElementsCache){proceed();}else if(url.indexOf('#')!==0){// Load ajax page
app.get(options.url,view,options.ignoreCache,function(content,error){if(error){view.allowPageChange=true;return;}proceed(content);});return;}}else{// Go back with force url
if(!url&&content){proceed(content);return;}else if(!url&&pageName){if(pageName)url='#'+pageName;proceed();return;}else if(url&&pageElement){proceed();return;}else if(url){app.get(options.url,view,options.ignoreCache,function(content,error){if(error){view.allowPageChange=true;return;}proceed(content);});return;}}view.allowPageChange=true;return;};app.router.afterBack=function(view,oldPage,newPage){// Remove old page and set classes on new one
oldPage=$(oldPage);newPage=$(newPage);if(view.params.domCache&&view.initialPages.indexOf(oldPage[0])>=0){oldPage.removeClass('page-from-center-to-right').addClass('cached');}else{app.pageRemoveCallback(view,oldPage[0],'right');app.router._remove(oldPage);}newPage.removeClass('page-from-left-to-center page-on-left').addClass('page-on-center');view.allowPageChange=true;// Update View's History
var previousURL=view.history.pop();var newNavbar;// Updated dynamic navbar
if(view.params.dynamicNavbar){var inners=$(view.container).children('.navbar').find('.navbar-inner:not(.cached)');var oldNavbar=$(oldPage[0].f7RelatedNavbar||inners[1]);if(view.params.domCache&&view.initialNavbars.indexOf(oldNavbar[0])>=0){oldNavbar.removeClass('navbar-from-center-to-right').addClass('cached');}else{app.navbarRemoveCallback(view,oldPage[0],undefined,oldNavbar[0]);app.router._remove(oldNavbar);}newNavbar=$(inners[0]).removeClass('navbar-on-left navbar-from-left-to-center').addClass('navbar-on-center');}// Remove pages in dom cache
if(view.params.domCache){$(view.container).find('.page.cached').each(function(){var page=$(this);var pageUrl=page[0].f7PageData&&page[0].f7PageData.url;if(pageUrl&&view.history.indexOf(pageUrl)<0&&view.initialPages.indexOf(this)<0){app.pageRemoveCallback(view,page[0],'right');if(page[0].f7RelatedNavbar&&view.params.dynamicNavbar)app.navbarRemoveCallback(view,page[0],undefined,page[0].f7RelatedNavbar);app.router._remove(page);if(page[0].f7RelatedNavbar&&view.params.dynamicNavbar)app.router._remove(page[0].f7RelatedNavbar);}});}// Check previous page is content based only and remove it from content cache
if(!view.params.domCache&&previousURL&&previousURL.indexOf('#')>-1&&previousURL in view.contentCache&&// If the same page is in the history multiple times, don't remove it.
view.history.indexOf(previousURL)===-1){view.contentCache[previousURL]=null;delete view.contentCache[previousURL];}if(previousURL&&previousURL in view.pageElementsCache&&// If the same page is in the history multiple times, don't remove it.
view.history.indexOf(previousURL)===-1){view.pageElementsCache[previousURL]=null;delete view.pageElementsCache[previousURL];}// Check for context cache
if(previousURL&&previousURL in view.contextCache&&// If the same page is in the history multiple times, don't remove it.
view.history.indexOf(previousURL)===-1){view.contextCache[previousURL]=null;delete view.contextCache[previousURL];}if(app.params.pushState&&view.main)app.pushStateClearQueue();// Preload previous page
if(view.params.preloadPreviousPage){if(view.params.domCache&&view.history.length>1){var preloadUrl=view.history[view.history.length-2];var previousPage;var previousNavbar;if(preloadUrl&&view.pagesCache[preloadUrl]){// Load by page name
previousPage=$(view.container).find('.page[data-page="'+view.pagesCache[preloadUrl]+'"]');if(previousPage.next('.page')[0]!==newPage[0])previousPage.insertBefore(newPage);if(newNavbar){previousNavbar=$(view.container).children('.navbar').find('.navbar-inner[data-page="'+view.pagesCache[preloadUrl]+'"]');if(!previousNavbar||previousNavbar.length===0)previousNavbar=newNavbar.prev('.navbar-inner.cached');if(previousNavbar.next('.navbar-inner')[0]!==newNavbar[0])previousNavbar.insertBefore(newNavbar);}}else{// Just load previous page
previousPage=newPage.prev('.page.cached');if(newNavbar)previousNavbar=newNavbar.prev('.navbar-inner.cached');}if(previousPage&&previousPage.length>0)previousPage.removeClass('cached page-on-right page-on-center').addClass('page-on-left');if(previousNavbar&&previousNavbar.length>0)previousNavbar.removeClass('cached navbar-on-right navbar-on-center').addClass('navbar-on-left');}else{app.router.back(view,{preloadOnly:true});}}};/*======================================================
        ************   Modals   ************
        ======================================================*/var _modalTemplateTempDiv=document.createElement('div');app.modalStack=[];app.modalStackClearQueue=function(){if(app.modalStack.length){app.modalStack.shift()();}};app.modal=function(params){params=params||{};var modalHTML='';if(app.params.modalTemplate){if(!app._compiledTemplates.modal)app._compiledTemplates.modal=t7.compile(app.params.modalTemplate);modalHTML=app._compiledTemplates.modal(params);}else{var buttonsHTML='';if(params.buttons&&params.buttons.length>0){for(var i=0;i<params.buttons.length;i++){buttonsHTML+='<span class="modal-button'+(params.buttons[i].bold?' modal-button-bold':'')+'">'+params.buttons[i].text+'</span>';}}var titleHTML=params.title?'<div class="modal-title">'+params.title+'</div>':'';var textHTML=params.text?'<div class="modal-text">'+params.text+'</div>':'';var afterTextHTML=params.afterText?params.afterText:'';var noButtons=!params.buttons||params.buttons.length===0?'modal-no-buttons':'';var verticalButtons=params.verticalButtons?'modal-buttons-vertical':'';var modalButtonsHTML=params.buttons&&params.buttons.length>0?'<div class="modal-buttons modal-buttons-'+params.buttons.length+' '+verticalButtons+'">'+buttonsHTML+'</div>':'';modalHTML='<div class="modal '+noButtons+' '+(params.cssClass||'')+'"><div class="modal-inner">'+(titleHTML+textHTML+afterTextHTML)+'</div>'+modalButtonsHTML+'</div>';}_modalTemplateTempDiv.innerHTML=modalHTML;var modal=$(_modalTemplateTempDiv).children();app.root.append(modal[0]);// Add events on buttons
modal.find('.modal-button').each(function(index,el){$(el).on('click',function(e){if(params.buttons[index].close!==false)app.closeModal(modal);if(params.buttons[index].onClick)params.buttons[index].onClick(modal,e);if(params.onClick)params.onClick(modal,index);});});app.openModal(modal);return modal[0];};app.alert=function(text,title,callbackOk){if(typeof title==='function'){callbackOk=arguments[1];title=undefined;}return app.modal({text:text||'',title:typeof title==='undefined'?app.params.modalTitle:title,buttons:[{text:app.params.modalButtonOk,bold:true,onClick:callbackOk}]});};app.confirm=function(text,title,callbackOk,callbackCancel){if(typeof title==='function'){callbackCancel=arguments[2];callbackOk=arguments[1];title=undefined;}return app.modal({text:text||'',title:typeof title==='undefined'?app.params.modalTitle:title,buttons:[{text:app.params.modalButtonCancel,onClick:callbackCancel},{text:app.params.modalButtonOk,bold:true,onClick:callbackOk}]});};app.prompt=function(text,title,callbackOk,callbackCancel){if(typeof title==='function'){callbackCancel=arguments[2];callbackOk=arguments[1];title=undefined;}return app.modal({text:text||'',title:typeof title==='undefined'?app.params.modalTitle:title,afterText:'<div class="input-field"><input type="text" class="modal-text-input"></div>',buttons:[{text:app.params.modalButtonCancel},{text:app.params.modalButtonOk,bold:true}],onClick:function onClick(modal,index){if(index===0&&callbackCancel)callbackCancel($(modal).find('.modal-text-input').val());if(index===1&&callbackOk)callbackOk($(modal).find('.modal-text-input').val());}});};app.modalLogin=function(text,title,callbackOk,callbackCancel){if(typeof title==='function'){callbackCancel=arguments[2];callbackOk=arguments[1];title=undefined;}return app.modal({text:text||'',title:typeof title==='undefined'?app.params.modalTitle:title,afterText:'<div class="input-field modal-input-double"><input type="text" name="modal-username" placeholder="'+app.params.modalUsernamePlaceholder+'" class="modal-text-input"></div><div class="input-field modal-input-double"><input type="password" name="modal-password" placeholder="'+app.params.modalPasswordPlaceholder+'" class="modal-text-input"></div>',buttons:[{text:app.params.modalButtonCancel},{text:app.params.modalButtonOk,bold:true}],onClick:function onClick(modal,index){var username=$(modal).find('.modal-text-input[name="modal-username"]').val();var password=$(modal).find('.modal-text-input[name="modal-password"]').val();if(index===0&&callbackCancel)callbackCancel(username,password);if(index===1&&callbackOk)callbackOk(username,password);}});};app.modalPassword=function(text,title,callbackOk,callbackCancel){if(typeof title==='function'){callbackCancel=arguments[2];callbackOk=arguments[1];title=undefined;}return app.modal({text:text||'',title:typeof title==='undefined'?app.params.modalTitle:title,afterText:'<div class="input-field"><input type="password" name="modal-password" placeholder="'+app.params.modalPasswordPlaceholder+'" class="modal-text-input"></div>',buttons:[{text:app.params.modalButtonCancel},{text:app.params.modalButtonOk,bold:true}],onClick:function onClick(modal,index){var password=$(modal).find('.modal-text-input[name="modal-password"]').val();if(index===0&&callbackCancel)callbackCancel(password);if(index===1&&callbackOk)callbackOk(password);}});};app.showPreloader=function(title){return app.modal({title:title||app.params.modalPreloaderTitle,text:'<div class="preloader">'+(app.params.material?app.params.materialPreloaderHtml:'')+'</div>',cssClass:'modal-preloader'});};app.hidePreloader=function(){app.closeModal('.modal-preloader');};app.showIndicator=function(){if($('.preloader-indicator-overlay').length>0)return;app.root.append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white">'+(app.params.material?app.params.materialPreloaderHtml:'')+'</span></div>');};app.hideIndicator=function(){$('.preloader-indicator-overlay, .preloader-indicator-modal').remove();};// Action Sheet
app.actions=function(target,params,animated){var toPopover=false,modal,groupSelector,buttonSelector;if(arguments.length===1||arguments.length===2&&typeof arguments[1]==='boolean'){// Actions
params=arguments[0];animated=arguments[1];}else{// Popover
if(app.device.ios){if(app.device.ipad)toPopover=true;}else{if(app.width>=768)toPopover=true;}}if(typeof animated==='undefined')animated=true;params=params||[];if(params.length>0&&!Array.isArray(params[0])){params=[params];}var modalHTML;if(toPopover){var actionsToPopoverTemplate=app.params.modalActionsToPopoverTemplate||'<div class="popover actions-popover">'+'<div class="popover-inner">'+'{{#each this}}'+'<div class="list-block">'+'<ul>'+'{{#each this}}'+'{{#if label}}'+'<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>'+'{{else}}'+'<li><a href="#" class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}} {{#if disabled}}disabled{{/if}}">{{text}}</a></li>'+'{{/if}}'+'{{/each}}'+'</ul>'+'</div>'+'{{/each}}'+'</div>'+'</div>';if(!app._compiledTemplates.actionsToPopover){app._compiledTemplates.actionsToPopover=t7.compile(actionsToPopoverTemplate);}var popoverHTML=app._compiledTemplates.actionsToPopover(params);modal=$(app.popover(popoverHTML,target,true,animated));groupSelector='.list-block ul';buttonSelector='.list-button';}else{if(app.params.modalActionsTemplate){if(!app._compiledTemplates.actions)app._compiledTemplates.actions=t7.compile(app.params.modalActionsTemplate);modalHTML=app._compiledTemplates.actions(params);}else{var buttonsHTML='';for(var i=0;i<params.length;i++){for(var j=0;j<params[i].length;j++){if(j===0)buttonsHTML+='<div class="actions-modal-group">';var button=params[i][j];var buttonClass=button.label?'actions-modal-label':'actions-modal-button';if(button.bold)buttonClass+=' actions-modal-button-bold';if(button.color)buttonClass+=' color-'+button.color;if(button.bg)buttonClass+=' bg-'+button.bg;if(button.disabled)buttonClass+=' disabled';buttonsHTML+='<div class="'+buttonClass+'">'+button.text+'</div>';if(j===params[i].length-1)buttonsHTML+='</div>';}}modalHTML='<div class="actions-modal">'+buttonsHTML+'</div>';}_modalTemplateTempDiv.innerHTML=modalHTML;modal=$(_modalTemplateTempDiv).children();app.root.append(modal[0]);groupSelector='.actions-modal-group';buttonSelector='.actions-modal-button';}var groups=modal.find(groupSelector);groups.each(function(index,el){var groupIndex=index;$(el).children().each(function(index,el){var buttonIndex=index;var buttonParams=params[groupIndex][buttonIndex];var clickTarget;if(!toPopover&&$(el).is(buttonSelector))clickTarget=$(el);if(toPopover&&$(el).find(buttonSelector).length>0)clickTarget=$(el).find(buttonSelector);if(clickTarget){clickTarget.on('click',function(e){if(buttonParams.close!==false)app.closeModal(modal);if(buttonParams.onClick)buttonParams.onClick(modal,e);});}});});if(!toPopover)app.openModal(modal,animated);return modal[0];};app.popover=function(modal,target,removeOnClose,animated,closeByOutside){if(typeof removeOnClose==='undefined')removeOnClose=true;if(typeof closeByOutside==='undefined')closeByOutside=true;if(typeof animated==='undefined')animated=true;if(typeof modal==='string'&&modal.indexOf('<')>=0){var _modal=document.createElement('div');_modal.innerHTML=modal.trim();if(_modal.childNodes.length>0){modal=_modal.childNodes[0];if(removeOnClose)modal.classList.add('remove-on-close');if(!closeByOutside)modal.classList.add('ignore-close-by-outside');app.root.append(modal);}else return false;//nothing found
}modal=$(modal);target=$(target);if(modal.length===0||target.length===0)return false;if(modal.parents('body').length===0){if(removeOnClose)modal.addClass('remove-on-close');if(!closeByOutside)modal.addClass.add('ignore-close-by-outside');app.root.append(modal[0]);}if(modal.find('.popover-angle').length===0&&!app.params.material){modal.append('<div class="popover-angle"></div>');}modal.show();var material=app.params.material;function sizePopover(){modal.css({left:'',top:''});var modalWidth=modal.width();var modalHeight=modal.height();// 13 - height of angle
var modalAngle,modalAngleSize=0,modalAngleLeft,modalAngleTop;if(!material){modalAngle=modal.find('.popover-angle');modalAngleSize=modalAngle.width()/2;modalAngle.removeClass('on-left on-right on-top on-bottom').css({left:'',top:''});}else{modal.removeClass('popover-on-left popover-on-right popover-on-top popover-on-bottom').css({left:'',top:''});}var targetWidth=target.outerWidth();var targetHeight=target.outerHeight();var targetOffset=target.offset();var targetOffsetLeft=targetOffset.left-app.left;var targetOffsetTop=targetOffset.top-app.top;var targetParentPage=target.parents('.page');if(targetParentPage.length>0){targetOffsetTop=targetOffsetTop-targetParentPage[0].scrollTop;}var modalTop=0;var modalLeft=0;var diff=0;// Top Position
var modalPosition=material?'bottom':'top';if(material){if(modalHeight<app.height-targetOffsetTop-targetHeight){// On bottom
modalPosition='bottom';modalTop=targetOffsetTop;}else if(modalHeight<targetOffsetTop){// On top
modalTop=targetOffsetTop-modalHeight+targetHeight;modalPosition='top';}else{// On middle
modalPosition='bottom';modalTop=targetOffsetTop;}if(modalTop<=0){modalTop=8;}else if(modalTop+modalHeight>=app.height){modalTop=app.height-modalHeight-8;}// Horizontal Position
modalLeft=targetOffsetLeft;if(modalLeft+modalWidth>=app.width-8){modalLeft=targetOffsetLeft+targetWidth-modalWidth-8;}if(modalLeft<8){modalLeft=8;}if(modalPosition==='top'){modal.addClass('popover-on-top');}if(modalPosition==='bottom'){modal.addClass('popover-on-bottom');}if(target.hasClass('floating-button-to-popover')&&!modal.hasClass('modal-in')){modal.addClass('popover-floating-button');var diffX=modalLeft+modalWidth/2-(targetOffsetLeft+targetWidth/2),diffY=modalTop+modalHeight/2-(targetOffsetTop+targetHeight/2);target.addClass('floating-button-to-popover-in').transform('translate3d('+diffX+'px, '+diffY+'px,0)').transitionEnd(function(e){if(!target.hasClass('floating-button-to-popover-in'))return;target.addClass('floating-button-to-popover-scale').transform('translate3d('+diffX+'px, '+diffY+'px,0) scale('+modalWidth/targetWidth+', '+modalHeight/targetHeight+')');});modal.once('popover:close',function(){target.removeClass('floating-button-to-popover-in floating-button-to-popover-scale').addClass('floating-button-to-popover-out').transform('').transitionEnd(function(e){target.removeClass('floating-button-to-popover-out');});});modal.once('popover:closed',function(){modal.removeClass('popover-floating-button');});}else if(target.hasClass('floating-button-to-popover')&&modal.hasClass('modal-in')){modalLeft=targetOffsetLeft;modalTop=targetOffsetTop;}}else{if(modalHeight+modalAngleSize<targetOffsetTop){// On top
modalTop=targetOffsetTop-modalHeight-modalAngleSize;}else if(modalHeight+modalAngleSize<app.height-targetOffsetTop-targetHeight){// On bottom
modalPosition='bottom';modalTop=targetOffsetTop+targetHeight+modalAngleSize;}else{// On middle
modalPosition='middle';modalTop=targetHeight/2+targetOffsetTop-modalHeight/2;diff=modalTop;if(modalTop<=0){modalTop=5;}else if(modalTop+modalHeight>=app.height){modalTop=app.height-modalHeight-5;}diff=diff-modalTop;}// Horizontal Position
if(modalPosition==='top'||modalPosition==='bottom'){modalLeft=targetWidth/2+targetOffsetLeft-modalWidth/2;diff=modalLeft;if(modalLeft<5)modalLeft=5;if(modalLeft+modalWidth>app.width)modalLeft=app.width-modalWidth-5;if(modalPosition==='top'){modalAngle.addClass('on-bottom');}if(modalPosition==='bottom'){modalAngle.addClass('on-top');}diff=diff-modalLeft;modalAngleLeft=modalWidth/2-modalAngleSize+diff;modalAngleLeft=Math.max(Math.min(modalAngleLeft,modalWidth-modalAngleSize*2-13),13);modalAngle.css({left:modalAngleLeft+'px'});}else if(modalPosition==='middle'){modalLeft=targetOffsetLeft-modalWidth-modalAngleSize;modalAngle.addClass('on-right');if(modalLeft<5||modalLeft+modalWidth>app.width){if(modalLeft<5)modalLeft=targetOffsetLeft+targetWidth+modalAngleSize;if(modalLeft+modalWidth>app.width)modalLeft=app.width-modalWidth-5;modalAngle.removeClass('on-right').addClass('on-left');}modalAngleTop=modalHeight/2-modalAngleSize+diff;modalAngleTop=Math.max(Math.min(modalAngleTop,modalHeight-modalAngleSize*2-13),13);modalAngle.css({top:modalAngleTop+'px'});}}// Apply Styles
modal.css({top:modalTop+'px',left:modalLeft+'px'});}sizePopover();app.onResize(sizePopover);modal.on('popover:close',function(){app.offResize(sizePopover);});app.openModal(modal,animated);return modal[0];};app.popup=function(modal,removeOnClose,animated){if(typeof removeOnClose==='undefined')removeOnClose=true;if(typeof animated==='undefined')animated=true;if(typeof modal==='string'&&modal.indexOf('<')>=0){var _modal=document.createElement('div');_modal.innerHTML=modal.trim();if(_modal.childNodes.length>0){modal=_modal.childNodes[0];if(removeOnClose)modal.classList.add('remove-on-close');app.root.append(modal);}else return false;//nothing found
}modal=$(modal);if(modal.length===0)return false;if(modal.parents('body').length===0){if(removeOnClose)modal.addClass('remove-on-close');app.root.append(modal[0]);}modal.show();app.openModal(modal,animated);return modal[0];};app.pickerModal=function(modal,removeOnClose,animated){if(typeof removeOnClose==='undefined')removeOnClose=true;if(typeof animated==='undefined')animated=true;if(typeof modal==='string'&&modal.indexOf('<')>=0){modal=$(modal);if(modal.length>0){if(removeOnClose)modal.addClass('remove-on-close');app.root.append(modal[0]);}else return false;//nothing found
}modal=$(modal);if(modal.length===0)return false;if(modal.parents('body').length===0){if(removeOnClose)modal.addClass('remove-on-close');app.root.append(modal[0]);}if($('.picker-modal.modal-in:not(.modal-out)').length>0&&!modal.hasClass('modal-in')){app.closeModal('.picker-modal.modal-in:not(.modal-out)');}modal.show();app.openModal(modal,animated);return modal[0];};app.loginScreen=function(modal,animated){if(!modal)modal='.login-screen';if(typeof animated==='undefined')animated=true;modal=$(modal);if(modal.length===0)return false;if($('.login-screen.modal-in:not(.modal-out)').length>0&&!modal.hasClass('modal-in')){app.closeModal('.login-screen.modal-in:not(.modal-out)');}modal.show();app.openModal(modal,animated);return modal[0];};app.openModal=function(modal,animated){if(typeof animated==='undefined')animated=true;modal=$(modal);modal[animated?'removeClass':'addClass']('not-animated');var isModal=modal.hasClass('modal');var isPopover=modal.hasClass('popover');var isPopup=modal.hasClass('popup');var isLoginScreen=modal.hasClass('login-screen');var isPickerModal=modal.hasClass('picker-modal');var isActions=modal.hasClass('actions-modal');// Modal Event Prefix
var modalType='modal';if(isPopover)modalType='popover';if(isPopup)modalType='popup';if(isLoginScreen)modalType='loginscreen';if(isPickerModal)modalType='picker';if(isActions)modalType='actions';if($('.modal.modal-in:not(.modal-out)').length&&app.params.modalStack&&isModal){app.modalStack.push(function(){app.openModal(modal);});return;}// do nothing if this modal already shown
if(true===modal.data('f7-modal-shown')){return;}modal.data('f7-modal-shown',true);// Move modal
var modalParent=modal.parent();if(app.params.modalsMoveToRoot&&!modalParent.is(app.root)){app.root.append(modal);modal.once(modalType+':closed',function(){modalParent.append(modal);});}modal.once(modalType+':close',function(){modal.removeData('f7-modal-shown');});if(isModal){modal.show();modal.css({marginTop:-Math.round(modal.outerHeight()/2)+'px'});}var overlay;if(!isLoginScreen&&!isPickerModal){if($('.modal-overlay').length===0&&!isPopup){app.root.append('<div class="modal-overlay"></div>');}if($('.popup-overlay').length===0&&isPopup){app.root.append('<div class="popup-overlay"></div>');}overlay=isPopup?$('.popup-overlay'):$('.modal-overlay');}if(app.params.material&&isPickerModal){if(modal.hasClass('picker-calendar')){if($('.picker-modal-overlay').length===0&&!isPopup){app.root.append('<div class="picker-modal-overlay"></div>');}overlay=$('.picker-modal-overlay');}}if(overlay){overlay[animated?'removeClass':'addClass']('not-animated');}//Make sure that styles are applied, trigger relayout;
var clientLeft=modal[0].clientLeft;// Trugger open event
modal.trigger('open '+modalType+':open');// Picker modal body class
if(isPickerModal){$('body').addClass('with-picker-modal');}// Init Pages and Navbars in modal
if(modal.find('.'+app.params.viewClass).length>0){modal.find('.page').each(function(){app.initPageWithCallback(this);});modal.find('.navbar').each(function(){app.initNavbarWithCallback(this);});}// Classes for transition in
if(!isLoginScreen&&!isPickerModal)overlay.addClass('modal-overlay-visible');if(app.params.material&&isPickerModal&&overlay)overlay.addClass('modal-overlay-visible');if(animated){modal.removeClass('modal-out').addClass('modal-in').transitionEnd(function(e){if(modal.hasClass('modal-out'))modal.trigger('closed '+modalType+':closed');else modal.trigger('opened '+modalType+':opened');});}else{modal.removeClass('modal-out').addClass('modal-in');modal.trigger('opened '+modalType+':opened');}return true;};app.closeModal=function(modal,animated){if(typeof animated==='undefined')animated=true;modal=$(modal||'.modal-in');if(typeof modal!=='undefined'&&modal.length===0){return;}modal[animated?'removeClass':'addClass']('not-animated');var isModal=modal.hasClass('modal');var isPopover=modal.hasClass('popover');var isPopup=modal.hasClass('popup');var isLoginScreen=modal.hasClass('login-screen');var isPickerModal=modal.hasClass('picker-modal');var isActions=modal.hasClass('actions-modal');// Modal Event Prefix
var modalType='modal';if(isPopover)modalType='popover';if(isPopup)modalType='popup';if(isLoginScreen)modalType='loginscreen';if(isPickerModal)modalType='picker';if(isActions)modalType='actions';var removeOnClose=modal.hasClass('remove-on-close');// ignore close popover
if(isPopover&&!removeOnClose&&modal.hasClass('ignore-close-by-outside')){return;}// For Actions
var keepOnClose=modal.hasClass('keep-on-close');var overlay;if(isPopup)overlay=$('.popup-overlay');else{if(isPickerModal&&app.params.material)overlay=$('.picker-modal-overlay');else if(!isPickerModal)overlay=$('.modal-overlay');}if(isPopup){if(modal.length===$('.popup.modal-in').length){overlay.removeClass('modal-overlay-visible');}}else if(overlay&&overlay.length>0){overlay.removeClass('modal-overlay-visible');}if(overlay)overlay[animated?'removeClass':'addClass']('not-animated');modal.trigger('close '+modalType+':close');// Picker modal body class
if(isPickerModal){$('body').removeClass('with-picker-modal');$('body').addClass('picker-modal-closing');}if(!(isPopover&&!app.params.material)){if(animated){modal.removeClass('modal-in').addClass('modal-out').transitionEnd(function(e){if(modal.hasClass('modal-out'))modal.trigger('closed '+modalType+':closed');else{modal.trigger('opened '+modalType+':opened');if(isPopover)return;}if(isPickerModal){$('body').removeClass('picker-modal-closing');}if(isPopup||isLoginScreen||isPickerModal||isPopover){modal.removeClass('modal-out').hide();if(removeOnClose&&modal.length>0){modal.remove();}}else if(!keepOnClose){modal.remove();}});}else{modal.trigger('closed '+modalType+':closed');modal.removeClass('modal-in modal-out');if(isPickerModal){$('body').removeClass('picker-modal-closing');}if(isPopup||isLoginScreen||isPickerModal||isPopover){modal.hide();if(removeOnClose&&modal.length>0){modal.remove();}}else if(!keepOnClose){modal.remove();}}if(isModal&&app.params.modalStack){app.modalStackClearQueue();}}else{modal.removeClass('modal-in modal-out not-animated').trigger('closed '+modalType+':closed').hide();if(removeOnClose){modal.remove();}}return true;};/*===============================================================================
        ************   Progress Bar   ************
        ===============================================================================*/app.setProgressbar=function(container,progress,speed){container=$(container||app.root);if(container.length===0)return;if(progress)progress=Math.min(Math.max(progress,0),100);var progressbar;if(container.hasClass('progressbar'))progressbar=container;else{progressbar=container.children('.progressbar');}if(progressbar.length===0||progressbar.hasClass('progressbar-infinite'))return;var clientLeft=progressbar[0].clientLeft;progressbar.children('span').transform('translate3d('+(-100+progress)+'%,0,0)');if(typeof speed!=='undefined'){progressbar.children('span').transition(speed);}else{progressbar.children('span').transition('');}return progressbar[0];};app.showProgressbar=function(container,progress,color){if(typeof container==='number'){container=app.root;progress=arguments[0];color=arguments[1];}if(progress&&typeof progress==='string'&&parseFloat(progress)!==progress*1){color=progress;progress=undefined;}container=$(container||app.root);if(container.length===0)return;var progressbar;if(container.hasClass('progressbar'))progressbar=container;else{progressbar=container.children('.progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)');if(progressbar.length===0){// Create one
if(typeof progress!=='undefined'){// Determined
progressbar=$('<span class="progressbar progressbar-in'+(color?' color-'+color:'')+'"><span></span></span>');}else{// Infinite
progressbar=$('<span class="progressbar-infinite progressbar-in'+(color?' color-'+color:'')+'"></span>');}container.append(progressbar);}}if(progress)app.setProgressbar(container,progress);return progressbar[0];};app.hideProgressbar=function(container){container=$(container||app.root);if(container.length===0)return;var progressbar;if(container.hasClass('progressbar'))progressbar=container;else{progressbar=container.children('.progressbar, .progressbar-infinite');}if(progressbar.length===0||!progressbar.hasClass('progressbar-in')||progressbar.hasClass('progressbar-out'))return;progressbar.removeClass('progressbar-in').addClass('progressbar-out').animationEnd(function(){progressbar.remove();progressbar=null;});return;};app.initPageProgressbar=function(pageContainer){pageContainer=$(pageContainer);pageContainer.find('.progressbar').each(function(){var p=$(this);if(p.children('span').length===0)p.append('<span></span>');if(p.attr('data-progress'))app.setProgressbar(p,p.attr('data-progress'));});};/*======================================================
        ************   Panels   ************
        ======================================================*/app.allowPanelOpen=true;app.openPanel=function(panelPosition,animated){if(typeof animated==='undefined')animated=true;if(!app.allowPanelOpen)return false;var panel=$('.panel-'+panelPosition);if(panel.length===0||panel.hasClass('active')||panel.hasClass('panel-visible-by-breakpoint'))return false;app.closePanel();// Close if some panel is opened
app.allowPanelOpen=false;var effect=panel.hasClass('panel-reveal')?'reveal':'cover';panel[animated?'removeClass':'addClass']('not-animated');panel.css({display:'block'}).addClass('active');panel.trigger('open panel:open');var panelOverlay=$('.panel-overlay');panelOverlay[animated?'removeClass':'addClass']('not-animated');panelOverlay.show();if(panel.find('.'+app.params.viewClass).length>0){if(app.sizeNavbars)app.sizeNavbars(panel.find('.'+app.params.viewClass)[0]);}// Trigger reLayout
var clientLeft=panel[0].clientLeft;// Transition End;
var transitionEndTarget=effect==='reveal'?$('.'+app.params.viewsClass):panel;function panelTransitionEnd(){transitionEndTarget.transitionEnd(function(e){if($(e.target).is(transitionEndTarget)){if(panel.hasClass('active')){panel.trigger('opened panel:opened');}else{panel.trigger('closed panel:closed');}panelOverlay.css({display:''});app.allowPanelOpen=true;}else panelTransitionEnd();});}if(animated){panelTransitionEnd();}else{panel.trigger('opened panel:opened');panelOverlay.css({display:''});app.allowPanelOpen=true;}$('body').addClass('with-panel-'+panelPosition+'-'+effect);return true;};app.closePanel=function(animated){if(typeof animated==='undefined')animated=true;var activePanel=$('.panel.active');if(activePanel.length===0||activePanel.hasClass('panel-visible-by-breakpoint'))return false;var effect=activePanel.hasClass('panel-reveal')?'reveal':'cover';var panelPosition=activePanel.hasClass('panel-left')?'left':'right';activePanel[animated?'removeClass':'addClass']('not-animated');activePanel.removeClass('active');var panelOverlay=$('.panel-overlay');panelOverlay.removeClass('not-animated');var transitionEndTarget=effect==='reveal'?$('.'+app.params.viewsClass):activePanel;activePanel.trigger('close panel:close');app.allowPanelOpen=false;if(animated){transitionEndTarget.transitionEnd(function(){if(activePanel.hasClass('active'))return;activePanel.css({display:''});activePanel.trigger('closed panel:closed');$('body').removeClass('panel-closing');app.allowPanelOpen=true;});$('body').addClass('panel-closing').removeClass('with-panel-'+panelPosition+'-'+effect);}else{activePanel.css({display:''});activePanel.trigger('closed panel:closed');activePanel.removeClass('not-animated');$('body').removeClass('with-panel-'+panelPosition+'-'+effect);app.allowPanelOpen=true;}};/*======================================================
        ************   Panels breakpoints   ************
        ======================================================*/app.initPanelsBreakpoints=function(){var panelLeft=$('.panel-left');var panelRight=$('.panel-right');var views=app.root.children('.views');var wasVisible;function setPanels(){// Left Panel
if(app.params.panelLeftBreakpoint&&panelLeft.length>0){wasVisible=panelLeft.hasClass('panel-visible-by-breakpoint');if(app.width>=app.params.panelLeftBreakpoint){if(!wasVisible){$('body').removeClass('with-panel-left-reveal with-panel-left-cover');panelLeft.css('display','').addClass('panel-visible-by-breakpoint').removeClass('active');panelLeft.trigger('open panel:open opened panel:opened');views.css({'margin-left':panelLeft.width()+'px'});app.allowPanelOpen=true;}}else{if(wasVisible){panelLeft.css('display','').removeClass('panel-visible-by-breakpoint active');panelLeft.trigger('close panel:close closed panel:closed');views.css({'margin-left':''});app.allowPanelOpen=true;}}}// Right Panel
if(app.params.panelRightBreakpoint&&panelRight.length>0){wasVisible=panelRight.hasClass('panel-visible-by-breakpoint');if(app.width>=app.params.panelRightBreakpoint){if(!wasVisible){$('body').removeClass('with-panel-right-reveal with-panel-right-cover');panelRight.css('display','').addClass('panel-visible-by-breakpoint').removeClass('active');panelRight.trigger('open panel:open opened panel:opened');views.css({'margin-right':panelRight.width()+'px'});app.allowPanelOpen=true;}}else{if(wasVisible){panelRight.css('display','').removeClass('panel-visible-by-breakpoint active');panelRight.trigger('close panel:close closed panel:closed');views.css({'margin-right':''});app.allowPanelOpen=true;}}}}app.onResize(setPanels);setPanels();};/*======================================================
        ************   Swipe panels   ************
        ======================================================*/app.initSwipePanels=function(){var panel,side;if(app.params.swipePanel){panel=$('.panel.panel-'+app.params.swipePanel);side=app.params.swipePanel;if(panel.length===0&&side!=='both')return;}else{if(app.params.swipePanelOnlyClose){if($('.panel').length===0)return;}else return;}var panelOverlay=$('.panel-overlay');var isTouched,isMoved,isScrolling,touchesStart={},touchStartTime,touchesDiff,translate,overlayOpacity,opened,panelWidth,effect,direction;var views=$('.'+app.params.viewsClass);function handleTouchStart(e){if(!app.allowPanelOpen||!app.params.swipePanel&&!app.params.swipePanelOnlyClose||isTouched)return;if($('.modal-in, .photo-browser-in').length>0)return;if(!(app.params.swipePanelCloseOpposite||app.params.swipePanelOnlyClose)){if($('.panel.active').length>0&&!panel.hasClass('active'))return;}if(e.target&&e.target.nodeName.toLowerCase()==='input'&&e.target.type==='range')return;if($(e.target).closest('.tabs-swipeable-wrap').length>0)return;touchesStart.x=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;touchesStart.y=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;if(app.params.swipePanelCloseOpposite||app.params.swipePanelOnlyClose){if($('.panel.active').length>0){side=$('.panel.active').hasClass('panel-left')?'left':'right';}else{if(app.params.swipePanelOnlyClose)return;side=app.params.swipePanel;}if(!side)return;}panel=$('.panel.panel-'+side);opened=panel.hasClass('active');if(app.params.swipePanelActiveArea&&!opened){if(side==='left'){if(touchesStart.x>app.params.swipePanelActiveArea)return;}if(side==='right'){if(touchesStart.x<app.width-app.params.swipePanelActiveArea)return;}}isMoved=false;isTouched=true;isScrolling=undefined;touchStartTime=new Date().getTime();direction=undefined;}function handleTouchMove(e){if(!isTouched)return;if(e.f7PreventPanelSwipe)return;var pageX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;var pageY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){isScrolling=!!(isScrolling||Math.abs(pageY-touchesStart.y)>Math.abs(pageX-touchesStart.x));}if(isScrolling){isTouched=false;return;}if(!direction){if(pageX>touchesStart.x){direction='to-right';}else{direction='to-left';}if(side==='both'){if($('.panel.active').length>0){side=$('.panel.active').hasClass('panel-left')?'left':'right';}else{side=direction==='to-right'?'left':'right';}if(app.params.swipePanelActiveArea>0){if(side==='left'&&touchesStart.x>app.params.swipePanelActiveArea){isTouched=false;return;}if(side==='right'&&touchesStart.x<app.width-app.params.swipePanelActiveArea){isTouched=false;return;}}panel=$('.panel.panel-'+side);}if(panel.hasClass('panel-visible-by-breakpoint')){isTouched=false;return;}if(side==='left'&&direction==='to-left'&&!panel.hasClass('active')||side==='right'&&direction==='to-right'&&!panel.hasClass('active')){isTouched=false;return;}}if(app.params.swipePanelNoFollow){var timeDiff=new Date().getTime()-touchStartTime;if(timeDiff<300){if(direction==='to-left'){if(side==='right')app.openPanel(side);if(side==='left'&&panel.hasClass('active'))app.closePanel();}if(direction==='to-right'){if(side==='left')app.openPanel(side);if(side==='right'&&panel.hasClass('active'))app.closePanel();}}isTouched=false;isMoved=false;return;}if(!isMoved){effect=panel.hasClass('panel-cover')?'cover':'reveal';if(!opened){panel.show();panelOverlay.show();}panelWidth=panel[0].offsetWidth;panel.transition(0);if(panel.find('.'+app.params.viewClass).length>0){if(app.sizeNavbars)app.sizeNavbars(panel.find('.'+app.params.viewClass)[0]);}}isMoved=true;e.preventDefault();var threshold=opened?0:-app.params.swipePanelThreshold;if(side==='right')threshold=-threshold;touchesDiff=pageX-touchesStart.x+threshold;if(side==='right'){if(effect==='cover'){translate=touchesDiff+(opened?0:panelWidth);if(translate<0)translate=0;if(translate>panelWidth){translate=panelWidth;}}else{translate=touchesDiff-(opened?panelWidth:0);if(translate>0)translate=0;if(translate<-panelWidth){translate=-panelWidth;}}}else{translate=touchesDiff+(opened?panelWidth:0);if(translate<0)translate=0;if(translate>panelWidth){translate=panelWidth;}}if(effect==='reveal'){views.transform('translate3d('+translate+'px,0,0)').transition(0);panelOverlay.transform('translate3d('+translate+'px,0,0)').transition(0);panel.trigger('panel:swipe',{progress:Math.abs(translate/panelWidth)});app.pluginHook('swipePanelSetTransform',views[0],panel[0],Math.abs(translate/panelWidth));}else{if(side==='left')translate=translate-panelWidth;panel.transform('translate3d('+translate+'px,0,0)').transition(0);panelOverlay.transition(0);overlayOpacity=1-Math.abs(translate/panelWidth);panelOverlay.css({opacity:overlayOpacity});panel.trigger('panel:swipe',{progress:Math.abs(translate/panelWidth)});app.pluginHook('swipePanelSetTransform',views[0],panel[0],Math.abs(translate/panelWidth));}}function handleTouchEnd(e){if(!isTouched||!isMoved){isTouched=false;isMoved=false;return;}isTouched=false;isMoved=false;var timeDiff=new Date().getTime()-touchStartTime;var action;var edge=translate===0||Math.abs(translate)===panelWidth;if(!opened){if(effect==='cover'){if(translate===0){action='swap';//open
}else if(timeDiff<300&&Math.abs(translate)>0){action='swap';//open
}else if(timeDiff>=300&&Math.abs(translate)<panelWidth/2){action='swap';//open
}else{action='reset';//close
}}else{if(translate===0){action='reset';}else if(timeDiff<300&&Math.abs(translate)>0||timeDiff>=300&&Math.abs(translate)>=panelWidth/2){action='swap';}else{action='reset';}}}else{if(effect==='cover'){if(translate===0){action='reset';//open
}else if(timeDiff<300&&Math.abs(translate)>0){action='swap';//open
}else if(timeDiff>=300&&Math.abs(translate)<panelWidth/2){action='reset';//open
}else{action='swap';//close
}}else{if(translate===-panelWidth){action='reset';}else if(timeDiff<300&&Math.abs(translate)>=0||timeDiff>=300&&Math.abs(translate)<=panelWidth/2){if(side==='left'&&translate===panelWidth)action='reset';else action='swap';}else{action='reset';}}}if(action==='swap'){app.allowPanelOpen=true;if(opened){app.closePanel();if(edge){panel.css({display:''});$('body').removeClass('panel-closing');}}else{app.openPanel(side);}if(edge)app.allowPanelOpen=true;}if(action==='reset'){if(opened){app.allowPanelOpen=true;app.openPanel(side);}else{app.closePanel();if(edge){app.allowPanelOpen=true;panel.css({display:''});}else{var target=effect==='reveal'?views:panel;panel.trigger('close panel:close');$('body').addClass('panel-closing');target.transitionEnd(function(){if(panel.hasClass('active'))return;panel.trigger('close panel:closed');panel.css({display:''});$('body').removeClass('panel-closing');app.allowPanelOpen=true;});}}}if(effect==='reveal'){views.transition('');views.transform('');}panel.transition('').transform('');panelOverlay.css({display:''}).transform('').transition('').css('opacity','');}var passiveListener=app.touchEvents.start==='touchstart'&&app.support.passiveListener?{passive:true,capture:false}:false;var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;$(document).on(app.touchEvents.start,handleTouchStart,passiveListener);$(document).on(app.touchEvents.move,handleTouchMove,activeListener);$(document).on(app.touchEvents.end,handleTouchEnd,passiveListener);};/*======================================================
        ************   Image Lazy Loading   ************
        ************   Based on solution by Marc Godard, https://github.com/MarcGodard   ************
        ======================================================*/app.initImagesLazyLoad=function(pageContainer){pageContainer=$(pageContainer);// Lazy images
var lazyLoadImages;if(pageContainer.hasClass('lazy')){lazyLoadImages=pageContainer;pageContainer=lazyLoadImages.parents('.page');}else{lazyLoadImages=pageContainer.find('.lazy');}if(lazyLoadImages.length===0)return;// Scrollable page content
var pageContent;if(pageContainer.hasClass('page-content')){pageContent=pageContainer;pageContainer=pageContainer.parents('.page');}else{pageContent=pageContainer.find('.page-content');}if(pageContent.length===0)return;// Placeholder
var placeholderSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';if(typeof app.params.imagesLazyLoadPlaceholder==='string'){placeholderSrc=app.params.imagesLazyLoadPlaceholder;}if(app.params.imagesLazyLoadPlaceholder!==false)lazyLoadImages.each(function(){if($(this).attr('data-src')&&!$(this).attr('src'))$(this).attr('src',placeholderSrc);});// load image
var imagesSequence=[];var imageIsLoading=false;function loadImage(el){el=$(el);var bg=el.attr('data-background');var src=bg?bg:el.attr('data-src');if(!src)return;function onLoad(){el.removeClass('lazy').addClass('lazy-loaded');if(bg){el.css('background-image','url('+src+')');}else{el.attr('src',src);}if(app.params.imagesLazyLoadSequential){imageIsLoading=false;if(imagesSequence.length>0){loadImage(imagesSequence.shift());}}el.trigger('lazy-loaded');if(app.params.onLazyLoaded)app.params.onLazyLoaded(el);}function onError(){el.removeClass('lazy').addClass('lazy-loaded');if(bg){el.css('background-image','url('+placeholderSrc+')');}else{el.attr('src',placeholderSrc);}if(app.params.imagesLazyLoadSequential){imageIsLoading=false;if(imagesSequence.length>0){loadImage(imagesSequence.shift());}}el.trigger('lazy-error');if(app.params.onLazyError)app.params.onLazyError(el);}if(app.params.imagesLazyLoadSequential){if(imageIsLoading){if(imagesSequence.indexOf(el[0])<0)imagesSequence.push(el[0]);return;}}// Loading flag
imageIsLoading=true;var image=new Image();image.onload=onLoad;image.onerror=onError;image.src=src;// Add loaded callback and events
el.trigger('lazy-load');if(app.params.onLazyLoad&&!el.hasClass('lazy-loaded'))app.params.onLazyLoad(el);}function lazyHandler(){lazyLoadImages=pageContainer.find('.lazy');lazyLoadImages.each(function(index,el){el=$(el);if(el.parents('.tab:not(.active)').length>0){return;}if(isElementInViewport(el[0])){loadImage(el);}});}function isElementInViewport(el){var rect=el.getBoundingClientRect();var threshold=app.params.imagesLazyLoadThreshold||0;return rect.top>=0-threshold&&rect.left>=0-threshold&&rect.top<=app.height+threshold&&rect.left<=app.width+threshold;}function attachEvents(destroy){var method=destroy?'off':'on';lazyLoadImages[method]('lazy',lazyHandler);lazyLoadImages.parents('.tab')[method]('show',lazyHandler);pageContainer[method]('lazy',lazyHandler);pageContent[method]('lazy',lazyHandler);pageContent[method]('scroll',lazyHandler);app[method==='on'?'onResize':'offResize'](lazyHandler);}function detachEvents(){attachEvents(true);}// Store detach function
pageContainer[0].f7DestroyImagesLazyLoad=detachEvents;// Attach events
attachEvents();// Destroy on page remove
if(pageContainer.hasClass('page')){pageContainer.once('page:beforeremove',detachEvents);}// Run loader on page load/init
lazyHandler();// Run after page animation
pageContainer.once('page:afteranimation',lazyHandler);};app.destroyImagesLazyLoad=function(pageContainer){pageContainer=$(pageContainer);if(pageContainer.length>0&&pageContainer[0].f7DestroyImagesLazyLoad){pageContainer[0].f7DestroyImagesLazyLoad();}};app.reinitImagesLazyLoad=function(pageContainer){pageContainer=$(pageContainer);if(pageContainer.length>0){pageContainer.trigger('lazy');}};/*======================================================
        ************   Material Preloader   ************
        ======================================================*/app.initPageMaterialPreloader=function(pageContainer){$(pageContainer).find('.preloader').each(function(){if($(this).children().length===0){$(this).html(app.params.materialPreloaderHtml);}});};/*======================================================
        ************   Messages   ************
        ======================================================*/var Messages=function Messages(container,params){var defaults={autoLayout:true,newMessagesFirst:false,scrollMessages:true,scrollMessagesOnlyOnEdge:false,messageTemplate:'{{#if day}}'+'<div class="messages-date">{{day}} {{#if time}}, <span>{{time}}</span>{{/if}}</div>'+'{{/if}}'+'<div class="message message-{{type}} {{#if hasImage}}message-pic{{/if}} {{#if avatar}}message-with-avatar{{/if}} {{#if position}}message-appear-from-{{position}}{{/if}}">'+'{{#if name}}<div class="message-name">{{name}}</div>{{/if}}'+'<div class="message-text">{{text}}{{#if date}}<div class="message-date">{{date}}</div>{{/if}}</div>'+'{{#if avatar}}<div class="message-avatar" style="background-image:url({{avatar}})"></div>{{/if}}'+'{{#if label}}<div class="message-label">{{label}}</div>{{/if}}'+'</div>'};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'||params[def]===null){params[def]=defaults[def];}}// Instance
var m=this;// Params
m.params=params;// Container
m.container=$(container);if(m.container.length===0)return;// Autolayout
if(m.params.autoLayout)m.container.addClass('messages-auto-layout');// New messages first
if(m.params.newMessagesFirst)m.container.addClass('messages-new-first');// Is In Page
m.pageContainer=m.container.parents('.page').eq(0);m.pageContent=m.pageContainer.find('.page-content');// Compiled template
m.template=Template7.compile(m.params.messageTemplate);// Auto Layout
m.layout=function(){if(!m.container.hasClass('messages-auto-layout'))m.container.addClass('messages-auto-layout');m.container.find('.message').each(function(){var message=$(this);if(message.find('.message-text img').length>0){var childNodes=message.find('.message-text')[0].childNodes;var onlyPic=true;for(var i=0;i<childNodes.length;i++){if(childNodes[i].nodeType===1&&childNodes[i].nodeName.toLowerCase()!=='img')onlyPic=false;if(childNodes[i].nodeType===3&&childNodes[i].textContent.trim()!=='')onlyPic=false;}if(onlyPic)message.addClass('message-pic');else message.removeClass('message-pic');}if(message.find('.message-avatar').length>0)message.addClass('message-with-avatar');});m.container.find('.message').each(function(){var message=$(this);var isSent=message.hasClass('message-sent');var next=message.next('.message-'+(isSent?'sent':'received'));var prev=message.prev('.message-'+(isSent?'sent':'received'));if(next.length===0){message.addClass('message-last message-with-tail');}else message.removeClass('message-last message-with-tail');if(prev.length===0){message.addClass('message-first');}else message.removeClass('message-first');if(prev.length>0&&prev.find('.message-name').length>0&&message.find('.message-name').length>0){if(prev.find('.message-name').text()!==message.find('.message-name').text()){prev.addClass('message-last message-with-tail');message.addClass('message-first');}}});};// Add Message
m.appendMessage=function(props,animate){return m.addMessage(props,'append',animate);};m.prependMessage=function(props,animate){return m.addMessage(props,'prepend',animate);};m.addMessage=function(props,method,animate){return m.addMessages([props],method,animate);};m.addMessages=function(newMessages,method,animate){if(typeof animate==='undefined'){animate=true;}if(typeof method==='undefined'){method=m.params.newMessagesFirst?'prepend':'append';}var newMessagesHTML='',i;for(i=0;i<newMessages.length;i++){var props=newMessages[i]||{};props.type=props.type||'sent';if(!props.text)continue;props.hasImage=props.text.indexOf('<img')>=0;if(props.onlyImage===false)props.hasImage=false;if(animate)props.position=method==='append'?'bottom':'top';newMessagesHTML+=m.template(props);}var scrollHeightBefore=m.pageContent[0].scrollHeight,heightBefore=m.pageContent[0].offsetHeight,scrollBefore=m.pageContent[0].scrollTop;m.container[method](newMessagesHTML);if(m.params.autoLayout)m.layout();if(method==='prepend'){m.pageContent[0].scrollTop=scrollBefore+(m.pageContent[0].scrollHeight-scrollHeightBefore);}if(m.params.scrollMessages&&method==='append'&&!m.params.newMessagesFirst||method==='prepend'&&m.params.newMessagesFirst){if(m.params.scrollMessagesOnlyOnEdge){var onEdge=false;if(m.params.newMessagesFirst){if(scrollBefore===0)onEdge=true;}else{if(scrollBefore-(scrollHeightBefore-heightBefore)>=-10)onEdge=true;}if(onEdge)m.scrollMessages(animate?undefined:0);}else m.scrollMessages(animate?undefined:0);}var messages=m.container.find('.message');if(newMessages.length===1){return method==='append'?messages[messages.length-1]:messages[0];}else{var messagesToReturn=[];if(method==='append'){for(i=messages.length-newMessages.length;i<messages.length;i++){messagesToReturn.push(messages[i]);}}else{for(i=0;i<newMessages.length;i++){messagesToReturn.push(messages[i]);}}return messagesToReturn;}};m.removeMessage=function(message){message=$(message);if(message.length===0){return false;}else{message.remove();if(m.params.autoLayout)m.layout();return true;}};m.removeMessages=function(messages){m.removeMessage(messages);};m.clean=function(){m.container.html('');};// Scroll
m.scrollMessages=function(duration,scrollTop){if(typeof duration==='undefined')duration=400;var currentScroll=m.pageContent[0].scrollTop;var newScroll;if(typeof scrollTop!=='undefined')newScroll=scrollTop;else{newScroll=m.params.newMessagesFirst?0:m.pageContent[0].scrollHeight-m.pageContent[0].offsetHeight;if(newScroll===currentScroll)return;}m.pageContent.scrollTop(newScroll,duration);};// Init Destroy
m.init=function(){if(m.params.messages){m.addMessages(m.params.messages,undefined,false);}else{if(m.params.autoLayout)m.layout();m.scrollMessages(0);}};m.destroy=function(){m=null;};// Init
m.init();m.container[0].f7Messages=m;return m;};app.messages=function(container,params){return new Messages(container,params);};app.initPageMessages=function(pageContainer){pageContainer=$(pageContainer);var messages=pageContainer.find('.messages');if(messages.length===0)return;if(!messages.hasClass('messages-init')){return;}var m=app.messages(messages,messages.dataset());// Destroy on page remove
function pageBeforeRemove(){m.destroy();pageContainer.off('page:beforeremove',pageBeforeRemove);}if(pageContainer.hasClass('page')){pageContainer.on('page:beforeremove',pageBeforeRemove);}};/*===============================================================================
        ************   Swipeout Actions (Swipe to delete)   ************
        ===============================================================================*/app.swipeoutOpenedEl=undefined;app.allowSwipeout=true;app.initSwipeout=function(swipeoutEl){var isTouched,isMoved,isScrolling,touchesStart={},touchStartTime,touchesDiff,swipeOutEl,swipeOutContent,actionsRight,actionsLeft,actionsLeftWidth,actionsRightWidth,translate,opened,openedActions,buttonsLeft,buttonsRight,direction,overswipeLeftButton,overswipeRightButton,overswipeLeft,overswipeRight,noFoldLeft,noFoldRight;var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;$(document).on(app.touchEvents.start,function(e){if(app.swipeoutOpenedEl){var target=$(e.target);if(!(app.swipeoutOpenedEl.is(target[0])||target.parents('.swipeout').is(app.swipeoutOpenedEl)||target.hasClass('modal-in')||target.hasClass('modal-overlay')||target.hasClass('actions-modal')||target.parents('.actions-modal.modal-in, .modal.modal-in').length>0)){app.swipeoutClose(app.swipeoutOpenedEl);}}},activeListener);function handleTouchStart(e){if(!app.allowSwipeout)return;isMoved=false;isTouched=true;isScrolling=undefined;touchesStart.x=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;touchesStart.y=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;touchStartTime=new Date().getTime();}function handleTouchMove(e){if(!isTouched)return;var pageX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;var pageY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){isScrolling=!!(isScrolling||Math.abs(pageY-touchesStart.y)>Math.abs(pageX-touchesStart.x));}if(isScrolling){isTouched=false;return;}if(!isMoved){if($('.list-block.sortable-opened').length>0)return;/*jshint validthis:true */swipeOutEl=$(this);swipeOutContent=swipeOutEl.find('.swipeout-content');actionsRight=swipeOutEl.find('.swipeout-actions-right');actionsLeft=swipeOutEl.find('.swipeout-actions-left');actionsLeftWidth=actionsRightWidth=buttonsLeft=buttonsRight=overswipeRightButton=overswipeLeftButton=null;noFoldLeft=actionsLeft.hasClass('swipeout-actions-no-fold')||app.params.swipeoutActionsNoFold;noFoldRight=actionsRight.hasClass('swipeout-actions-no-fold')||app.params.swipeoutActionsNoFold;if(actionsLeft.length>0){actionsLeftWidth=actionsLeft.outerWidth();buttonsLeft=actionsLeft.children('a');overswipeLeftButton=actionsLeft.find('.swipeout-overswipe');}if(actionsRight.length>0){actionsRightWidth=actionsRight.outerWidth();buttonsRight=actionsRight.children('a');overswipeRightButton=actionsRight.find('.swipeout-overswipe');}opened=swipeOutEl.hasClass('swipeout-opened');if(opened){openedActions=swipeOutEl.find('.swipeout-actions-left.swipeout-actions-opened').length>0?'left':'right';}swipeOutEl.removeClass('transitioning');if(!app.params.swipeoutNoFollow){swipeOutEl.find('.swipeout-actions-opened').removeClass('swipeout-actions-opened');swipeOutEl.removeClass('swipeout-opened');}}isMoved=true;e.preventDefault();touchesDiff=pageX-touchesStart.x;translate=touchesDiff;if(opened){if(openedActions==='right')translate=translate-actionsRightWidth;else translate=translate+actionsLeftWidth;}if(translate>0&&actionsLeft.length===0||translate<0&&actionsRight.length===0){if(!opened){isTouched=isMoved=false;swipeOutContent.transform('');if(buttonsRight&&buttonsRight.length>0){buttonsRight.transform('');}if(buttonsLeft&&buttonsLeft.length>0){buttonsLeft.transform('');}return;}translate=0;}if(translate<0)direction='to-left';else if(translate>0)direction='to-right';else{if(!direction)direction='to-left';}var i,buttonOffset,progress;e.f7PreventPanelSwipe=true;if(app.params.swipeoutNoFollow){if(opened){if(openedActions==='right'&&touchesDiff>0){app.swipeoutClose(swipeOutEl);}if(openedActions==='left'&&touchesDiff<0){app.swipeoutClose(swipeOutEl);}}else{if(touchesDiff<0&&actionsRight.length>0){app.swipeoutOpen(swipeOutEl,'right');}if(touchesDiff>0&&actionsLeft.length>0){app.swipeoutOpen(swipeOutEl,'left');}}isTouched=false;isMoved=false;return;}overswipeLeft=false;overswipeRight=false;var $button;if(actionsRight.length>0){// Show right actions
progress=translate/actionsRightWidth;if(translate<-actionsRightWidth){translate=-actionsRightWidth-Math.pow(-translate-actionsRightWidth,0.8);if(overswipeRightButton.length>0){overswipeRight=true;}}for(i=0;i<buttonsRight.length;i++){if(typeof buttonsRight[i]._buttonOffset==='undefined'){buttonsRight[i]._buttonOffset=buttonsRight[i].offsetLeft;}buttonOffset=buttonsRight[i]._buttonOffset;$button=$(buttonsRight[i]);if(overswipeRightButton.length>0&&$button.hasClass('swipeout-overswipe')){$button.css({left:(overswipeRight?-buttonOffset:0)+'px'});if(overswipeRight){$button.addClass('swipeout-overswipe-active');}else{$button.removeClass('swipeout-overswipe-active');}}$button.transform('translate3d('+(translate-buttonOffset*(1+Math.max(progress,-1)))+'px,0,0)');}}if(actionsLeft.length>0){// Show left actions
progress=translate/actionsLeftWidth;if(translate>actionsLeftWidth){translate=actionsLeftWidth+Math.pow(translate-actionsLeftWidth,0.8);if(overswipeLeftButton.length>0){overswipeLeft=true;}}for(i=0;i<buttonsLeft.length;i++){if(typeof buttonsLeft[i]._buttonOffset==='undefined'){buttonsLeft[i]._buttonOffset=actionsLeftWidth-buttonsLeft[i].offsetLeft-buttonsLeft[i].offsetWidth;}buttonOffset=buttonsLeft[i]._buttonOffset;$button=$(buttonsLeft[i]);if(overswipeLeftButton.length>0&&$button.hasClass('swipeout-overswipe')){$button.css({left:(overswipeLeft?buttonOffset:0)+'px'});if(overswipeLeft){$button.addClass('swipeout-overswipe-active');}else{$button.removeClass('swipeout-overswipe-active');}}if(buttonsLeft.length>1){$button.css('z-index',buttonsLeft.length-i);}$button.transform('translate3d('+(translate+buttonOffset*(1-Math.min(progress,1)))+'px,0,0)');}}swipeOutContent.transform('translate3d('+translate+'px,0,0)');}function handleTouchEnd(e){if(!isTouched||!isMoved){isTouched=false;isMoved=false;return;}isTouched=false;isMoved=false;var timeDiff=new Date().getTime()-touchStartTime;var action,actionsWidth,actions,buttons,i;actions=direction==='to-left'?actionsRight:actionsLeft;actionsWidth=direction==='to-left'?actionsRightWidth:actionsLeftWidth;if(timeDiff<300&&(touchesDiff<-10&&direction==='to-left'||touchesDiff>10&&direction==='to-right')||timeDiff>=300&&Math.abs(translate)>actionsWidth/2){action='open';}else{action='close';}if(timeDiff<300){if(Math.abs(translate)===0)action='close';if(Math.abs(translate)===actionsWidth)action='open';}if(action==='open'){app.swipeoutOpenedEl=swipeOutEl;swipeOutEl.trigger('open swipeout:open');swipeOutEl.addClass('swipeout-opened transitioning');var newTranslate=direction==='to-left'?-actionsWidth:actionsWidth;swipeOutContent.transform('translate3d('+newTranslate+'px,0,0)');actions.addClass('swipeout-actions-opened');buttons=direction==='to-left'?buttonsRight:buttonsLeft;if(buttons){for(i=0;i<buttons.length;i++){$(buttons[i]).transform('translate3d('+newTranslate+'px,0,0)');}}if(overswipeRight){actionsRight.find('.swipeout-overswipe')[0].click();}if(overswipeLeft){actionsLeft.find('.swipeout-overswipe')[0].click();}}else{swipeOutEl.trigger('close swipeout:close');app.swipeoutOpenedEl=undefined;swipeOutEl.addClass('transitioning').removeClass('swipeout-opened');swipeOutContent.transform('');actions.removeClass('swipeout-actions-opened');}var buttonOffset;if(buttonsLeft&&buttonsLeft.length>0&&buttonsLeft!==buttons){for(i=0;i<buttonsLeft.length;i++){buttonOffset=buttonsLeft[i]._buttonOffset;if(typeof buttonOffset==='undefined'){buttonsLeft[i]._buttonOffset=actionsLeftWidth-buttonsLeft[i].offsetLeft-buttonsLeft[i].offsetWidth;}$(buttonsLeft[i]).transform('translate3d('+buttonOffset+'px,0,0)');}}if(buttonsRight&&buttonsRight.length>0&&buttonsRight!==buttons){for(i=0;i<buttonsRight.length;i++){buttonOffset=buttonsRight[i]._buttonOffset;if(typeof buttonOffset==='undefined'){buttonsRight[i]._buttonOffset=buttonsRight[i].offsetLeft;}$(buttonsRight[i]).transform('translate3d('+-buttonOffset+'px,0,0)');}}swipeOutContent.transitionEnd(function(e){if(opened&&action==='open'||closed&&action==='close')return;swipeOutEl.trigger(action==='open'?'opened':'closed');if(opened&&action==='close'){if(actionsRight.length>0){buttonsRight.transform('');}if(actionsLeft.length>0){buttonsLeft.transform('');}}});}if(swipeoutEl){$(swipeoutEl).on(app.touchEvents.start,handleTouchStart,activeListener);$(swipeoutEl).on(app.touchEvents.move,handleTouchMove,activeListener);$(swipeoutEl).on(app.touchEvents.end,handleTouchEnd,activeListener);}else{$(document).on(app.touchEvents.start,'.list-block li.swipeout',handleTouchStart,activeListener);$(document).on(app.touchEvents.move,'.list-block li.swipeout',handleTouchMove,activeListener);$(document).on(app.touchEvents.end,'.list-block li.swipeout',handleTouchEnd,activeListener);}};app.swipeoutOpen=function(el,dir,callback){el=$(el);if(arguments.length===2){if(typeof arguments[1]==='function'){callback=dir;}}if(el.length===0)return;if(el.length>1)el=$(el[0]);if(!el.hasClass('swipeout')||el.hasClass('swipeout-opened'))return;if(!dir){if(el.find('.swipeout-actions-right').length>0)dir='right';else dir='left';}var swipeOutActions=el.find('.swipeout-actions-'+dir);if(swipeOutActions.length===0)return;el.trigger('open swipeout:open').addClass('swipeout-opened').removeClass('transitioning');swipeOutActions.addClass('swipeout-actions-opened');var buttons=swipeOutActions.children('a');var swipeOutActionsWidth=swipeOutActions.outerWidth();var translate=dir==='right'?-swipeOutActionsWidth:swipeOutActionsWidth;var i;if(buttons.length>1){for(i=0;i<buttons.length;i++){if(dir==='right'){$(buttons[i]).transform('translate3d('+-buttons[i].offsetLeft+'px,0,0)');}else{$(buttons[i]).css('z-index',buttons.length-i).transform('translate3d('+(swipeOutActionsWidth-buttons[i].offsetWidth-buttons[i].offsetLeft)+'px,0,0)');}}var clientLeft=buttons[1].clientLeft;}el.addClass('transitioning');for(i=0;i<buttons.length;i++){$(buttons[i]).transform('translate3d('+translate+'px,0,0)');}el.find('.swipeout-content').transform('translate3d('+translate+'px,0,0)').transitionEnd(function(){el.trigger('opened swipeout:opened');if(callback)callback.call(el[0]);});app.swipeoutOpenedEl=el;};app.swipeoutClose=function(el,callback){el=$(el);if(el.length===0)return;if(!el.hasClass('swipeout-opened'))return;var dir=el.find('.swipeout-actions-opened').hasClass('swipeout-actions-right')?'right':'left';var swipeOutActions=el.find('.swipeout-actions-opened').removeClass('swipeout-actions-opened');var buttons=swipeOutActions.children('a');var swipeOutActionsWidth=swipeOutActions.outerWidth();app.allowSwipeout=false;el.trigger('close swipeout:close');el.removeClass('swipeout-opened').addClass('transitioning');var closeTO;function onSwipeoutClose(){app.allowSwipeout=true;if(el.hasClass('swipeout-opened'))return;el.removeClass('transitioning');buttons.transform('');el.trigger('closed swipeout:closed');if(callback)callback.call(el[0]);if(closeTO)clearTimeout(closeTO);}el.find('.swipeout-content').transform('').transitionEnd(onSwipeoutClose);closeTO=setTimeout(onSwipeoutClose,500);for(var i=0;i<buttons.length;i++){if(dir==='right'){$(buttons[i]).transform('translate3d('+-buttons[i].offsetLeft+'px,0,0)');}else{$(buttons[i]).transform('translate3d('+(swipeOutActionsWidth-buttons[i].offsetWidth-buttons[i].offsetLeft)+'px,0,0)');}$(buttons[i]).css({left:0+'px'}).removeClass('swipeout-overswipe-active');}if(app.swipeoutOpenedEl&&app.swipeoutOpenedEl[0]===el[0])app.swipeoutOpenedEl=undefined;};app.swipeoutDelete=function(el,callback){el=$(el);if(el.length===0)return;if(el.length>1)el=$(el[0]);app.swipeoutOpenedEl=undefined;el.trigger('delete swipeout:delete');el.css({height:el.outerHeight()+'px'});var clientLeft=el[0].clientLeft;el.css({height:0+'px'}).addClass('deleting transitioning').transitionEnd(function(){el.trigger('deleted swipeout:deleted');if(callback)callback.call(el[0]);if(el.parents('.virtual-list').length>0){var virtualList=el.parents('.virtual-list')[0].f7VirtualList;var virtualIndex=el[0].f7VirtualListIndex;if(virtualList&&typeof virtualIndex!=='undefined')virtualList.deleteItem(virtualIndex);}else{if(app.params.swipeoutRemoveWithTimeout){setTimeout(function(){el.remove();},0);}else el.remove();}});var translate='-100%';el.find('.swipeout-content').transform('translate3d('+translate+',0,0)');};/*===============================================================================
        ************   Sortable   ************
        ===============================================================================*/app.sortableToggle=function(sortableContainer){sortableContainer=$(sortableContainer);if(sortableContainer.length===0)sortableContainer=$('.list-block.sortable');sortableContainer.toggleClass('sortable-opened');if(sortableContainer.hasClass('sortable-opened')){sortableContainer.trigger('open sortable:open');}else{sortableContainer.trigger('close sortable:close');}return sortableContainer;};app.sortableOpen=function(sortableContainer){sortableContainer=$(sortableContainer);if(sortableContainer.length===0)sortableContainer=$('.list-block.sortable');sortableContainer.addClass('sortable-opened');sortableContainer.trigger('open sortable:open');return sortableContainer;};app.sortableClose=function(sortableContainer){sortableContainer=$(sortableContainer);if(sortableContainer.length===0)sortableContainer=$('.list-block.sortable');sortableContainer.removeClass('sortable-opened');sortableContainer.trigger('close sortable:close');return sortableContainer;};app.initSortable=function(){var isTouched,isMoved,touchStartY,touchesDiff,sortingEl,sortingElHeight,sortingItems,minTop,maxTop,insertAfter,insertBefore,sortableContainer,startIndex;function handleTouchStart(e){isMoved=false;isTouched=true;touchStartY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;/*jshint validthis:true */sortingEl=$(this).parent();startIndex=sortingEl.index();sortingItems=sortingEl.parent().children('li');sortableContainer=sortingEl.parents('.sortable');e.preventDefault();app.allowPanelOpen=app.allowSwipeout=false;}function handleTouchMove(e){if(!isTouched||!sortingEl)return;var pageX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;var pageY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(!isMoved){sortingEl.addClass('sorting');sortableContainer.addClass('sortable-sorting');minTop=sortingEl[0].offsetTop;maxTop=sortingEl.parent().height()-sortingEl[0].offsetTop-sortingEl.height();sortingElHeight=sortingEl[0].offsetHeight;}isMoved=true;e.preventDefault();e.f7PreventPanelSwipe=true;touchesDiff=pageY-touchStartY;var translate=touchesDiff;if(translate<-minTop)translate=-minTop;if(translate>maxTop)translate=maxTop;sortingEl.transform('translate3d(0,'+translate+'px,0)');insertBefore=insertAfter=undefined;sortingItems.each(function(){var currentEl=$(this);if(currentEl[0]===sortingEl[0])return;var currentElOffset=currentEl[0].offsetTop;var currentElHeight=currentEl.height();var sortingElOffset=sortingEl[0].offsetTop+translate;if(sortingElOffset>=currentElOffset-currentElHeight/2&&sortingEl.index()<currentEl.index()){currentEl.transform('translate3d(0, '+-sortingElHeight+'px,0)');insertAfter=currentEl;insertBefore=undefined;}else if(sortingElOffset<=currentElOffset+currentElHeight/2&&sortingEl.index()>currentEl.index()){currentEl.transform('translate3d(0, '+sortingElHeight+'px,0)');insertAfter=undefined;if(!insertBefore)insertBefore=currentEl;}else{$(this).transform('translate3d(0, 0%,0)');}});}function handleTouchEnd(e){app.allowPanelOpen=app.allowSwipeout=true;if(!isTouched||!isMoved){isTouched=false;isMoved=false;return;}e.preventDefault();sortingItems.transform('');sortingEl.removeClass('sorting');sortableContainer.removeClass('sortable-sorting');var virtualList,oldIndex,newIndex;if(insertAfter){sortingEl.insertAfter(insertAfter);sortingEl.trigger('sort sortable:sort',{startIndex:startIndex,newIndex:sortingEl.index()});}if(insertBefore){sortingEl.insertBefore(insertBefore);sortingEl.trigger('sort sortable:sort',{startIndex:startIndex,newIndex:sortingEl.index()});}if((insertAfter||insertBefore)&&sortableContainer.hasClass('virtual-list')){virtualList=sortableContainer[0].f7VirtualList;oldIndex=sortingEl[0].f7VirtualListIndex;newIndex=insertBefore?insertBefore[0].f7VirtualListIndex:insertAfter[0].f7VirtualListIndex;if(virtualList)virtualList.moveItem(oldIndex,newIndex);}insertAfter=insertBefore=undefined;isTouched=false;isMoved=false;}var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;$(document).on(app.touchEvents.start,'.list-block.sortable .sortable-handler',handleTouchStart,activeListener);if(app.support.touch){$(document).on(app.touchEvents.move,'.list-block.sortable .sortable-handler',handleTouchMove,activeListener);$(document).on(app.touchEvents.end,'.list-block.sortable .sortable-handler',handleTouchEnd,activeListener);}else{$(document).on(app.touchEvents.move,handleTouchMove,activeListener);$(document).on(app.touchEvents.end,handleTouchEnd,activeListener);}};/*===============================================================================
        ************   Smart Select   ************
        ===============================================================================*/app.initSmartSelects=function(pageContainer){pageContainer=$(pageContainer);var selects;if(pageContainer.is('.smart-select')){selects=pageContainer;}else{selects=pageContainer.find('.smart-select');}if(selects.length===0)return;selects.each(function(){var smartSelect=$(this);var $select=smartSelect.find('select');if($select.length===0)return;var select=$select[0];if(select.length===0)return;var valueText=[];var displayAs;for(var i=0;i<select.length;i++){if(select[i].selected){displayAs=select[i].dataset?select[i].dataset.displayAs:$(select[i]).data('display-as');if(displayAs&&typeof displayAs!=='undefined'){valueText.push(displayAs);}else{valueText.push(select[i].textContent.trim());}}}var itemAfter=smartSelect.find('.item-after');if(itemAfter.length===0){smartSelect.find('.item-inner').append('<div class="item-after">'+valueText.join(', ')+'</div>');}else{var selectedText=itemAfter.text();if(itemAfter.hasClass('smart-select-value')){for(i=0;i<select.length;i++){select[i].selected=select[i].textContent.trim()===selectedText.trim();}}else{itemAfter.text(valueText.join(', '));}}$select.on('change',function(){var valueText=[];for(var i=0;i<select.length;i++){if(select[i].selected){var displayAs=select[i].dataset?select[i].dataset.displayAs:$(select[i]).data('display-as');if(displayAs&&typeof displayAs!=='undefined'){valueText.push(displayAs);}else{valueText.push(select[i].textContent.trim());}}}smartSelect.find('.item-after').text(valueText.join(', '));});});};app.smartSelectAddOption=function(select,option,index){select=$(select);var smartSelect=select.parents('.smart-select');if(typeof index==='undefined'){select.append(option);}else{$(option).insertBefore(select.find('option').eq(index));}app.initSmartSelects(smartSelect);var selectName=smartSelect.find('select').attr('name');var opened=$('.page.smart-select-page[data-select-name="'+selectName+'"]').length>0;if(opened){app.smartSelectOpen(smartSelect,true);}};app.smartSelectOpen=function(smartSelect,reLayout){smartSelect=$(smartSelect);if(smartSelect.length===0)return;// Find related view
var view=smartSelect.parents('.'+app.params.viewClass);if(view.length===0)return;view=view[0].f7View;// Parameters
var openIn=smartSelect.attr('data-open-in')||app.params.smartSelectOpenIn;if(openIn==='popup'){if($('.popup.smart-select-popup').length>0)return;}else if(openIn==='picker'){if($('.picker-modal.modal-in').length>0&&!reLayout){if(smartSelect[0].f7SmartSelectPicker!==$('.picker-modal.modal-in:not(.modal-out)')[0])app.closeModal($('.picker-modal.modal-in:not(.modal-out)'));else return;}}else{if(!view)return;}var smartSelectData=smartSelect.dataset();var pageTitle=smartSelectData.pageTitle||smartSelect.find('.item-title').text();var backText=smartSelectData.backText||app.params.smartSelectBackText;var closeText;if(openIn==='picker'){closeText=smartSelectData.pickerCloseText||smartSelectData.backText||app.params.smartSelectPickerCloseText;}else{closeText=smartSelectData.popupCloseText||smartSelectData.backText||app.params.smartSelectPopupCloseText;}var backOnSelect=smartSelectData.backOnSelect!==undefined?smartSelectData.backOnSelect:app.params.smartSelectBackOnSelect;var formTheme=smartSelectData.formTheme||app.params.smartSelectFormTheme;var navbarTheme=smartSelectData.navbarTheme||app.params.smartSelectNavbarTheme;var toolbarTheme=smartSelectData.toolbarTheme||app.params.smartSelectToolbarTheme;var virtualList=smartSelectData.virtualList;var virtualListHeight=smartSelectData.virtualListHeight;var material=app.params.material;var pickerHeight=smartSelectData.pickerHeight||app.params.smartSelectPickerHeight;// Collect all options/values
var select=smartSelect.find('select')[0];var $select=$(select);var $selectData=$select.dataset();if(select.disabled||smartSelect.hasClass('disabled')||$select.hasClass('disabled')){return;}var values=[];var id=new Date().getTime();var inputType=select.multiple?'checkbox':'radio';var inputName=inputType+'-'+id;var maxLength=$select.attr('maxlength');var selectName=select.name;var option,optionHasMedia,optionImage,optionIcon,optionGroup,optionGroupLabel,optionPreviousGroup,optionIsLabel,previousGroup,optionColor,optionClassName,optionData;for(var i=0;i<select.length;i++){option=$(select[i]);optionData=option.dataset();optionImage=optionData.optionImage||$selectData.optionImage||smartSelectData.optionImage;optionIcon=optionData.optionIcon||$selectData.optionIcon||smartSelectData.optionIcon;optionHasMedia=optionImage||optionIcon||inputType==='checkbox';if(material)optionHasMedia=optionImage||optionIcon;optionColor=optionData.optionColor;optionClassName=optionData.optionClass;if(option[0].disabled)optionClassName+=' disabled';optionGroup=option.parent('optgroup')[0];optionGroupLabel=optionGroup&&optionGroup.label;optionIsLabel=false;if(optionGroup){if(optionGroup!==previousGroup){optionIsLabel=true;previousGroup=optionGroup;values.push({groupLabel:optionGroupLabel,isLabel:optionIsLabel});}}values.push({value:option[0].value,text:option[0].textContent.trim(),selected:option[0].selected,group:optionGroup,groupLabel:optionGroupLabel,image:optionImage,icon:optionIcon,color:optionColor,className:optionClassName,disabled:option[0].disabled,inputType:inputType,id:id,hasMedia:optionHasMedia,checkbox:inputType==='checkbox',inputName:inputName,material:app.params.material});}// Item template/HTML
if(!app._compiledTemplates.smartSelectItem){app._compiledTemplates.smartSelectItem=t7.compile(app.params.smartSelectItemTemplate||'{{#if isLabel}}'+'<li class="item-divider">{{groupLabel}}</li>'+'{{else}}'+'<li{{#if className}} class="{{className}}"{{/if}}>'+'<label class="label-{{inputType}} item-content">'+'<input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>'+'{{#if material}}'+'{{#if hasMedia}}'+'<div class="item-media">'+'{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}'+'{{#if image}}<img src="{{image}}">{{/if}}'+'</div>'+'<div class="item-inner">'+'<div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div>'+'</div>'+'<div class="item-after">'+'<i class="icon icon-form-{{inputType}}"></i>'+'</div>'+'{{else}}'+'<div class="item-media">'+'<i class="icon icon-form-{{inputType}}"></i>'+'</div>'+'<div class="item-inner">'+'<div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div>'+'</div>'+'{{/if}}'+'{{else}}'+'{{#if hasMedia}}'+'<div class="item-media">'+'{{#if checkbox}}<i class="icon icon-form-checkbox"></i>{{/if}}'+'{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}'+'{{#if image}}<img src="{{image}}">{{/if}}'+'</div>'+'{{/if}}'+'<div class="item-inner">'+'<div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div>'+'</div>'+'{{/if}}'+'</label>'+'</li>'+'{{/if}}');}var smartSelectItemTemplate=app._compiledTemplates.smartSelectItem;var inputsHTML='';if(!virtualList){for(var j=0;j<values.length;j++){inputsHTML+=smartSelectItemTemplate(values[j]);}}// Toolbar / Navbar
var toolbarHTML='',navbarHTML;var noNavbar='',noToolbar='',noTabbar='',navbarLayout;if(openIn==='picker'){if(!app._compiledTemplates.smartSelectToolbar){app._compiledTemplates.smartSelectToolbar=t7.compile(app.params.smartSelectToolbarTemplate||'<div class="toolbar {{#if toolbarTheme}}theme-{{toolbarTheme}}{{/if}}">'+'<div class="toolbar-inner">'+'<div class="left"></div>'+'<div class="right"><a href="#" class="link close-picker"><span>{{closeText}}</span></a></div>'+'</div>'+'</div>');}toolbarHTML=app._compiledTemplates.smartSelectToolbar({pageTitle:pageTitle,closeText:closeText,openIn:openIn,toolbarTheme:toolbarTheme,inPicker:openIn==='picker'});}else{// Navbar HTML
if(!app._compiledTemplates.smartSelectNavbar){app._compiledTemplates.smartSelectNavbar=t7.compile(app.params.smartSelectNavbarTemplate||'<div class="navbar {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}">'+'<div class="navbar-inner">'+'{{leftTemplate}}'+'<div class="center sliding">{{pageTitle}}</div>'+'</div>'+'</div>');}navbarHTML=app._compiledTemplates.smartSelectNavbar({pageTitle:pageTitle,backText:backText,closeText:closeText,openIn:openIn,navbarTheme:navbarTheme,inPopup:openIn==='popup',inPage:openIn==='page',leftTemplate:openIn==='popup'?(app.params.smartSelectPopupCloseTemplate||(material?'<div class="left"><a href="#" class="link close-popup icon-only"><i class="icon icon-back"></i></a></div>':'<div class="left"><a href="#" class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>')).replace(/{{closeText}}/g,closeText):(app.params.smartSelectBackTemplate||(material?'<div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>':'<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>')).replace(/{{backText}}/g,backText)});// Determine navbar layout type - static/fixed/through
if(openIn==='page'){navbarLayout='static';if(smartSelect.parents('.navbar-through').length>0)navbarLayout='through';if(smartSelect.parents('.navbar-fixed').length>0)navbarLayout='fixed';noToolbar=smartSelect.parents('.page').hasClass('no-toolbar')?'no-toolbar':'';noNavbar=smartSelect.parents('.page').hasClass('no-navbar')?'no-navbar':'navbar-'+navbarLayout;noTabbar=smartSelect.parents('.page').hasClass('no-tabbar')?'no-tabbar':'';}else{navbarLayout='fixed';}}// Page Layout
var pageName='smart-select-'+inputName;var useSearchbar=typeof smartSelect.data('searchbar')==='undefined'?app.params.smartSelectSearchbar:smartSelect.data('searchbar')==='true'?true:false;var searchbarPlaceholder,searchbarCancel;if(useSearchbar){searchbarPlaceholder=smartSelect.data('searchbar-placeholder')||'Search';searchbarCancel=smartSelect.data('searchbar-cancel')||'Cancel';}var searchbarHTML='<form class="searchbar searchbar-init" data-search-list=".smart-select-list-'+id+'" data-search-in=".item-title">'+'<div class="searchbar-input">'+'<input type="search" placeholder="'+searchbarPlaceholder+'">'+'<a href="#" class="searchbar-clear"></a>'+'</div>'+(material?'':'<a href="#" class="searchbar-cancel">'+searchbarCancel+'</a>')+'</form>'+'<div class="searchbar-overlay"></div>';var pageHTML=(openIn!=='picker'&&navbarLayout==='through'?navbarHTML:'')+'<div class="pages">'+'  <div data-page="'+pageName+'" data-select-name="'+selectName+'" class="page smart-select-page '+noNavbar+' '+noToolbar+' '+noTabbar+'">'+(openIn!=='picker'&&navbarLayout==='fixed'?navbarHTML:'')+(useSearchbar?searchbarHTML:'')+'    <div class="page-content">'+(openIn!=='picker'&&navbarLayout==='static'?navbarHTML:'')+'      <div class="list-block '+(virtualList?'virtual-list':'')+' smart-select-list-'+id+' '+(formTheme?'theme-'+formTheme:'')+'">'+'        <ul>'+(virtualList?'':inputsHTML)+'        </ul>'+'      </div>'+'    </div>'+'  </div>'+'</div>';// Define popup and picker
var popup,picker;// Scroll SS Picker To Input
function scrollToInput(){var pageContent=smartSelect.parents('.page-content');if(pageContent.length===0)return;var paddingTop=parseInt(pageContent.css('padding-top'),10),paddingBottom=parseInt(pageContent.css('padding-bottom'),10),pageHeight=pageContent[0].offsetHeight-paddingTop-picker.height(),pageScrollHeight=pageContent[0].scrollHeight-paddingTop-picker.height(),newPaddingBottom;var inputTop=smartSelect.offset().top-paddingTop+smartSelect[0].offsetHeight;if(inputTop>pageHeight){var scrollTop=pageContent.scrollTop()+inputTop-pageHeight;if(scrollTop+pageHeight>pageScrollHeight){newPaddingBottom=scrollTop+pageHeight-pageScrollHeight+paddingBottom;if(pageHeight===pageScrollHeight){newPaddingBottom=picker.height();}pageContent.css({'padding-bottom':newPaddingBottom+'px'});}pageContent.scrollTop(scrollTop,300);}}// Close SS Picker on HTML Click
function closeOnHTMLClick(e){var close=true;if(e.target===smartSelect[0]||$(e.target).parents(smartSelect[0]).length>0){close=false;}if($(e.target).parents('.picker-modal').length>0){close=false;}if(close){app.closeModal('.smart-select-picker.modal-in');}}// Check max length
function checkMaxLength(container){if(select.selectedOptions.length>=maxLength){container.find('input[type="checkbox"]').each(function(){if(!this.checked){$(this).parents('li').addClass('disabled');}else{$(this).parents('li').removeClass('disabled');}});}else{container.find('.disabled').removeClass('disabled');}}// Event Listeners on new page
function handleInputs(container){container=$(container);if(virtualList){var virtualListInstance=app.virtualList(container.find('.virtual-list'),{items:values,template:smartSelectItemTemplate,height:virtualListHeight||undefined,searchByItem:function searchByItem(query,index,item){if(item.text&&item.text.toLowerCase().indexOf(query.trim().toLowerCase())>=0)return true;return false;}});container.once(openIn==='popup'||openIn==='picker'?'closed':'pageBeforeRemove',function(){if(virtualListInstance&&virtualListInstance.destroy)virtualListInstance.destroy();});}if(maxLength){checkMaxLength(container);}if(backOnSelect){container.find('input[type="radio"][name="'+inputName+'"]:checked').parents('label').once('click',function(){if(openIn==='popup')app.closeModal(popup);else if(openIn==='picker')app.closeModal(picker);else view.router.back();});}container.on('change','input[name="'+inputName+'"]',function(){var option,text;var input=this;var value=input.value;var optionText=[];var displayAs;if(input.type==='checkbox'){var values=[];for(var i=0;i<select.options.length;i++){option=select.options[i];if(option.value===value){option.selected=input.checked;}if(option.selected){displayAs=option.dataset?option.dataset.displayAs:$(option).data('display-as');text=displayAs&&typeof displayAs!=='undefined'?displayAs:option.textContent;optionText.push(text.trim());}}if(maxLength){checkMaxLength(container);}}else{option=smartSelect.find('option[value="'+value+'"]')[0];displayAs=option.dataset?option.dataset.displayAs:$(option).data('display-as');text=displayAs&&typeof displayAs!=='undefined'?displayAs:option.textContent;optionText=[text];select.value=value;}$select.trigger('change');smartSelect.find('.item-after').text(optionText.join(', '));if(backOnSelect&&inputType==='radio'){if(openIn==='popup')app.closeModal(popup);else if(openIn==='picker')app.closeModal(picker);else view.router.back();}});}function pageInit(e){var page=e.detail.page;if(page.name===pageName){handleInputs(page.container);}}if(openIn==='popup'){if(reLayout){popup=$('.popup.smart-select-popup .view');popup.html(pageHTML);}else{popup=app.popup('<div class="popup smart-select-popup smart-select-popup-'+inputName+'">'+'<div class="view navbar-fixed">'+pageHTML+'</div>'+'</div>');popup=$(popup);}app.initPage(popup.find('.page'));handleInputs(popup);}else if(openIn==='picker'){if(reLayout){picker=$('.picker-modal.smart-select-picker .view');picker.html(pageHTML);}else{picker=app.pickerModal('<div class="picker-modal smart-select-picker smart-select-picker-'+inputName+'"'+(pickerHeight?' style="height:'+pickerHeight+'"':'')+'>'+toolbarHTML+'<div class="picker-modal-inner">'+'<div class="view">'+pageHTML+'</div>'+'</div>'+'</div>');picker=$(picker);// Scroll To Input
scrollToInput();// Close On Click
$('html').on('click',closeOnHTMLClick);// On Close
picker.once('picker:close',function(){// Reset linked picker
smartSelect[0].f7SmartSelectPicker=undefined;// Detach html click
$('html').off('click',closeOnHTMLClick);// Restore page padding bottom
smartSelect.parents('.page-content').css({paddingBottom:''});});// Link Picker
smartSelect[0].f7SmartSelectPicker=picker[0];}// Init Page
app.initPage(picker.find('.page'));// Attach events
handleInputs(picker);}else{$(document).once('page:init','.smart-select-page',pageInit);view.router.load({content:pageHTML,reload:reLayout?true:undefined});}};/*===============================================================================
        ************   Virtual List   ************
        ===============================================================================*/var VirtualList=function VirtualList(listBlock,params){var defaults={cols:1,height:app.params.material?48:44,cache:true,dynamicHeightBufferSize:1,showFilteredItemsOnly:false,renderExternal:undefined,template:'<li>'+'<div class="item-content">'+'<div class="item-inner">'+'<div class="item-title">{{this}}</div>'+'</div>'+'</div>'+'</li>'};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}}// Preparation
var vl=this;vl.listBlock=$(listBlock);vl.params=params;vl.items=vl.params.items;if(vl.params.showFilteredItemsOnly){vl.filteredItems=[];}if(vl.params.template&&!vl.params.renderItem){if(typeof vl.params.template==='string')vl.template=t7.compile(vl.params.template);else if(typeof vl.params.template==='function')vl.template=vl.params.template;}vl.pageContent=vl.listBlock.parents('.page-content');// Bad scroll
var updatableScroll;if(typeof vl.params.updatableScroll!=='undefined'){updatableScroll=vl.params.updatableScroll;}else{updatableScroll=true;if(app.device.ios&&app.device.osVersion.split('.')[0]<8){updatableScroll=false;}vl.params.updatableScroll=updatableScroll;}// Append <ul>
vl.ul=vl.params.ul?$(vl.params.ul):vl.listBlock.children('ul');if(vl.ul.length===0){vl.listBlock.append('<ul></ul>');vl.ul=vl.listBlock.children('ul');}// DOM cached items
vl.domCache={};vl.displayDomCache={};// Temporary DOM Element
vl.tempDomElement=document.createElement('ul');// Last repain position
vl.lastRepaintY=null;// Fragment
vl.fragment=document.createDocumentFragment();// Filter
vl.filterItems=function(indexes,resetScrollTop){vl.filteredItems=[];var firstIndex=indexes[0];var lastIndex=indexes[indexes.length-1];for(var i=0;i<indexes.length;i++){vl.filteredItems.push(vl.items[indexes[i]]);}if(typeof resetScrollTop==='undefined')resetScrollTop=true;if(resetScrollTop){vl.pageContent[0].scrollTop=0;}vl.update();};vl.resetFilter=function(){if(vl.params.showFilteredItemsOnly){vl.filteredItems=[];}else{vl.filteredItems=null;delete vl.filteredItems;}vl.update();};var pageHeight,rowsPerScreen,rowsBefore,rowsAfter,rowsToRender,maxBufferHeight=0,listHeight;var dynamicHeight=typeof vl.params.height==='function';// Set list size
vl.setListSize=function(){var items=vl.filteredItems||vl.items;pageHeight=vl.pageContent[0].offsetHeight;if(dynamicHeight){listHeight=0;vl.heights=[];for(var i=0;i<items.length;i++){var itemHeight=vl.params.height(items[i]);listHeight+=itemHeight;vl.heights.push(itemHeight);}}else{listHeight=Math.ceil(items.length/vl.params.cols)*vl.params.height;rowsPerScreen=Math.ceil(pageHeight/vl.params.height);rowsBefore=vl.params.rowsBefore||rowsPerScreen*2;rowsAfter=vl.params.rowsAfter||rowsPerScreen;rowsToRender=rowsPerScreen+rowsBefore+rowsAfter;maxBufferHeight=rowsBefore/2*vl.params.height;}if(updatableScroll){vl.ul.css({height:listHeight+'px'});}};// Render items
vl.render=function(force,forceScrollTop){if(force)vl.lastRepaintY=null;var scrollTop=-(vl.listBlock[0].getBoundingClientRect().top-vl.pageContent[0].getBoundingClientRect().top);if(typeof forceScrollTop!=='undefined')scrollTop=forceScrollTop;if(vl.lastRepaintY===null||Math.abs(scrollTop-vl.lastRepaintY)>maxBufferHeight||!updatableScroll&&vl.pageContent[0].scrollTop+pageHeight>=vl.pageContent[0].scrollHeight){vl.lastRepaintY=scrollTop;}else{return;}var items=vl.filteredItems||vl.items,fromIndex,toIndex,heightBeforeFirstItem=0,heightBeforeLastItem=0;if(dynamicHeight){var itemTop=0,j,itemHeight;maxBufferHeight=pageHeight;for(j=0;j<vl.heights.length;j++){itemHeight=vl.heights[j];if(typeof fromIndex==='undefined'){if(itemTop+itemHeight>=scrollTop-pageHeight*2*vl.params.dynamicHeightBufferSize)fromIndex=j;else heightBeforeFirstItem+=itemHeight;}if(typeof toIndex==='undefined'){if(itemTop+itemHeight>=scrollTop+pageHeight*2*vl.params.dynamicHeightBufferSize||j===vl.heights.length-1)toIndex=j+1;heightBeforeLastItem+=itemHeight;}itemTop+=itemHeight;}toIndex=Math.min(toIndex,items.length);}else{fromIndex=(parseInt(scrollTop/vl.params.height)-rowsBefore)*vl.params.cols;if(fromIndex<0){fromIndex=0;}toIndex=Math.min(fromIndex+rowsToRender*vl.params.cols,items.length);}var topPosition,renderExternalItems=[];vl.reachEnd=false;for(var i=fromIndex;i<toIndex;i++){var item,index;// Define real item index
index=vl.items.indexOf(items[i]);if(i===fromIndex)vl.currentFromIndex=index;if(i===toIndex-1)vl.currentToIndex=index;if(vl.filteredItems){if(vl.items[index]===vl.filteredItems[vl.filteredItems.length-1])vl.reachEnd=true;}else{if(index===vl.items.length-1)vl.reachEnd=true;}// Find items
if(vl.params.renderExternal){renderExternalItems.push(items[i]);}else{if(vl.domCache[index]){item=vl.domCache[index];item.f7VirtualListIndex=index;}else{if(vl.template&&!vl.params.renderItem){vl.tempDomElement.innerHTML=vl.template(items[i],{index:index}).trim();}else if(vl.params.renderItem){vl.tempDomElement.innerHTML=vl.params.renderItem(index,items[i]).trim();}else{vl.tempDomElement.innerHTML=items[i].toString().trim();}item=vl.tempDomElement.childNodes[0];if(vl.params.cache)vl.domCache[index]=item;item.f7VirtualListIndex=index;}}// Set item top position
if(i===fromIndex){if(dynamicHeight){topPosition=heightBeforeFirstItem;}else{topPosition=i*vl.params.height/vl.params.cols;}}if(!vl.params.renderExternal){item.style.top=topPosition+'px';// Before item insert
if(vl.params.onItemBeforeInsert)vl.params.onItemBeforeInsert(vl,item);// Append item to fragment
vl.fragment.appendChild(item);}}// Update list height with not updatable scroll
if(!updatableScroll){if(dynamicHeight){vl.ul[0].style.height=heightBeforeLastItem+'px';}else{vl.ul[0].style.height=i*vl.params.height/vl.params.cols+'px';}}// Update list html
if(vl.params.renderExternal){if(items&&items.length===0){vl.reachEnd=true;}}else{if(vl.params.onBeforeClear)vl.params.onBeforeClear(vl,vl.fragment);vl.ul[0].innerHTML='';if(vl.params.onItemsBeforeInsert)vl.params.onItemsBeforeInsert(vl,vl.fragment);if(items&&items.length===0){vl.reachEnd=true;if(vl.params.emptyTemplate)vl.ul[0].innerHTML=vl.params.emptyTemplate;}else{vl.ul[0].appendChild(vl.fragment);}if(vl.params.onItemsAfterInsert)vl.params.onItemsAfterInsert(vl,vl.fragment);}if(typeof forceScrollTop!=='undefined'&&force){vl.pageContent.scrollTop(forceScrollTop,0);}if(vl.params.renderExternal){vl.params.renderExternal(vl,{fromIndex:fromIndex,toIndex:toIndex,listHeight:listHeight,topPosition:topPosition,items:renderExternalItems});}};vl.scrollToItem=function(index){if(index>vl.items.length)return false;var itemTop=0,listTop;if(dynamicHeight){for(var i=0;i<index;i++){itemTop+=vl.heights[i];}}else{itemTop=index*vl.params.height;}listTop=vl.listBlock[0].offsetTop;vl.render(true,listTop+itemTop-parseInt(vl.pageContent.css('padding-top'),10));return true;};// Handle scroll event
vl.handleScroll=function(e){vl.render();};// Handle resize event
vl._isVisible=function(el){return!!(el.offsetWidth||el.offsetHeight||el.getClientRects().length);};vl.handleResize=function(e){if(vl._isVisible(vl.listBlock[0])){vl.setListSize();vl.render(true);}};vl.attachEvents=function(detach){var action=detach?'off':'on';vl.pageContent[action]('scroll',vl.handleScroll);vl.listBlock.parents('.tab').eq(0)[action]('tab:show',vl.handleResize);vl.listBlock.parents('.panel').eq(0)[action]('panel:open',vl.handleResize);vl.listBlock.parents('.popup').eq(0)[action]('popup:open',vl.handleResize);app[action==='on'?'onResize':'offResize'](vl.handleResize);};// Init Virtual List
vl.init=function(){vl.attachEvents();vl.setListSize();vl.render();};// Append
vl.appendItems=function(items){for(var i=0;i<items.length;i++){vl.items.push(items[i]);}vl.update();};vl.appendItem=function(item){vl.appendItems([item]);};// Replace
vl.replaceAllItems=function(items){vl.items=items;delete vl.filteredItems;vl.domCache={};vl.update();};vl.replaceItem=function(index,item){vl.items[index]=item;if(vl.params.cache)delete vl.domCache[index];vl.update();};// Prepend
vl.prependItems=function(items){for(var i=items.length-1;i>=0;i--){vl.items.unshift(items[i]);}if(vl.params.cache){var newCache={};for(var cached in vl.domCache){newCache[parseInt(cached,10)+items.length]=vl.domCache[cached];}vl.domCache=newCache;}vl.update();};vl.prependItem=function(item){vl.prependItems([item]);};// Move
vl.moveItem=function(oldIndex,newIndex){if(oldIndex===newIndex)return;// remove item from array
var item=vl.items.splice(oldIndex,1)[0];if(newIndex>=vl.items.length){// Add item to the end
vl.items.push(item);newIndex=vl.items.length-1;}else{// Add item to new index
vl.items.splice(newIndex,0,item);}// Update cache
if(vl.params.cache){var newCache={};for(var cached in vl.domCache){var cachedIndex=parseInt(cached,10);var leftIndex=oldIndex<newIndex?oldIndex:newIndex;var rightIndex=oldIndex<newIndex?newIndex:oldIndex;var indexShift=oldIndex<newIndex?-1:1;if(cachedIndex<leftIndex||cachedIndex>rightIndex)newCache[cachedIndex]=vl.domCache[cachedIndex];if(cachedIndex===leftIndex)newCache[rightIndex]=vl.domCache[cachedIndex];if(cachedIndex>leftIndex&&cachedIndex<=rightIndex)newCache[cachedIndex+indexShift]=vl.domCache[cachedIndex];}vl.domCache=newCache;}vl.update();};// Insert before
vl.insertItemBefore=function(index,item){if(index===0){vl.prependItem(item);return;}if(index>=vl.items.length){vl.appendItem(item);return;}vl.items.splice(index,0,item);// Update cache
if(vl.params.cache){var newCache={};for(var cached in vl.domCache){var cachedIndex=parseInt(cached,10);if(cachedIndex>=index){newCache[cachedIndex+1]=vl.domCache[cachedIndex];}}vl.domCache=newCache;}vl.update();};// Delete
vl.deleteItems=function(indexes){var prevIndex,indexShift=0;for(var i=0;i<indexes.length;i++){var index=indexes[i];if(typeof prevIndex!=='undefined'){if(index>prevIndex){indexShift=-i;}}index=index+indexShift;prevIndex=indexes[i];// Delete item
var deletedItem=vl.items.splice(index,1)[0];// Delete from filtered
if(vl.filteredItems&&vl.filteredItems.indexOf(deletedItem)>=0){vl.filteredItems.splice(vl.filteredItems.indexOf(deletedItem),1);}// Update cache
if(vl.params.cache){var newCache={};for(var cached in vl.domCache){var cachedIndex=parseInt(cached,10);if(cachedIndex===index){delete vl.domCache[index];}else if(parseInt(cached,10)>index){newCache[cachedIndex-1]=vl.domCache[cached];}else{newCache[cachedIndex]=vl.domCache[cached];}}vl.domCache=newCache;}}vl.update();};vl.deleteAllItems=function(){vl.items=[];delete vl.filteredItems;if(vl.params.cache)vl.domCache={};vl.update();};vl.deleteItem=function(index){vl.deleteItems([index]);};// Clear cache
vl.clearCache=function(){vl.domCache={};};// Update Virtual List
vl.update=function(){vl.setListSize();vl.render(true);};// Destroy
vl.destroy=function(){vl.attachEvents(true);delete vl.items;delete vl.domCache;};// Init Virtual List
vl.init();// Store vl in container
vl.listBlock[0].f7VirtualList=vl;return vl;};// App Method
app.virtualList=function(listBlock,params){return new VirtualList(listBlock,params);};app.reinitVirtualList=function(pageContainer){var page=$(pageContainer);var vlists=page.find('.virtual-list');if(vlists.length===0)return;for(var i=0;i<vlists.length;i++){var vlistInstance=vlists[i].f7VirtualList;if(vlistInstance){vlistInstance.update();}}};/*======================================================
        ************   Pull To Refresh   ************
        ======================================================*/app.initPullToRefresh=function(pageContainer){var eventsTarget=$(pageContainer);if(!eventsTarget.hasClass('pull-to-refresh-content')){eventsTarget=eventsTarget.find('.pull-to-refresh-content');}if(!eventsTarget||eventsTarget.length===0)return;var touchId,isTouched,isMoved,touchesStart={},isScrolling,touchesDiff,touchStartTime,container,refresh=false,useTranslate=false,startTranslate=0,translate,scrollTop,wasScrolled,layer,triggerDistance,dynamicTriggerDistance,pullStarted;var page=eventsTarget.hasClass('page')?eventsTarget:eventsTarget.parents('.page');var hasNavbar=false;if(page.find('.navbar').length>0||page.parents('.navbar-fixed, .navbar-through').length>0||page.hasClass('navbar-fixed')||page.hasClass('navbar-through'))hasNavbar=true;if(page.hasClass('no-navbar'))hasNavbar=false;if(!hasNavbar)eventsTarget.addClass('pull-to-refresh-no-navbar');container=eventsTarget;// Define trigger distance
if(container.attr('data-ptr-distance')){dynamicTriggerDistance=true;}else{triggerDistance=44;}function handleTouchStart(e){if(isTouched){if(app.device.os==='android'){if('targetTouches'in e&&e.targetTouches.length>1)return;}else return;}/*jshint validthis:true */container=$(this);if(container.hasClass('refreshing')){return;}isMoved=false;pullStarted=false;isTouched=true;isScrolling=undefined;wasScrolled=undefined;if(e.type==='touchstart')touchId=e.targetTouches[0].identifier;touchesStart.x=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;touchesStart.y=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;touchStartTime=new Date().getTime();}function handleTouchMove(e){if(!isTouched)return;var pageX,pageY,touch;if(e.type==='touchmove'){if(touchId&&e.touches){for(var i=0;i<e.touches.length;i++){if(e.touches[i].identifier===touchId){touch=e.touches[i];}}}if(!touch)touch=e.targetTouches[0];pageX=touch.pageX;pageY=touch.pageY;}else{pageX=e.pageX;pageY=e.pageY;}if(!pageX||!pageY)return;if(typeof isScrolling==='undefined'){isScrolling=!!(isScrolling||Math.abs(pageY-touchesStart.y)>Math.abs(pageX-touchesStart.x));}if(!isScrolling){isTouched=false;return;}scrollTop=container[0].scrollTop;if(typeof wasScrolled==='undefined'&&scrollTop!==0)wasScrolled=true;if(!isMoved){/*jshint validthis:true */container.removeClass('transitioning');if(scrollTop>container[0].offsetHeight){isTouched=false;return;}if(dynamicTriggerDistance){triggerDistance=container.attr('data-ptr-distance');if(triggerDistance.indexOf('%')>=0)triggerDistance=container[0].offsetHeight*parseInt(triggerDistance,10)/100;}startTranslate=container.hasClass('refreshing')?triggerDistance:0;if(container[0].scrollHeight===container[0].offsetHeight||app.device.os!=='ios'){useTranslate=true;}else{useTranslate=false;}}isMoved=true;touchesDiff=pageY-touchesStart.y;if(touchesDiff>0&&scrollTop<=0||scrollTop<0){// iOS 8 fix
if(app.device.os==='ios'&&parseInt(app.device.osVersion.split('.')[0],10)>7&&scrollTop===0&&!wasScrolled)useTranslate=true;if(useTranslate){e.preventDefault();translate=Math.pow(touchesDiff,0.85)+startTranslate;container.transform('translate3d(0,'+translate+'px,0)');}if(useTranslate&&Math.pow(touchesDiff,0.85)>triggerDistance||!useTranslate&&touchesDiff>=triggerDistance*2){refresh=true;container.addClass('pull-up').removeClass('pull-down');}else{refresh=false;container.removeClass('pull-up').addClass('pull-down');}if(!pullStarted){container.trigger('pullstart ptr:pullstart');pullStarted=true;}container.trigger('pullmove ptr:pullmove',{event:e,scrollTop:scrollTop,translate:translate,touchesDiff:touchesDiff});}else{pullStarted=false;container.removeClass('pull-up pull-down');refresh=false;return;}}function handleTouchEnd(e){if(e.type==='touchend'&&e.changedTouches&&e.changedTouches.length>0&&touchId){if(e.changedTouches[0].identifier!==touchId)return;}if(!isTouched||!isMoved){isTouched=false;isMoved=false;return;}if(translate){container.addClass('transitioning');translate=0;}container.transform('');if(refresh){container.addClass('refreshing');container.trigger('refresh ptr:refresh',{done:function done(){app.pullToRefreshDone(container);}});}else{container.removeClass('pull-down');}isTouched=false;isMoved=false;if(pullStarted)container.trigger('pullend ptr:pullend');}// Attach Events
var passiveListener=app.touchEvents.start==='touchstart'&&app.support.passiveListener?{passive:true,capture:false}:false;var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;eventsTarget.on(app.touchEvents.start,handleTouchStart,passiveListener);eventsTarget.on(app.touchEvents.move,handleTouchMove,activeListener);eventsTarget.on(app.touchEvents.end,handleTouchEnd,passiveListener);// Detach Events on page remove
if(page.length===0)return;function destroyPullToRefresh(destroyTarget){destroyTarget.off(app.touchEvents.start,handleTouchStart,passiveListener);destroyTarget.off(app.touchEvents.move,handleTouchMove,activeListener);destroyTarget.off(app.touchEvents.end,handleTouchEnd,passiveListener);}for(var i=0;i<eventsTarget.length;i++){eventsTarget[i].f7DestroyPullToRefresh=destroyPullToRefresh;}function detachEvents(){destroyPullToRefresh(eventsTarget);page.off('page:beforeremove',detachEvents);}page.on('page:beforeremove',detachEvents);};app.pullToRefreshDone=function(container){container=$(container);if(container.length===0)container=$('.pull-to-refresh-content.refreshing');container.removeClass('refreshing').addClass('transitioning');container.transitionEnd(function(){container.removeClass('transitioning pull-up pull-down');container.trigger('refreshdone ptr:done');});};app.pullToRefreshTrigger=function(container){container=$(container);if(container.length===0)container=$('.pull-to-refresh-content');if(container.hasClass('refreshing'))return;container.addClass('transitioning refreshing');container.trigger('refresh ptr:refresh',{done:function done(){app.pullToRefreshDone(container);}});};app.destroyPullToRefresh=function(pageContainer){pageContainer=$(pageContainer);var pullToRefreshContent=pageContainer.hasClass('pull-to-refresh-content')?pageContainer:pageContainer.find('.pull-to-refresh-content');if(pullToRefreshContent.length===0)return;if(pullToRefreshContent[0].f7DestroyPullToRefresh)pullToRefreshContent[0].f7DestroyPullToRefresh(pageContainer);};/* ===============================================================================
        ************   Infinite Scroll   ************
        =============================================================================== */function handleInfiniteScroll(){/*jshint validthis:true */var inf=$(this);var scrollTop=inf[0].scrollTop;var scrollHeight=inf[0].scrollHeight;var height=inf[0].offsetHeight;var distance=inf[0].getAttribute('data-distance');var virtualListContainer=inf.find('.virtual-list');var virtualList;var onTop=inf.hasClass('infinite-scroll-top');if(!distance)distance=50;if(typeof distance==='string'&&distance.indexOf('%')>=0){distance=parseInt(distance,10)/100*height;}if(distance>height)distance=height;if(onTop){if(scrollTop<distance){inf.trigger('infinite');}}else{if(scrollTop+height>=scrollHeight-distance){if(virtualListContainer.length>0){virtualList=virtualListContainer.eq(-1)[0].f7VirtualList;if(virtualList&&!virtualList.reachEnd&&!virtualList.params.updatableScroll){return;}}inf.trigger('infinite');}}}app.attachInfiniteScroll=function(infiniteContent){$(infiniteContent).on('scroll',handleInfiniteScroll);};app.detachInfiniteScroll=function(infiniteContent){$(infiniteContent).off('scroll',handleInfiniteScroll);};app.initPageInfiniteScroll=function(pageContainer){pageContainer=$(pageContainer);var infiniteContent=pageContainer.find('.infinite-scroll');if(infiniteContent.length===0)return;app.attachInfiniteScroll(infiniteContent);function detachEvents(){app.detachInfiniteScroll(infiniteContent);pageContainer.off('page:beforeremove',detachEvents);}pageContainer.on('page:beforeremove',detachEvents);};/*=============================================================
        ************   Hide/show Toolbar/Navbar on scroll   ************
        =============================================================*/app.initPageScrollToolbars=function(pageContainer){pageContainer=$(pageContainer);var scrollContent=pageContainer.find('.page-content');if(scrollContent.length===0)return;var hideNavbar=(app.params.hideNavbarOnPageScroll||scrollContent.hasClass('hide-navbar-on-scroll')||scrollContent.hasClass('hide-bars-on-scroll'))&&!(scrollContent.hasClass('keep-navbar-on-scroll')||scrollContent.hasClass('keep-bars-on-scroll'));var hideToolbar=(app.params.hideToolbarOnPageScroll||scrollContent.hasClass('hide-toolbar-on-scroll')||scrollContent.hasClass('hide-bars-on-scroll'))&&!(scrollContent.hasClass('keep-toolbar-on-scroll')||scrollContent.hasClass('keep-bars-on-scroll'));var hideTabbar=(app.params.hideTabbarOnPageScroll||scrollContent.hasClass('hide-tabbar-on-scroll'))&&!scrollContent.hasClass('keep-tabbar-on-scroll');if(!(hideNavbar||hideToolbar||hideTabbar))return;var viewContainer=scrollContent.parents('.'+app.params.viewClass);if(viewContainer.length===0)return;var navbar=viewContainer.find('.navbar'),toolbar=viewContainer.find('.toolbar'),tabbar;if(hideTabbar){tabbar=viewContainer.find('.tabbar');if(tabbar.length===0)tabbar=viewContainer.parents('.'+app.params.viewsClass).find('.tabbar');}var hasNavbar=navbar.length>0,hasToolbar=toolbar.length>0,hasTabbar=tabbar&&tabbar.length>0;var previousScroll,currentScroll;previousScroll=currentScroll=scrollContent[0].scrollTop;var scrollHeight,offsetHeight,reachEnd,action,navbarHidden,toolbarHidden,tabbarHidden;var toolbarHeight=hasToolbar&&hideToolbar?toolbar[0].offsetHeight:0;var tabbarHeight=hasTabbar&&hideTabbar?tabbar[0].offsetHeight:0;var bottomBarHeight=tabbarHeight||toolbarHeight;function handleScroll(e){if(pageContainer.hasClass('page-on-left'))return;currentScroll=scrollContent[0].scrollTop;scrollHeight=scrollContent[0].scrollHeight;offsetHeight=scrollContent[0].offsetHeight;reachEnd=currentScroll+offsetHeight>=scrollHeight-bottomBarHeight;navbarHidden=navbar.hasClass('navbar-hidden');toolbarHidden=toolbar.hasClass('toolbar-hidden');tabbarHidden=tabbar&&tabbar.hasClass('toolbar-hidden');if(reachEnd){if(app.params.showBarsOnPageScrollEnd){action='show';}}else if(previousScroll>currentScroll){if(app.params.showBarsOnPageScrollTop||currentScroll<=44){action='show';}else{action='hide';}}else{if(currentScroll>44){action='hide';}else{action='show';}}if(action==='show'){if(hasNavbar&&hideNavbar&&navbarHidden){app.showNavbar(navbar);pageContainer.removeClass('no-navbar-by-scroll');navbarHidden=false;}if(hasToolbar&&hideToolbar&&toolbarHidden){app.showToolbar(toolbar);pageContainer.removeClass('no-toolbar-by-scroll');toolbarHidden=false;}if(hasTabbar&&hideTabbar&&tabbarHidden){app.showToolbar(tabbar);pageContainer.removeClass('no-tabbar-by-scroll');tabbarHidden=false;}}else{if(hasNavbar&&hideNavbar&&!navbarHidden){app.hideNavbar(navbar);pageContainer.addClass('no-navbar-by-scroll');navbarHidden=true;}if(hasToolbar&&hideToolbar&&!toolbarHidden){app.hideToolbar(toolbar);pageContainer.addClass('no-toolbar-by-scroll');toolbarHidden=true;}if(hasTabbar&&hideTabbar&&!tabbarHidden){app.hideToolbar(tabbar);pageContainer.addClass('no-tabbar-by-scroll');tabbarHidden=true;}}previousScroll=currentScroll;}scrollContent.on('scroll',handleScroll);scrollContent[0].f7ScrollToolbarsHandler=handleScroll;};app.destroyScrollToolbars=function(pageContainer){pageContainer=$(pageContainer);var scrollContent=pageContainer.find('.page-content');if(scrollContent.length===0)return;var handler=scrollContent[0].f7ScrollToolbarsHandler;if(!handler)return;scrollContent.off('scroll',scrollContent[0].f7ScrollToolbarsHandler);};/*======================================================
        ************   Material Tabbar   ************
        ======================================================*/app.materialTabbarSetHighlight=function(tabbar,activeLink){$(tabbar).each(function(){var tabbar=$(this);activeLink=activeLink||tabbar.find('.tab-link.active');if(activeLink&&activeLink.length>0){var tabLinkWidth,highlightTranslate;if(tabbar.hasClass('tabbar-scrollable')){tabLinkWidth=activeLink[0].offsetWidth+'px';highlightTranslate=activeLink[0].offsetLeft+'px';}else{tabLinkWidth=1/tabbar.find('.tab-link').length*100+'%';highlightTranslate=(app.rtl?-activeLink.index():activeLink.index())*100+'%';}tabbar.find('.tab-link-highlight').css({width:tabLinkWidth}).transform('translate3d('+highlightTranslate+',0,0)');}});};app.initPageMaterialTabbar=function(pageContainer){pageContainer=$(pageContainer);var tabbar=pageContainer.find('.tabbar');if(tabbar.length===0&&pageContainer.hasClass('tabbar'))tabbar=pageContainer;function tabbarSetHighlight(){app.materialTabbarSetHighlight(tabbar);}if(tabbar.length>0){if(tabbar.find('.tab-link-highlight').length===0){tabbar.find('.toolbar-inner').append('<span class="tab-link-highlight"></span>');}tabbarSetHighlight();app.onResize(tabbarSetHighlight);pageContainer.once('page:beforeremove',function(){app.offResize(tabbarSetHighlight);});}};app.initMaterialTabbar=function(tabbar){return app.initPageMaterialTabbar(tabbar);};/* ===============================================================================
        ************   Tabs   ************
        =============================================================================== */app.showTab=function(tab,tabLink,animated,force){var newTab=$(tab);if(arguments.length===2&&typeof arguments[1]==='boolean'){tab=arguments[0];animated=arguments[1];}if(arguments.length===3&&typeof arguments[1]==='boolean'&&typeof arguments[2]==='boolean'){tab=arguments[0];animated=arguments[1];force=arguments[2];}if(typeof animated==='undefined')animated=true;if(newTab.length===0)return false;if(newTab.hasClass('active')){if(force)newTab.trigger('show tab:show');return false;}var tabs=newTab.parent('.tabs');if(tabs.length===0)return false;// Return swipeouts in hidden tabs
app.allowSwipeout=true;// Animated tabs
var isAnimatedTabs=tabs.parent().hasClass('tabs-animated-wrap');if(isAnimatedTabs){tabs.parent()[animated?'removeClass':'addClass']('not-animated');var tabTranslate=(app.rtl?newTab.index():-newTab.index())*100;tabs.transform('translate3d('+tabTranslate+'%,0,0)');}// Swipeable tabs
var isSwipeableTabs=tabs.parent().hasClass('tabs-swipeable-wrap'),swiper;if(isSwipeableTabs){swiper=tabs.parent()[0].swiper;if(swiper.activeIndex!==newTab.index())swiper.slideTo(newTab.index(),animated?undefined:0,false);}// Remove active class from old tabs
var oldTab=tabs.children('.tab.active').removeClass('active').trigger('hide tab:hide');// Add active class to new tab
newTab.addClass('active');// Trigger 'show' event on new tab
newTab.trigger('show tab:show');// Update navbars in new tab
if(!isAnimatedTabs&&!isSwipeableTabs&&newTab.find('.navbar').length>0){// Find tab's view
var viewContainer;if(newTab.hasClass(app.params.viewClass))viewContainer=newTab[0];else viewContainer=newTab.parents('.'+app.params.viewClass)[0];app.sizeNavbars(viewContainer);}// Find related link for new tab
if(tabLink)tabLink=$(tabLink);else{// Search by id
if(typeof tab==='string')tabLink=$('.tab-link[href="'+tab+'"]');else tabLink=$('.tab-link[href="#'+newTab.attr('id')+'"]');// Search by data-tab
if(!tabLink||tabLink&&tabLink.length===0){$('[data-tab]').each(function(){if(newTab.is($(this).attr('data-tab')))tabLink=$(this);});}}if(tabLink.length===0)return;// Find related link for old tab
var oldTabLink;if(oldTab&&oldTab.length>0){// Search by id
var oldTabId=oldTab.attr('id');if(oldTabId)oldTabLink=$('.tab-link[href="#'+oldTabId+'"]');// Search by data-tab
if(!oldTabLink||oldTabLink&&oldTabLink.length===0){$('[data-tab]').each(function(){if(oldTab.is($(this).attr('data-tab')))oldTabLink=$(this);});}}// Update links' classes
if(tabLink&&tabLink.length>0){tabLink.addClass('active');// Material Highlight
if(app.params.material){var tabbar=tabLink.parents('.tabbar');if(tabbar.length>0){if(tabbar.find('.tab-link-highlight').length===0){tabbar.find('.toolbar-inner').append('<span class="tab-link-highlight"></span>');}app.materialTabbarSetHighlight(tabbar,tabLink);}}}if(oldTabLink&&oldTabLink.length>0)oldTabLink.removeClass('active');return true;};/*===============================================================================
        ************   Accordion   ************
        ===============================================================================*/app.accordionToggle=function(item){item=$(item);if(item.length===0)return;if(item.hasClass('accordion-item-expanded'))app.accordionClose(item);else app.accordionOpen(item);};app.accordionOpen=function(item){item=$(item);var list=item.parents('.accordion-list').eq(0);var content=item.children('.accordion-item-content');if(content.length===0)content=item.find('.accordion-item-content');var expandedItem=list.length>0&&item.parent().children('.accordion-item-expanded');if(expandedItem.length>0){app.accordionClose(expandedItem);}content.css('height',content[0].scrollHeight+'px').transitionEnd(function(){if(item.hasClass('accordion-item-expanded')){content.transition(0);content.css('height','auto');var clientLeft=content[0].clientLeft;content.transition('');item.trigger('opened accordion:opened');}else{content.css('height','');item.trigger('closed accordion:closed');}});item.trigger('open accordion:open');item.addClass('accordion-item-expanded');};app.accordionClose=function(item){item=$(item);var content=item.children('.accordion-item-content');if(content.length===0)content=item.find('.accordion-item-content');item.removeClass('accordion-item-expanded');content.transition(0);content.css('height',content[0].scrollHeight+'px');// Relayout
var clientLeft=content[0].clientLeft;// Close
content.transition('');content.css('height','').transitionEnd(function(){if(item.hasClass('accordion-item-expanded')){content.transition(0);content.css('height','auto');var clientLeft=content[0].clientLeft;content.transition('');item.trigger('opened accordion:opened');}else{content.css('height','');item.trigger('closed accordion:closed');}});item.trigger('close accordion:close');};/*===============================================================================
        ************   Fast Clicks   ************
        ************   Inspired by https://github.com/ftlabs/fastclick   ************
        ===============================================================================*/app.initFastClicks=function(){if(app.params.activeState){$('html').addClass('watch-active-state');}if(app.device.ios&&app.device.webView){// Strange hack required for iOS 8 webview to work on inputs
window.addEventListener('touchstart',function(){});}var touchStartX,touchStartY,touchStartTime,targetElement,trackClick,activeSelection,scrollParent,lastClickTime,isMoved,tapHoldFired,tapHoldTimeout;var activableElement,activeTimeout,needsFastClick,needsFastClickTimeOut;var rippleWave,rippleTarget,rippleTransform,rippleTimeout;function findActivableElement(el){var target=$(el);var parents=target.parents(app.params.activeStateElements);var activable;if(target.is(app.params.activeStateElements)){activable=target;}if(parents.length>0){activable=activable?activable.add(parents):parents;}return activable?activable:target;}function isInsideScrollableView(el){var pageContent=el.parents('.page-content, .panel');if(pageContent.length===0){return false;}// This event handler covers the "tap to stop scrolling".
if(pageContent.prop('scrollHandlerSet')!=='yes'){pageContent.on('scroll',function(){clearTimeout(activeTimeout);clearTimeout(rippleTimeout);});pageContent.prop('scrollHandlerSet','yes');}return true;}function addActive(){if(!activableElement)return;activableElement.addClass('active-state');}function removeActive(el){if(!activableElement)return;activableElement.removeClass('active-state');activableElement=null;}function isFormElement(el){var nodes='input select textarea label'.split(' ');if(el.nodeName&&nodes.indexOf(el.nodeName.toLowerCase())>=0)return true;return false;}function androidNeedsBlur(el){var noBlur='button input textarea select'.split(' ');if(document.activeElement&&el!==document.activeElement&&document.activeElement!==document.body){if(noBlur.indexOf(el.nodeName.toLowerCase())>=0){return false;}else{return true;}}else{return false;}}function targetNeedsFastClick(el){var $el=$(el);if(el.nodeName.toLowerCase()==='input'&&(el.type==='file'||el.type==='range'))return false;if(el.nodeName.toLowerCase()==='select'&&app.device.android)return false;if($el.hasClass('no-fastclick')||$el.parents('.no-fastclick').length>0)return false;if(app.params.fastClicksExclude&&$el.is(app.params.fastClicksExclude))return false;return true;}function targetNeedsFocus(el){if(document.activeElement===el){return false;}var tag=el.nodeName.toLowerCase();var skipInputs='button checkbox file image radio submit'.split(' ');if(el.disabled||el.readOnly)return false;if(tag==='textarea')return true;if(tag==='select'){if(app.device.android)return false;else return true;}if(tag==='input'&&skipInputs.indexOf(el.type)<0)return true;}function targetNeedsPrevent(el){el=$(el);var prevent=true;if(el.is('label')||el.parents('label').length>0){if(app.device.android){prevent=false;}else if(app.device.ios&&el.is('input')){prevent=true;}else prevent=false;}return prevent;}// Mouse Handlers
function handleMouseDown(e){findActivableElement(e.target).addClass('active-state');if('which'in e&&e.which===3){setTimeout(function(){$('.active-state').removeClass('active-state');},0);}if(app.params.material&&app.params.materialRipple){touchStartX=e.pageX;touchStartY=e.pageY;rippleTouchStart(e.target,e.pageX,e.pageY);}}function handleMouseMove(e){$('.active-state').removeClass('active-state');if(app.params.material&&app.params.materialRipple){rippleTouchMove();}}function handleMouseUp(e){$('.active-state').removeClass('active-state');if(app.params.material&&app.params.materialRipple){rippleTouchEnd();}}// Material Touch Ripple Effect
function findRippleElement(el){var needsRipple=app.params.materialRippleElements;var $el=$(el);if($el.is(needsRipple)){if($el.hasClass('no-ripple')){return false;}return $el;}else if($el.parents(needsRipple).length>0){var rippleParent=$el.parents(needsRipple).eq(0);if(rippleParent.hasClass('no-ripple')){return false;}return rippleParent;}else return false;}function createRipple(x,y,el){if(!el)return;var box=el[0].getBoundingClientRect();var center={x:x-box.left,y:y-box.top},height=box.height,width=box.width;var diameter=Math.max(Math.pow(Math.pow(height,2)+Math.pow(width,2),0.5),48);rippleWave=$('<div class="ripple-wave" style="width: '+diameter+'px; height: '+diameter+'px; margin-top:-'+diameter/2+'px; margin-left:-'+diameter/2+'px; left:'+center.x+'px; top:'+center.y+'px;"></div>');el.prepend(rippleWave);var clientLeft=rippleWave[0].clientLeft;rippleTransform='translate3d('+(-center.x+width/2)+'px, '+(-center.y+height/2)+'px, 0) scale(1)';rippleWave.transform(rippleTransform);}function removeRipple(){if(!rippleWave)return;var toRemove=rippleWave;var removeTimeout=setTimeout(function(){toRemove.remove();},400);rippleWave.addClass('ripple-wave-fill').transform(rippleTransform.replace('scale(1)','scale(1.01)')).transitionEnd(function(){clearTimeout(removeTimeout);var rippleWave=$(this).addClass('ripple-wave-out').transform(rippleTransform.replace('scale(1)','scale(1.01)'));removeTimeout=setTimeout(function(){rippleWave.remove();},700);setTimeout(function(){rippleWave.transitionEnd(function(){clearTimeout(removeTimeout);$(this).remove();});},0);});rippleWave=rippleTarget=undefined;}function rippleTouchStart(el,x,y){rippleTarget=findRippleElement(el);if(!rippleTarget||rippleTarget.length===0){rippleTarget=undefined;return;}if(!isInsideScrollableView(rippleTarget)){createRipple(touchStartX,touchStartY,rippleTarget);}else{rippleTimeout=setTimeout(function(){createRipple(touchStartX,touchStartY,rippleTarget);},80);}}function rippleTouchMove(){clearTimeout(rippleTimeout);removeRipple();}function rippleTouchEnd(){if(rippleWave){removeRipple();}else if(rippleTarget&&!isMoved){clearTimeout(rippleTimeout);createRipple(touchStartX,touchStartY,rippleTarget);setTimeout(removeRipple,0);}else{removeRipple();}}// Send Click
function sendClick(e){var touch=e.changedTouches[0];var evt=document.createEvent('MouseEvents');var eventType='click';if(app.device.android&&targetElement.nodeName.toLowerCase()==='select'){eventType='mousedown';}evt.initMouseEvent(eventType,true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);evt.forwardedTouchEvent=true;targetElement.dispatchEvent(evt);}// Touch Handlers
function handleTouchStart(e){isMoved=false;tapHoldFired=false;if(e.targetTouches.length>1){if(activableElement)removeActive();return true;}if(e.touches.length>1&&activableElement){removeActive();}if(app.params.tapHold){if(tapHoldTimeout)clearTimeout(tapHoldTimeout);tapHoldTimeout=setTimeout(function(){if(e&&e.touches&&e.touches.length>1)return;tapHoldFired=true;e.preventDefault();$(e.target).trigger('taphold');},app.params.tapHoldDelay);}if(needsFastClickTimeOut)clearTimeout(needsFastClickTimeOut);needsFastClick=targetNeedsFastClick(e.target);if(!needsFastClick){trackClick=false;return true;}if(app.device.ios||app.device.android&&'getSelection'in window){var selection=window.getSelection();if(selection.rangeCount&&selection.focusNode!==document.body&&(!selection.isCollapsed||document.activeElement===selection.focusNode)){activeSelection=true;return true;}else{activeSelection=false;}}if(app.device.android){if(androidNeedsBlur(e.target)){document.activeElement.blur();}}trackClick=true;targetElement=e.target;touchStartTime=new Date().getTime();touchStartX=e.targetTouches[0].pageX;touchStartY=e.targetTouches[0].pageY;// Detect scroll parent
if(app.device.ios){scrollParent=undefined;$(targetElement).parents().each(function(){var parent=this;if(parent.scrollHeight>parent.offsetHeight&&!scrollParent){scrollParent=parent;scrollParent.f7ScrollTop=scrollParent.scrollTop;}});}if(e.timeStamp-lastClickTime<app.params.fastClicksDelayBetweenClicks){e.preventDefault();}if(app.params.activeState){activableElement=findActivableElement(targetElement);// If it's inside a scrollable view, we don't trigger active-state yet,
// because it can be a scroll instead. Based on the link:
// http://labnote.beedesk.com/click-scroll-and-pseudo-active-on-mobile-webk
if(!isInsideScrollableView(activableElement)){addActive();}else{activeTimeout=setTimeout(addActive,80);}}if(app.params.material&&app.params.materialRipple){rippleTouchStart(targetElement,touchStartX,touchStartY);}}function handleTouchMove(e){if(!trackClick)return;var _isMoved=false;var distance=app.params.fastClicksDistanceThreshold;if(distance){var pageX=e.targetTouches[0].pageX;var pageY=e.targetTouches[0].pageY;if(Math.abs(pageX-touchStartX)>distance||Math.abs(pageY-touchStartY)>distance){_isMoved=true;}}else{_isMoved=true;}if(_isMoved){trackClick=false;targetElement=null;isMoved=true;if(app.params.tapHold){clearTimeout(tapHoldTimeout);}if(app.params.activeState){clearTimeout(activeTimeout);removeActive();}if(app.params.material&&app.params.materialRipple){rippleTouchMove();}}}function handleTouchEnd(e){clearTimeout(activeTimeout);clearTimeout(tapHoldTimeout);if(!trackClick){if(!activeSelection&&needsFastClick){if(!(app.device.android&&!e.cancelable)){e.preventDefault();}}return true;}if(document.activeElement===e.target){if(app.params.activeState)removeActive();if(app.params.material&&app.params.materialRipple){rippleTouchEnd();}return true;}if(!activeSelection){e.preventDefault();}if(e.timeStamp-lastClickTime<app.params.fastClicksDelayBetweenClicks){setTimeout(removeActive,0);return true;}lastClickTime=e.timeStamp;trackClick=false;if(app.device.ios&&scrollParent){if(scrollParent.scrollTop!==scrollParent.f7ScrollTop){return false;}}// Add active-state here because, in a very fast tap, the timeout didn't
// have the chance to execute. Removing active-state in a timeout gives
// the chance to the animation execute.
if(app.params.activeState){addActive();setTimeout(removeActive,0);}// Remove Ripple
if(app.params.material&&app.params.materialRipple){rippleTouchEnd();}// Trigger focus when required
if(targetNeedsFocus(targetElement)){if(app.device.ios&&app.device.webView){if(event.timeStamp-touchStartTime>159){targetElement=null;return false;}targetElement.focus();return false;}else{targetElement.focus();}}// Blur active elements
if(document.activeElement&&targetElement!==document.activeElement&&document.activeElement!==document.body&&targetElement.nodeName.toLowerCase()!=='label'){document.activeElement.blur();}// Send click
e.preventDefault();sendClick(e);return false;}function handleTouchCancel(e){trackClick=false;targetElement=null;// Remove Active State
clearTimeout(activeTimeout);clearTimeout(tapHoldTimeout);if(app.params.activeState){removeActive();}// Remove Ripple
if(app.params.material&&app.params.materialRipple){rippleTouchEnd();}}function handleClick(e){var allowClick=false;if(trackClick){targetElement=null;trackClick=false;return true;}if(e.target.type==='submit'&&e.detail===0||e.target.type==='file'){return true;}if(!targetElement){if(!isFormElement(e.target)){allowClick=true;}}if(!needsFastClick){allowClick=true;}if(document.activeElement===targetElement){allowClick=true;}if(e.forwardedTouchEvent){allowClick=true;}if(!e.cancelable){allowClick=true;}if(app.params.tapHold&&app.params.tapHoldPreventClicks&&tapHoldFired){allowClick=false;}if(!allowClick){e.stopImmediatePropagation();e.stopPropagation();if(targetElement){if(targetNeedsPrevent(targetElement)||isMoved){e.preventDefault();}}else{e.preventDefault();}targetElement=null;}needsFastClickTimeOut=setTimeout(function(){needsFastClick=false;},app.device.ios||app.device.androidChrome?100:400);if(app.params.tapHold){tapHoldTimeout=setTimeout(function(){tapHoldFired=false;},app.device.ios||app.device.androidChrome?100:400);}return allowClick;}if(app.support.touch){document.addEventListener('click',handleClick,true);document.addEventListener('touchstart',handleTouchStart);document.addEventListener('touchmove',handleTouchMove);document.addEventListener('touchend',handleTouchEnd);document.addEventListener('touchcancel',handleTouchCancel);}else{if(app.params.activeState){document.addEventListener('mousedown',handleMouseDown);document.addEventListener('mousemove',handleMouseMove);document.addEventListener('mouseup',handleMouseUp);}}if(app.params.material&&app.params.materialRipple){document.addEventListener('contextmenu',function(e){if(activableElement)removeActive();rippleTouchEnd();});}};/*===============================================================================
        ************   Handle clicks and make them fast (on tap);   ************
        ===============================================================================*/app.initClickEvents=function(){function handleScrollTop(e){/*jshint validthis:true */var clicked=$(this);var target=$(e.target);var isLink=clicked[0].nodeName.toLowerCase()==='a'||clicked.parents('a').length>0||target[0].nodeName.toLowerCase()==='a'||target.parents('a').length>0;if(isLink)return;var pageContent,page;if(app.params.scrollTopOnNavbarClick&&clicked.is('.navbar .center')){// Find active page
var navbar=clicked.parents('.navbar');// Static Layout
pageContent=navbar.parents('.page-content');if(pageContent.length===0){// Fixed Layout
if(navbar.parents('.page').length>0){pageContent=navbar.parents('.page').find('.page-content');}// Through Layout
if(pageContent.length===0){if(navbar.nextAll('.pages').length>0){pageContent=navbar.nextAll('.pages').find('.page:not(.page-on-left):not(.page-on-right):not(.cached)').find('.page-content');}}}}if(app.params.scrollTopOnStatusbarClick&&clicked.is('.statusbar-overlay')){if($('.popup.modal-in').length>0){// Check for opened popup
pageContent=$('.popup.modal-in').find('.page:not(.page-on-left):not(.page-on-right):not(.cached)').find('.page-content');}else if($('.panel.active').length>0){// Check for opened panel
pageContent=$('.panel.active').find('.page:not(.page-on-left):not(.page-on-right):not(.cached)').find('.page-content');}else if($('.views > .view.active').length>0){// View in tab bar app layout
pageContent=$('.views > .view.active').find('.page:not(.page-on-left):not(.page-on-right):not(.cached)').find('.page-content');}else{// Usual case
pageContent=$('.views').find('.page:not(.page-on-left):not(.page-on-right):not(.cached)').find('.page-content');}}if(pageContent&&pageContent.length>0){// Check for tab
if(pageContent.hasClass('tab')){pageContent=pageContent.parent('.tabs').children('.page-content.active');}if(pageContent.length>0)pageContent.scrollTop(0,300);}}function handleClicks(e){/*jshint validthis:true */var clicked=$(this);var url=clicked.attr('href');var isLink=clicked[0].nodeName.toLowerCase()==='a';// Check if link is external
if(isLink){if(clicked.is(app.params.externalLinks)||url&&url.indexOf('javascript:')>=0){if(url&&clicked.attr('target')==='_system'){e.preventDefault();window.open(url,'_system');}return;}}// Collect Clicked data- attributes
var clickedData=clicked.dataset();// Smart Select
if(clicked.hasClass('smart-select')){if(app.smartSelectOpen)app.smartSelectOpen(clicked);}// Open Panel
if(clicked.hasClass('open-panel')){if($('.panel').length===1){if($('.panel').hasClass('panel-left'))app.openPanel('left');else app.openPanel('right');}else{if(clickedData.panel==='right')app.openPanel('right');else app.openPanel('left');}}// Close Panel
if(clicked.hasClass('close-panel')){app.closePanel();}// Panel Overlay
if(clicked.hasClass('panel-overlay')){$('.panel.active').trigger('panel:overlay-click');if(app.params.panelsCloseByOutside)app.closePanel();}// Popover
if(clicked.hasClass('open-popover')){var popover;if(clickedData.popover){popover=clickedData.popover;}else popover='.popover';app.popover(popover,clicked);}if(clicked.hasClass('close-popover')){app.closeModal('.popover.modal-in');}// Popup
var popup;if(clicked.hasClass('open-popup')){if(clickedData.popup){popup=clickedData.popup;}else popup='.popup';app.popup(popup);}if(clicked.hasClass('close-popup')){if(clickedData.popup){popup=clickedData.popup;}else popup='.popup.modal-in';app.closeModal(popup);}// Login Screen
var loginScreen;if(clicked.hasClass('open-login-screen')){if(clickedData.loginScreen){loginScreen=clickedData.loginScreen;}else loginScreen='.login-screen';app.loginScreen(loginScreen);}if(clicked.hasClass('close-login-screen')){app.closeModal('.login-screen.modal-in');}// Close Modal
if(clicked.hasClass('modal-overlay')){if($('.modal.modal-in').length>0&&app.params.modalCloseByOutside)app.closeModal('.modal.modal-in');if($('.actions-modal.modal-in').length>0&&app.params.actionsCloseByOutside)app.closeModal('.actions-modal.modal-in');if($('.popover.modal-in').length>0&&app.params.popoverCloseByOutside)app.closeModal('.popover.modal-in');}if(clicked.hasClass('popup-overlay')){if($('.popup.modal-in').length>0&&app.params.popupCloseByOutside)app.closeModal('.popup.modal-in');}if(clicked.hasClass('picker-modal-overlay')){if($('.picker-modal.modal-in').length>0)app.closeModal('.picker-modal.modal-in');}// Picker
if(clicked.hasClass('close-picker')){var pickerToClose=$('.picker-modal.modal-in');if(pickerToClose.length>0){app.closeModal(pickerToClose);}else{pickerToClose=$('.popover.modal-in .picker-modal');if(pickerToClose.length>0){app.closeModal(pickerToClose.parents('.popover'));}}}if(clicked.hasClass('open-picker')){var pickerToOpen;if(clickedData.picker){pickerToOpen=clickedData.picker;}else pickerToOpen='.picker-modal';app.pickerModal(pickerToOpen,clicked);}// Tabs
var isTabLink;if(clicked.hasClass('tab-link')){isTabLink=true;app.showTab(clickedData.tab||clicked.attr('href'),clicked);}// Swipeout Close
if(clicked.hasClass('swipeout-close')){app.swipeoutClose(clicked.parents('.swipeout-opened'));}// Swipeout Delete
if(clicked.hasClass('swipeout-delete')){if(clickedData.confirm){var text=clickedData.confirm;var title=clickedData.confirmTitle;if(title){app.confirm(text,title,function(){app.swipeoutDelete(clicked.parents('.swipeout'));},function(){if(clickedData.closeOnCancel)app.swipeoutClose(clicked.parents('.swipeout'));});}else{app.confirm(text,function(){app.swipeoutDelete(clicked.parents('.swipeout'));},function(){if(clickedData.closeOnCancel)app.swipeoutClose(clicked.parents('.swipeout'));});}}else{app.swipeoutDelete(clicked.parents('.swipeout'));}}// Sortable
if(clicked.hasClass('toggle-sortable')){app.sortableToggle(clickedData.sortable);}if(clicked.hasClass('open-sortable')){app.sortableOpen(clickedData.sortable);}if(clicked.hasClass('close-sortable')){app.sortableClose(clickedData.sortable);}// Accordion
if(clicked.hasClass('accordion-item-toggle')||clicked.hasClass('item-link')&&clicked.parent().hasClass('accordion-item')){var accordionItem=clicked.parent('.accordion-item');if(accordionItem.length===0)accordionItem=clicked.parents('.accordion-item');if(accordionItem.length===0)accordionItem=clicked.parents('li');app.accordionToggle(accordionItem);}// Speed Dial
if(clicked.hasClass('floating-button')&&clicked.parent().hasClass('speed-dial')){clicked.parent().toggleClass('speed-dial-opened');}if(clicked.hasClass('close-speed-dial')){$('.speed-dial-opened').removeClass('speed-dial-opened');}// Load Page
if(app.params.ajaxLinks&&!clicked.is(app.params.ajaxLinks)||!isLink||!app.params.router){return;}if(isLink){e.preventDefault();}var validUrl=url&&url.length>0&&url!=='#'&&!isTabLink;var template=clickedData.template;if(validUrl||clicked.hasClass('back')||template){var view;if(clickedData.view){view=$(clickedData.view)[0].f7View;}else{view=clicked.parents('.'+app.params.viewClass)[0]&&clicked.parents('.'+app.params.viewClass)[0].f7View;if(view&&view.params.linksView){if(typeof view.params.linksView==='string')view=$(view.params.linksView)[0].f7View;else if(view.params.linksView instanceof View)view=view.params.linksView;}}if(!view){if(app.mainView)view=app.mainView;}if(!view)return;var pageName;if(!template){if(url&&url.indexOf('#')===0&&url!=='#'){if(view.params.domCache){pageName=url.split('#')[1];}else return;}if(url==='#'&&!clicked.hasClass('back'))return;}else{url=undefined;}var animatePages;if(typeof clickedData.animatePages!=='undefined'){animatePages=clickedData.animatePages;}else{if(clicked.hasClass('with-animation'))animatePages=true;if(clicked.hasClass('no-animation'))animatePages=false;}var options={animatePages:animatePages,ignoreCache:clickedData.ignoreCache,force:clickedData.force,reload:clickedData.reload,reloadPrevious:clickedData.reloadPrevious,pageName:pageName,pushState:clickedData.pushState,url:url};if(app.params.template7Pages){options.contextName=clickedData.contextName;var context=clickedData.context;if(context){options.context=JSON.parse(context);}}if(template&&template in t7.templates){options.template=t7.templates[template];}if(clicked.hasClass('back'))view.router.back(options);else view.router.load(options);}}$(document).on('click','a, .open-panel, .close-panel, .panel-overlay, .modal-overlay, .popup-overlay, .swipeout-delete, .swipeout-close, .close-popup, .open-popup, .open-popover, .open-login-screen, .close-login-screen .smart-select, .toggle-sortable, .open-sortable, .close-sortable, .accordion-item-toggle, .close-picker, .picker-modal-overlay',handleClicks);if(app.params.scrollTopOnNavbarClick||app.params.scrollTopOnStatusbarClick){$(document).on('click','.statusbar-overlay, .navbar .center',handleScrollTop);}// Prevent scrolling on overlays
function preventScrolling(e){e.preventDefault();}if(app.support.touch&&!app.device.android){var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;$(document).on(app.params.fastClicks?'touchstart':'touchmove','.panel-overlay, .modal-overlay, .preloader-indicator-overlay, .popup-overlay, .searchbar-overlay',preventScrolling,activeListener);}};/*======================================================
        ************   App Resize Actions   ************
        ======================================================*/// Prevent iPad horizontal body scrolling when soft keyboard is opened
function _fixIpadBodyScrolLeft(){if(app.device.ipad){document.body.scrollLeft=0;setTimeout(function(){document.body.scrollLeft=0;},0);}}var appResizeCallbacks=[];app.getSize=function(){var offset=app.root.offset();app.width=app.root[0].offsetWidth;app.height=app.root[0].offsetHeight;app.left=offset.left;app.top=offset.top;};app.onResize=function(callback){appResizeCallbacks.push(callback);};app.offResize=function(callback){for(var i=0;i<appResizeCallbacks.length;i++){if(appResizeCallbacks[i]===callback){appResizeCallbacks.splice(i,1);}}};app.resize=function(){_fixIpadBodyScrolLeft();app.getSize();if(app.sizeNavbars)app.sizeNavbars();for(var i=0;i<appResizeCallbacks.length;i++){appResizeCallbacks[i]();}};app.orientationchange=function(){if(app.device&&app.device.minimalUi){if(window.orientation===90||window.orientation===-90)document.body.scrollTop=0;}_fixIpadBodyScrolLeft();};app.initResize=function(){$(window).on('resize',app.resize);$(window).on('orientationchange',app.orientationchange);app.getSize();};/*===============================================================================
        ************   Store and parse forms data   ************
        ===============================================================================*/app.formsData={};app.formStoreData=function(formId,formJSON){// Store form data in app.formsData
app.formsData[formId]=formJSON;// Store form data in local storage also
app.ls['f7form-'+formId]=JSON.stringify(formJSON);};app.formDeleteData=function(formId){// Delete form data from app.formsData
if(app.formsData[formId]){app.formsData[formId]='';delete app.formsData[formId];}// Delete form data from local storage also
if(app.ls['f7form-'+formId]){app.ls['f7form-'+formId]='';app.ls.removeItem('f7form-'+formId);}};app.formGetData=function(formId){// First of all check in local storage
if(app.ls['f7form-'+formId]){return JSON.parse(app.ls['f7form-'+formId]);}// Try to get it from formsData obj
else if(app.formsData[formId])return app.formsData[formId];};app.formToData=function(form){form=$(form);if(form.length!==1)return false;// Form data
var formData={};// Skip input types
var skipTypes=['submit','image','button','file'];var skipNames=[];form.find('input, select, textarea').each(function(){var input=$(this);var name=input.attr('name');var type=input.attr('type');var tag=this.nodeName.toLowerCase();if(skipTypes.indexOf(type)>=0)return;if(skipNames.indexOf(name)>=0||!name)return;if(tag==='select'&&input.prop('multiple')){skipNames.push(name);formData[name]=[];form.find('select[name="'+name+'"] option').each(function(){if(this.selected)formData[name].push(this.value);});}else{switch(type){case'checkbox':skipNames.push(name);formData[name]=[];form.find('input[name="'+name+'"]').each(function(){if(this.checked)formData[name].push(this.value);});break;case'radio':skipNames.push(name);form.find('input[name="'+name+'"]').each(function(){if(this.checked)formData[name]=this.value;});break;default:formData[name]=input.val();break;}}});form.trigger('formToJSON formToData form:todata',{formData:formData});return formData;};app.formToJSON=app.formToData;app.formFromData=function(form,formData){form=$(form);if(form.length!==1)return false;// Skip input types
var skipTypes=['submit','image','button','file'];var skipNames=[];form.find('input, select, textarea').each(function(){var input=$(this);var name=input.attr('name');var type=input.attr('type');var tag=this.nodeName.toLowerCase();if(typeof formData[name]==='undefined'||formData[name]===null)return;if(skipTypes.indexOf(type)>=0)return;if(skipNames.indexOf(name)>=0||!name)return;if(tag==='select'&&input.prop('multiple')){skipNames.push(name);form.find('select[name="'+name+'"] option').each(function(){if(formData[name].indexOf(this.value)>=0)this.selected=true;else this.selected=false;});}else{switch(type){case'checkbox':skipNames.push(name);form.find('input[name="'+name+'"]').each(function(){if(formData[name].indexOf(this.value)>=0)this.checked=true;else this.checked=false;});break;case'radio':skipNames.push(name);form.find('input[name="'+name+'"]').each(function(){if(formData[name]===this.value)this.checked=true;else this.checked=false;});break;default:input.val(formData[name]);break;}}if(tag==='select'||tag==='input'||tag==='textarea'){input.trigger('change');}});form.trigger('formFromJSON formFromData form:fromdata',{formData:formData});};app.formFromJSON=app.formFromData;app.initFormsStorage=function(pageContainer){pageContainer=$(pageContainer);var forms=pageContainer.find('form.store-data');if(forms.length===0)return;// Parse forms data and fill form if there is such data
forms.each(function(){var id=this.getAttribute('id');if(!id)return;var formData=app.formGetData(id);if(formData)app.formFromData(this,formData);});// Update forms data on inputs change
function storeForm(){/*jshint validthis:true */var form=$(this);var formId=form[0].id;if(!formId)return;var formJSON=app.formToData(form);if(!formJSON)return;app.formStoreData(formId,formJSON);form.trigger('store form:storedata',{data:formJSON});}forms.on('change submit',storeForm);// Detach Listeners
function pageBeforeRemove(){forms.off('change submit',storeForm);pageContainer.off('page:beforeremove',pageBeforeRemove);}pageContainer.on('page:beforeremove',pageBeforeRemove);};/*===============================================================================
        ************   Ajax submit for forms   ************
        ===============================================================================*/// Ajax submit on forms
$(document).on('submit change','form.ajax-submit, form.ajax-submit-onchange',function(e){var form=$(this);if(e.type==='change'&&!form.hasClass('ajax-submit-onchange'))return;if(e.type==='submit')e.preventDefault();var method=(form.attr('method')||'GET').toUpperCase();var contentType=form.prop('enctype')||form.attr('enctype');var url=form.attr('action');if(!url)return;var data;if(method==='POST')data=new FormData(form[0]);else data=$.serializeObject(app.formToJSON(form[0]));var xhr=$.ajax({method:method,url:url,contentType:contentType,data:data,beforeSend:function beforeSend(xhr){form.trigger('beforeSubmit form:beforesend',{data:data,xhr:xhr});},error:function error(xhr){form.trigger('submitError form:error',{data:data,xhr:xhr});},success:function success(data){form.trigger('submitted form:success',{data:data,xhr:xhr});}});});/*===============================================================================
        ************   Resizable textarea   ************
        ===============================================================================*/app.resizeTextarea=function(textarea){textarea=$(textarea);if(!textarea.hasClass('resizable')){return;}textarea.css({'height':''});var height=textarea[0].offsetHeight;var diff=height-textarea[0].clientHeight;var scrollHeight=textarea[0].scrollHeight;if(scrollHeight+diff>height){var newAreaHeight=scrollHeight+diff;textarea.css('height',newAreaHeight+'px');}};app.resizableTextarea=function(textarea){textarea=$(textarea);if(textarea.length===0)return;var textareaTimeout;function handleTextarea(){clearTimeout(textareaTimeout);textareaTimeout=setTimeout(function(){app.resizeTextarea(textarea);},0);}textarea[0].f7DestroyResizableTextarea=function(){textarea.off('change keydown keypress keyup paste cut',handleTextarea);};return textarea.on('change keydown keypress keyup paste cut',handleTextarea);};app.destroyResizableTextarea=function(pageContainer){pageContainer=$(pageContainer);if(pageContainer.length>0&&pageContainer.is('textarea')&&pageContainer[0].f7DestroyResizableTextarea){pageContainer[0].f7DestroyResizableTextarea();}else if(pageContainer.length>0){pageContainer.find('textarea.resiable').each(function(){var textarea=this;if(textarea.f7DestroyResizableTextarea){textarea.f7DestroyResizableTextarea();}});}};app.initPageResizableTextarea=function(pageContainer){pageContainer=$(pageContainer);var textareas=pageContainer.find('textarea.resizable');textareas.each(function(){app.resizableTextarea(this);});};/*======================================================
        ************   Material Text Inputs   ************
        ======================================================*/app.initPageMaterialInputs=function(pageContainer){pageContainer=$(pageContainer);var textareas=pageContainer.find('textarea.resizable');pageContainer.find('.item-input').each(function(){var itemInput=$(this);var notInputs=['checkbox','button','submit','range','radio','image'];itemInput.find('input, select, textarea').each(function(){var input=$(this);if(notInputs.indexOf(input.attr('type'))<0){itemInput.addClass('item-input-field');if(input.val().trim()!==''){input.parents('.item-input, .input-field').add(input.parents('.item-inner')).addClass('not-empty-state');}}});if(itemInput.parents('.input-item, .inputs-list').length>0)return;itemInput.parents('.list-block').eq(0).addClass('inputs-list');});};/*======================================================
        ************   Material Focus Inputs   ************
        ======================================================*/app.initMaterialWatchInputs=function(){var notInputs=['checkbox','button','submit','range','radio','image'];function addFocusState(e){/*jshint validthis:true*/var i=$(this);var type=i.attr('type');if(notInputs.indexOf(type)>=0)return;var els=i.add(i.parents('.item-input, .input-field')).add(i.parents('.item-inner').eq(0));els.removeClass('not-empty-state').addClass('focus-state');}function removeFocusState(e){/*jshint validthis:true*/var i=$(this),value=i.val();var type=i.attr('type');if(notInputs.indexOf(type)>=0)return;var els=i.add(i.parents('.item-input, .input-field')).add(i.parents('.item-inner').eq(0));els.removeClass('focus-state');if(value&&value.trim()!==''){els.removeClass('focus-state').addClass('not-empty-state');}else{els.removeClass('not-empty-state');}}function watchChangeState(e){/*jshint validthis:true*/var input=$(this),value=input.val();var type=input.attr('type');if(notInputs.indexOf(type)>=0)return;var els=input.add(input.parents('.item-input, .input-field')).add(input.parents('.item-inner').eq(0));if(els.length===0)return;if(value&&typeof value==='string'&&value.trim()!==''||Array.isArray(value)&&value.length>0){els.addClass('not-empty-state');}else{els.removeClass('not-empty-state');}}$(document).on('change','input, textarea, select',watchChangeState,true);$(document).on('focus','input, textarea, select',addFocusState,true);$(document).on('blur','input, textarea, select',removeFocusState,true);};/*======================================================
        ************   Handle Browser's History   ************
        ======================================================*/app.pushStateQueue=[];app.pushStateClearQueue=function(){if(app.pushStateQueue.length===0)return;var queue=app.pushStateQueue.pop();var animatePages;if(app.params.pushStateNoAnimation===true)animatePages=false;if(queue.action==='back'){app.router.back(queue.view,{animatePages:animatePages});}if(queue.action==='loadPage'){app.router.load(queue.view,{url:queue.stateUrl,animatePages:animatePages,pushState:false});}if(queue.action==='loadContent'){app.router.load(queue.view,{content:queue.stateContent,animatePages:animatePages,pushState:false});}if(queue.action==='loadPageName'){app.router.load(queue.view,{pageName:queue.statePageName,url:queue.stateUrl,animatePages:animatePages,pushState:false});}};app.initPushState=function(){var blockPopstate=true;$(window).on('load',function(){setTimeout(function(){blockPopstate=false;},0);});if(document.readyState&&document.readyState==='complete'){blockPopstate=false;}function handlePopState(e){if(blockPopstate)return;var mainView=app.mainView;if(!mainView)return;var state=e.state;if(!state){state={viewIndex:app.views.indexOf(mainView),url:mainView.history[0]};}if(state.viewIndex<0)return;var view=app.views[state.viewIndex];var stateUrl=state&&state.url||undefined;var stateContent=state&&state.content||undefined;var statePageName=state&&state.pageName||undefined;var animatePages;if(app.params.pushStateNoAnimation===true)animatePages=false;if(stateUrl!==view.url){if(view.history.indexOf(stateUrl)>=0){// Go Back
if(view.allowPageChange){app.router.back(view,{url:undefined,animatePages:animatePages,pushState:false,preloadOnly:false});}else{app.pushStateQueue.push({action:'back',view:view});}}else if(stateContent){// Load Page
if(view.allowPageChange){app.router.load(view,{content:stateContent,animatePages:animatePages,pushState:false});}else{app.pushStateQueue.unshift({action:'loadContent',stateContent:stateContent,view:view});}}else if(statePageName){// Load Page by page name with Dom Cache
if(view.allowPageChange){app.router.load(view,{pageName:statePageName,url:stateUrl,animatePages:animatePages,pushState:false});}else{app.pushStateQueue.unshift({action:'loadPageName',statePageName:statePageName,view:view});}}else{// Load Page
if(view.allowPageChange){app.router.load(view,{url:stateUrl,animatePages:animatePages,pushState:false});}else{app.pushStateQueue.unshift({action:'loadPage',stateUrl:stateUrl,view:view});}}}}$(window).on('popstate',handlePopState);};/*===========================
        Framework7 Swiper Additions
        ===========================*/app.swiper=function(container,params){return new Swiper(container,params);};app.initPageSwiper=function(pageContainer){pageContainer=$(pageContainer);var swipers=pageContainer.find('.swiper-init, .tabs-swipeable-wrap');if(swipers.length===0)return;function destroySwiperOnRemove(slider){function destroySwiper(){slider.destroy();pageContainer.off('page:beforeremove',destroySwiper);}pageContainer.on('page:beforeremove',destroySwiper);}swipers.each(function(){var swiper=$(this),initialSlide;var params;if(swiper.hasClass('tabs-swipeable-wrap')){swiper.addClass('swiper-container').children('.tabs').addClass('swiper-wrapper').children('.tab').addClass('swiper-slide');initialSlide=swiper.children('.tabs').children('.tab.active').index();}if(swiper.data('swiper')){params=JSON.parse(swiper.data('swiper'));}else{params=swiper.dataset();}if(typeof params.initialSlide==='undefined'&&typeof initialSlide!=='undefined'){params.initialSlide=initialSlide;}if(swiper.hasClass('tabs-swipeable-wrap')){params.onSlideChangeStart=function(s){app.showTab(s.slides.eq(s.activeIndex));};}var _slider=app.swiper(swiper[0],params);destroySwiperOnRemove(_slider);});};app.reinitPageSwiper=function(pageContainer){pageContainer=$(pageContainer);var sliders=pageContainer.find('.swiper-init, .tabs-swipeable-wrap');if(sliders.length===0)return;for(var i=0;i<sliders.length;i++){var sliderInstance=sliders[0].swiper;if(sliderInstance){sliderInstance.update(true);}}};/*======================================================
        ************   Photo Browser   ************
        ======================================================*/var PhotoBrowser=function PhotoBrowser(params){var pb=this,i;var defaults={photos:[],initialSlide:0,spaceBetween:20,speed:300,zoom:true,zoomMax:3,zoomMin:1,exposition:true,expositionHideCaptions:false,type:'standalone',navbar:true,toolbar:true,theme:'light',swipeToClose:true,backLinkText:'Close',ofText:'of',loop:false,lazyLoading:false,lazyLoadingInPrevNext:false,lazyLoadingOnTransitionStart:false,material:app.params.material,materialPreloaderSvg:app.params.materialPreloaderSvg,materialPreloaderHtml:app.params.materialPreloaderHtml/*
                Callbacks:
                onLazyImageLoad(pb, slide, img)
                onLazyImageReady(pb, slide, img)
                onOpen(pb)
                onClose(pb)
                onTransitionStart(swiper)
                onTransitionEnd(swiper)
                onSlideChangeStart(swiper)
                onSlideChangeEnd(swiper)
                onTap(swiper, e)
                onClick(swiper, e)
                onDoubleTap(swiper, e)
                onSwipeToClose(pb)
                */};params=params||{};if(!params.backLinkText&&app.params.material)defaults.backLinkText='';for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}}if(params.maxZoom){params.zoomMax=params.maxZoom;}if(params.minZoom){params.zoomMin=params.minZoom;}pb.params=params;pb.params.iconsColorClass=pb.params.iconsColor?'color-'+pb.params.iconsColor:pb.params.theme==='dark'?'color-white':'';pb.params.preloaderColorClass=pb.params.theme==='dark'?'preloader-white':'';// Templates
var photoTemplate=pb.params.photoTemplate||'<div class="photo-browser-slide swiper-slide">'+'<span class="swiper-zoom-container">'+'<img src="{{js "this.url || this"}}">'+'</span>'+'</div>';var photoLazyTemplate=pb.params.lazyPhotoTemplate||'<div class="photo-browser-slide photo-browser-slide-lazy swiper-slide">'+'<div class="preloader {{@root.preloaderColorClass}}">{{#if @root.material}}{{@root.materialPreloaderHtml}}{{/if}}</div>'+'<span class="swiper-zoom-container">'+'<img data-src="{{js "this.url || this"}}" class="swiper-lazy">'+'</span>'+'</div>';var objectTemplate=pb.params.objectTemplate||'<div class="photo-browser-slide photo-browser-object-slide swiper-slide">{{js "this.html || this"}}</div>';var captionTemplate=pb.params.captionTemplate||'<div class="photo-browser-caption" data-caption-index="{{@index}}">'+'{{caption}}'+'</div>';var navbarTemplate=pb.params.navbarTemplate||'<div class="navbar">'+'<div class="navbar-inner">'+'<div class="left sliding">'+'<a href="#" class="link '+(params.type==='popup'?'close-popup':'photo-browser-close-link')+' {{#unless backLinkText}}icon-only{{/unless}} {{js "this.type === \'page\' ? \'back\' : \'\'"}}">'+'<i class="icon icon-back {{iconsColorClass}}"></i>'+'{{#if backLinkText}}<span>{{backLinkText}}</span>{{/if}}'+'</a>'+'</div>'+'<div class="center sliding">'+'<span class="photo-browser-current"></span> '+'<span class="photo-browser-of">{{ofText}}</span> '+'<span class="photo-browser-total"></span>'+'</div>'+'<div class="right"></div>'+'</div>'+'</div>';var toolbarTemplate=pb.params.toolbarTemplate||'<div class="toolbar tabbar">'+'<div class="toolbar-inner">'+'<a href="#" class="link photo-browser-prev">'+'<i class="icon icon-prev {{iconsColorClass}}"></i>'+'</a>'+'<a href="#" class="link photo-browser-next">'+'<i class="icon icon-next {{iconsColorClass}}"></i>'+'</a>'+'</div>'+'</div>';var htmlTemplate=t7.compile('<div class="photo-browser photo-browser-{{theme}}">'+'<div class="view navbar-fixed toolbar-fixed">'+'{{#unless material}}{{#if navbar}}'+navbarTemplate+'{{/if}}{{/unless}}'+'<div class="page no-toolbar {{#unless navbar}}no-navbar{{/unless}} toolbar-fixed navbar-fixed" data-page="photo-browser-slides">'+'{{#if material}}{{#if navbar}}'+navbarTemplate+'{{/if}}{{/if}}'+'{{#if toolbar}}'+toolbarTemplate+'{{/if}}'+'<div class="photo-browser-captions photo-browser-captions-{{js "this.captionsTheme || this.theme"}}">'+'{{#each photos}}{{#if caption}}'+captionTemplate+'{{/if}}{{/each}}'+'</div>'+'<div class="photo-browser-swiper-container swiper-container">'+'<div class="photo-browser-swiper-wrapper swiper-wrapper">'+'{{#each photos}}'+'{{#js_compare "this.html || ((typeof this === \'string\' || this instanceof String) && (this.indexOf(\'<\') >= 0 || this.indexOf(\'>\') >= 0))"}}'+objectTemplate+'{{else}}'+'{{#if @root.lazyLoading}}'+photoLazyTemplate+'{{else}}'+photoTemplate+'{{/if}}'+'{{/js_compare}}'+'{{/each}}'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>')(pb.params);pb.activeIndex=pb.params.initialSlide;pb.openIndex=pb.activeIndex;pb.opened=false;pb.open=function(index){if(typeof index==='undefined')index=pb.activeIndex;index=parseInt(index,10);if(pb.opened&&pb.swiper){pb.swiper.slideTo(index);return;}pb.opened=true;pb.openIndex=index;if(pb.params.type==='standalone'){app.root.append(htmlTemplate);}if(pb.params.type==='popup'){pb.popup=app.popup('<div class="popup photo-browser-popup">'+htmlTemplate+'</div>');$(pb.popup).on('popup:closed',pb.onPopupClose);}if(pb.params.type==='page'){$(document).once('page:beforeinit',pb.onPageBeforeInit);$(document).once('page:beforeremove',pb.onPageBeforeRemove);if(!pb.params.view)pb.params.view=app.mainView;pb.params.view.loadContent(htmlTemplate);return;}pb.layout(pb.openIndex);if(pb.params.onOpen){pb.params.onOpen(pb);}};pb.close=function(){pb.opened=false;if(!pb.swiperContainer||pb.swiperContainer.length===0){return;}if(pb.params.onClose){pb.params.onClose(pb);}// Detach events
pb.attachEvents(true);// Delete from DOM
if(pb.params.type==='standalone'){pb.container.removeClass('photo-browser-in').addClass('photo-browser-out').animationEnd(function(){pb.container.remove();});}// Destroy slider
pb.swiper.destroy();// Delete references
pb.swiper=pb.swiperContainer=pb.swiperWrapper=pb.slides=undefined;//gestureSlide = gestureImg = gestureImgWrap = undefined;
};pb.onPopupClose=function(e){pb.close();$(pb.popup).off('page:beforeinit',pb.onPopupClose);};pb.onPageBeforeInit=function(e){if(e.detail.page.name==='photo-browser-slides'){pb.layout(pb.openIndex);if(pb.params.onOpen){pb.params.onOpen(pb);}}};pb.onPageBeforeRemove=function(e){if(e.detail.page.name==='photo-browser-slides'){pb.close();}};pb.onSliderTransitionStart=function(swiper){pb.activeIndex=swiper.activeIndex;var current=swiper.activeIndex+1;var total=swiper.slides.length;if(pb.params.loop){total=total-2;current=current-swiper.loopedSlides;if(current<1)current=total+current;if(current>total)current=current-total;}pb.container.find('.photo-browser-current').text(current);pb.container.find('.photo-browser-total').text(total);$('.photo-browser-prev, .photo-browser-next').removeClass('photo-browser-link-inactive');if(swiper.isBeginning&&!pb.params.loop){$('.photo-browser-prev').addClass('photo-browser-link-inactive');}if(swiper.isEnd&&!pb.params.loop){$('.photo-browser-next').addClass('photo-browser-link-inactive');}// Update captions
if(pb.captions.length>0){pb.captionsContainer.find('.photo-browser-caption-active').removeClass('photo-browser-caption-active');var captionIndex=pb.params.loop?swiper.slides.eq(swiper.activeIndex).attr('data-swiper-slide-index'):pb.activeIndex;pb.captionsContainer.find('[data-caption-index="'+captionIndex+'"]').addClass('photo-browser-caption-active');}// Stop Video
var previousSlideVideo=swiper.slides.eq(swiper.previousIndex).find('video');if(previousSlideVideo.length>0){if('pause'in previousSlideVideo[0])previousSlideVideo[0].pause();}// Callback
if(pb.params.onTransitionStart)pb.params.onTransitionStart(swiper);};pb.onSliderTransitionEnd=function(swiper){if(pb.params.onTransitionEnd)pb.params.onTransitionEnd(swiper);};pb.layout=function(index){if(pb.params.type==='page'){pb.container=$('.photo-browser-swiper-container').parents('.view');}else{pb.container=$('.photo-browser');}if(pb.params.type==='standalone'){pb.container.addClass('photo-browser-in');app.sizeNavbars(pb.container);}pb.swiperContainer=pb.container.find('.photo-browser-swiper-container');pb.swiperWrapper=pb.container.find('.photo-browser-swiper-wrapper');pb.slides=pb.container.find('.photo-browser-slide');pb.captionsContainer=pb.container.find('.photo-browser-captions');pb.captions=pb.container.find('.photo-browser-caption');var sliderSettings={nextButton:pb.params.nextButton||'.photo-browser-next',prevButton:pb.params.prevButton||'.photo-browser-prev',indexButton:pb.params.indexButton,initialSlide:index,spaceBetween:pb.params.spaceBetween,speed:pb.params.speed,loop:pb.params.loop,lazyLoading:pb.params.lazyLoading,lazyLoadingInPrevNext:pb.params.lazyLoadingInPrevNext,lazyLoadingOnTransitionStart:pb.params.lazyLoadingOnTransitionStart,preloadImages:pb.params.lazyLoading?false:true,zoom:pb.params.zoom,zoomMax:pb.params.zoomMax,zoomMin:pb.params.zoomMin,onTap:function onTap(swiper,e){if(pb.params.onTap)pb.params.onTap(swiper,e);},onClick:function onClick(swiper,e){if(pb.params.exposition)pb.toggleExposition();if(pb.params.onClick)pb.params.onClick(swiper,e);},onDoubleTap:function onDoubleTap(swiper,e){// pb.toggleZoom(e);
if(pb.params.onDoubleTap)pb.params.onDoubleTap(swiper,e);},onTransitionStart:function onTransitionStart(swiper){pb.onSliderTransitionStart(swiper);},onTransitionEnd:function onTransitionEnd(swiper){pb.onSliderTransitionEnd(swiper);},onSlideChangeStart:pb.params.onSlideChangeStart,onSlideChangeEnd:pb.params.onSlideChangeEnd,onLazyImageLoad:function onLazyImageLoad(swiper,slide,img){if(pb.params.onLazyImageLoad)pb.params.onLazyImageLoad(pb,slide,img);},onLazyImageReady:function onLazyImageReady(swiper,slide,img){$(slide).removeClass('photo-browser-slide-lazy');if(pb.params.onLazyImageReady)pb.params.onLazyImageReady(pb,slide,img);}};if(pb.params.swipeToClose&&pb.params.type!=='page'){sliderSettings.onTouchStart=pb.swipeCloseTouchStart;sliderSettings.onTouchMoveOpposite=pb.swipeCloseTouchMove;sliderSettings.onTouchEnd=pb.swipeCloseTouchEnd;}pb.swiper=app.swiper(pb.swiperContainer,sliderSettings);if(index===0){pb.onSliderTransitionStart(pb.swiper);}pb.attachEvents();};pb.attachEvents=function(detach){var action=detach?'off':'on';pb.container.find('.photo-browser-close-link')[action]('click',pb.close);};// Expose
pb.exposed=false;pb.toggleExposition=function(){if(pb.container)pb.container.toggleClass('photo-browser-exposed');if(pb.params.expositionHideCaptions)pb.captionsContainer.toggleClass('photo-browser-captions-exposed');pb.exposed=!pb.exposed;};pb.enableExposition=function(){if(pb.container)pb.container.addClass('photo-browser-exposed');if(pb.params.expositionHideCaptions)pb.captionsContainer.addClass('photo-browser-captions-exposed');pb.exposed=true;};pb.disableExposition=function(){if(pb.container)pb.container.removeClass('photo-browser-exposed');if(pb.params.expositionHideCaptions)pb.captionsContainer.removeClass('photo-browser-captions-exposed');pb.exposed=false;};// Swipe Up To Close
var swipeToCloseIsTouched=false;var allowSwipeToClose=true;var swipeToCloseDiff,swipeToCloseStart,swipeToCloseCurrent,swipeToCloseStarted=false,swipeToCloseActiveSlide,swipeToCloseTimeStart;pb.swipeCloseTouchStart=function(swiper,e){if(!allowSwipeToClose)return;swipeToCloseIsTouched=true;};pb.swipeCloseTouchMove=function(swiper,e){if(!swipeToCloseIsTouched)return;if(!swipeToCloseStarted){swipeToCloseStarted=true;swipeToCloseStart=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;swipeToCloseActiveSlide=pb.swiper.slides.eq(pb.swiper.activeIndex);swipeToCloseTimeStart=new Date().getTime();}e.preventDefault();swipeToCloseCurrent=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;swipeToCloseDiff=swipeToCloseStart-swipeToCloseCurrent;var opacity=1-Math.abs(swipeToCloseDiff)/300;swipeToCloseActiveSlide.transform('translate3d(0,'+-swipeToCloseDiff+'px,0)');pb.swiper.container.css('opacity',opacity).transition(0);};pb.swipeCloseTouchEnd=function(swiper,e){swipeToCloseIsTouched=false;if(!swipeToCloseStarted){swipeToCloseStarted=false;return;}swipeToCloseStarted=false;allowSwipeToClose=false;var diff=Math.abs(swipeToCloseDiff);var timeDiff=new Date().getTime()-swipeToCloseTimeStart;if(timeDiff<300&&diff>20||timeDiff>=300&&diff>100){setTimeout(function(){if(pb.params.type==='standalone'){pb.close();}if(pb.params.type==='popup'){app.closeModal(pb.popup);}if(pb.params.onSwipeToClose){pb.params.onSwipeToClose(pb);}allowSwipeToClose=true;},0);return;}if(diff!==0){swipeToCloseActiveSlide.addClass('transitioning').transitionEnd(function(){allowSwipeToClose=true;swipeToCloseActiveSlide.removeClass('transitioning');});}else{allowSwipeToClose=true;}pb.swiper.container.css('opacity','').transition('');swipeToCloseActiveSlide.transform('');};return pb;};app.photoBrowser=function(params){return new PhotoBrowser(params);};/*===============================================================================
        ************   Autocomplete   ************
        ===============================================================================*/var Autocomplete=function Autocomplete(params){var a=this;// Params
var defaults={// Standalone Options
/*
                opener: undefined,
                */popupCloseText:'Close',backText:'Back',searchbarPlaceholderText:'Search...',searchbarCancelText:'Cancel',openWithAnimation:true,// When opened in page should the searchbar be focused by default
autoFocus:false,openIn:'page',backOnSelect:false,notFoundText:'Nothing found',requestSourceOnOpen:false,/*
                pageTitle: undefined,
                */// Handle Data
/*
                source: undefined,
                limit: undefined,
                */valueProperty:'id',textProperty:'text',// Dropdown Options
highlightMatches:true,/*
                dropdownPlaceholderText: 'Type anything...',
                */updateInputValueOnSelect:true,expandInput:false,// Preloader
preloaderColor:false,preloader:false// Templates
/*
                itemTemplate: undefined,
                navbarTemplate: undefined,
                dropdownTemplate: undefined
                dropdownItemTemplate: undefined,
                dropdownPlaceholderTemplate: undefined
                */// Color themes
/*
                navbarTheme: undefined,
                formTheme: undefined,
                */// Callbacks
/*
                onChange: function (a, value) - for not dropdown
                onOpen: function (a)
                onClose: function (a)
                */};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}}a.params=params;// Opener Link & View
if(a.params.opener){a.opener=$(a.params.opener);}var view=a.params.view;if(!a.params.view&&a.opener&&a.opener.length){// Find related view
view=a.opener.parents('.'+app.params.viewClass);if(view.length===0)return;view=view[0].f7View;}// Input
if(a.params.input){a.input=$(a.params.input);if(a.input.length===0&&a.params.openIn==='dropdown')return;}// Array with selected items
a.value=a.params.value||[];// ID & Inputs
a.id=new Date().getTime();a.inputType=a.params.multiple?'checkbox':'radio';a.inputName=a.inputType+'-'+a.id;// Is Material
var material=app.params.material;// Back On Select
var backOnSelect=a.params.backOnSelect;if(a.params.openIn!=='dropdown'){// Item Template
a.itemTemplate=t7.compile(a.params.itemTemplate||'<li>'+'<label class="label-{{inputType}} item-content">'+'<input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>'+'{{#if material}}'+'<div class="item-media">'+'<i class="icon icon-form-{{inputType}}"></i>'+'</div>'+'<div class="item-inner">'+'<div class="item-title">{{text}}</div>'+'</div>'+'{{else}}'+'{{#if checkbox}}'+'<div class="item-media">'+'<i class="icon icon-form-checkbox"></i>'+'</div>'+'{{/if}}'+'<div class="item-inner">'+'<div class="item-title">{{text}}</div>'+'</div>'+'{{/if}}'+'</label>'+'</li>');// Page Layout
var pageTitle=a.params.pageTitle||'';if(!pageTitle&&a.opener&&a.opener.length){pageTitle=a.opener.find('.item-title').text();}var pageName='autocomplete-'+a.inputName;var navbarTheme=a.params.navbarTheme,formTheme=a.params.formTheme;// Navbar HTML
var navbarHTML;var noNavbar='',noToolbar='',navbarLayout;a.navbarTemplate=t7.compile(a.params.navbarTemplate||'<div class="navbar no-shadow {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}">'+'<div class="navbar-inner">'+'<div class="left sliding">'+'{{#if material}}'+'<a href="#" class="link {{#if inPopup}}close-popup{{else}}back{{/if}} icon-only" {{#unless animated}}data-animate-pages="false"{{/unless}}><i class="icon icon-back"></i></a>'+'{{else}}'+'<a href="#" class="link {{#if inPopup}}close-popup{{else}}back{{/if}}" {{#unless animated}}data-animate-pages="false"{{/unless}}>'+'<i class="icon icon-back"></i>'+'{{#if inPopup}}'+'<span>{{popupCloseText}}</span>'+'{{else}}'+'<span>{{backText}}</span>'+'{{/if}}'+'</a>'+'{{/if}}'+'</div>'+'<div class="center sliding">{{pageTitle}}</div>'+'{{#if preloader}}'+'<div class="right">'+'<div class="autocomplete-preloader preloader {{#if preloaderColor}}preloader-{{preloaderColor}}{{/if}}"></div>'+'</div>'+'{{/if}}'+'</div>'+'</div>');navbarHTML=a.navbarTemplate({pageTitle:pageTitle,backText:a.params.backText,popupCloseText:a.params.popupCloseText,openIn:a.params.openIn,navbarTheme:navbarTheme,inPopup:a.params.openIn==='popup',inPage:a.params.openIn==='page',material:material,preloader:a.params.preloader,preloaderColor:a.params.preloaderColor,animated:a.params.openWithAnimation});// Determine navbar layout type - static/fixed/through
if(a.params.openIn==='page'){navbarLayout='static';if(a.opener){if(a.opener.parents('.navbar-through').length>0)navbarLayout='through';if(a.opener.parents('.navbar-fixed').length>0)navbarLayout='fixed';noToolbar=a.opener.parents('.page').hasClass('no-toolbar')?'no-toolbar':'';noNavbar=a.opener.parents('.page').hasClass('no-navbar')?'no-navbar':'navbar-'+navbarLayout;}else if(view.container){if($(view.container).hasClass('navbar-through')||$(view.container).find('.navbar-through').length>0)navbarLayout='through';if($(view.container).hasClass('navbar-fixed')||$(view.container).find('.navbar-fixed').length>0)navbarLayout='fixed';noToolbar=$(view.activePage.container).hasClass('no-toolbar')?'no-toolbar':'';noNavbar=$(view.activePage.container).hasClass('no-navbar')?'no-navbar':'navbar-'+navbarLayout;}}else{navbarLayout='fixed';}var searchbarHTML='<form class="searchbar">'+'<div class="searchbar-input">'+'<input type="search" placeholder="'+a.params.searchbarPlaceholderText+'">'+'<a href="#" class="searchbar-clear"></a>'+'</div>'+(material?'':'<a href="#" class="searchbar-cancel">'+a.params.searchbarCancelText+'</a>')+'</form>'+'<div class="searchbar-overlay"></div>';var pageHTML=(navbarLayout==='through'?navbarHTML:'')+'<div class="pages">'+'<div data-page="'+pageName+'" class="page autocomplete-page '+noNavbar+' '+noToolbar+'">'+(navbarLayout==='fixed'?navbarHTML:'')+searchbarHTML+'<div class="page-content">'+(navbarLayout==='static'?navbarHTML:'')+'<div class="list-block autocomplete-found autocomplete-list-'+a.id+' '+(formTheme?'theme-'+formTheme:'')+'">'+'<ul></ul>'+'</div>'+'<div class="list-block autocomplete-not-found">'+'<ul><li class="item-content"><div class="item-inner"><div class="item-title">'+a.params.notFoundText+'</div></div></li></ul>'+'</div>'+'<div class="list-block autocomplete-values">'+'<ul></ul>'+'</div>'+'</div>'+'</div>'+'</div>';}else{a.dropdownItemTemplate=t7.compile(a.params.dropdownItemTemplate||'<li>'+'<label class="{{#unless placeholder}}label-radio{{/unless}} item-content" data-value="{{value}}">'+'<div class="item-inner">'+'<div class="item-title">{{text}}</div>'+'</div>'+'</label>'+'</li>');a.dropdownPlaceholderTemplate=t7.compile(a.params.dropdownPlaceholderTemplate||'<li class="autocomplete-dropdown-placeholder">'+'<div class="item-content">'+'<div class="item-inner">'+'<div class="item-title">{{text}}</div>'+'</div>'+'</label>'+'</li>');a.dropdownTemplate=t7.compile(a.params.dropdownTemplate||'<div class="autocomplete-dropdown">'+'<div class="autocomplete-dropdown-inner">'+'<div class="list-block">'+'<ul></ul>'+'</div>'+'</div>'+'{{#if preloader}}'+'<div class="autocomplete-preloader preloader {{#if preloaderColor}}preloader-{{preloaderColor}}{{/if}}">{{#if material}}{{materialPreloaderHtml}}{{/if}}</div>'+'{{/if}}'+'</div>');}// Define popup
a.popup=undefined;// Define Dropdown
a.dropdown=undefined;// Handle Input Value Change
function handleInputValue(e){var query=a.input.val();if(a.params.source){a.params.source(a,query,function(items){var itemsHTML='';var limit=a.params.limit?Math.min(a.params.limit,items.length):items.length;a.items=items;var i,j,regExp;if(a.params.highlightMatches){query=query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,'\\$&');regExp=new RegExp('('+query+')','i');}for(i=0;i<limit;i++){var itemValue=_typeof(items[i])==='object'?items[i][a.params.valueProperty]:items[i];var itemText=_typeof(items[i])!=='object'?items[i]:items[i][a.params.textProperty];itemsHTML+=a.dropdownItemTemplate({value:itemValue,text:a.params.highlightMatches?itemText.replace(regExp,'<b>$1</b>'):itemText});}if(itemsHTML===''&&query===''&&a.params.dropdownPlaceholderText){itemsHTML+=a.dropdownPlaceholderTemplate({text:a.params.dropdownPlaceholderText});}a.dropdown.find('ul').html(itemsHTML);});}}// Handle Drop Down Click
function handleDropdownClick(e){/*jshint validthis:true */var clicked=$(this);var clickedItem;for(var i=0;i<a.items.length;i++){var itemValue=_typeof(a.items[i])==='object'?a.items[i][a.params.valueProperty]:a.items[i];var value=clicked.attr('data-value');if(itemValue===value||itemValue*1===value*1){clickedItem=a.items[i];}}if(a.params.updateInputValueOnSelect){a.input.val((typeof clickedItem==='undefined'?'undefined':_typeof(clickedItem))==='object'?clickedItem[a.params.valueProperty]:clickedItem);a.input.trigger('input change');}if(a.params.onChange){a.params.onChange(a,clickedItem);}a.close();}// Handle HTML Click to close Dropdown
function closeOnHTMLClick(e){var target=$(e.target);if(!(target.is(a.input[0])||a.dropdown&&target.parents(a.dropdown[0]).length>0)){a.close();}}a.positionDropDown=function(){var listBlock=a.input.parents('.list-block'),pageContent=a.input.parents('.page-content'),paddingTop=parseInt(pageContent.css('padding-top'),10),paddingBottom=parseInt(pageContent.css('padding-top'),10),// inputOffset = a.input.offset(),
listBlockOffsetLeft=listBlock.length>0?listBlock.offset().left-listBlock.parent().offset().left:0,inputOffsetLeft=a.input.offset().left-(listBlock.length>0?listBlock.offset().left:0),inputOffsetTop=a.input.offset().top-(pageContent.offset().top-pageContent[0].scrollTop),maxHeight=pageContent[0].scrollHeight-paddingBottom-(inputOffsetTop+pageContent[0].scrollTop)-a.input[0].offsetHeight;a.dropdown.css({left:(listBlock.length>0?listBlockOffsetLeft:inputOffsetLeft)+'px',top:inputOffsetTop+pageContent[0].scrollTop+a.input[0].offsetHeight+'px',width:(listBlock.length>0?listBlock[0].offsetWidth:a.input[0].offsetWidth)+'px'});a.dropdown.children('.autocomplete-dropdown-inner').css({maxHeight:maxHeight+'px',paddingLeft:listBlock.length>0&&!a.params.expandInput?inputOffsetLeft-(material?16:15)+'px':''});};a.pageInit=function(e){var page=e.detail.page;a.page=$(page.container);a.pageData=page;if(page.name!==pageName){return;}var container=$(page.container);// Source
function onSource(query){if(!a.params.source)return;var i,j,k;a.params.source(a,query,function(items){var itemsHTML='';var limit=a.params.limit?Math.min(a.params.limit,items.length):items.length;a.items=items;for(i=0;i<limit;i++){var selected=false;var itemValue=_typeof(items[i])==='object'?items[i][a.params.valueProperty]:items[i];for(j=0;j<a.value.length;j++){var aValue=_typeof(a.value[j])==='object'?a.value[j][a.params.valueProperty]:a.value[j];if(aValue===itemValue||aValue*1===itemValue*1)selected=true;}itemsHTML+=a.itemTemplate({value:itemValue,text:_typeof(items[i])!=='object'?items[i]:items[i][a.params.textProperty],inputType:a.inputType,id:a.id,inputName:a.inputName,selected:selected,checkbox:a.inputType==='checkbox',material:material});}container.find('.autocomplete-found ul').html(itemsHTML);if(items.length===0){if(query.length!==0){container.find('.autocomplete-not-found').show();container.find('.autocomplete-found, .autocomplete-values').hide();}else{container.find('.autocomplete-values').show();container.find('.autocomplete-found, .autocomplete-not-found').hide();}}else{container.find('.autocomplete-found').show();container.find('.autocomplete-not-found, .autocomplete-values').hide();}});}// Init Search Bar
var searchbar=app.searchbar(container.find('.searchbar'),{customSearch:true,onSearch:function onSearch(searchbar,data){if(data.query.length===0&&searchbar.active){searchbar.overlay.addClass('searchbar-overlay-active');}else{searchbar.overlay.removeClass('searchbar-overlay-active');}onSource(data.query);}});// Save searchbar instance
a.searchbar=searchbar;// Update values
function updateValues(){var valuesHTML='';var i;for(i=0;i<a.value.length;i++){valuesHTML+=a.itemTemplate({value:_typeof(a.value[i])==='object'?a.value[i][a.params.valueProperty]:a.value[i],text:_typeof(a.value[i])==='object'?a.value[i][a.params.textProperty]:a.value[i],inputType:a.inputType,id:a.id,inputName:a.inputName+'-checked',checkbox:a.inputType==='checkbox',material:material,selected:true});}container.find('.autocomplete-values ul').html(valuesHTML);}// Handle Inputs
if(!a.params.multiple&&a.params.backOnSelect){container.once('click','.list-block label',function(){if(a.params.openIn==='popup')app.closeModal(a.popup);else view.router.back({animatePages:a.params.openWithAnimation});});}container.on('change','input[type="radio"], input[type="checkbox"]',function(){var i;var input=this;var value=input.value;var text=$(input).parents('li').find('.item-title').text();var isValues=$(input).parents('.autocomplete-values').length>0;var item,itemValue,aValue;if(isValues){if(a.inputType==='checkbox'&&!input.checked){for(i=0;i<a.value.length;i++){aValue=typeof a.value[i]==='string'?a.value[i]:a.value[i][a.params.valueProperty];if(aValue===value||aValue*1===value*1){a.value.splice(i,1);}}updateValues();if(a.params.onChange)a.params.onChange(a,a.value);}return;}// Find Related Item
for(i=0;i<a.items.length;i++){itemValue=typeof a.items[i]==='string'?a.items[i]:a.items[i][a.params.valueProperty];if(itemValue===value||itemValue*1===value*1)item=a.items[i];}// Update Selected Value
if(a.inputType==='radio'){a.value=[item];}else{if(input.checked){a.value.push(item);}else{for(i=0;i<a.value.length;i++){aValue=typeof a.value[i]==='string'?a.value[i]:a.value[i][a.params.valueProperty];if(aValue===value||aValue*1===value*1){a.value.splice(i,1);}}}}// Update Values Block
updateValues();// On Select Callback
if((a.inputType==='radio'&&input.checked||a.inputType==='checkbox')&&a.params.onChange){a.params.onChange(a,a.value);}});// Update Values On Page Init
updateValues();// Source on load
if(a.params.requestSourceOnOpen)onSource('');// On Open Callback
if(a.params.onOpen)a.params.onOpen(a);};// Show Hide Preloader
a.showPreloader=function(){if(a.params.openIn==='dropdown'){if(a.dropdown)a.dropdown.find('.autocomplete-preloader').addClass('autocomplete-preloader-visible');}else $('.autocomplete-preloader').addClass('autocomplete-preloader-visible');};a.hidePreloader=function(){if(a.params.openIn==='dropdown'){if(a.dropdown)a.dropdown.find('.autocomplete-preloader').removeClass('autocomplete-preloader-visible');}else $('.autocomplete-preloader').removeClass('autocomplete-preloader-visible');};// Autofocus
a.autoFocus=function(e){var self=this;setTimeout(function(){$(self).find('input[type=search]').focus();},0);};// Open Autocomplete Page/Popup
a.open=function(){if(a.opened)return;a.opened=true;if(a.params.openIn==='dropdown'){if(!a.dropdown){a.dropdown=$(a.dropdownTemplate({preloader:a.params.preloader,preloaderColor:a.params.preloaderColor,material:material,materialPreloaderHtml:app.params.materialPreloaderHtml}));a.dropdown.on('click','label',handleDropdownClick);}var listBlock=a.input.parents('.list-block');if(listBlock.length&&a.input.parents('.item-content').length>0&&a.params.expandInput){a.input.parents('.item-content').addClass('item-content-dropdown-expand');}a.positionDropDown();a.input.parents('.page-content').append(a.dropdown);a.dropdown.addClass('autocomplete-dropdown-in');a.input.trigger('input');app.onResize(a.positionDropDown);if(a.params.onOpen)a.params.onOpen(a);}else{$(document).once('page:init','.autocomplete-page',a.pageInit);if(a.params.openIn==='popup'){a.popup=app.popup('<div class="popup autocomplete-popup autocomplete-popup-'+a.inputName+'">'+'<div class="view navbar-fixed">'+pageHTML+'</div>'+'</div>',true,a.params.openWithAnimation);a.popup=$(a.popup);if(a.params.autoFocus){if(a.params.openWithAnimation)a.popup.once('popup:opened',a.autoFocus);else a.autoFocus.bind(a.popup)();}a.popup.once('popup:closed',function(){a.popup=undefined;a.opened=false;if(a.params.onClose)a.params.onClose(a);});}else{if(a.params.autoFocus){$(document).once(a.params.openWithAnimation?'page:afteranimation':'page:init','.autocomplete-page',a.autoFocus);}view.router.load({content:pageHTML,animatePages:a.params.openWithAnimation});$(document).once('page:back','.autocomplete-page',function(){a.opened=false;if(a.params.onClose)a.params.onClose(a);});}}};a.close=function(e){if(!a.opened)return;if(a.params.openIn==='dropdown'){if(e&&e.type==='blur'&&a.dropdown.find('label.active-state').length>0)return;a.dropdown.removeClass('autocomplete-dropdown-in').remove();a.input.parents('.item-content-dropdown-expand').removeClass('item-content-dropdown-expand');a.opened=false;app.offResize(a.positionDropDown);if(a.params.onClose)a.params.onClose(a);}if(a.params.openIn==='popup'){if(a.popup)app.closeModal(a.popup);}};// Init Events
a.initEvents=function(detach){var method=detach?'off':'on';if(a.params.openIn!=='dropdown'&&a.opener){a.opener[method]('click',a.open);}if(a.params.openIn==='dropdown'&&a.input){a.input[method]('focus',a.open);a.input[method]('input',handleInputValue);if(app.device.android){$('html')[method]('click',closeOnHTMLClick);}else{a.input[method]('blur',a.close);}}if(detach&&a.dropdown){a.dropdown=null;}};// Init/Destroy Methods
a.init=function(){a.initEvents();};a.destroy=function(){a.initEvents(true);a=null;};// Init
a.init();return a;};app.autocomplete=function(params){return new Autocomplete(params);};/*======================================================
        ************   Picker   ************
        ======================================================*/var Picker=function Picker(params){var p=this;var defaults={updateValuesOnMomentum:false,updateValuesOnTouchmove:true,rotateEffect:false,momentumRatio:7,freeMode:false,// Common settings
closeByOutsideClick:true,scrollToInput:true,inputReadOnly:true,convertToPopover:true,onlyInPopover:false,toolbar:true,toolbarCloseText:'Done',toolbarTemplate:'<div class="toolbar">'+'<div class="toolbar-inner">'+'<div class="left"></div>'+'<div class="right">'+'<a href="#" class="link close-picker">{{closeText}}</a>'+'</div>'+'</div>'+'</div>'};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}}p.params=params;p.cols=[];p.initialized=false;// Inline flag
p.inline=p.params.container?true:false;// 3D Transforms origin bug, only on safari
var originBug=app.device.ios||navigator.userAgent.toLowerCase().indexOf('safari')>=0&&navigator.userAgent.toLowerCase().indexOf('chrome')<0&&!app.device.android;// Should be converted to popover
function isPopover(){var toPopover=false;if(!p.params.convertToPopover&&!p.params.onlyInPopover)return toPopover;if(!p.inline&&p.params.input){if(p.params.onlyInPopover)toPopover=true;else{if(app.device.ios){toPopover=app.device.ipad?true:false;}else{if(app.width>=768)toPopover=true;}}}return toPopover;}function inPopover(){if(p.opened&&p.container&&p.container.length>0&&p.container.parents('.popover').length>0)return true;else return false;}// Value
p.setValue=function(arrValues,transition){var valueIndex=0;if(p.cols.length===0){p.value=arrValues;p.updateValue(arrValues);return;}for(var i=0;i<p.cols.length;i++){if(p.cols[i]&&!p.cols[i].divider){p.cols[i].setValue(arrValues[valueIndex],transition);valueIndex++;}}};p.updateValue=function(forceValues){var newValue=forceValues||[];var newDisplayValue=[],i,column;if(p.cols.length===0){for(i=0;i<p.params.cols.length;i++){column=p.params.cols[i];if(column.displayValues!==undefined&&column.values!==undefined&&column.values.indexOf(newValue[i])!==undefined){newDisplayValue.push(column.displayValues[column.values.indexOf(newValue[i])]);}else{newDisplayValue.push(newValue[i]);}}}else{for(i=0;i<p.cols.length;i++){if(!p.cols[i].divider){newValue.push(p.cols[i].value);newDisplayValue.push(p.cols[i].displayValue);}}}if(newValue.indexOf(undefined)>=0){return;}p.value=newValue;p.displayValue=newDisplayValue;if(p.params.onChange){p.params.onChange(p,p.value,p.displayValue);}if(p.input&&p.input.length>0){$(p.input).val(p.params.formatValue?p.params.formatValue(p,p.value,p.displayValue):p.value.join(' '));$(p.input).trigger('change');}};// Columns Handlers
p.initPickerCol=function(colElement,updateItems){var colContainer=$(colElement);var colIndex=colContainer.index();var col=p.cols[colIndex];if(col.divider)return;col.container=colContainer;col.wrapper=col.container.find('.picker-items-col-wrapper');col.items=col.wrapper.find('.picker-item');var i,j;var wrapperHeight,itemHeight,itemsHeight,minTranslate,maxTranslate;col.replaceValues=function(values,displayValues){col.destroyEvents();col.values=values;col.displayValues=displayValues;var newItemsHTML=p.columnHTML(col,true);col.wrapper.html(newItemsHTML);col.items=col.wrapper.find('.picker-item');col.calcSize();col.setValue(col.values[0],0,true);col.initEvents();};var resizeTimeout;col.calcSize=function(){if(p.params.rotateEffect){col.container.removeClass('picker-items-col-absolute');if(!col.width)col.container.css({width:''});}var colWidth,colHeight;colWidth=0;colHeight=col.container[0].offsetHeight;wrapperHeight=col.wrapper[0].offsetHeight;itemHeight=col.items[0].offsetHeight;itemsHeight=itemHeight*col.items.length;minTranslate=colHeight/2-itemsHeight+itemHeight/2;maxTranslate=colHeight/2-itemHeight/2;if(col.width){colWidth=col.width;if(parseInt(colWidth,10)===colWidth)colWidth=colWidth+'px';col.container.css({width:colWidth});}if(p.params.rotateEffect){if(!col.width){col.items.each(function(){var item=$(this).children('span');colWidth=Math.max(colWidth,item[0].offsetWidth);});col.container.css({width:colWidth+2+'px'});}col.container.addClass('picker-items-col-absolute');}};col.calcSize();col.wrapper.transform('translate3d(0,'+maxTranslate+'px,0)').transition(0);var activeIndex=0;var animationFrameId;// Set Value Function
col.setValue=function(newValue,transition,valueCallbacks){if(typeof transition==='undefined')transition='';var newActiveIndex=col.wrapper.find('.picker-item[data-picker-value="'+newValue+'"]').index();if(typeof newActiveIndex==='undefined'||newActiveIndex===-1){return;}var newTranslate=-newActiveIndex*itemHeight+maxTranslate;// Update wrapper
col.wrapper.transition(transition);col.wrapper.transform('translate3d(0,'+newTranslate+'px,0)');// Watch items
if(p.params.updateValuesOnMomentum&&col.activeIndex&&col.activeIndex!==newActiveIndex){$.cancelAnimationFrame(animationFrameId);col.wrapper.transitionEnd(function(){$.cancelAnimationFrame(animationFrameId);});updateDuringScroll();}// Update items
col.updateItems(newActiveIndex,newTranslate,transition,valueCallbacks);};col.updateItems=function(activeIndex,translate,transition,valueCallbacks){if(typeof translate==='undefined'){translate=$.getTranslate(col.wrapper[0],'y');}if(typeof activeIndex==='undefined')activeIndex=-Math.round((translate-maxTranslate)/itemHeight);if(activeIndex<0)activeIndex=0;if(activeIndex>=col.items.length)activeIndex=col.items.length-1;var previousActiveIndex=col.activeIndex;col.activeIndex=activeIndex;col.wrapper.find('.picker-selected').removeClass('picker-selected');col.items.transition(transition);var selectedItem=col.items.eq(activeIndex).addClass('picker-selected').transform('');// Set 3D rotate effect
if(p.params.rotateEffect){var percentage=(translate-(Math.floor((translate-maxTranslate)/itemHeight)*itemHeight+maxTranslate))/itemHeight;col.items.each(function(){var item=$(this);var itemOffsetTop=item.index()*itemHeight;var translateOffset=maxTranslate-translate;var itemOffset=itemOffsetTop-translateOffset;var percentage=itemOffset/itemHeight;var itemsFit=Math.ceil(col.height/itemHeight/2)+1;var angle=-18*percentage;if(angle>180)angle=180;if(angle<-180)angle=-180;// Far class
if(Math.abs(percentage)>itemsFit)item.addClass('picker-item-far');else item.removeClass('picker-item-far');// Set transform
item.transform('translate3d(0, '+(-translate+maxTranslate)+'px, '+(originBug?-110:0)+'px) rotateX('+angle+'deg)');});}if(valueCallbacks||typeof valueCallbacks==='undefined'){// Update values
col.value=selectedItem.attr('data-picker-value');col.displayValue=col.displayValues?col.displayValues[activeIndex]:col.value;// On change callback
if(previousActiveIndex!==activeIndex){if(col.onChange){col.onChange(p,col.value,col.displayValue);}p.updateValue();}}};function updateDuringScroll(){animationFrameId=$.requestAnimationFrame(function(){col.updateItems(undefined,undefined,0);updateDuringScroll();});}// Update items on init
if(updateItems)col.updateItems(0,maxTranslate,0);var allowItemClick=true;var isTouched,isMoved,touchStartY,touchCurrentY,touchStartTime,touchEndTime,startTranslate,returnTo,currentTranslate,prevTranslate,velocityTranslate,velocityTime;function handleTouchStart(e){if(isMoved||isTouched)return;e.preventDefault();isTouched=true;touchStartY=touchCurrentY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;touchStartTime=new Date().getTime();allowItemClick=true;startTranslate=currentTranslate=$.getTranslate(col.wrapper[0],'y');}function handleTouchMove(e){if(!isTouched)return;e.preventDefault();allowItemClick=false;touchCurrentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(!isMoved){// First move
$.cancelAnimationFrame(animationFrameId);isMoved=true;startTranslate=currentTranslate=$.getTranslate(col.wrapper[0],'y');col.wrapper.transition(0);}var diff=touchCurrentY-touchStartY;currentTranslate=startTranslate+diff;returnTo=undefined;// Normalize translate
if(currentTranslate<minTranslate){currentTranslate=minTranslate-Math.pow(minTranslate-currentTranslate,0.8);returnTo='min';}if(currentTranslate>maxTranslate){currentTranslate=maxTranslate+Math.pow(currentTranslate-maxTranslate,0.8);returnTo='max';}// Transform wrapper
col.wrapper.transform('translate3d(0,'+currentTranslate+'px,0)');// Update items
col.updateItems(undefined,currentTranslate,0,p.params.updateValuesOnTouchmove);// Calc velocity
velocityTranslate=currentTranslate-prevTranslate||currentTranslate;velocityTime=new Date().getTime();prevTranslate=currentTranslate;}function handleTouchEnd(e){if(!isTouched||!isMoved){isTouched=isMoved=false;return;}isTouched=isMoved=false;col.wrapper.transition('');if(returnTo){if(returnTo==='min'){col.wrapper.transform('translate3d(0,'+minTranslate+'px,0)');}else col.wrapper.transform('translate3d(0,'+maxTranslate+'px,0)');}touchEndTime=new Date().getTime();var velocity,newTranslate;if(touchEndTime-touchStartTime>300){newTranslate=currentTranslate;}else{velocity=Math.abs(velocityTranslate/(touchEndTime-velocityTime));newTranslate=currentTranslate+velocityTranslate*p.params.momentumRatio;}newTranslate=Math.max(Math.min(newTranslate,maxTranslate),minTranslate);// Active Index
var activeIndex=-Math.floor((newTranslate-maxTranslate)/itemHeight);// Normalize translate
if(!p.params.freeMode)newTranslate=-activeIndex*itemHeight+maxTranslate;// Transform wrapper
col.wrapper.transform('translate3d(0,'+parseInt(newTranslate,10)+'px,0)');// Update items
col.updateItems(activeIndex,newTranslate,'',true);// Watch items
if(p.params.updateValuesOnMomentum){updateDuringScroll();col.wrapper.transitionEnd(function(){$.cancelAnimationFrame(animationFrameId);});}// Allow click
setTimeout(function(){allowItemClick=true;},100);}function handleClick(e){if(!allowItemClick)return;$.cancelAnimationFrame(animationFrameId);/*jshint validthis:true */var value=$(this).attr('data-picker-value');col.setValue(value);}col.initEvents=function(detach){var method=detach?'off':'on';var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;col.container[method](app.touchEvents.start,handleTouchStart,activeListener);col.container[method](app.touchEvents.move,handleTouchMove,activeListener);col.container[method](app.touchEvents.end,handleTouchEnd,activeListener);col.items[method]('click',handleClick);};col.destroyEvents=function(){col.initEvents(true);};col.container[0].f7DestroyPickerCol=function(){col.destroyEvents();};col.initEvents();};p.destroyPickerCol=function(colContainer){colContainer=$(colContainer);if('f7DestroyPickerCol'in colContainer[0])colContainer[0].f7DestroyPickerCol();};// Resize cols
function resizeCols(){if(!p.opened)return;for(var i=0;i<p.cols.length;i++){if(!p.cols[i].divider){p.cols[i].calcSize();p.cols[i].setValue(p.cols[i].value,0,false);}}}app.onResize(resizeCols);// HTML Layout
p.columnHTML=function(col,onlyItems){var columnItemsHTML='';var columnHTML='';if(col.divider){columnHTML+='<div class="picker-items-col picker-items-col-divider '+(col.textAlign?'picker-items-col-'+col.textAlign:'')+' '+(col.cssClass||'')+'">'+col.content+'</div>';}else{for(var j=0;j<col.values.length;j++){columnItemsHTML+='<div class="picker-item" data-picker-value="'+col.values[j]+'"><span>'+(col.displayValues?col.displayValues[j]:col.values[j])+'</span></div>';}columnHTML+='<div class="picker-items-col '+(col.textAlign?'picker-items-col-'+col.textAlign:'')+' '+(col.cssClass||'')+'"><div class="picker-items-col-wrapper">'+columnItemsHTML+'</div></div>';}return onlyItems?columnItemsHTML:columnHTML;};p.layout=function(){var pickerHTML='';var pickerClass='';var i;p.cols=[];var colsHTML='';for(i=0;i<p.params.cols.length;i++){var col=p.params.cols[i];colsHTML+=p.columnHTML(p.params.cols[i]);p.cols.push(col);}pickerClass='picker-modal picker-columns '+(p.params.cssClass||'')+(p.params.rotateEffect?' picker-3d':'');pickerHTML='<div class="'+pickerClass+'">'+(p.params.toolbar?p.params.toolbarTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText):'')+'<div class="picker-modal-inner picker-items">'+colsHTML+'<div class="picker-center-highlight"></div>'+'</div>'+'</div>';p.pickerHTML=pickerHTML;};// Input Events
function openOnInput(e){e.preventDefault();if(p.opened)return;p.open();if(p.params.scrollToInput&&!isPopover()){var pageContent=p.input.parents('.page-content');if(pageContent.length===0)return;var paddingTop=parseInt(pageContent.css('padding-top'),10),paddingBottom=parseInt(pageContent.css('padding-bottom'),10),pageHeight=pageContent[0].offsetHeight-paddingTop-p.container.height(),pageScrollHeight=pageContent[0].scrollHeight-paddingTop-p.container.height(),newPaddingBottom;var inputTop=p.input.offset().top-paddingTop+p.input[0].offsetHeight;if(inputTop>pageHeight){var scrollTop=pageContent.scrollTop()+inputTop-pageHeight;if(scrollTop+pageHeight>pageScrollHeight){newPaddingBottom=scrollTop+pageHeight-pageScrollHeight+paddingBottom;if(pageHeight===pageScrollHeight){newPaddingBottom=p.container.height();}pageContent.css({'padding-bottom':newPaddingBottom+'px'});}pageContent.scrollTop(scrollTop,300);}}}function closeOnHTMLClick(e){if(inPopover())return;if(p.input&&p.input.length>0){if(e.target!==p.input[0]&&$(e.target).parents('.picker-modal').length===0)p.close();}else{if($(e.target).parents('.picker-modal').length===0)p.close();}}if(p.params.input){p.input=$(p.params.input);if(p.input.length>0){if(p.params.inputReadOnly)p.input.prop('readOnly',true);if(!p.inline){p.input.on('click',openOnInput);}if(p.params.inputReadOnly){p.input.on('focus mousedown',function(e){e.preventDefault();});}}}if(!p.inline&&p.params.closeByOutsideClick)$('html').on('click',closeOnHTMLClick);// Open
function onPickerClose(){p.opened=false;if(p.input&&p.input.length>0){p.input.parents('.page-content').css({'padding-bottom':''});if(app.params.material)p.input.trigger('blur');}if(p.params.onClose)p.params.onClose(p);// Destroy events
p.container.find('.picker-items-col').each(function(){p.destroyPickerCol(this);});}p.opened=false;p.open=function(){var toPopover=isPopover();if(!p.opened){// Layout
p.layout();// Append
if(toPopover){p.pickerHTML='<div class="popover popover-picker-columns"><div class="popover-inner">'+p.pickerHTML+'</div></div>';p.popover=app.popover(p.pickerHTML,p.params.input,true);p.container=$(p.popover).find('.picker-modal');$(p.popover).on('popover:close',function(){onPickerClose();});}else if(p.inline){p.container=$(p.pickerHTML);p.container.addClass('picker-modal-inline');$(p.params.container).append(p.container);}else{p.container=$(app.pickerModal(p.pickerHTML));$(p.container).on('picker:close',function(){onPickerClose();});}// Store picker instance
p.container[0].f7Picker=p;// Init Events
p.container.find('.picker-items-col').each(function(){var updateItems=true;if(!p.initialized&&p.params.value||p.initialized&&p.value)updateItems=false;p.initPickerCol(this,updateItems);});// Set value
if(!p.initialized){if(p.value)p.setValue(p.value,0);else if(p.params.value){p.setValue(p.params.value,0);}}else{if(p.value)p.setValue(p.value,0);}// Material Focus
if(p.input&&p.input.length>0&&app.params.material){p.input.trigger('focus');}}// Set flag
p.opened=true;p.initialized=true;if(p.params.onOpen)p.params.onOpen(p);};// Close
p.close=function(){if(!p.opened||p.inline)return;if(inPopover()){app.closeModal(p.popover);return;}else{app.closeModal(p.container);return;}};// Destroy
p.destroy=function(){p.close();if(p.params.input&&p.input.length>0){p.input.off('click focus',openOnInput);}$('html').off('click',closeOnHTMLClick);app.offResize(resizeCols);};if(p.inline){p.open();}else{if(!p.initialized&&p.params.value)p.setValue(p.params.value);}return p;};app.picker=function(params){return new Picker(params);};/*======================================================
        ************   Calendar   ************
        ======================================================*/var Calendar=function Calendar(params){var p=this;var defaults={monthNames:['January','February','March','April','May','June','July','August','September','October','November','December'],monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],firstDay:1,// First day of the week, Monday
weekendDays:[0,6],// Sunday and Saturday
multiple:false,rangePicker:false,dateFormat:'yyyy-mm-dd',direction:'horizontal',// or 'vertical'
minDate:null,maxDate:null,disabled:null,// dates range of disabled days
events:null,// dates range of days with events
rangesClasses:null,//array with custom classes date ranges
touchMove:true,animate:true,closeOnSelect:false,monthPicker:true,monthPickerTemplate:'<div class="picker-calendar-month-picker">'+'<a href="#" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a>'+'<span class="current-month-value"></span>'+'<a href="#" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a>'+'</div>',yearPicker:true,yearPickerTemplate:'<div class="picker-calendar-year-picker">'+'<a href="#" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a>'+'<span class="current-year-value"></span>'+'<a href="#" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a>'+'</div>',weekHeader:true,// Common settings
closeByOutsideClick:true,scrollToInput:true,inputReadOnly:true,convertToPopover:true,onlyInPopover:false,toolbar:true,toolbarCloseText:'Done',headerPlaceholder:'Select date',header:app.params.material,footer:app.params.material,toolbarTemplate:'<div class="toolbar">'+'<div class="toolbar-inner">'+'{{monthPicker}}'+'{{yearPicker}}'+'</div>'+'</div>',headerTemplate:'<div class="picker-header">'+'<div class="picker-calendar-selected-date">{{placeholder}}</div>'+'</div>',footerTemplate:'<div class="picker-footer">'+'<a href="#" class="button close-picker">{{closeText}}</a>'+'</div>'/* Callbacks
                onMonthAdd
                onChange
                onOpen
                onClose
                onDayClick
                onMonthYearChangeStart
                onMonthYearChangeEnd
                */};params=params||{};for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}}p.params=params;p.initialized=false;// Inline flag
p.inline=p.params.container?true:false;// Is horizontal
p.isH=p.params.direction==='horizontal';// RTL inverter
var inverter=p.isH?app.rtl?-1:1:1;// Animating flag
p.animating=false;// Should be converted to popover
function isPopover(){var toPopover=false;if(!p.params.convertToPopover&&!p.params.onlyInPopover)return toPopover;if(!p.inline&&p.params.input){if(p.params.onlyInPopover)toPopover=true;else{if(app.device.ios){toPopover=app.device.ipad?true:false;}else{if(app.width>=768)toPopover=true;}}}return toPopover;}function inPopover(){if(p.opened&&p.container&&p.container.length>0&&p.container.parents('.popover').length>0)return true;else return false;}// Format date
function formatDate(date){date=new Date(date);var year=date.getFullYear();var month=date.getMonth();var month1=month+1;var day=date.getDate();var weekDay=date.getDay();return p.params.dateFormat.replace(/yyyy/g,year).replace(/yy/g,(year+'').substring(2)).replace(/mm/g,month1<10?'0'+month1:month1).replace(/m(\W+)/g,month1+'$1').replace(/MM/g,p.params.monthNames[month]).replace(/M(\W+)/g,p.params.monthNamesShort[month]+'$1').replace(/dd/g,day<10?'0'+day:day).replace(/d(\W+)/g,day+'$1').replace(/DD/g,p.params.dayNames[weekDay]).replace(/D(\W+)/g,p.params.dayNamesShort[weekDay]+'$1');}// Value
p.addValue=function(value){if(p.params.multiple){if(!p.value)p.value=[];var inValuesIndex;for(var i=0;i<p.value.length;i++){if(new Date(value).getTime()===new Date(p.value[i]).getTime()){inValuesIndex=i;}}if(typeof inValuesIndex==='undefined'){p.value.push(value);}else{p.value.splice(inValuesIndex,1);}p.updateValue();}else if(p.params.rangePicker){if(!p.value)p.value=[];if(p.value.length===2||p.value.length===0){p.value=[];}if(p.value[0]!==value)p.value.push(value);else p.value=[];p.value.sort(function(a,b){return a-b;});p.updateValue();}else{p.value=[value];p.updateValue();}};p.setValue=function(arrValues){p.value=arrValues;p.updateValue();};p.updateValue=function(onlyHeader){var i,inputValue;if(p.container&&p.container.length>0){p.wrapper.find('.picker-calendar-day-selected').removeClass('picker-calendar-day-selected');var valueDate;if(p.params.rangePicker&&p.value.length===2){for(i=new Date(p.value[0]).getTime();i<=new Date(p.value[1]).getTime();i+=24*60*60*1000){valueDate=new Date(i);p.wrapper.find('.picker-calendar-day[data-date="'+valueDate.getFullYear()+'-'+valueDate.getMonth()+'-'+valueDate.getDate()+'"]').addClass('picker-calendar-day-selected');}}else{for(i=0;i<p.value.length;i++){valueDate=new Date(p.value[i]);p.wrapper.find('.picker-calendar-day[data-date="'+valueDate.getFullYear()+'-'+valueDate.getMonth()+'-'+valueDate.getDate()+'"]').addClass('picker-calendar-day-selected');}}}if(p.params.onChange){p.params.onChange(p,p.value);}if(p.input&&p.input.length>0||app.params.material&&p.params.header){if(p.params.formatValue)inputValue=p.params.formatValue(p,p.value);else{inputValue=[];for(i=0;i<p.value.length;i++){inputValue.push(formatDate(p.value[i]));}inputValue=inputValue.join(p.params.rangePicker?' - ':', ');}if(app.params.material&&p.params.header&&p.container&&p.container.length>0){p.container.find('.picker-calendar-selected-date').text(inputValue);}if(p.input&&p.input.length>0&&!onlyHeader){$(p.input).val(inputValue);$(p.input).trigger('change');}}};// Columns Handlers
p.initCalendarEvents=function(){var col;var allowItemClick=true;var isTouched,isMoved,touchStartX,touchStartY,touchCurrentX,touchCurrentY,touchStartTime,touchEndTime,startTranslate,currentTranslate,wrapperWidth,wrapperHeight,percentage,touchesDiff,isScrolling;function handleTouchStart(e){if(isMoved||isTouched)return;// e.preventDefault();
isTouched=true;touchStartX=touchCurrentY=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;touchStartY=touchCurrentY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;touchStartTime=new Date().getTime();percentage=0;allowItemClick=true;isScrolling=undefined;startTranslate=currentTranslate=p.monthsTranslate;}function handleTouchMove(e){if(!isTouched)return;touchCurrentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;touchCurrentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){isScrolling=!!(isScrolling||Math.abs(touchCurrentY-touchStartY)>Math.abs(touchCurrentX-touchStartX));}if(p.isH&&isScrolling){isTouched=false;return;}e.preventDefault();if(p.animating){isTouched=false;return;}allowItemClick=false;if(!isMoved){// First move
isMoved=true;wrapperWidth=p.wrapper[0].offsetWidth;wrapperHeight=p.wrapper[0].offsetHeight;p.wrapper.transition(0);}touchesDiff=p.isH?touchCurrentX-touchStartX:touchCurrentY-touchStartY;percentage=touchesDiff/(p.isH?wrapperWidth:wrapperHeight);currentTranslate=(p.monthsTranslate*inverter+percentage)*100;// Transform wrapper
p.wrapper.transform('translate3d('+(p.isH?currentTranslate:0)+'%, '+(p.isH?0:currentTranslate)+'%, 0)');}function handleTouchEnd(e){if(!isTouched||!isMoved){isTouched=isMoved=false;return;}isTouched=isMoved=false;touchEndTime=new Date().getTime();if(touchEndTime-touchStartTime<300){if(Math.abs(touchesDiff)<10){p.resetMonth();}else if(touchesDiff>=10){if(app.rtl)p.nextMonth();else p.prevMonth();}else{if(app.rtl)p.prevMonth();else p.nextMonth();}}else{if(percentage<=-0.5){if(app.rtl)p.prevMonth();else p.nextMonth();}else if(percentage>=0.5){if(app.rtl)p.nextMonth();else p.prevMonth();}else{p.resetMonth();}}// Allow click
setTimeout(function(){allowItemClick=true;},100);}function handleDayClick(e){if(!allowItemClick)return;var day=$(e.target).parents('.picker-calendar-day');if(day.length===0&&$(e.target).hasClass('picker-calendar-day')){day=$(e.target);}if(day.length===0)return;if(day.hasClass('picker-calendar-day-disabled'))return;if(!p.params.rangePicker){if(day.hasClass('picker-calendar-day-next'))p.nextMonth();if(day.hasClass('picker-calendar-day-prev'))p.prevMonth();}var dateYear=day.attr('data-year');var dateMonth=day.attr('data-month');var dateDay=day.attr('data-day');if(p.params.onDayClick){p.params.onDayClick(p,day[0],dateYear,dateMonth,dateDay);}if(!day.hasClass('picker-calendar-day-selected')||p.params.multiple||p.params.rangePicker){p.addValue(new Date(dateYear,dateMonth,dateDay,0,0,0));}if(p.params.closeOnSelect){if(p.params.rangePicker&&p.value.length===2||!p.params.rangePicker)p.close();}}p.container.find('.picker-calendar-prev-month').on('click',p.prevMonth);p.container.find('.picker-calendar-next-month').on('click',p.nextMonth);p.container.find('.picker-calendar-prev-year').on('click',p.prevYear);p.container.find('.picker-calendar-next-year').on('click',p.nextYear);p.wrapper.on('click',handleDayClick);var passiveListener=app.touchEvents.start==='touchstart'&&app.support.passiveListener?{passive:true,capture:false}:false;var activeListener=app.support.passiveListener?{passive:false,capture:false}:false;if(p.params.touchMove){p.wrapper.on(app.touchEvents.start,handleTouchStart,passiveListener);p.wrapper.on(app.touchEvents.move,handleTouchMove,activeListener);p.wrapper.on(app.touchEvents.end,handleTouchEnd,passiveListener);}p.container[0].f7DestroyCalendarEvents=function(){p.container.find('.picker-calendar-prev-month').off('click',p.prevMonth);p.container.find('.picker-calendar-next-month').off('click',p.nextMonth);p.container.find('.picker-calendar-prev-year').off('click',p.prevYear);p.container.find('.picker-calendar-next-year').off('click',p.nextYear);p.wrapper.off('click',handleDayClick);if(p.params.touchMove){p.wrapper.off(app.touchEvents.start,handleTouchStart,passiveListener);p.wrapper.off(app.touchEvents.move,handleTouchMove,activeListener);p.wrapper.off(app.touchEvents.end,handleTouchEnd,passiveListener);}};};p.destroyCalendarEvents=function(colContainer){if('f7DestroyCalendarEvents'in p.container[0])p.container[0].f7DestroyCalendarEvents();};// Scan Dates Range
p.dateInRange=function(dayDate,range){var match=false;var i;if(!range)return false;if(Array.isArray(range)){for(i=0;i<range.length;i++){if(range[i].from||range[i].to){if(range[i].from&&range[i].to){if(dayDate<=new Date(range[i].to).getTime()&&dayDate>=new Date(range[i].from).getTime()){match=true;}}else if(range[i].from){if(dayDate>=new Date(range[i].from).getTime()){match=true;}}else if(range[i].to){if(dayDate<=new Date(range[i].to).getTime()){match=true;}}}else if(dayDate===new Date(range[i]).getTime()){match=true;}}}else if(range.from||range.to){if(range.from&&range.to){if(dayDate<=new Date(range.to).getTime()&&dayDate>=new Date(range.from).getTime()){match=true;}}else if(range.from){if(dayDate>=new Date(range.from).getTime()){match=true;}}else if(range.to){if(dayDate<=new Date(range.to).getTime()){match=true;}}}else if(typeof range==='function'){match=range(new Date(dayDate));}return match;};// Calendar Methods
p.daysInMonth=function(date){var d=new Date(date);return new Date(d.getFullYear(),d.getMonth()+1,0).getDate();};p.monthHTML=function(date,offset){date=new Date(date);var year=date.getFullYear(),month=date.getMonth(),day=date.getDate();if(offset==='next'){if(month===11)date=new Date(year+1,0);else date=new Date(year,month+1,1);}if(offset==='prev'){if(month===0)date=new Date(year-1,11);else date=new Date(year,month-1,1);}if(offset==='next'||offset==='prev'){month=date.getMonth();year=date.getFullYear();}var daysInPrevMonth=p.daysInMonth(new Date(date.getFullYear(),date.getMonth()).getTime()-10*24*60*60*1000),daysInMonth=p.daysInMonth(date),firstDayOfMonthIndex=new Date(date.getFullYear(),date.getMonth()).getDay();if(firstDayOfMonthIndex===0)firstDayOfMonthIndex=7;var dayDate,currentValues=[],i,j,k,rows=6,cols=7,monthHTML='',dayIndex=0+(p.params.firstDay-1),today=new Date().setHours(0,0,0,0),minDate=p.params.minDate?new Date(p.params.minDate).getTime():null,maxDate=p.params.maxDate?new Date(p.params.maxDate).getTime():null,disabled,hasEvent;if(p.value&&p.value.length){for(i=0;i<p.value.length;i++){currentValues.push(new Date(p.value[i]).setHours(0,0,0,0));}}for(i=1;i<=rows;i++){var rowHTML='';var row=i;for(j=1;j<=cols;j++){var col=j;dayIndex++;var dayNumber=dayIndex-firstDayOfMonthIndex;var weekDayIndex=col-1+p.params.firstDay>6?col-1-7+p.params.firstDay:col-1+p.params.firstDay;var addClass='';if(dayNumber<0){dayNumber=daysInPrevMonth+dayNumber+1;addClass+=' picker-calendar-day-prev';dayDate=new Date(month-1<0?year-1:year,month-1<0?11:month-1,dayNumber).getTime();}else{dayNumber=dayNumber+1;if(dayNumber>daysInMonth){dayNumber=dayNumber-daysInMonth;addClass+=' picker-calendar-day-next';dayDate=new Date(month+1>11?year+1:year,month+1>11?0:month+1,dayNumber).getTime();}else{dayDate=new Date(year,month,dayNumber).getTime();}}// Today
if(dayDate===today)addClass+=' picker-calendar-day-today';// Selected
if(p.params.rangePicker&&currentValues.length===2){if(dayDate>=currentValues[0]&&dayDate<=currentValues[1])addClass+=' picker-calendar-day-selected';}else{if(currentValues.indexOf(dayDate)>=0)addClass+=' picker-calendar-day-selected';}// Weekend
if(p.params.weekendDays.indexOf(weekDayIndex)>=0){addClass+=' picker-calendar-day-weekend';}// Has Events
hasEvent=false;if(p.params.events){if(p.dateInRange(dayDate,p.params.events)){hasEvent=true;}}if(hasEvent){addClass+=' picker-calendar-day-has-events';}// Custom Ranges
if(p.params.rangesClasses){for(k=0;k<p.params.rangesClasses.length;k++){if(p.dateInRange(dayDate,p.params.rangesClasses[k].range)){addClass+=' '+p.params.rangesClasses[k].cssClass;}}}// Disabled
disabled=false;if(minDate&&dayDate<minDate||maxDate&&dayDate>maxDate){disabled=true;}if(p.params.disabled){if(p.dateInRange(dayDate,p.params.disabled)){disabled=true;}}if(disabled){addClass+=' picker-calendar-day-disabled';}dayDate=new Date(dayDate);var dayYear=dayDate.getFullYear();var dayMonth=dayDate.getMonth();rowHTML+='<div data-year="'+dayYear+'" data-month="'+dayMonth+'" data-day="'+dayNumber+'" class="picker-calendar-day'+addClass+'" data-date="'+(dayYear+'-'+dayMonth+'-'+dayNumber)+'"><span>'+dayNumber+'</span></div>';}monthHTML+='<div class="picker-calendar-row">'+rowHTML+'</div>';}monthHTML='<div class="picker-calendar-month" data-year="'+year+'" data-month="'+month+'">'+monthHTML+'</div>';return monthHTML;};p.animating=false;p.updateCurrentMonthYear=function(dir){if(typeof dir==='undefined'){p.currentMonth=parseInt(p.months.eq(1).attr('data-month'),10);p.currentYear=parseInt(p.months.eq(1).attr('data-year'),10);}else{p.currentMonth=parseInt(p.months.eq(dir==='next'?p.months.length-1:0).attr('data-month'),10);p.currentYear=parseInt(p.months.eq(dir==='next'?p.months.length-1:0).attr('data-year'),10);}p.container.find('.current-month-value').text(p.params.monthNames[p.currentMonth]);p.container.find('.current-year-value').text(p.currentYear);};p.onMonthChangeStart=function(dir){p.updateCurrentMonthYear(dir);p.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');var currentIndex=dir==='next'?p.months.length-1:0;p.months.eq(currentIndex).addClass('picker-calendar-month-current');p.months.eq(dir==='next'?currentIndex-1:currentIndex+1).addClass(dir==='next'?'picker-calendar-month-prev':'picker-calendar-month-next');if(p.params.onMonthYearChangeStart){p.params.onMonthYearChangeStart(p,p.currentYear,p.currentMonth);}};p.onMonthChangeEnd=function(dir,rebuildBoth){p.animating=false;var nextMonthHTML,prevMonthHTML,newMonthHTML;p.wrapper.find('.picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)').remove();if(typeof dir==='undefined'){dir='next';rebuildBoth=true;}if(!rebuildBoth){newMonthHTML=p.monthHTML(new Date(p.currentYear,p.currentMonth),dir);}else{p.wrapper.find('.picker-calendar-month-next, .picker-calendar-month-prev').remove();prevMonthHTML=p.monthHTML(new Date(p.currentYear,p.currentMonth),'prev');nextMonthHTML=p.monthHTML(new Date(p.currentYear,p.currentMonth),'next');}if(dir==='next'||rebuildBoth){p.wrapper.append(newMonthHTML||nextMonthHTML);}if(dir==='prev'||rebuildBoth){p.wrapper.prepend(newMonthHTML||prevMonthHTML);}p.months=p.wrapper.find('.picker-calendar-month');p.setMonthsTranslate(p.monthsTranslate);if(p.params.onMonthAdd){p.params.onMonthAdd(p,dir==='next'?p.months.eq(p.months.length-1)[0]:p.months.eq(0)[0]);}if(p.params.onMonthYearChangeEnd){p.params.onMonthYearChangeEnd(p,p.currentYear,p.currentMonth);}};p.setMonthsTranslate=function(translate){translate=translate||p.monthsTranslate||0;if(typeof p.monthsTranslate==='undefined')p.monthsTranslate=translate;p.months.removeClass('picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next');var prevMonthTranslate=-(translate+1)*100*inverter;var currentMonthTranslate=-translate*100*inverter;var nextMonthTranslate=-(translate-1)*100*inverter;p.months.eq(0).transform('translate3d('+(p.isH?prevMonthTranslate:0)+'%, '+(p.isH?0:prevMonthTranslate)+'%, 0)').addClass('picker-calendar-month-prev');p.months.eq(1).transform('translate3d('+(p.isH?currentMonthTranslate:0)+'%, '+(p.isH?0:currentMonthTranslate)+'%, 0)').addClass('picker-calendar-month-current');p.months.eq(2).transform('translate3d('+(p.isH?nextMonthTranslate:0)+'%, '+(p.isH?0:nextMonthTranslate)+'%, 0)').addClass('picker-calendar-month-next');};p.nextMonth=function(transition){if(typeof transition==='undefined'||(typeof transition==='undefined'?'undefined':_typeof(transition))==='object'){transition='';if(!p.params.animate)transition=0;}var nextMonth=parseInt(p.months.eq(p.months.length-1).attr('data-month'),10);var nextYear=parseInt(p.months.eq(p.months.length-1).attr('data-year'),10);var nextDate=new Date(nextYear,nextMonth);var nextDateTime=nextDate.getTime();var transitionEndCallback=p.animating?false:true;if(p.params.maxDate){if(nextDateTime>new Date(p.params.maxDate).getTime()){return p.resetMonth();}}p.monthsTranslate--;if(nextMonth===p.currentMonth){var nextMonthTranslate=-p.monthsTranslate*100*inverter;var nextMonthHTML=$(p.monthHTML(nextDateTime,'next')).transform('translate3d('+(p.isH?nextMonthTranslate:0)+'%, '+(p.isH?0:nextMonthTranslate)+'%, 0)').addClass('picker-calendar-month-next');p.wrapper.append(nextMonthHTML[0]);p.months=p.wrapper.find('.picker-calendar-month');if(p.params.onMonthAdd){p.params.onMonthAdd(p,p.months.eq(p.months.length-1)[0]);}}p.animating=true;p.onMonthChangeStart('next');var translate=p.monthsTranslate*100*inverter;p.wrapper.transition(transition).transform('translate3d('+(p.isH?translate:0)+'%, '+(p.isH?0:translate)+'%, 0)');if(transitionEndCallback){p.wrapper.transitionEnd(function(){p.onMonthChangeEnd('next');});}if(!p.params.animate){p.onMonthChangeEnd('next');}};p.prevMonth=function(transition){if(typeof transition==='undefined'||(typeof transition==='undefined'?'undefined':_typeof(transition))==='object'){transition='';if(!p.params.animate)transition=0;}var prevMonth=parseInt(p.months.eq(0).attr('data-month'),10);var prevYear=parseInt(p.months.eq(0).attr('data-year'),10);var prevDate=new Date(prevYear,prevMonth+1,-1);var prevDateTime=prevDate.getTime();var transitionEndCallback=p.animating?false:true;if(p.params.minDate){if(prevDateTime<new Date(p.params.minDate).getTime()){return p.resetMonth();}}p.monthsTranslate++;if(prevMonth===p.currentMonth){var prevMonthTranslate=-p.monthsTranslate*100*inverter;var prevMonthHTML=$(p.monthHTML(prevDateTime,'prev')).transform('translate3d('+(p.isH?prevMonthTranslate:0)+'%, '+(p.isH?0:prevMonthTranslate)+'%, 0)').addClass('picker-calendar-month-prev');p.wrapper.prepend(prevMonthHTML[0]);p.months=p.wrapper.find('.picker-calendar-month');if(p.params.onMonthAdd){p.params.onMonthAdd(p,p.months.eq(0)[0]);}}p.animating=true;p.onMonthChangeStart('prev');var translate=p.monthsTranslate*100*inverter;p.wrapper.transition(transition).transform('translate3d('+(p.isH?translate:0)+'%, '+(p.isH?0:translate)+'%, 0)');if(transitionEndCallback){p.wrapper.transitionEnd(function(){p.onMonthChangeEnd('prev');});}if(!p.params.animate){p.onMonthChangeEnd('prev');}};p.resetMonth=function(transition){if(typeof transition==='undefined')transition='';var translate=p.monthsTranslate*100*inverter;p.wrapper.transition(transition).transform('translate3d('+(p.isH?translate:0)+'%, '+(p.isH?0:translate)+'%, 0)');};p.setYearMonth=function(year,month,transition){if(typeof year==='undefined')year=p.currentYear;if(typeof month==='undefined')month=p.currentMonth;if(typeof transition==='undefined'||(typeof transition==='undefined'?'undefined':_typeof(transition))==='object'){transition='';if(!p.params.animate)transition=0;}var targetDate;if(year<p.currentYear){targetDate=new Date(year,month+1,-1).getTime();}else{targetDate=new Date(year,month).getTime();}if(p.params.maxDate&&targetDate>new Date(p.params.maxDate).getTime()){return false;}if(p.params.minDate&&targetDate<new Date(p.params.minDate).getTime()){return false;}var currentDate=new Date(p.currentYear,p.currentMonth).getTime();var dir=targetDate>currentDate?'next':'prev';var newMonthHTML=p.monthHTML(new Date(year,month));p.monthsTranslate=p.monthsTranslate||0;var prevTranslate=p.monthsTranslate;var monthTranslate,wrapperTranslate;var transitionEndCallback=p.animating?false:true;if(targetDate>currentDate){// To next
p.monthsTranslate--;if(!p.animating)p.months.eq(p.months.length-1).remove();p.wrapper.append(newMonthHTML);p.months=p.wrapper.find('.picker-calendar-month');monthTranslate=-(prevTranslate-1)*100*inverter;p.months.eq(p.months.length-1).transform('translate3d('+(p.isH?monthTranslate:0)+'%, '+(p.isH?0:monthTranslate)+'%, 0)').addClass('picker-calendar-month-next');}else{// To prev
p.monthsTranslate++;if(!p.animating)p.months.eq(0).remove();p.wrapper.prepend(newMonthHTML);p.months=p.wrapper.find('.picker-calendar-month');monthTranslate=-(prevTranslate+1)*100*inverter;p.months.eq(0).transform('translate3d('+(p.isH?monthTranslate:0)+'%, '+(p.isH?0:monthTranslate)+'%, 0)').addClass('picker-calendar-month-prev');}if(p.params.onMonthAdd){p.params.onMonthAdd(p,dir==='next'?p.months.eq(p.months.length-1)[0]:p.months.eq(0)[0]);}p.animating=true;p.onMonthChangeStart(dir);wrapperTranslate=p.monthsTranslate*100*inverter;p.wrapper.transition(transition).transform('translate3d('+(p.isH?wrapperTranslate:0)+'%, '+(p.isH?0:wrapperTranslate)+'%, 0)');if(transitionEndCallback){p.wrapper.transitionEnd(function(){p.onMonthChangeEnd(dir,true);});}if(!p.params.animate){p.onMonthChangeEnd(dir);}};p.nextYear=function(){p.setYearMonth(p.currentYear+1);};p.prevYear=function(){p.setYearMonth(p.currentYear-1);};// HTML Layout
p.layout=function(){var pickerHTML='';var pickerClass='';var i;var layoutDate=p.value&&p.value.length?p.value[0]:new Date().setHours(0,0,0,0);var prevMonthHTML=p.monthHTML(layoutDate,'prev');var currentMonthHTML=p.monthHTML(layoutDate);var nextMonthHTML=p.monthHTML(layoutDate,'next');var monthsHTML='<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">'+(prevMonthHTML+currentMonthHTML+nextMonthHTML)+'</div></div>';// Week days header
var weekHeaderHTML='';if(p.params.weekHeader){for(i=0;i<7;i++){var weekDayIndex=i+p.params.firstDay>6?i-7+p.params.firstDay:i+p.params.firstDay;var dayName=p.params.dayNamesShort[weekDayIndex];weekHeaderHTML+='<div class="picker-calendar-week-day '+(p.params.weekendDays.indexOf(weekDayIndex)>=0?'picker-calendar-week-day-weekend':'')+'"> '+dayName+'</div>';}weekHeaderHTML='<div class="picker-calendar-week-days">'+weekHeaderHTML+'</div>';}pickerClass='picker-modal picker-calendar'+(p.params.rangePicker?' picker-calendar-range':'')+(p.params.cssClass?' '+p.params.cssClass:'');var toolbarHTML=p.params.toolbar?p.params.toolbarTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText):'';if(p.params.toolbar){toolbarHTML=p.params.toolbarTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText).replace(/{{monthPicker}}/g,p.params.monthPicker?p.params.monthPickerTemplate:'').replace(/{{yearPicker}}/g,p.params.yearPicker?p.params.yearPickerTemplate:'');}var headerHTML=p.params.header?p.params.headerTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText).replace(/{{placeholder}}/g,p.params.headerPlaceholder):'';var footerHTML=p.params.footer?p.params.footerTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText):'';pickerHTML='<div class="'+pickerClass+'">'+headerHTML+footerHTML+toolbarHTML+'<div class="picker-modal-inner">'+weekHeaderHTML+monthsHTML+'</div>'+'</div>';p.pickerHTML=pickerHTML;};// Input Events
function openOnInput(e){e.preventDefault();if(p.opened)return;p.open();if(p.params.scrollToInput&&!isPopover()&&!app.params.material){var pageContent=p.input.parents('.page-content');if(pageContent.length===0)return;var paddingTop=parseInt(pageContent.css('padding-top'),10),paddingBottom=parseInt(pageContent.css('padding-bottom'),10),pageHeight=pageContent[0].offsetHeight-paddingTop-p.container.height(),pageScrollHeight=pageContent[0].scrollHeight-paddingTop-p.container.height(),newPaddingBottom;var inputTop=p.input.offset().top-paddingTop+p.input[0].offsetHeight;if(inputTop>pageHeight){var scrollTop=pageContent.scrollTop()+inputTop-pageHeight;if(scrollTop+pageHeight>pageScrollHeight){newPaddingBottom=scrollTop+pageHeight-pageScrollHeight+paddingBottom;if(pageHeight===pageScrollHeight){newPaddingBottom=p.container.height();}pageContent.css({'padding-bottom':newPaddingBottom+'px'});}pageContent.scrollTop(scrollTop,300);}}}function closeOnHTMLClick(e){if(inPopover())return;if(p.input&&p.input.length>0){if(e.target!==p.input[0]&&$(e.target).parents('.picker-modal').length===0)p.close();}else{if($(e.target).parents('.picker-modal').length===0)p.close();}}if(p.params.input){p.input=$(p.params.input);if(p.input.length>0){if(p.params.inputReadOnly)p.input.prop('readOnly',true);if(!p.inline){p.input.on('click',openOnInput);}if(p.params.inputReadOnly){p.input.on('focus mousedown',function(e){e.preventDefault();});}}}if(!p.inline&&p.params.closeByOutsideClick)$('html').on('click',closeOnHTMLClick);// Open
function onPickerClose(){p.opened=false;if(p.input&&p.input.length>0){p.input.parents('.page-content').css({'padding-bottom':''});if(app.params.material)p.input.trigger('blur');}if(p.params.onClose)p.params.onClose(p);// Destroy events
p.destroyCalendarEvents();}p.opened=false;p.open=function(){var toPopover=isPopover();var updateValue=false;if(!p.opened){// Set date value
if(!p.value){if(p.params.value){p.value=p.params.value;updateValue=true;}}// Layout
p.layout();// Append
if(toPopover){p.pickerHTML='<div class="popover popover-picker-calendar"><div class="popover-inner">'+p.pickerHTML+'</div></div>';p.popover=app.popover(p.pickerHTML,p.params.input,true);p.container=$(p.popover).find('.picker-modal');$(p.popover).on('popover:close',function(){onPickerClose();});}else if(p.inline){p.container=$(p.pickerHTML);p.container.addClass('picker-modal-inline');$(p.params.container).append(p.container);}else{p.container=$(app.pickerModal(p.pickerHTML));$(p.container).on('picker:close',function(){onPickerClose();});}// Store calendar instance
p.container[0].f7Calendar=p;p.wrapper=p.container.find('.picker-calendar-months-wrapper');// Months
p.months=p.wrapper.find('.picker-calendar-month');// Update current month and year
p.updateCurrentMonthYear();// Set initial translate
p.monthsTranslate=0;p.setMonthsTranslate();// Init events
p.initCalendarEvents();// Update input value
if(updateValue)p.updateValue();else if(app.params.material&&p.value)p.updateValue(true);// Material Focus
if(p.input&&p.input.length>0&&app.params.material){p.input.trigger('focus');}}// Set flag
p.opened=true;p.initialized=true;if(p.params.onMonthAdd){p.months.each(function(){p.params.onMonthAdd(p,this);});}if(p.params.onOpen)p.params.onOpen(p);};// Close
p.close=function(){if(!p.opened||p.inline)return;if(inPopover()){app.closeModal(p.popover);return;}else{app.closeModal(p.container);return;}};// Destroy
p.destroy=function(){p.close();if(p.params.input&&p.input.length>0){p.input.off('click focus',openOnInput);}$('html').off('click',closeOnHTMLClick);};if(p.inline){p.open();}else{if(!p.initialized&&p.params.value)p.setValue(p.params.value);}return p;};app.calendar=function(params){return new Calendar(params);};/*======================================================
        ************   Notifications   ************
        ======================================================*/var _tempNotificationElement;app.addNotification=function(params){if(!params)return;if(typeof params.media==='undefined')params.media=app.params.notificationMedia;if(typeof params.title==='undefined')params.title=app.params.notificationTitle;if(typeof params.subtitle==='undefined')params.subtitle=app.params.notificationSubtitle;if(typeof params.closeIcon==='undefined')params.closeIcon=app.params.notificationCloseIcon;if(typeof params.hold==='undefined')params.hold=app.params.notificationHold;if(typeof params.closeOnClick==='undefined')params.closeOnClick=app.params.notificationCloseOnClick;if(typeof params.button==='undefined')params.button=app.params.notificationCloseButtonText&&{text:app.params.notificationCloseButtonText,close:true};if(!_tempNotificationElement)_tempNotificationElement=document.createElement('div');params.material=app.params.material;var container=$('.notifications');if(container.length===0){app.root.append('<div class="notifications list-block'+(params.material?'':' media-list')+'"><ul></ul></div>');container=$('.notifications');}var list=container.children('ul');var notificationTemplate=app.params.notificationTemplate||'{{#if custom}}'+'<li>{{custom}}</li>'+'{{else}}'+'<li class="notification-item notification-hidden">'+'<div class="item-content">'+'{{#if material}}'+'<div class="item-inner">'+'<div class="item-title">{{js "this.message || this.title || this.subtitle"}}</div>'+'{{#if ../button}}{{#button}}'+'<div class="item-after">'+'<a href="#" class="button {{#if color}}color-{{color}}{{/if}} {{#js_compare "this.close !== false"}}close-notification{{/js_compare}}">{{text}}</a>'+'</div>'+'{{/button}}{{/if}}'+'</div>'+'{{else}}'+'{{#if media}}'+'<div class="item-media">{{media}}</div>'+'{{/if}}'+'<div class="item-inner">'+'<div class="item-title-row">'+'{{#if title}}'+'<div class="item-title">{{title}}</div>'+'{{/if}}'+'{{#if closeIcon}}'+'<div class="item-after"><a href="#" class="close-notification"><span></span></a></div>'+'{{/if}}'+'</div>'+'{{#if subtitle}}'+'<div class="item-subtitle">{{subtitle}}</div>'+'{{/if}}'+'{{#if message}}'+'<div class="item-text">{{message}}</div>'+'</div>'+'{{/if}}'+'{{/if}}'+'</div>'+'</li>'+'{{/if}}';if(!app._compiledTemplates.notification){app._compiledTemplates.notification=t7.compile(notificationTemplate);}_tempNotificationElement.innerHTML=app._compiledTemplates.notification(params);var item=$(_tempNotificationElement).children();item.on('click',function(e){var close=false;var target=$(e.target);if(params.material&&target.hasClass('button')){if(params.button&&params.button.onClick)params.button.onClick.call(target[0],e,item[0]);}if(target.is('.close-notification')||$(e.target).parents('.close-notification').length>0){close=true;}else{if(params.onClick)params.onClick(e,item[0]);if(params.closeOnClick)close=true;}if(close)app.closeNotification(item[0],e);});if(params.onClose){item.data('f7NotificationOnClose',function(e){params.onClose(item[0],e);});}if(params.additionalClass){item.addClass(params.additionalClass);}if(params.hold){setTimeout(function(){if(item.length>0)app.closeNotification(item[0]);},params.hold);}if(!app.params.material){app.closeNotification(list.children('li.notification-item:last-child'));}list.append(item[0]);container.show();var itemHeight=item.outerHeight(),clientLeft;if(params.material){container.transform('translate3d(0, '+itemHeight+'px, 0)');container.transition(0);clientLeft=item[0].clientLeft;container.transform('translate3d(0, 0, 0)');container.transition('');}else{item.transform('translate3d(0,'+-itemHeight+'px,0)');item.transition(0);clientLeft=item[0].clientLeft;item.transition('');item.transform('translate3d(0,0px,0)');}container.transform('translate3d(0, 0,0)');item.removeClass('notification-hidden');return item[0];};app.closeNotification=function(item,event){item=$(item);if(item.length===0)return;if(item.hasClass('notification-item-removing'))return;var container=$('.notifications');var itemHeight=item.outerHeight();item.css('height',itemHeight+'px').transition(0).addClass('notification-item-removing');var clientLeft=item[0].clientLeft;item.css({height:'0px',marginBottom:'0px'}).transition('');if(item.data('f7NotificationOnClose'))item.data('f7NotificationOnClose')(event);if(container.find('.notification-item:not(.notification-item-removing)').length===0){container.transform('');}item.addClass('notification-hidden').transitionEnd(function(){item.remove();if(container.find('.notification-item').length===0){container.hide();}});};/*===============================================================================
        ************   Data Table   ************
        ===============================================================================*/app.initDataTable=function(table){table=$(table);var tableHeader=table.find('.data-table-header');var tableHeaderSelected=table.find('.data-table-header-selected');// Handle selected
function checkSelectedHeader(){if(tableHeader.length>0&&tableHeaderSelected.length>0){var checkedItems=table.find('tbody .checkbox-cell input:checked').length;table[checkedItems>0?'addClass':'removeClass']('data-table-has-checked');tableHeaderSelected.find('.data-table-selected-count').text(checkedItems);}}table.on('change','.checkbox-cell input[type="checkbox"]',function(e){if(e.detail&&e.detail._sentByF7DataTable){// Scripted event, don't do anything
return;}var input=$(this);var checked=input[0].checked;if(input.parents('thead').length>0){table.find('tbody tr')[checked?'addClass':'removeClass']('data-table-row-selected').find('input').prop('checked',checked).trigger('change',{_sentByF7DataTable:true});}else{input.parents('tr')[checked?'addClass':'removeClass']('data-table-row-selected');if(!checked){table.find('thead .checkbox-cell input[type="checkbox"]').prop('checked',false);}else{// Check for all checked
if(table.find('tbody .checkbox-cell input[type="checkbox"]:checked').length===table.find('tbody tr').length){table.find('thead .checkbox-cell input[type="checkbox"]').prop('checked',true).trigger('change',{_sentByF7DataTable:true});}}}checkSelectedHeader();});checkSelectedHeader();// Sortable
table.find('thead .sortable-cell').on('click',function(){var cell=$(this);var isActive=cell.hasClass('sortable-active');var currentSort;if(isActive){currentSort=cell.hasClass('sortable-desc')?'desc':'asc';cell.removeClass('sortable-desc sortable-asc').addClass('sortable-'+(currentSort==='desc'?'asc':'desc'));}else{table.find('thead .sortable-active').removeClass('sortable-active');cell.addClass('sortable-active');}});// Collapsible
if(table.hasClass('data-table-collapsible')){table.find('tbody td:not(.checkbox-cell)').each(function(){var index=$(this).index();var collpsibleTitle=$(this).attr('data-collapsible-title');if(!collpsibleTitle&&collpsibleTitle!==''){$(this).attr('data-collapsible-title',table.find('thead th').eq(index).text());}});}};app.initPageDataTables=function(pageContainer){pageContainer=$(pageContainer);var dataTables=pageContainer.find('.data-table-init');if(dataTables.length===0&&pageContainer.hasClass('data-table-init')){dataTables=pageContainer;}dataTables.each(function(){app.initDataTable(this);});};/*===========================
        Compile Template7 Templates On App Init
        ===========================*/app.initTemplate7Templates=function(){if(!window.Template7)return;Template7.templates=Template7.templates||app.params.templates||{};Template7.data=Template7.data||app.params.template7Data||{};Template7.cache=Template7.cache||{};app.templates=Template7.templates;app.template7Data=Template7.data;app.template7Cache=Template7.cache;// Precompile templates on app init
if(!app.params.precompileTemplates)return;$('script[type="text/template7"]').each(function(){var id=$(this).attr('id');if(!id)return;Template7.templates[id]=Template7.compile($(this).html());});};/*=======================================
        ************   Plugins API   ************
        =======================================*/var _plugins=[];app.initPlugins=function(){// Initialize plugins
for(var plugin in app.plugins){var p=app.plugins[plugin](app,app.params[plugin]);if(p)_plugins.push(p);}};// Plugin Hooks
app.pluginHook=function(hook){for(var i=0;i<_plugins.length;i++){if(_plugins[i].hooks&&hook in _plugins[i].hooks){_plugins[i].hooks[hook](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}};// Prevented by plugin
app.pluginPrevent=function(action){var prevent=false;for(var i=0;i<_plugins.length;i++){if(_plugins[i].prevents&&action in _plugins[i].prevents){if(_plugins[i].prevents[action](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]))prevent=true;}}return prevent;};// Preprocess content by plugin
app.pluginProcess=function(process,data){var processed=data;for(var i=0;i<_plugins.length;i++){if(_plugins[i].preprocess&&process in _plugins[i].preprocess){processed=_plugins[i].preprocess[process](data,arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);}}return processed;};/*======================================================
        ************   App Init   ************
        ======================================================*/app.init=function(){// Compile Template7 templates on app load
if(app.initTemplate7Templates)app.initTemplate7Templates();// Init Plugins
if(app.initPlugins)app.initPlugins();// Init Device
if(app.getDeviceInfo)app.getDeviceInfo();// Init resize events and calc app sizes
if(app.initResize)app.initResize();// Init Panels Breakpoints
if(app.initPanelsBreakpoints&&(app.params.panelLeftBreakpoint||app.params.panelRightBreakpoint))app.initPanelsBreakpoints();// Init Click events
if(app.initFastClicks&&app.params.fastClicks)app.initFastClicks();if(app.initClickEvents)app.initClickEvents();// Init each page callbacks
$('.page:not(.cached)').each(function(){app.initPageWithCallback(this);});// Init each navbar callbacks
$('.navbar:not(.cached)').each(function(){app.initNavbarWithCallback(this);});// Init push state
if(app.initPushState&&app.params.pushState)app.initPushState();// Init Live Swipeouts events
if(app.initSwipeout&&app.params.swipeout)app.initSwipeout();// Init Live Sortable events
if(app.initSortable&&app.params.sortable)app.initSortable();// Init Live Swipe Panels
if(app.initSwipePanels&&(app.params.swipePanel||app.params.swipePanelOnlyClose))app.initSwipePanels();// Init Material Inputs
if(app.params.material&&app.initMaterialWatchInputs)app.initMaterialWatchInputs();// Init Material Tabbar
if(app.params.material){$('.tabbar').each(function(index,el){if($(el).parents('.page').length===0){app.initMaterialTabbar(el);}});}// App Init callback
if(app.params.onAppInit)app.params.onAppInit();// Plugin app init hook
app.pluginHook('appInit');};if(app.params.init)app.init();//Return instance
return app;};// Save Dom7
Framework7.$=window.Dom7;/*===========================
    Features Support Detection
    ===========================*/Framework7.prototype.support=function(){var support={touch:!!('ontouchstart'in window||window.DocumentTouch&&document instanceof DocumentTouch),passiveListener:function(){var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function get(){supportsPassive=true;}});window.addEventListener('testPassiveListener',null,opts);}catch(e){}return supportsPassive;}()};// Export object
return support;}();/*===========================
    Device/OS Detection
    ===========================*/Framework7.prototype.device=function(){var device={};var ua=navigator.userAgent;var $=Dom7;var windows=ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/);var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad&&ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);device.ios=device.android=device.windows=device.iphone=device.ipod=device.ipad=device.androidChrome=false;// Windows
if(windows){device.os='windows';device.osVersion=windows[2];device.windows=true;}// Android
if(android&&!windows){device.os='android';device.osVersion=android[2];device.android=true;device.androidChrome=ua.toLowerCase().indexOf('chrome')>=0;}if(ipad||iphone||ipod){device.os='ios';device.ios=true;}// iOS
if(iphone&&!ipod){device.osVersion=iphone[2].replace(/_/g,'.');device.iphone=true;}if(ipad){device.osVersion=ipad[2].replace(/_/g,'.');device.ipad=true;}if(ipod){device.osVersion=ipod[3]?ipod[3].replace(/_/g,'.'):null;device.iphone=true;}// iOS 8+ changed UA
if(device.ios&&device.osVersion&&ua.indexOf('Version/')>=0){if(device.osVersion.split('.')[0]==='10'){device.osVersion=ua.toLowerCase().split('version/')[1].split(' ')[0];}}// Webview
device.webView=(iphone||ipad||ipod)&&ua.match(/.*AppleWebKit(?!.*Safari)/i);// Minimal UI
if(device.os&&device.os==='ios'){var osVersionArr=device.osVersion.split('.');device.minimalUi=!device.webView&&(ipod||iphone)&&(osVersionArr[0]*1===7?osVersionArr[1]*1>=1:osVersionArr[0]*1>7)&&$('meta[name="viewport"]').length>0&&$('meta[name="viewport"]').attr('content').indexOf('minimal-ui')>=0;}// Check for status bar and fullscreen app mode
var windowWidth=$(window).width();var windowHeight=$(window).height();device.needsStatusBar=function(){if(device.webView&&windowWidth*windowHeight===screen.width*screen.height){return true;}return false;};device.statusBar=device.needsStatusBar();// Classes
var classNames=[];// Pixel Ratio
device.pixelRatio=window.devicePixelRatio||1;classNames.push('pixel-ratio-'+Math.floor(device.pixelRatio));if(device.pixelRatio>=2){classNames.push('retina');}// OS classes
if(device.os){classNames.push(device.os,device.os+'-'+device.osVersion.split('.')[0],device.os+'-'+device.osVersion.replace(/\./g,'-'));if(device.os==='ios'){var major=parseInt(device.osVersion.split('.')[0],10);for(var i=major-1;i>=6;i--){classNames.push('ios-gt-'+i);}}}// Status bar classes
if(device.statusBar){classNames.push('with-statusbar-overlay');}else{$('html').removeClass('with-statusbar-overlay');}// Add html classes
if(classNames.length>0)$('html').addClass(classNames.join(' '));// Export object
return device;}();/*===========================
    Plugins prototype
    ===========================*/Framework7.prototype.plugins={};/*===========================
    Swiper
    ===========================*/window.Swiper=function(container,params){if(!(this instanceof Swiper))return new Swiper(container,params);var defaults={direction:'horizontal',touchEventsTarget:'container',initialSlide:0,speed:300,// autoplay
autoplay:false,autoplayDisableOnInteraction:true,autoplayStopOnLast:false,// To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
iOSEdgeSwipeDetection:false,iOSEdgeSwipeThreshold:20,// Free mode
freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:0.02,// Autoheight
autoHeight:false,// Set wrapper width
setWrapperSize:false,// Virtual Translate
virtualTranslate:false,// Effects
effect:'slide',// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},flip:{slideShadows:true,limitRotation:true},cube:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:0.94},fade:{crossFade:false},// Parallax
parallax:false,// Zoom
zoom:false,zoomMax:3,zoomMin:1,zoomToggle:true,// Scrollbar
scrollbar:null,scrollbarHide:true,scrollbarDraggable:false,scrollbarSnapOnRelease:false,// Keyboard Mousewheel
keyboardControl:false,mousewheelControl:false,mousewheelReleaseOnEdges:false,mousewheelInvert:false,mousewheelForceToAxis:false,mousewheelSensitivity:1,mousewheelEventsTarged:'container',// Hash Navigation
hashnav:false,hashnavWatchState:false,// History
history:false,// Commong Nav State
replaceState:false,// Breakpoints
breakpoints:undefined,// Slides grid
spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:'column',slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,// in px
slidesOffsetAfter:0,// in px
// Round length
roundLengths:false,// Touches
touchRatio:1,touchAngle:45,simulateTouch:true,shortSwipes:true,longSwipes:true,longSwipesRatio:0.5,longSwipesMs:300,followFinger:true,onlyExternal:false,threshold:0,touchMoveStopPropagation:true,touchReleaseOnEdges:false,// Unique Navigation Elements
uniqueNavElements:true,// Pagination
pagination:null,paginationElement:'span',paginationClickable:false,paginationHide:false,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:'bullets',// 'bullets' or 'progress' or 'fraction' or 'custom'
// Resistance
resistance:true,resistanceRatio:0.85,// Next/prev buttons
nextButton:null,prevButton:null,// Progress
watchSlidesProgress:false,watchSlidesVisibility:false,// Cursor
grabCursor:false,// Clicks
preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,// Lazy Loading
lazyLoading:false,lazyLoadingInPrevNext:false,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:false,// Images
preloadImages:true,updateOnImagesReady:true,// loop
loop:false,loopAdditionalSlides:0,loopedSlides:null,// Control
control:undefined,controlInverse:false,controlBy:'slide',//or 'container'
normalizeSlideIndex:true,// Swiping/no swiping
allowSwipeToPrev:true,allowSwipeToNext:true,swipeHandler:null,//'.swipe-handler',
noSwiping:true,noSwipingClass:'swiper-no-swiping',// Passive Listeners
passiveListeners:true,// NS
containerModifierClass:'swiper-container-',// NEW
slideClass:'swiper-slide',slideActiveClass:'swiper-slide-active',slideDuplicateActiveClass:'swiper-slide-duplicate-active',slideVisibleClass:'swiper-slide-visible',slideDuplicateClass:'swiper-slide-duplicate',slideNextClass:'swiper-slide-next',slideDuplicateNextClass:'swiper-slide-duplicate-next',slidePrevClass:'swiper-slide-prev',slideDuplicatePrevClass:'swiper-slide-duplicate-prev',wrapperClass:'swiper-wrapper',bulletClass:'swiper-pagination-bullet',bulletActiveClass:'swiper-pagination-bullet-active',buttonDisabledClass:'swiper-button-disabled',paginationCurrentClass:'swiper-pagination-current',paginationTotalClass:'swiper-pagination-total',paginationHiddenClass:'swiper-pagination-hidden',paginationProgressbarClass:'swiper-pagination-progressbar',paginationClickableClass:'swiper-pagination-clickable',// NEW
paginationModifierClass:'swiper-pagination-',// NEW
lazyLoadingClass:'swiper-lazy',lazyStatusLoadingClass:'swiper-lazy-loading',lazyStatusLoadedClass:'swiper-lazy-loaded',lazyPreloaderClass:'swiper-lazy-preloader',notificationClass:'swiper-notification',preloaderClass:'preloader',zoomContainerClass:'swiper-zoom-container',// Observer
observer:false,observeParents:false,// Accessibility
a11y:false,prevSlideMessage:'Previous slide',nextSlideMessage:'Next slide',firstSlideMessage:'This is the first slide',lastSlideMessage:'This is the last slide',paginationBulletMessage:'Go to slide {{index}}',// Callbacks
runCallbacksOnInit:true/*
            Callbacks:
            onInit: function (swiper)
            onDestroy: function (swiper)
            onBeforeResize: function (swiper)
            onAfterResize: function (swiper)
            onClick: function (swiper, e)
            onTap: function (swiper, e)
            onDoubleTap: function (swiper, e)
            onSliderMove: function (swiper, e)
            onSlideChangeStart: function (swiper)
            onSlideChangeEnd: function (swiper)
            onTransitionStart: function (swiper)
            onTransitionEnd: function (swiper)
            onImagesReady: function (swiper)
            onProgress: function (swiper, progress)
            onTouchStart: function (swiper, e)
            onTouchMove: function (swiper, e)
            onTouchMoveOpposite: function (swiper, e)
            onTouchEnd: function (swiper, e)
            onReachBeginning: function (swiper)
            onReachEnd: function (swiper)
            onSetTransition: function (swiper, duration)
            onSetTranslate: function (swiper, translate)
            onAutoplayStart: function (swiper)
            onAutoplayStop: function (swiper),
            onLazyImageLoad: function (swiper, slide, image)
            onLazyImageReady: function (swiper, slide, image)
            onKeyPress: function (swiper, keyCode)
            */};var initialVirtualTranslate=params&&params.virtualTranslate;params=params||{};var originalParams={};for(var param in params){if(_typeof(params[param])==='object'&&params[param]!==null&&!(params[param].nodeType||params[param]===window||params[param]===document||typeof Dom7!=='undefined'&&params[param]instanceof Dom7||typeof jQuery!=='undefined'&&params[param]instanceof jQuery)){originalParams[param]={};for(var deepParam in params[param]){originalParams[param][deepParam]=params[param][deepParam];}}else{originalParams[param]=params[param];}}for(var def in defaults){if(typeof params[def]==='undefined'){params[def]=defaults[def];}else if(_typeof(params[def])==='object'){for(var deepDef in defaults[def]){if(typeof params[def][deepDef]==='undefined'){params[def][deepDef]=defaults[def][deepDef];}}}}// Swiper
var s=this;// Params
s.params=params;s.originalParams=originalParams;// Classname
s.classNames=[];/*=========================
          Dom Library and plugins
          ===========================*/var $=$;if(typeof $!=='undefined'&&typeof Dom7!=='undefined'){$=Dom7;}if(typeof $==='undefined'){if(typeof Dom7==='undefined'){$=window.Dom7||window.Zepto||window.jQuery;}else{$=Dom7;}if(!$)return;}// Export it to Swiper instance
s.$=$;/*=========================
          Breakpoints
          ===========================*/s.currentBreakpoint=undefined;s.getActiveBreakpoint=function(){//Get breakpoint for window width
if(!s.params.breakpoints)return false;var breakpoint=false;var points=[],point;for(point in s.params.breakpoints){if(s.params.breakpoints.hasOwnProperty(point)){points.push(point);}}points.sort(function(a,b){return parseInt(a,10)>parseInt(b,10);});for(var i=0;i<points.length;i++){point=points[i];if(point>=window.innerWidth&&!breakpoint){breakpoint=point;}}return breakpoint||'max';};s.setBreakpoint=function(){//Set breakpoint for window width and update parameters
var breakpoint=s.getActiveBreakpoint();if(breakpoint&&s.currentBreakpoint!==breakpoint){var breakPointsParams=breakpoint in s.params.breakpoints?s.params.breakpoints[breakpoint]:s.originalParams;var needsReLoop=s.params.loop&&breakPointsParams.slidesPerView!==s.params.slidesPerView;for(var param in breakPointsParams){s.params[param]=breakPointsParams[param];}s.currentBreakpoint=breakpoint;if(needsReLoop&&s.destroyLoop){s.reLoop(true);}}};// Set breakpoint on load
if(s.params.breakpoints){s.setBreakpoint();}/*=========================
          Preparation - Define Container, Wrapper and Pagination
          ===========================*/s.container=$(container);if(s.container.length===0)return;if(s.container.length>1){var swipers=[];s.container.each(function(){var container=this;swipers.push(new Swiper(this,params));});return swipers;}// Save instance in container HTML Element and in data
s.container[0].swiper=s;s.container.data('swiper',s);s.classNames.push(s.params.containerModifierClass+s.params.direction);if(s.params.freeMode){s.classNames.push(s.params.containerModifierClass+'free-mode');}if(!s.support.flexbox){s.classNames.push(s.params.containerModifierClass+'no-flexbox');s.params.slidesPerColumn=1;}if(s.params.autoHeight){s.classNames.push(s.params.containerModifierClass+'autoheight');}// Enable slides progress when required
if(s.params.parallax||s.params.watchSlidesVisibility){s.params.watchSlidesProgress=true;}// Max resistance when touchReleaseOnEdges
if(s.params.touchReleaseOnEdges){s.params.resistanceRatio=0;}// Coverflow / 3D
if(['cube','coverflow','flip'].indexOf(s.params.effect)>=0){if(s.support.transforms3d){s.params.watchSlidesProgress=true;s.classNames.push(s.params.containerModifierClass+'3d');}else{s.params.effect='slide';}}if(s.params.effect!=='slide'){s.classNames.push(s.params.containerModifierClass+s.params.effect);}if(s.params.effect==='cube'){s.params.resistanceRatio=0;s.params.slidesPerView=1;s.params.slidesPerColumn=1;s.params.slidesPerGroup=1;s.params.centeredSlides=false;s.params.spaceBetween=0;s.params.virtualTranslate=true;}if(s.params.effect==='fade'||s.params.effect==='flip'){s.params.slidesPerView=1;s.params.slidesPerColumn=1;s.params.slidesPerGroup=1;s.params.watchSlidesProgress=true;s.params.spaceBetween=0;if(typeof initialVirtualTranslate==='undefined'){s.params.virtualTranslate=true;}}// Grab Cursor
if(s.params.grabCursor&&s.support.touch){s.params.grabCursor=false;}// Wrapper
s.wrapper=s.container.children('.'+s.params.wrapperClass);// Pagination
if(s.params.pagination){s.paginationContainer=$(s.params.pagination);if(s.params.uniqueNavElements&&typeof s.params.pagination==='string'&&s.paginationContainer.length>1&&s.container.find(s.params.pagination).length===1){s.paginationContainer=s.container.find(s.params.pagination);}if(s.params.paginationType==='bullets'&&s.params.paginationClickable){s.paginationContainer.addClass(s.params.paginationModifierClass+'clickable');}else{s.params.paginationClickable=false;}s.paginationContainer.addClass(s.params.paginationModifierClass+s.params.paginationType);}// Next/Prev Buttons
if(s.params.nextButton||s.params.prevButton){if(s.params.nextButton){s.nextButton=$(s.params.nextButton);if(s.params.uniqueNavElements&&typeof s.params.nextButton==='string'&&s.nextButton.length>1&&s.container.find(s.params.nextButton).length===1){s.nextButton=s.container.find(s.params.nextButton);}}if(s.params.prevButton){s.prevButton=$(s.params.prevButton);if(s.params.uniqueNavElements&&typeof s.params.prevButton==='string'&&s.prevButton.length>1&&s.container.find(s.params.prevButton).length===1){s.prevButton=s.container.find(s.params.prevButton);}}}// Is Horizontal
s.isHorizontal=function(){return s.params.direction==='horizontal';};// s.isH = isH;
// RTL
s.rtl=s.isHorizontal()&&(s.container[0].dir.toLowerCase()==='rtl'||s.container.css('direction')==='rtl');if(s.rtl){s.classNames.push(s.params.containerModifierClass+'rtl');}// Wrong RTL support
if(s.rtl){s.wrongRTL=s.wrapper.css('display')==='-webkit-box';}// Columns
if(s.params.slidesPerColumn>1){s.classNames.push(s.params.containerModifierClass+'multirow');}// Check for Android
if(s.device.android){s.classNames.push(s.params.containerModifierClass+'android');}// Add classes
s.container.addClass(s.classNames.join(' '));// Translate
s.translate=0;// Progress
s.progress=0;// Velocity
s.velocity=0;/*=========================
          Locks, unlocks
          ===========================*/s.lockSwipeToNext=function(){s.params.allowSwipeToNext=false;if(s.params.allowSwipeToPrev===false&&s.params.grabCursor){s.unsetGrabCursor();}};s.lockSwipeToPrev=function(){s.params.allowSwipeToPrev=false;if(s.params.allowSwipeToNext===false&&s.params.grabCursor){s.unsetGrabCursor();}};s.lockSwipes=function(){s.params.allowSwipeToNext=s.params.allowSwipeToPrev=false;if(s.params.grabCursor)s.unsetGrabCursor();};s.unlockSwipeToNext=function(){s.params.allowSwipeToNext=true;if(s.params.allowSwipeToPrev===true&&s.params.grabCursor){s.setGrabCursor();}};s.unlockSwipeToPrev=function(){s.params.allowSwipeToPrev=true;if(s.params.allowSwipeToNext===true&&s.params.grabCursor){s.setGrabCursor();}};s.unlockSwipes=function(){s.params.allowSwipeToNext=s.params.allowSwipeToPrev=true;if(s.params.grabCursor)s.setGrabCursor();};/*=========================
          Round helper
          ===========================*/function round(a){return Math.floor(a);}/*=========================
          Set grab cursor
          ===========================*/s.setGrabCursor=function(moving){s.container[0].style.cursor='move';s.container[0].style.cursor=moving?'-webkit-grabbing':'-webkit-grab';s.container[0].style.cursor=moving?'-moz-grabbin':'-moz-grab';s.container[0].style.cursor=moving?'grabbing':'grab';};s.unsetGrabCursor=function(){s.container[0].style.cursor='';};if(s.params.grabCursor){s.setGrabCursor();}/*=========================
          Update on Images Ready
          ===========================*/s.imagesToLoad=[];s.imagesLoaded=0;s.loadImage=function(imgElement,src,srcset,sizes,checkForComplete,callback){var image;function onReady(){if(callback)callback();}if(!imgElement.complete||!checkForComplete){if(src){image=new window.Image();image.onload=onReady;image.onerror=onReady;if(sizes){image.sizes=sizes;}if(srcset){image.srcset=srcset;}if(src){image.src=src;}}else{onReady();}}else{//image already loaded...
onReady();}};s.preloadImages=function(){s.imagesToLoad=s.container.find('img');function _onReady(){if(typeof s==='undefined'||s===null||!s)return;if(s.imagesLoaded!==undefined)s.imagesLoaded++;if(s.imagesLoaded===s.imagesToLoad.length){if(s.params.updateOnImagesReady)s.update();s.emit('onImagesReady',s);}}for(var i=0;i<s.imagesToLoad.length;i++){s.loadImage(s.imagesToLoad[i],s.imagesToLoad[i].currentSrc||s.imagesToLoad[i].getAttribute('src'),s.imagesToLoad[i].srcset||s.imagesToLoad[i].getAttribute('srcset'),s.imagesToLoad[i].sizes||s.imagesToLoad[i].getAttribute('sizes'),true,_onReady);}};/*=========================
          Autoplay
          ===========================*/s.autoplayTimeoutId=undefined;s.autoplaying=false;s.autoplayPaused=false;function autoplay(){var autoplayDelay=s.params.autoplay;var activeSlide=s.slides.eq(s.activeIndex);if(activeSlide.attr('data-swiper-autoplay')){autoplayDelay=activeSlide.attr('data-swiper-autoplay')||s.params.autoplay;}s.autoplayTimeoutId=setTimeout(function(){if(s.params.loop){s.fixLoop();s._slideNext();s.emit('onAutoplay',s);}else{if(!s.isEnd){s._slideNext();s.emit('onAutoplay',s);}else{if(!params.autoplayStopOnLast){s._slideTo(0);s.emit('onAutoplay',s);}else{s.stopAutoplay();}}}},autoplayDelay);}s.startAutoplay=function(){if(typeof s.autoplayTimeoutId!=='undefined')return false;if(!s.params.autoplay)return false;if(s.autoplaying)return false;s.autoplaying=true;s.emit('onAutoplayStart',s);autoplay();};s.stopAutoplay=function(internal){if(!s.autoplayTimeoutId)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplaying=false;s.autoplayTimeoutId=undefined;s.emit('onAutoplayStop',s);};s.pauseAutoplay=function(speed){if(s.autoplayPaused)return;if(s.autoplayTimeoutId)clearTimeout(s.autoplayTimeoutId);s.autoplayPaused=true;if(speed===0){s.autoplayPaused=false;autoplay();}else{s.wrapper.transitionEnd(function(){if(!s)return;s.autoplayPaused=false;if(!s.autoplaying){s.stopAutoplay();}else{autoplay();}});}};/*=========================
          Min/Max Translate
          ===========================*/s.minTranslate=function(){return-s.snapGrid[0];};s.maxTranslate=function(){return-s.snapGrid[s.snapGrid.length-1];};/*=========================
          Slider/slides sizes
          ===========================*/s.updateAutoHeight=function(){var activeSlides=[];var newHeight=0;var i;// Find slides currently in view
if(s.params.slidesPerView!=='auto'&&s.params.slidesPerView>1){for(i=0;i<Math.ceil(s.params.slidesPerView);i++){var index=s.activeIndex+i;if(index>s.slides.length)break;activeSlides.push(s.slides.eq(index)[0]);}}else{activeSlides.push(s.slides.eq(s.activeIndex)[0]);}// Find new height from heighest slide in view
for(i=0;i<activeSlides.length;i++){if(typeof activeSlides[i]!=='undefined'){var height=activeSlides[i].offsetHeight;newHeight=height>newHeight?height:newHeight;}}// Update Height
if(newHeight)s.wrapper.css('height',newHeight+'px');};s.updateContainerSize=function(){var width,height;if(typeof s.params.width!=='undefined'){width=s.params.width;}else{width=s.container[0].clientWidth;}if(typeof s.params.height!=='undefined'){height=s.params.height;}else{height=s.container[0].clientHeight;}if(width===0&&s.isHorizontal()||height===0&&!s.isHorizontal()){return;}//Subtract paddings
width=width-parseInt(s.container.css('padding-left'),10)-parseInt(s.container.css('padding-right'),10);height=height-parseInt(s.container.css('padding-top'),10)-parseInt(s.container.css('padding-bottom'),10);// Store values
s.width=width;s.height=height;s.size=s.isHorizontal()?s.width:s.height;};s.updateSlidesSize=function(){s.slides=s.wrapper.children('.'+s.params.slideClass);s.snapGrid=[];s.slidesGrid=[];s.slidesSizesGrid=[];var spaceBetween=s.params.spaceBetween,slidePosition=-s.params.slidesOffsetBefore,i,prevSlideSize=0,index=0;if(typeof s.size==='undefined')return;if(typeof spaceBetween==='string'&&spaceBetween.indexOf('%')>=0){spaceBetween=parseFloat(spaceBetween.replace('%',''))/100*s.size;}s.virtualSize=-spaceBetween;// reset margins
if(s.rtl)s.slides.css({marginLeft:'',marginTop:''});else s.slides.css({marginRight:'',marginBottom:''});var slidesNumberEvenToRows;if(s.params.slidesPerColumn>1){if(Math.floor(s.slides.length/s.params.slidesPerColumn)===s.slides.length/s.params.slidesPerColumn){slidesNumberEvenToRows=s.slides.length;}else{slidesNumberEvenToRows=Math.ceil(s.slides.length/s.params.slidesPerColumn)*s.params.slidesPerColumn;}if(s.params.slidesPerView!=='auto'&&s.params.slidesPerColumnFill==='row'){slidesNumberEvenToRows=Math.max(slidesNumberEvenToRows,s.params.slidesPerView*s.params.slidesPerColumn);}}// Calc slides
var slideSize;var slidesPerColumn=s.params.slidesPerColumn;var slidesPerRow=slidesNumberEvenToRows/slidesPerColumn;var numFullColumns=slidesPerRow-(s.params.slidesPerColumn*slidesPerRow-s.slides.length);for(i=0;i<s.slides.length;i++){slideSize=0;var slide=s.slides.eq(i);if(s.params.slidesPerColumn>1){// Set slides order
var newSlideOrderIndex;var column,row;if(s.params.slidesPerColumnFill==='column'){column=Math.floor(i/slidesPerColumn);row=i-column*slidesPerColumn;if(column>numFullColumns||column===numFullColumns&&row===slidesPerColumn-1){if(++row>=slidesPerColumn){row=0;column++;}}newSlideOrderIndex=column+row*slidesNumberEvenToRows/slidesPerColumn;slide.css({'-webkit-box-ordinal-group':newSlideOrderIndex,'-moz-box-ordinal-group':newSlideOrderIndex,'-ms-flex-order':newSlideOrderIndex,'-webkit-order':newSlideOrderIndex,'order':newSlideOrderIndex});}else{row=Math.floor(i/slidesPerRow);column=i-row*slidesPerRow;}slide.css('margin-'+(s.isHorizontal()?'top':'left'),row!==0&&s.params.spaceBetween&&s.params.spaceBetween+'px').attr('data-swiper-column',column).attr('data-swiper-row',row);}if(slide.css('display')==='none')continue;if(s.params.slidesPerView==='auto'){slideSize=s.isHorizontal()?slide.outerWidth(true):slide.outerHeight(true);if(s.params.roundLengths)slideSize=round(slideSize);}else{slideSize=(s.size-(s.params.slidesPerView-1)*spaceBetween)/s.params.slidesPerView;if(s.params.roundLengths)slideSize=round(slideSize);if(s.isHorizontal()){s.slides[i].style.width=slideSize+'px';}else{s.slides[i].style.height=slideSize+'px';}}s.slides[i].swiperSlideSize=slideSize;s.slidesSizesGrid.push(slideSize);if(s.params.centeredSlides){slidePosition=slidePosition+slideSize/2+prevSlideSize/2+spaceBetween;if(prevSlideSize===0&&i!==0)slidePosition=slidePosition-s.size/2-spaceBetween;if(i===0)slidePosition=slidePosition-s.size/2-spaceBetween;if(Math.abs(slidePosition)<1/1000)slidePosition=0;if(index%s.params.slidesPerGroup===0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);}else{if(index%s.params.slidesPerGroup===0)s.snapGrid.push(slidePosition);s.slidesGrid.push(slidePosition);slidePosition=slidePosition+slideSize+spaceBetween;}s.virtualSize+=slideSize+spaceBetween;prevSlideSize=slideSize;index++;}s.virtualSize=Math.max(s.virtualSize,s.size)+s.params.slidesOffsetAfter;var newSlidesGrid;if(s.rtl&&s.wrongRTL&&(s.params.effect==='slide'||s.params.effect==='coverflow')){s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});}if(!s.support.flexbox||s.params.setWrapperSize){if(s.isHorizontal())s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});else s.wrapper.css({height:s.virtualSize+s.params.spaceBetween+'px'});}if(s.params.slidesPerColumn>1){s.virtualSize=(slideSize+s.params.spaceBetween)*slidesNumberEvenToRows;s.virtualSize=Math.ceil(s.virtualSize/s.params.slidesPerColumn)-s.params.spaceBetween;if(s.isHorizontal())s.wrapper.css({width:s.virtualSize+s.params.spaceBetween+'px'});else s.wrapper.css({height:s.virtualSize+s.params.spaceBetween+'px'});if(s.params.centeredSlides){newSlidesGrid=[];for(i=0;i<s.snapGrid.length;i++){if(s.snapGrid[i]<s.virtualSize+s.snapGrid[0])newSlidesGrid.push(s.snapGrid[i]);}s.snapGrid=newSlidesGrid;}}// Remove last grid elements depending on width
if(!s.params.centeredSlides){newSlidesGrid=[];for(i=0;i<s.snapGrid.length;i++){if(s.snapGrid[i]<=s.virtualSize-s.size){newSlidesGrid.push(s.snapGrid[i]);}}s.snapGrid=newSlidesGrid;if(Math.floor(s.virtualSize-s.size)-Math.floor(s.snapGrid[s.snapGrid.length-1])>1){s.snapGrid.push(s.virtualSize-s.size);}}if(s.snapGrid.length===0)s.snapGrid=[0];if(s.params.spaceBetween!==0){if(s.isHorizontal()){if(s.rtl)s.slides.css({marginLeft:spaceBetween+'px'});else s.slides.css({marginRight:spaceBetween+'px'});}else s.slides.css({marginBottom:spaceBetween+'px'});}if(s.params.watchSlidesProgress){s.updateSlidesOffset();}};s.updateSlidesOffset=function(){for(var i=0;i<s.slides.length;i++){s.slides[i].swiperSlideOffset=s.isHorizontal()?s.slides[i].offsetLeft:s.slides[i].offsetTop;}};/*=========================
          Dynamic Slides Per View
          ===========================*/s.currentSlidesPerView=function(){var spv=1,i,j;if(s.params.centeredSlides){var size=s.slides[s.activeIndex].swiperSlideSize;var breakLoop;for(i=s.activeIndex+1;i<s.slides.length;i++){if(s.slides[i]&&!breakLoop){size+=s.slides[i].swiperSlideSize;spv++;if(size>s.size)breakLoop=true;}}for(j=s.activeIndex-1;j>=0;j--){if(s.slides[j]&&!breakLoop){size+=s.slides[j].swiperSlideSize;spv++;if(size>s.size)breakLoop=true;}}}else{for(i=s.activeIndex+1;i<s.slides.length;i++){if(s.slidesGrid[i]-s.slidesGrid[s.activeIndex]<s.size){spv++;}}}return spv;};/*=========================
          Slider/slides progress
          ===========================*/s.updateSlidesProgress=function(translate){if(typeof translate==='undefined'){translate=s.translate||0;}if(s.slides.length===0)return;if(typeof s.slides[0].swiperSlideOffset==='undefined')s.updateSlidesOffset();var offsetCenter=-translate;if(s.rtl)offsetCenter=translate;// Visible Slides
s.slides.removeClass(s.params.slideVisibleClass);for(var i=0;i<s.slides.length;i++){var slide=s.slides[i];var slideProgress=(offsetCenter+(s.params.centeredSlides?s.minTranslate():0)-slide.swiperSlideOffset)/(slide.swiperSlideSize+s.params.spaceBetween);if(s.params.watchSlidesVisibility){var slideBefore=-(offsetCenter-slide.swiperSlideOffset);var slideAfter=slideBefore+s.slidesSizesGrid[i];var isVisible=slideBefore>=0&&slideBefore<s.size||slideAfter>0&&slideAfter<=s.size||slideBefore<=0&&slideAfter>=s.size;if(isVisible){s.slides.eq(i).addClass(s.params.slideVisibleClass);}}slide.progress=s.rtl?-slideProgress:slideProgress;}};s.updateProgress=function(translate){if(typeof translate==='undefined'){translate=s.translate||0;}var translatesDiff=s.maxTranslate()-s.minTranslate();var wasBeginning=s.isBeginning;var wasEnd=s.isEnd;if(translatesDiff===0){s.progress=0;s.isBeginning=s.isEnd=true;}else{s.progress=(translate-s.minTranslate())/translatesDiff;s.isBeginning=s.progress<=0;s.isEnd=s.progress>=1;}if(s.isBeginning&&!wasBeginning)s.emit('onReachBeginning',s);if(s.isEnd&&!wasEnd)s.emit('onReachEnd',s);if(s.params.watchSlidesProgress)s.updateSlidesProgress(translate);s.emit('onProgress',s,s.progress);};s.updateActiveIndex=function(){var translate=s.rtl?s.translate:-s.translate;var newActiveIndex,i,snapIndex;for(i=0;i<s.slidesGrid.length;i++){if(typeof s.slidesGrid[i+1]!=='undefined'){if(translate>=s.slidesGrid[i]&&translate<s.slidesGrid[i+1]-(s.slidesGrid[i+1]-s.slidesGrid[i])/2){newActiveIndex=i;}else if(translate>=s.slidesGrid[i]&&translate<s.slidesGrid[i+1]){newActiveIndex=i+1;}}else{if(translate>=s.slidesGrid[i]){newActiveIndex=i;}}}// Normalize slideIndex
if(s.params.normalizeSlideIndex){if(newActiveIndex<0||typeof newActiveIndex==='undefined')newActiveIndex=0;}// for (i = 0; i < s.slidesGrid.length; i++) {
// if (- translate >= s.slidesGrid[i]) {
// newActiveIndex = i;
// }
// }
snapIndex=Math.floor(newActiveIndex/s.params.slidesPerGroup);if(snapIndex>=s.snapGrid.length)snapIndex=s.snapGrid.length-1;if(newActiveIndex===s.activeIndex){return;}s.snapIndex=snapIndex;s.previousIndex=s.activeIndex;s.activeIndex=newActiveIndex;s.updateClasses();s.updateRealIndex();};s.updateRealIndex=function(){s.realIndex=parseInt(s.slides.eq(s.activeIndex).attr('data-swiper-slide-index')||s.activeIndex,10);};/*=========================
          Classes
          ===========================*/s.updateClasses=function(){s.slides.removeClass(s.params.slideActiveClass+' '+s.params.slideNextClass+' '+s.params.slidePrevClass+' '+s.params.slideDuplicateActiveClass+' '+s.params.slideDuplicateNextClass+' '+s.params.slideDuplicatePrevClass);var activeSlide=s.slides.eq(s.activeIndex);// Active classes
activeSlide.addClass(s.params.slideActiveClass);if(params.loop){// Duplicate to all looped slides
if(activeSlide.hasClass(s.params.slideDuplicateClass)){s.wrapper.children('.'+s.params.slideClass+':not(.'+s.params.slideDuplicateClass+')[data-swiper-slide-index="'+s.realIndex+'"]').addClass(s.params.slideDuplicateActiveClass);}else{s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+s.realIndex+'"]').addClass(s.params.slideDuplicateActiveClass);}}// Next Slide
var nextSlide=activeSlide.next('.'+s.params.slideClass).addClass(s.params.slideNextClass);if(s.params.loop&&nextSlide.length===0){nextSlide=s.slides.eq(0);nextSlide.addClass(s.params.slideNextClass);}// Prev Slide
var prevSlide=activeSlide.prev('.'+s.params.slideClass).addClass(s.params.slidePrevClass);if(s.params.loop&&prevSlide.length===0){prevSlide=s.slides.eq(-1);prevSlide.addClass(s.params.slidePrevClass);}if(params.loop){// Duplicate to all looped slides
if(nextSlide.hasClass(s.params.slideDuplicateClass)){s.wrapper.children('.'+s.params.slideClass+':not(.'+s.params.slideDuplicateClass+')[data-swiper-slide-index="'+nextSlide.attr('data-swiper-slide-index')+'"]').addClass(s.params.slideDuplicateNextClass);}else{s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+nextSlide.attr('data-swiper-slide-index')+'"]').addClass(s.params.slideDuplicateNextClass);}if(prevSlide.hasClass(s.params.slideDuplicateClass)){s.wrapper.children('.'+s.params.slideClass+':not(.'+s.params.slideDuplicateClass+')[data-swiper-slide-index="'+prevSlide.attr('data-swiper-slide-index')+'"]').addClass(s.params.slideDuplicatePrevClass);}else{s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+prevSlide.attr('data-swiper-slide-index')+'"]').addClass(s.params.slideDuplicatePrevClass);}}// Pagination
if(s.paginationContainer&&s.paginationContainer.length>0){// Current/Total
var current,total=s.params.loop?Math.ceil((s.slides.length-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;if(s.params.loop){current=Math.ceil((s.activeIndex-s.loopedSlides)/s.params.slidesPerGroup);if(current>s.slides.length-1-s.loopedSlides*2){current=current-(s.slides.length-s.loopedSlides*2);}if(current>total-1)current=current-total;if(current<0&&s.params.paginationType!=='bullets')current=total+current;}else{if(typeof s.snapIndex!=='undefined'){current=s.snapIndex;}else{current=s.activeIndex||0;}}// Types
if(s.params.paginationType==='bullets'&&s.bullets&&s.bullets.length>0){s.bullets.removeClass(s.params.bulletActiveClass);if(s.paginationContainer.length>1){s.bullets.each(function(){if($(this).index()===current)$(this).addClass(s.params.bulletActiveClass);});}else{s.bullets.eq(current).addClass(s.params.bulletActiveClass);}}if(s.params.paginationType==='fraction'){s.paginationContainer.find('.'+s.params.paginationCurrentClass).text(current+1);s.paginationContainer.find('.'+s.params.paginationTotalClass).text(total);}if(s.params.paginationType==='progress'){var scale=(current+1)/total,scaleX=scale,scaleY=1;if(!s.isHorizontal()){scaleY=scale;scaleX=1;}s.paginationContainer.find('.'+s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX('+scaleX+') scaleY('+scaleY+')').transition(s.params.speed);}if(s.params.paginationType==='custom'&&s.params.paginationCustomRender){s.paginationContainer.html(s.params.paginationCustomRender(s,current+1,total));s.emit('onPaginationRendered',s,s.paginationContainer[0]);}}// Next/active buttons
if(!s.params.loop){if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){if(s.isBeginning){s.prevButton.addClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.disable(s.prevButton);}else{s.prevButton.removeClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.enable(s.prevButton);}}if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){if(s.isEnd){s.nextButton.addClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.disable(s.nextButton);}else{s.nextButton.removeClass(s.params.buttonDisabledClass);if(s.params.a11y&&s.a11y)s.a11y.enable(s.nextButton);}}}};/*=========================
          Pagination
          ===========================*/s.updatePagination=function(){if(!s.params.pagination)return;if(s.paginationContainer&&s.paginationContainer.length>0){var paginationHTML='';if(s.params.paginationType==='bullets'){var numberOfBullets=s.params.loop?Math.ceil((s.slides.length-s.loopedSlides*2)/s.params.slidesPerGroup):s.snapGrid.length;for(var i=0;i<numberOfBullets;i++){if(s.params.paginationBulletRender){paginationHTML+=s.params.paginationBulletRender(s,i,s.params.bulletClass);}else{paginationHTML+='<'+s.params.paginationElement+' class="'+s.params.bulletClass+'"></'+s.params.paginationElement+'>';}}s.paginationContainer.html(paginationHTML);s.bullets=s.paginationContainer.find('.'+s.params.bulletClass);if(s.params.paginationClickable&&s.params.a11y&&s.a11y){s.a11y.initPagination();}}if(s.params.paginationType==='fraction'){if(s.params.paginationFractionRender){paginationHTML=s.params.paginationFractionRender(s,s.params.paginationCurrentClass,s.params.paginationTotalClass);}else{paginationHTML='<span class="'+s.params.paginationCurrentClass+'"></span>'+' / '+'<span class="'+s.params.paginationTotalClass+'"></span>';}s.paginationContainer.html(paginationHTML);}if(s.params.paginationType==='progress'){if(s.params.paginationProgressRender){paginationHTML=s.params.paginationProgressRender(s,s.params.paginationProgressbarClass);}else{paginationHTML='<span class="'+s.params.paginationProgressbarClass+'"></span>';}s.paginationContainer.html(paginationHTML);}if(s.params.paginationType!=='custom'){s.emit('onPaginationRendered',s,s.paginationContainer[0]);}}};/*=========================
          Common update method
          ===========================*/s.update=function(updateTranslate){if(!s)return;s.updateContainerSize();s.updateSlidesSize();s.updateProgress();s.updatePagination();s.updateClasses();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();}var newTranslate;function forceSetTranslate(){var translate=s.rtl?-s.translate:s.translate;newTranslate=Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();}if(updateTranslate){var translated;if(s.controller&&s.controller.spline){s.controller.spline=undefined;}if(s.params.freeMode){forceSetTranslate();if(s.params.autoHeight){s.updateAutoHeight();}}else{if((s.params.slidesPerView==='auto'||s.params.slidesPerView>1)&&s.isEnd&&!s.params.centeredSlides){translated=s.slideTo(s.slides.length-1,0,false,true);}else{translated=s.slideTo(s.activeIndex,0,false,true);}if(!translated){forceSetTranslate();}}}else if(s.params.autoHeight){s.updateAutoHeight();}};/*=========================
          Resize Handler
          ===========================*/s.onResize=function(forceUpdatePagination){if(s.params.onBeforeResize)s.params.onBeforeResize(s);//Breakpoints
if(s.params.breakpoints){s.setBreakpoint();}// Disable locks on resize
var allowSwipeToPrev=s.params.allowSwipeToPrev;var allowSwipeToNext=s.params.allowSwipeToNext;s.params.allowSwipeToPrev=s.params.allowSwipeToNext=true;s.updateContainerSize();s.updateSlidesSize();if(s.params.slidesPerView==='auto'||s.params.freeMode||forceUpdatePagination)s.updatePagination();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();}if(s.controller&&s.controller.spline){s.controller.spline=undefined;}var slideChangedBySlideTo=false;if(s.params.freeMode){var newTranslate=Math.min(Math.max(s.translate,s.maxTranslate()),s.minTranslate());s.setWrapperTranslate(newTranslate);s.updateActiveIndex();s.updateClasses();if(s.params.autoHeight){s.updateAutoHeight();}}else{s.updateClasses();if((s.params.slidesPerView==='auto'||s.params.slidesPerView>1)&&s.isEnd&&!s.params.centeredSlides){slideChangedBySlideTo=s.slideTo(s.slides.length-1,0,false,true);}else{slideChangedBySlideTo=s.slideTo(s.activeIndex,0,false,true);}}if(s.params.lazyLoading&&!slideChangedBySlideTo&&s.lazy){s.lazy.load();}// Return locks after resize
s.params.allowSwipeToPrev=allowSwipeToPrev;s.params.allowSwipeToNext=allowSwipeToNext;if(s.params.onAfterResize)s.params.onAfterResize(s);};/*=========================
          Events
          ===========================*///Define Touch Events
s.touchEventsDesktop={start:'mousedown',move:'mousemove',end:'mouseup'};if(window.navigator.pointerEnabled)s.touchEventsDesktop={start:'pointerdown',move:'pointermove',end:'pointerup'};else if(window.navigator.msPointerEnabled)s.touchEventsDesktop={start:'MSPointerDown',move:'MSPointerMove',end:'MSPointerUp'};s.touchEvents={start:s.support.touch||!s.params.simulateTouch?'touchstart':s.touchEventsDesktop.start,move:s.support.touch||!s.params.simulateTouch?'touchmove':s.touchEventsDesktop.move,end:s.support.touch||!s.params.simulateTouch?'touchend':s.touchEventsDesktop.end};// WP8 Touch Events Fix
if(window.navigator.pointerEnabled||window.navigator.msPointerEnabled){(s.params.touchEventsTarget==='container'?s.container:s.wrapper).addClass('swiper-wp8-'+s.params.direction);}// Attach/detach events
s.initEvents=function(detach){var actionDom=detach?'off':'on';var action=detach?'removeEventListener':'addEventListener';var touchEventsTarget=s.params.touchEventsTarget==='container'?s.container[0]:s.wrapper[0];var target=s.support.touch?touchEventsTarget:document;var moveCapture=s.params.nested?true:false;//Touch Events
if(s.browser.ie){touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,false);target[action](s.touchEvents.move,s.onTouchMove,moveCapture);target[action](s.touchEvents.end,s.onTouchEnd,false);}else{if(s.support.touch){var passiveListener=s.touchEvents.start==='touchstart'&&s.support.passiveListener&&s.params.passiveListeners?{passive:true,capture:false}:false;touchEventsTarget[action](s.touchEvents.start,s.onTouchStart,passiveListener);touchEventsTarget[action](s.touchEvents.move,s.onTouchMove,moveCapture);touchEventsTarget[action](s.touchEvents.end,s.onTouchEnd,passiveListener);}if(params.simulateTouch&&!s.device.ios&&!s.device.android||params.simulateTouch&&!s.support.touch&&s.device.ios){touchEventsTarget[action]('mousedown',s.onTouchStart,false);document[action]('mousemove',s.onTouchMove,moveCapture);document[action]('mouseup',s.onTouchEnd,false);}}window[action]('resize',s.onResize);// Next, Prev, Index
if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){s.nextButton[actionDom]('click',s.onClickNext);if(s.params.a11y&&s.a11y)s.nextButton[actionDom]('keydown',s.a11y.onEnterKey);}if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){s.prevButton[actionDom]('click',s.onClickPrev);if(s.params.a11y&&s.a11y)s.prevButton[actionDom]('keydown',s.a11y.onEnterKey);}if(s.params.pagination&&s.params.paginationClickable){s.paginationContainer[actionDom]('click','.'+s.params.bulletClass,s.onClickIndex);if(s.params.a11y&&s.a11y)s.paginationContainer[actionDom]('keydown','.'+s.params.bulletClass,s.a11y.onEnterKey);}// Prevent Links Clicks
if(s.params.preventClicks||s.params.preventClicksPropagation)touchEventsTarget[action]('click',s.preventClicks,true);};s.attachEvents=function(){s.initEvents();};s.detachEvents=function(){s.initEvents(true);};/*=========================
          Handle Clicks
          ===========================*/// Prevent Clicks
s.allowClick=true;s.preventClicks=function(e){if(!s.allowClick){if(s.params.preventClicks)e.preventDefault();if(s.params.preventClicksPropagation&&s.animating){e.stopPropagation();e.stopImmediatePropagation();}}};// Clicks
s.onClickNext=function(e){e.preventDefault();if(s.isEnd&&!s.params.loop)return;s.slideNext();};s.onClickPrev=function(e){e.preventDefault();if(s.isBeginning&&!s.params.loop)return;s.slidePrev();};s.onClickIndex=function(e){e.preventDefault();var index=$(this).index()*s.params.slidesPerGroup;if(s.params.loop)index=index+s.loopedSlides;s.slideTo(index);};/*=========================
          Handle Touches
          ===========================*/function findElementInEvent(e,selector){var el=$(e.target);if(!el.is(selector)){if(typeof selector==='string'){el=el.parents(selector);}else if(selector.nodeType){var found;el.parents().each(function(index,_el){if(_el===selector)found=selector;});if(!found)return undefined;else return selector;}}if(el.length===0){return undefined;}return el[0];}s.updateClickedSlide=function(e){var slide=findElementInEvent(e,'.'+s.params.slideClass);var slideFound=false;if(slide){for(var i=0;i<s.slides.length;i++){if(s.slides[i]===slide)slideFound=true;}}if(slide&&slideFound){s.clickedSlide=slide;s.clickedIndex=$(slide).index();}else{s.clickedSlide=undefined;s.clickedIndex=undefined;return;}if(s.params.slideToClickedSlide&&s.clickedIndex!==undefined&&s.clickedIndex!==s.activeIndex){var slideToIndex=s.clickedIndex,realIndex,duplicatedSlides,slidesPerView=s.params.slidesPerView==='auto'?s.currentSlidesPerView():s.params.slidesPerView;if(s.params.loop){if(s.animating)return;realIndex=parseInt($(s.clickedSlide).attr('data-swiper-slide-index'),10);if(s.params.centeredSlides){if(slideToIndex<s.loopedSlides-slidesPerView/2||slideToIndex>s.slides.length-s.loopedSlides+slidesPerView/2){s.fixLoop();slideToIndex=s.wrapper.children('.'+s.params.slideClass+'[data-swiper-slide-index="'+realIndex+'"]:not(.'+s.params.slideDuplicateClass+')').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else{s.slideTo(slideToIndex);}}else{if(slideToIndex>s.slides.length-slidesPerView){s.fixLoop();slideToIndex=s.wrapper.children('.'+s.params.slideClass+'[data-swiper-slide-index="'+realIndex+'"]:not(.'+s.params.slideDuplicateClass+')').eq(0).index();setTimeout(function(){s.slideTo(slideToIndex);},0);}else{s.slideTo(slideToIndex);}}}else{s.slideTo(slideToIndex);}}};var isTouched,isMoved,allowTouchCallbacks,touchStartTime,isScrolling,currentTranslate,startTranslate,allowThresholdMove,// Form elements to match
formElements='input, select, textarea, button, video',// Last click time
lastClickTime=Date.now(),clickTimeout,//Velocities
velocities=[],allowMomentumBounce;// Animating Flag
s.animating=false;// Touches information
s.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};// Touch handlers
var isTouchEvent,startMoving;s.onTouchStart=function(e){if(e.originalEvent)e=e.originalEvent;isTouchEvent=e.type==='touchstart';if(!isTouchEvent&&'which'in e&&e.which===3)return;if(s.params.noSwiping&&findElementInEvent(e,'.'+s.params.noSwipingClass)){s.allowClick=true;return;}if(s.params.swipeHandler){if(!findElementInEvent(e,s.params.swipeHandler))return;}var startX=s.touches.currentX=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;var startY=s.touches.currentY=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;// Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
if(s.device.ios&&s.params.iOSEdgeSwipeDetection&&startX<=s.params.iOSEdgeSwipeThreshold){return;}isTouched=true;isMoved=false;allowTouchCallbacks=true;isScrolling=undefined;startMoving=undefined;s.touches.startX=startX;s.touches.startY=startY;touchStartTime=Date.now();s.allowClick=true;s.updateContainerSize();s.swipeDirection=undefined;if(s.params.threshold>0)allowThresholdMove=false;if(e.type!=='touchstart'){var preventDefault=true;if($(e.target).is(formElements))preventDefault=false;if(document.activeElement&&$(document.activeElement).is(formElements)){document.activeElement.blur();}if(preventDefault){e.preventDefault();}}s.emit('onTouchStart',s,e);};s.onTouchMove=function(e){if(e.originalEvent)e=e.originalEvent;if(isTouchEvent&&e.type==='mousemove')return;if(e.preventedByNestedSwiper){s.touches.startX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.startY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;return;}if(s.params.onlyExternal){// isMoved = true;
s.allowClick=false;if(isTouched){s.touches.startX=s.touches.currentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.startY=s.touches.currentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;touchStartTime=Date.now();}return;}if(isTouchEvent&&s.params.touchReleaseOnEdges&&!s.params.loop){if(!s.isHorizontal()){// Vertical
if(s.touches.currentY<s.touches.startY&&s.translate<=s.maxTranslate()||s.touches.currentY>s.touches.startY&&s.translate>=s.minTranslate()){return;}}else{if(s.touches.currentX<s.touches.startX&&s.translate<=s.maxTranslate()||s.touches.currentX>s.touches.startX&&s.translate>=s.minTranslate()){return;}}}if(isTouchEvent&&document.activeElement){if(e.target===document.activeElement&&$(e.target).is(formElements)){isMoved=true;s.allowClick=false;return;}}if(allowTouchCallbacks){s.emit('onTouchMove',s,e);}if(e.targetTouches&&e.targetTouches.length>1)return;s.touches.currentX=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;s.touches.currentY=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(typeof isScrolling==='undefined'){var touchAngle;if(s.isHorizontal()&&s.touches.currentY===s.touches.startY||!s.isHorizontal()&&s.touches.currentX===s.touches.startX){isScrolling=false;}else{touchAngle=Math.atan2(Math.abs(s.touches.currentY-s.touches.startY),Math.abs(s.touches.currentX-s.touches.startX))*180/Math.PI;isScrolling=s.isHorizontal()?touchAngle>s.params.touchAngle:90-touchAngle>s.params.touchAngle;}}if(isScrolling){s.emit('onTouchMoveOpposite',s,e);}if(typeof startMoving==='undefined'){if(s.touches.currentX!==s.touches.startX||s.touches.currentY!==s.touches.startY){startMoving=true;}}if(!isTouched)return;if(isScrolling){isTouched=false;return;}if(!startMoving){return;}s.allowClick=false;s.emit('onSliderMove',s,e);e.preventDefault();if(s.params.touchMoveStopPropagation&&!s.params.nested){e.stopPropagation();}if(!isMoved){if(params.loop){s.fixLoop();}startTranslate=s.getWrapperTranslate();s.setWrapperTransition(0);if(s.animating){s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');}if(s.params.autoplay&&s.autoplaying){if(s.params.autoplayDisableOnInteraction){s.stopAutoplay();}else{s.pauseAutoplay();}}allowMomentumBounce=false;//Grab Cursor
if(s.params.grabCursor&&(s.params.allowSwipeToNext===true||s.params.allowSwipeToPrev===true)){s.setGrabCursor(true);}}isMoved=true;var diff=s.touches.diff=s.isHorizontal()?s.touches.currentX-s.touches.startX:s.touches.currentY-s.touches.startY;diff=diff*s.params.touchRatio;if(s.rtl)diff=-diff;s.swipeDirection=diff>0?'prev':'next';currentTranslate=diff+startTranslate;var disableParentSwiper=true;if(diff>0&&currentTranslate>s.minTranslate()){disableParentSwiper=false;if(s.params.resistance)currentTranslate=s.minTranslate()-1+Math.pow(-s.minTranslate()+startTranslate+diff,s.params.resistanceRatio);}else if(diff<0&&currentTranslate<s.maxTranslate()){disableParentSwiper=false;if(s.params.resistance)currentTranslate=s.maxTranslate()+1-Math.pow(s.maxTranslate()-startTranslate-diff,s.params.resistanceRatio);}if(disableParentSwiper){e.preventedByNestedSwiper=true;}// Directions locks
if(!s.params.allowSwipeToNext&&s.swipeDirection==='next'&&currentTranslate<startTranslate){currentTranslate=startTranslate;}if(!s.params.allowSwipeToPrev&&s.swipeDirection==='prev'&&currentTranslate>startTranslate){currentTranslate=startTranslate;}// Threshold
if(s.params.threshold>0){if(Math.abs(diff)>s.params.threshold||allowThresholdMove){if(!allowThresholdMove){allowThresholdMove=true;s.touches.startX=s.touches.currentX;s.touches.startY=s.touches.currentY;currentTranslate=startTranslate;s.touches.diff=s.isHorizontal()?s.touches.currentX-s.touches.startX:s.touches.currentY-s.touches.startY;return;}}else{currentTranslate=startTranslate;return;}}if(!s.params.followFinger)return;// Update active index in free mode
if(s.params.freeMode||s.params.watchSlidesProgress){s.updateActiveIndex();}if(s.params.freeMode){//Velocity
if(velocities.length===0){velocities.push({position:s.touches[s.isHorizontal()?'startX':'startY'],time:touchStartTime});}velocities.push({position:s.touches[s.isHorizontal()?'currentX':'currentY'],time:new window.Date().getTime()});}// Update progress
s.updateProgress(currentTranslate);// Update translate
s.setWrapperTranslate(currentTranslate);};s.onTouchEnd=function(e){if(e.originalEvent)e=e.originalEvent;if(allowTouchCallbacks){s.emit('onTouchEnd',s,e);}allowTouchCallbacks=false;if(!isTouched)return;//Return Grab Cursor
if(s.params.grabCursor&&isMoved&&isTouched&&(s.params.allowSwipeToNext===true||s.params.allowSwipeToPrev===true)){s.setGrabCursor(false);}// Time diff
var touchEndTime=Date.now();var timeDiff=touchEndTime-touchStartTime;// Tap, doubleTap, Click
if(s.allowClick){s.updateClickedSlide(e);s.emit('onTap',s,e);if(timeDiff<300&&touchEndTime-lastClickTime>300){if(clickTimeout)clearTimeout(clickTimeout);clickTimeout=setTimeout(function(){if(!s)return;if(s.params.paginationHide&&s.paginationContainer.length>0&&!$(e.target).hasClass(s.params.bulletClass)){s.paginationContainer.toggleClass(s.params.paginationHiddenClass);}s.emit('onClick',s,e);},300);}if(timeDiff<300&&touchEndTime-lastClickTime<300){if(clickTimeout)clearTimeout(clickTimeout);s.emit('onDoubleTap',s,e);}}lastClickTime=Date.now();setTimeout(function(){if(s)s.allowClick=true;},0);if(!isTouched||!isMoved||!s.swipeDirection||s.touches.diff===0||currentTranslate===startTranslate){isTouched=isMoved=false;return;}isTouched=isMoved=false;var currentPos;if(s.params.followFinger){currentPos=s.rtl?s.translate:-s.translate;}else{currentPos=-currentTranslate;}if(s.params.freeMode){if(currentPos<-s.minTranslate()){s.slideTo(s.activeIndex);return;}else if(currentPos>-s.maxTranslate()){if(s.slides.length<s.snapGrid.length){s.slideTo(s.snapGrid.length-1);}else{s.slideTo(s.slides.length-1);}return;}if(s.params.freeModeMomentum){if(velocities.length>1){var lastMoveEvent=velocities.pop(),velocityEvent=velocities.pop();var distance=lastMoveEvent.position-velocityEvent.position;var time=lastMoveEvent.time-velocityEvent.time;s.velocity=distance/time;s.velocity=s.velocity/2;if(Math.abs(s.velocity)<s.params.freeModeMinimumVelocity){s.velocity=0;}// this implies that the user stopped moving a finger then released.
// There would be no events with distance zero, so the last event is stale.
if(time>150||new window.Date().getTime()-lastMoveEvent.time>300){s.velocity=0;}}else{s.velocity=0;}s.velocity=s.velocity*s.params.freeModeMomentumVelocityRatio;velocities.length=0;var momentumDuration=1000*s.params.freeModeMomentumRatio;var momentumDistance=s.velocity*momentumDuration;var newPosition=s.translate+momentumDistance;if(s.rtl)newPosition=-newPosition;var doBounce=false;var afterBouncePosition;var bounceAmount=Math.abs(s.velocity)*20*s.params.freeModeMomentumBounceRatio;if(newPosition<s.maxTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition+s.maxTranslate()<-bounceAmount){newPosition=s.maxTranslate()-bounceAmount;}afterBouncePosition=s.maxTranslate();doBounce=true;allowMomentumBounce=true;}else{newPosition=s.maxTranslate();}}else if(newPosition>s.minTranslate()){if(s.params.freeModeMomentumBounce){if(newPosition-s.minTranslate()>bounceAmount){newPosition=s.minTranslate()+bounceAmount;}afterBouncePosition=s.minTranslate();doBounce=true;allowMomentumBounce=true;}else{newPosition=s.minTranslate();}}else if(s.params.freeModeSticky){var j=0,nextSlide;for(j=0;j<s.snapGrid.length;j+=1){if(s.snapGrid[j]>-newPosition){nextSlide=j;break;}}if(Math.abs(s.snapGrid[nextSlide]-newPosition)<Math.abs(s.snapGrid[nextSlide-1]-newPosition)||s.swipeDirection==='next'){newPosition=s.snapGrid[nextSlide];}else{newPosition=s.snapGrid[nextSlide-1];}if(!s.rtl)newPosition=-newPosition;}//Fix duration
if(s.velocity!==0){if(s.rtl){momentumDuration=Math.abs((-newPosition-s.translate)/s.velocity);}else{momentumDuration=Math.abs((newPosition-s.translate)/s.velocity);}}else if(s.params.freeModeSticky){s.slideReset();return;}if(s.params.freeModeMomentumBounce&&doBounce){s.updateProgress(afterBouncePosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();s.animating=true;s.wrapper.transitionEnd(function(){if(!s||!allowMomentumBounce)return;s.emit('onMomentumBounce',s);s.setWrapperTransition(s.params.speed);s.setWrapperTranslate(afterBouncePosition);s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd();});});}else if(s.velocity){s.updateProgress(newPosition);s.setWrapperTransition(momentumDuration);s.setWrapperTranslate(newPosition);s.onTransitionStart();if(!s.animating){s.animating=true;s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd();});}}else{s.updateProgress(newPosition);}s.updateActiveIndex();}if(!s.params.freeModeMomentum||timeDiff>=s.params.longSwipesMs){s.updateProgress();s.updateActiveIndex();}return;}// Find current slide
var i,stopIndex=0,groupSize=s.slidesSizesGrid[0];for(i=0;i<s.slidesGrid.length;i+=s.params.slidesPerGroup){if(typeof s.slidesGrid[i+s.params.slidesPerGroup]!=='undefined'){if(currentPos>=s.slidesGrid[i]&&currentPos<s.slidesGrid[i+s.params.slidesPerGroup]){stopIndex=i;groupSize=s.slidesGrid[i+s.params.slidesPerGroup]-s.slidesGrid[i];}}else{if(currentPos>=s.slidesGrid[i]){stopIndex=i;groupSize=s.slidesGrid[s.slidesGrid.length-1]-s.slidesGrid[s.slidesGrid.length-2];}}}// Find current slide size
var ratio=(currentPos-s.slidesGrid[stopIndex])/groupSize;if(timeDiff>s.params.longSwipesMs){// Long touches
if(!s.params.longSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection==='next'){if(ratio>=s.params.longSwipesRatio)s.slideTo(stopIndex+s.params.slidesPerGroup);else s.slideTo(stopIndex);}if(s.swipeDirection==='prev'){if(ratio>1-s.params.longSwipesRatio)s.slideTo(stopIndex+s.params.slidesPerGroup);else s.slideTo(stopIndex);}}else{// Short swipes
if(!s.params.shortSwipes){s.slideTo(s.activeIndex);return;}if(s.swipeDirection==='next'){s.slideTo(stopIndex+s.params.slidesPerGroup);}if(s.swipeDirection==='prev'){s.slideTo(stopIndex);}}};/*=========================
          Transitions
          ===========================*/s._slideTo=function(slideIndex,speed){return s.slideTo(slideIndex,speed,true,true);};s.slideTo=function(slideIndex,speed,runCallbacks,internal){if(typeof runCallbacks==='undefined')runCallbacks=true;if(typeof slideIndex==='undefined')slideIndex=0;if(slideIndex<0)slideIndex=0;s.snapIndex=Math.floor(slideIndex/s.params.slidesPerGroup);if(s.snapIndex>=s.snapGrid.length)s.snapIndex=s.snapGrid.length-1;var translate=-s.snapGrid[s.snapIndex];// Stop autoplay
if(s.params.autoplay&&s.autoplaying){if(internal||!s.params.autoplayDisableOnInteraction){s.pauseAutoplay(speed);}else{s.stopAutoplay();}}// Update progress
s.updateProgress(translate);// Normalize slideIndex
if(s.params.normalizeSlideIndex){for(var i=0;i<s.slidesGrid.length;i++){if(-Math.floor(translate*100)>=Math.floor(s.slidesGrid[i]*100)){slideIndex=i;}}}// Directions locks
if(!s.params.allowSwipeToNext&&translate<s.translate&&translate<s.minTranslate()){return false;}if(!s.params.allowSwipeToPrev&&translate>s.translate&&translate>s.maxTranslate()){if((s.activeIndex||0)!==slideIndex)return false;}// Update Index
if(typeof speed==='undefined')speed=s.params.speed;s.previousIndex=s.activeIndex||0;s.activeIndex=slideIndex;s.updateRealIndex();if(s.rtl&&-translate===s.translate||!s.rtl&&translate===s.translate){// Update Height
if(s.params.autoHeight){s.updateAutoHeight();}s.updateClasses();if(s.params.effect!=='slide'){s.setWrapperTranslate(translate);}return false;}s.updateClasses();s.onTransitionStart(runCallbacks);if(speed===0||s.browser.lteIE9){s.setWrapperTranslate(translate);s.setWrapperTransition(0);s.onTransitionEnd(runCallbacks);}else{s.setWrapperTranslate(translate);s.setWrapperTransition(speed);if(!s.animating){s.animating=true;s.wrapper.transitionEnd(function(){if(!s)return;s.onTransitionEnd(runCallbacks);});}}return true;};s.onTransitionStart=function(runCallbacks){if(typeof runCallbacks==='undefined')runCallbacks=true;if(s.params.autoHeight){s.updateAutoHeight();}if(s.lazy)s.lazy.onTransitionStart();if(runCallbacks){s.emit('onTransitionStart',s);if(s.activeIndex!==s.previousIndex){s.emit('onSlideChangeStart',s);if(s.activeIndex>s.previousIndex){s.emit('onSlideNextStart',s);}else{s.emit('onSlidePrevStart',s);}}}};s.onTransitionEnd=function(runCallbacks){s.animating=false;s.setWrapperTransition(0);if(typeof runCallbacks==='undefined')runCallbacks=true;if(s.lazy)s.lazy.onTransitionEnd();if(runCallbacks){s.emit('onTransitionEnd',s);if(s.activeIndex!==s.previousIndex){s.emit('onSlideChangeEnd',s);if(s.activeIndex>s.previousIndex){s.emit('onSlideNextEnd',s);}else{s.emit('onSlidePrevEnd',s);}}}if(s.params.history&&s.history){s.history.setHistory(s.params.history,s.activeIndex);}if(s.params.hashnav&&s.hashnav){s.hashnav.setHash();}};s.slideNext=function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex+s.params.slidesPerGroup,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex+s.params.slidesPerGroup,speed,runCallbacks,internal);};s._slideNext=function(speed){return s.slideNext(true,speed,true);};s.slidePrev=function(runCallbacks,speed,internal){if(s.params.loop){if(s.animating)return false;s.fixLoop();var clientLeft=s.container[0].clientLeft;return s.slideTo(s.activeIndex-1,speed,runCallbacks,internal);}else return s.slideTo(s.activeIndex-1,speed,runCallbacks,internal);};s._slidePrev=function(speed){return s.slidePrev(true,speed,true);};s.slideReset=function(runCallbacks,speed,internal){return s.slideTo(s.activeIndex,speed,runCallbacks);};s.disableTouchControl=function(){s.params.onlyExternal=true;return true;};s.enableTouchControl=function(){s.params.onlyExternal=false;return true;};/*=========================
          Translate/transition helpers
          ===========================*/s.setWrapperTransition=function(duration,byController){s.wrapper.transition(duration);if(s.params.effect!=='slide'&&s.effects[s.params.effect]){s.effects[s.params.effect].setTransition(duration);}if(s.params.parallax&&s.parallax){s.parallax.setTransition(duration);}if(s.params.scrollbar&&s.scrollbar){s.scrollbar.setTransition(duration);}if(s.params.control&&s.controller){s.controller.setTransition(duration,byController);}s.emit('onSetTransition',s,duration);};s.setWrapperTranslate=function(translate,updateActiveIndex,byController){var x=0,y=0,z=0;if(s.isHorizontal()){x=s.rtl?-translate:translate;}else{y=translate;}if(s.params.roundLengths){x=round(x);y=round(y);}if(!s.params.virtualTranslate){if(s.support.transforms3d)s.wrapper.transform('translate3d('+x+'px, '+y+'px, '+z+'px)');else s.wrapper.transform('translate('+x+'px, '+y+'px)');}s.translate=s.isHorizontal()?x:y;// Check if we need to update progress
var progress;var translatesDiff=s.maxTranslate()-s.minTranslate();if(translatesDiff===0){progress=0;}else{progress=(translate-s.minTranslate())/translatesDiff;}if(progress!==s.progress){s.updateProgress(translate);}if(updateActiveIndex)s.updateActiveIndex();if(s.params.effect!=='slide'&&s.effects[s.params.effect]){s.effects[s.params.effect].setTranslate(s.translate);}if(s.params.parallax&&s.parallax){s.parallax.setTranslate(s.translate);}if(s.params.scrollbar&&s.scrollbar){s.scrollbar.setTranslate(s.translate);}if(s.params.control&&s.controller){s.controller.setTranslate(s.translate,byController);}s.emit('onSetTranslate',s,s.translate);};s.getTranslate=function(el,axis){var matrix,curTransform,curStyle,transformMatrix;// automatic axis detection
if(typeof axis==='undefined'){axis='x';}if(s.params.virtualTranslate){return s.rtl?-s.translate:s.translate;}curStyle=window.getComputedStyle(el,null);if(window.WebKitCSSMatrix){curTransform=curStyle.transform||curStyle.webkitTransform;if(curTransform.split(',').length>6){curTransform=curTransform.split(', ').map(function(a){return a.replace(',','.');}).join(', ');}// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
transformMatrix=new window.WebKitCSSMatrix(curTransform==='none'?'':curTransform);}else{transformMatrix=curStyle.MozTransform||curStyle.OTransform||curStyle.MsTransform||curStyle.msTransform||curStyle.transform||curStyle.getPropertyValue('transform').replace('translate(','matrix(1, 0, 0, 1,');matrix=transformMatrix.toString().split(',');}if(axis==='x'){//Latest Chrome and webkits Fix
if(window.WebKitCSSMatrix)curTransform=transformMatrix.m41;//Crazy IE10 Matrix
else if(matrix.length===16)curTransform=parseFloat(matrix[12]);//Normal Browsers
else curTransform=parseFloat(matrix[4]);}if(axis==='y'){//Latest Chrome and webkits Fix
if(window.WebKitCSSMatrix)curTransform=transformMatrix.m42;//Crazy IE10 Matrix
else if(matrix.length===16)curTransform=parseFloat(matrix[13]);//Normal Browsers
else curTransform=parseFloat(matrix[5]);}if(s.rtl&&curTransform)curTransform=-curTransform;return curTransform||0;};s.getWrapperTranslate=function(axis){if(typeof axis==='undefined'){axis=s.isHorizontal()?'x':'y';}return s.getTranslate(s.wrapper[0],axis);};/*=========================
          Observer
          ===========================*/s.observers=[];function initObserver(target,options){options=options||{};// create an observer instance
var ObserverFunc=window.MutationObserver||window.WebkitMutationObserver;var observer=new ObserverFunc(function(mutations){mutations.forEach(function(mutation){s.onResize(true);s.emit('onObserverUpdate',s,mutation);});});observer.observe(target,{attributes:typeof options.attributes==='undefined'?true:options.attributes,childList:typeof options.childList==='undefined'?true:options.childList,characterData:typeof options.characterData==='undefined'?true:options.characterData});s.observers.push(observer);}s.initObservers=function(){if(s.params.observeParents){var containerParents=s.container.parents();for(var i=0;i<containerParents.length;i++){initObserver(containerParents[i]);}}// Observe container
initObserver(s.container[0],{childList:false});// Observe wrapper
initObserver(s.wrapper[0],{attributes:false});};s.disconnectObservers=function(){for(var i=0;i<s.observers.length;i++){s.observers[i].disconnect();}s.observers=[];};/*=========================
          Loop
          ===========================*/// Create looped slides
s.createLoop=function(){// Remove duplicated slides
s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass).remove();var slides=s.wrapper.children('.'+s.params.slideClass);if(s.params.slidesPerView==='auto'&&!s.params.loopedSlides)s.params.loopedSlides=slides.length;s.loopedSlides=parseInt(s.params.loopedSlides||s.params.slidesPerView,10);s.loopedSlides=s.loopedSlides+s.params.loopAdditionalSlides;if(s.loopedSlides>slides.length){s.loopedSlides=slides.length;}var prependSlides=[],appendSlides=[],i;slides.each(function(index,el){var slide=$(this);if(index<s.loopedSlides)appendSlides.push(el);if(index<slides.length&&index>=slides.length-s.loopedSlides)prependSlides.push(el);slide.attr('data-swiper-slide-index',index);});for(i=0;i<appendSlides.length;i++){s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}for(i=prependSlides.length-1;i>=0;i--){s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));}};s.destroyLoop=function(){s.wrapper.children('.'+s.params.slideClass+'.'+s.params.slideDuplicateClass).remove();s.slides.removeAttr('data-swiper-slide-index');};s.reLoop=function(updatePosition){var oldIndex=s.activeIndex-s.loopedSlides;s.destroyLoop();s.createLoop();s.updateSlidesSize();if(updatePosition){s.slideTo(oldIndex+s.loopedSlides,0,false);}};s.fixLoop=function(){var newIndex;//Fix For Negative Oversliding
if(s.activeIndex<s.loopedSlides){newIndex=s.slides.length-s.loopedSlides*3+s.activeIndex;newIndex=newIndex+s.loopedSlides;s.slideTo(newIndex,0,false,true);}//Fix For Positive Oversliding
else if(s.params.slidesPerView==='auto'&&s.activeIndex>=s.loopedSlides*2||s.activeIndex>s.slides.length-s.params.slidesPerView*2){newIndex=-s.slides.length+s.activeIndex+s.loopedSlides;newIndex=newIndex+s.loopedSlides;s.slideTo(newIndex,0,false,true);}};/*=========================
          Append/Prepend/Remove Slides
          ===========================*/s.appendSlide=function(slides){if(s.params.loop){s.destroyLoop();}if((typeof slides==='undefined'?'undefined':_typeof(slides))==='object'&&slides.length){for(var i=0;i<slides.length;i++){if(slides[i])s.wrapper.append(slides[i]);}}else{s.wrapper.append(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}};s.prependSlide=function(slides){if(s.params.loop){s.destroyLoop();}var newActiveIndex=s.activeIndex+1;if((typeof slides==='undefined'?'undefined':_typeof(slides))==='object'&&slides.length){for(var i=0;i<slides.length;i++){if(slides[i])s.wrapper.prepend(slides[i]);}newActiveIndex=s.activeIndex+slides.length;}else{s.wrapper.prepend(slides);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}s.slideTo(newActiveIndex,0,false);};s.removeSlide=function(slidesIndexes){if(s.params.loop){s.destroyLoop();s.slides=s.wrapper.children('.'+s.params.slideClass);}var newActiveIndex=s.activeIndex,indexToRemove;if((typeof slidesIndexes==='undefined'?'undefined':_typeof(slidesIndexes))==='object'&&slidesIndexes.length){for(var i=0;i<slidesIndexes.length;i++){indexToRemove=slidesIndexes[i];if(s.slides[indexToRemove])s.slides.eq(indexToRemove).remove();if(indexToRemove<newActiveIndex)newActiveIndex--;}newActiveIndex=Math.max(newActiveIndex,0);}else{indexToRemove=slidesIndexes;if(s.slides[indexToRemove])s.slides.eq(indexToRemove).remove();if(indexToRemove<newActiveIndex)newActiveIndex--;newActiveIndex=Math.max(newActiveIndex,0);}if(s.params.loop){s.createLoop();}if(!(s.params.observer&&s.support.observer)){s.update(true);}if(s.params.loop){s.slideTo(newActiveIndex+s.loopedSlides,0,false);}else{s.slideTo(newActiveIndex,0,false);}};s.removeAllSlides=function(){var slidesIndexes=[];for(var i=0;i<s.slides.length;i++){slidesIndexes.push(i);}s.removeSlide(slidesIndexes);};/*=========================
          Effects
          ===========================*/s.effects={fade:{setTranslate:function setTranslate(){for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var offset=slide[0].swiperSlideOffset;var tx=-offset;if(!s.params.virtualTranslate)tx=tx-s.translate;var ty=0;if(!s.isHorizontal()){ty=tx;tx=0;}var slideOpacity=s.params.fade.crossFade?Math.max(1-Math.abs(slide[0].progress),0):1+Math.min(Math.max(slide[0].progress,-1),0);slide.css({opacity:slideOpacity}).transform('translate3d('+tx+'px, '+ty+'px, 0px)');}},setTransition:function setTransition(duration){s.slides.transition(duration);if(s.params.virtualTranslate&&duration!==0){var eventTriggered=false;s.slides.transitionEnd(function(){if(eventTriggered)return;if(!s)return;eventTriggered=true;s.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'];for(var i=0;i<triggerEvents.length;i++){s.wrapper.trigger(triggerEvents[i]);}});}}},flip:{setTranslate:function setTranslate(){for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var progress=slide[0].progress;if(s.params.flip.limitRotation){progress=Math.max(Math.min(slide[0].progress,1),-1);}var offset=slide[0].swiperSlideOffset;var rotate=-180*progress,rotateY=rotate,rotateX=0,tx=-offset,ty=0;if(!s.isHorizontal()){ty=tx;tx=0;rotateX=-rotateY;rotateY=0;}else if(s.rtl){rotateY=-rotateY;}slide[0].style.zIndex=-Math.abs(Math.round(progress))+s.slides.length;if(s.params.flip.slideShadows){//Set shadows
var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity=Math.max(progress,0);}slide.transform('translate3d('+tx+'px, '+ty+'px, 0px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');}},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(s.params.virtualTranslate&&duration!==0){var eventTriggered=false;s.slides.eq(s.activeIndex).transitionEnd(function(){if(eventTriggered)return;if(!s)return;if(!$(this).hasClass(s.params.slideActiveClass))return;eventTriggered=true;s.animating=false;var triggerEvents=['webkitTransitionEnd','transitionend','oTransitionEnd','MSTransitionEnd','msTransitionEnd'];for(var i=0;i<triggerEvents.length;i++){s.wrapper.trigger(triggerEvents[i]);}});}}},cube:{setTranslate:function setTranslate(){var wrapperRotate=0,cubeShadow;if(s.params.cube.shadow){if(s.isHorizontal()){cubeShadow=s.wrapper.find('.swiper-cube-shadow');if(cubeShadow.length===0){cubeShadow=$('<div class="swiper-cube-shadow"></div>');s.wrapper.append(cubeShadow);}cubeShadow.css({height:s.width+'px'});}else{cubeShadow=s.container.find('.swiper-cube-shadow');if(cubeShadow.length===0){cubeShadow=$('<div class="swiper-cube-shadow"></div>');s.container.append(cubeShadow);}}}for(var i=0;i<s.slides.length;i++){var slide=s.slides.eq(i);var slideAngle=i*90;var round=Math.floor(slideAngle/360);if(s.rtl){slideAngle=-slideAngle;round=Math.floor(-slideAngle/360);}var progress=Math.max(Math.min(slide[0].progress,1),-1);var tx=0,ty=0,tz=0;if(i%4===0){tx=-round*4*s.size;tz=0;}else if((i-1)%4===0){tx=0;tz=-round*4*s.size;}else if((i-2)%4===0){tx=s.size+round*4*s.size;tz=s.size;}else if((i-3)%4===0){tx=-s.size;tz=3*s.size+s.size*4*round;}if(s.rtl){tx=-tx;}if(!s.isHorizontal()){ty=tx;tx=0;}var transform='rotateX('+(s.isHorizontal()?0:-slideAngle)+'deg) rotateY('+(s.isHorizontal()?slideAngle:0)+'deg) translate3d('+tx+'px, '+ty+'px, '+tz+'px)';if(progress<=1&&progress>-1){wrapperRotate=i*90+progress*90;if(s.rtl)wrapperRotate=-i*90-progress*90;}slide.transform(transform);if(s.params.cube.slideShadows){//Set shadows
var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=Math.max(-progress,0);if(shadowAfter.length)shadowAfter[0].style.opacity=Math.max(progress,0);}}s.wrapper.css({'-webkit-transform-origin':'50% 50% -'+s.size/2+'px','-moz-transform-origin':'50% 50% -'+s.size/2+'px','-ms-transform-origin':'50% 50% -'+s.size/2+'px','transform-origin':'50% 50% -'+s.size/2+'px'});if(s.params.cube.shadow){if(s.isHorizontal()){cubeShadow.transform('translate3d(0px, '+(s.width/2+s.params.cube.shadowOffset)+'px, '+-s.width/2+'px) rotateX(90deg) rotateZ(0deg) scale('+s.params.cube.shadowScale+')');}else{var shadowAngle=Math.abs(wrapperRotate)-Math.floor(Math.abs(wrapperRotate)/90)*90;var multiplier=1.5-(Math.sin(shadowAngle*2*Math.PI/360)/2+Math.cos(shadowAngle*2*Math.PI/360)/2);var scale1=s.params.cube.shadowScale,scale2=s.params.cube.shadowScale/multiplier,offset=s.params.cube.shadowOffset;cubeShadow.transform('scale3d('+scale1+', 1, '+scale2+') translate3d(0px, '+(s.height/2+offset)+'px, '+-s.height/2/scale2+'px) rotateX(-90deg)');}}var zFactor=s.isSafari||s.isUiWebView?-s.size/2:0;s.wrapper.transform('translate3d(0px,0,'+zFactor+'px) rotateX('+(s.isHorizontal()?0:wrapperRotate)+'deg) rotateY('+(s.isHorizontal()?-wrapperRotate:0)+'deg)');},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);if(s.params.cube.shadow&&!s.isHorizontal()){s.container.find('.swiper-cube-shadow').transition(duration);}}},coverflow:{setTranslate:function setTranslate(){var transform=s.translate;var center=s.isHorizontal()?-transform+s.width/2:-transform+s.height/2;var rotate=s.isHorizontal()?s.params.coverflow.rotate:-s.params.coverflow.rotate;var translate=s.params.coverflow.depth;//Each slide offset from center
for(var i=0,length=s.slides.length;i<length;i++){var slide=s.slides.eq(i);var slideSize=s.slidesSizesGrid[i];var slideOffset=slide[0].swiperSlideOffset;var offsetMultiplier=(center-slideOffset-slideSize/2)/slideSize*s.params.coverflow.modifier;var rotateY=s.isHorizontal()?rotate*offsetMultiplier:0;var rotateX=s.isHorizontal()?0:rotate*offsetMultiplier;// var rotateZ = 0
var translateZ=-translate*Math.abs(offsetMultiplier);var translateY=s.isHorizontal()?0:s.params.coverflow.stretch*offsetMultiplier;var translateX=s.isHorizontal()?s.params.coverflow.stretch*offsetMultiplier:0;//Fix for ultra small values
if(Math.abs(translateX)<0.001)translateX=0;if(Math.abs(translateY)<0.001)translateY=0;if(Math.abs(translateZ)<0.001)translateZ=0;if(Math.abs(rotateY)<0.001)rotateY=0;if(Math.abs(rotateX)<0.001)rotateX=0;var slideTransform='translate3d('+translateX+'px,'+translateY+'px,'+translateZ+'px)  rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)';slide.transform(slideTransform);slide[0].style.zIndex=-Math.abs(Math.round(offsetMultiplier))+1;if(s.params.coverflow.slideShadows){//Set shadows
var shadowBefore=s.isHorizontal()?slide.find('.swiper-slide-shadow-left'):slide.find('.swiper-slide-shadow-top');var shadowAfter=s.isHorizontal()?slide.find('.swiper-slide-shadow-right'):slide.find('.swiper-slide-shadow-bottom');if(shadowBefore.length===0){shadowBefore=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'left':'top')+'"></div>');slide.append(shadowBefore);}if(shadowAfter.length===0){shadowAfter=$('<div class="swiper-slide-shadow-'+(s.isHorizontal()?'right':'bottom')+'"></div>');slide.append(shadowAfter);}if(shadowBefore.length)shadowBefore[0].style.opacity=offsetMultiplier>0?offsetMultiplier:0;if(shadowAfter.length)shadowAfter[0].style.opacity=-offsetMultiplier>0?-offsetMultiplier:0;}}//Set correct perspective for IE10
if(s.browser.ie){var ws=s.wrapper[0].style;ws.perspectiveOrigin=center+'px 50%';}},setTransition:function setTransition(duration){s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);}}};/*=========================
          Images Lazy Loading
          ===========================*/s.lazy={initialImageLoaded:false,loadImageInSlide:function loadImageInSlide(index,loadInDuplicate){if(typeof index==='undefined')return;if(typeof loadInDuplicate==='undefined')loadInDuplicate=true;if(s.slides.length===0)return;var slide=s.slides.eq(index);var img=slide.find('.'+s.params.lazyLoadingClass+':not(.'+s.params.lazyStatusLoadedClass+'):not(.'+s.params.lazyStatusLoadingClass+')');if(slide.hasClass(s.params.lazyLoadingClass)&&!slide.hasClass(s.params.lazyStatusLoadedClass)&&!slide.hasClass(s.params.lazyStatusLoadingClass)){img=img.add(slide[0]);}if(img.length===0)return;img.each(function(){var _img=$(this);_img.addClass(s.params.lazyStatusLoadingClass);var background=_img.attr('data-background');var src=_img.attr('data-src'),srcset=_img.attr('data-srcset'),sizes=_img.attr('data-sizes');s.loadImage(_img[0],src||background,srcset,sizes,false,function(){if(typeof s==='undefined'||s===null||!s)return;if(background){_img.css('background-image','url("'+background+'")');_img.removeAttr('data-background');}else{if(srcset){_img.attr('srcset',srcset);_img.removeAttr('data-srcset');}if(sizes){_img.attr('sizes',sizes);_img.removeAttr('data-sizes');}if(src){_img.attr('src',src);_img.removeAttr('data-src');}}_img.addClass(s.params.lazyStatusLoadedClass).removeClass(s.params.lazyStatusLoadingClass);slide.find('.'+s.params.lazyPreloaderClass+', .'+s.params.preloaderClass).remove();if(s.params.loop&&loadInDuplicate){var slideOriginalIndex=slide.attr('data-swiper-slide-index');if(slide.hasClass(s.params.slideDuplicateClass)){var originalSlide=s.wrapper.children('[data-swiper-slide-index="'+slideOriginalIndex+'"]:not(.'+s.params.slideDuplicateClass+')');s.lazy.loadImageInSlide(originalSlide.index(),false);}else{var duplicatedSlide=s.wrapper.children('.'+s.params.slideDuplicateClass+'[data-swiper-slide-index="'+slideOriginalIndex+'"]');s.lazy.loadImageInSlide(duplicatedSlide.index(),false);}}s.emit('onLazyImageReady',s,slide[0],_img[0]);});s.emit('onLazyImageLoad',s,slide[0],_img[0]);});},load:function load(){var i;var slidesPerView=s.params.slidesPerView;if(slidesPerView==='auto'){slidesPerView=0;}if(!s.lazy.initialImageLoaded)s.lazy.initialImageLoaded=true;if(s.params.watchSlidesVisibility){s.wrapper.children('.'+s.params.slideVisibleClass).each(function(){s.lazy.loadImageInSlide($(this).index());});}else{if(slidesPerView>1){for(i=s.activeIndex;i<s.activeIndex+slidesPerView;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}}else{s.lazy.loadImageInSlide(s.activeIndex);}}if(s.params.lazyLoadingInPrevNext){if(slidesPerView>1||s.params.lazyLoadingInPrevNextAmount&&s.params.lazyLoadingInPrevNextAmount>1){var amount=s.params.lazyLoadingInPrevNextAmount;var spv=slidesPerView;var maxIndex=Math.min(s.activeIndex+spv+Math.max(amount,spv),s.slides.length);var minIndex=Math.max(s.activeIndex-Math.max(spv,amount),0);// Next Slides
for(i=s.activeIndex+slidesPerView;i<maxIndex;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}// Prev Slides
for(i=minIndex;i<s.activeIndex;i++){if(s.slides[i])s.lazy.loadImageInSlide(i);}}else{var nextSlide=s.wrapper.children('.'+s.params.slideNextClass);if(nextSlide.length>0)s.lazy.loadImageInSlide(nextSlide.index());var prevSlide=s.wrapper.children('.'+s.params.slidePrevClass);if(prevSlide.length>0)s.lazy.loadImageInSlide(prevSlide.index());}}},onTransitionStart:function onTransitionStart(){if(s.params.lazyLoading){if(s.params.lazyLoadingOnTransitionStart||!s.params.lazyLoadingOnTransitionStart&&!s.lazy.initialImageLoaded){s.lazy.load();}}},onTransitionEnd:function onTransitionEnd(){if(s.params.lazyLoading&&!s.params.lazyLoadingOnTransitionStart){s.lazy.load();}}};/*=========================
          Scrollbar
          ===========================*/s.scrollbar={isTouched:false,setDragPosition:function setDragPosition(e){var sb=s.scrollbar;var x=0,y=0;var translate;var pointerPosition=s.isHorizontal()?e.type==='touchstart'||e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX||e.clientX:e.type==='touchstart'||e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY||e.clientY;var position=pointerPosition-sb.track.offset()[s.isHorizontal()?'left':'top']-sb.dragSize/2;var positionMin=-s.minTranslate()*sb.moveDivider;var positionMax=-s.maxTranslate()*sb.moveDivider;if(position<positionMin){position=positionMin;}else if(position>positionMax){position=positionMax;}position=-position/sb.moveDivider;s.updateProgress(position);s.setWrapperTranslate(position,true);},dragStart:function dragStart(e){var sb=s.scrollbar;sb.isTouched=true;e.preventDefault();e.stopPropagation();sb.setDragPosition(e);clearTimeout(sb.dragTimeout);sb.track.transition(0);if(s.params.scrollbarHide){sb.track.css('opacity',1);}s.wrapper.transition(100);sb.drag.transition(100);s.emit('onScrollbarDragStart',s);},dragMove:function dragMove(e){var sb=s.scrollbar;if(!sb.isTouched)return;if(e.preventDefault)e.preventDefault();else e.returnValue=false;sb.setDragPosition(e);s.wrapper.transition(0);sb.track.transition(0);sb.drag.transition(0);s.emit('onScrollbarDragMove',s);},dragEnd:function dragEnd(e){var sb=s.scrollbar;if(!sb.isTouched)return;sb.isTouched=false;if(s.params.scrollbarHide){clearTimeout(sb.dragTimeout);sb.dragTimeout=setTimeout(function(){sb.track.css('opacity',0);sb.track.transition(400);},1000);}s.emit('onScrollbarDragEnd',s);if(s.params.scrollbarSnapOnRelease){s.slideReset();}},draggableEvents:function(){if(s.params.simulateTouch===false&&!s.support.touch)return s.touchEventsDesktop;else return s.touchEvents;}(),enableDraggable:function enableDraggable(){var sb=s.scrollbar;var target=s.support.touch?sb.track:document;$(sb.track).on(sb.draggableEvents.start,sb.dragStart);$(target).on(sb.draggableEvents.move,sb.dragMove);$(target).on(sb.draggableEvents.end,sb.dragEnd);},disableDraggable:function disableDraggable(){var sb=s.scrollbar;var target=s.support.touch?sb.track:document;$(sb.track).off(sb.draggableEvents.start,sb.dragStart);$(target).off(sb.draggableEvents.move,sb.dragMove);$(target).off(sb.draggableEvents.end,sb.dragEnd);},set:function set(){if(!s.params.scrollbar)return;var sb=s.scrollbar;sb.track=$(s.params.scrollbar);if(s.params.uniqueNavElements&&typeof s.params.scrollbar==='string'&&sb.track.length>1&&s.container.find(s.params.scrollbar).length===1){sb.track=s.container.find(s.params.scrollbar);}sb.drag=sb.track.find('.swiper-scrollbar-drag');if(sb.drag.length===0){sb.drag=$('<div class="swiper-scrollbar-drag"></div>');sb.track.append(sb.drag);}sb.drag[0].style.width='';sb.drag[0].style.height='';sb.trackSize=s.isHorizontal()?sb.track[0].offsetWidth:sb.track[0].offsetHeight;sb.divider=s.size/s.virtualSize;sb.moveDivider=sb.divider*(sb.trackSize/s.size);sb.dragSize=sb.trackSize*sb.divider;if(s.isHorizontal()){sb.drag[0].style.width=sb.dragSize+'px';}else{sb.drag[0].style.height=sb.dragSize+'px';}if(sb.divider>=1){sb.track[0].style.display='none';}else{sb.track[0].style.display='';}if(s.params.scrollbarHide){sb.track[0].style.opacity=0;}},setTranslate:function setTranslate(){if(!s.params.scrollbar)return;var diff;var sb=s.scrollbar;var translate=s.translate||0;var newPos;var newSize=sb.dragSize;newPos=(sb.trackSize-sb.dragSize)*s.progress;if(s.rtl&&s.isHorizontal()){newPos=-newPos;if(newPos>0){newSize=sb.dragSize-newPos;newPos=0;}else if(-newPos+sb.dragSize>sb.trackSize){newSize=sb.trackSize+newPos;}}else{if(newPos<0){newSize=sb.dragSize+newPos;newPos=0;}else if(newPos+sb.dragSize>sb.trackSize){newSize=sb.trackSize-newPos;}}if(s.isHorizontal()){if(s.support.transforms3d){sb.drag.transform('translate3d('+newPos+'px, 0, 0)');}else{sb.drag.transform('translateX('+newPos+'px)');}sb.drag[0].style.width=newSize+'px';}else{if(s.support.transforms3d){sb.drag.transform('translate3d(0px, '+newPos+'px, 0)');}else{sb.drag.transform('translateY('+newPos+'px)');}sb.drag[0].style.height=newSize+'px';}if(s.params.scrollbarHide){clearTimeout(sb.timeout);sb.track[0].style.opacity=1;sb.timeout=setTimeout(function(){sb.track[0].style.opacity=0;sb.track.transition(400);},1000);}},setTransition:function setTransition(duration){if(!s.params.scrollbar)return;s.scrollbar.drag.transition(duration);}};/*=========================
          Controller
          ===========================*/s.controller={LinearSpline:function LinearSpline(x,y){var binarySearch=function(){var maxIndex,minIndex,guess;return function(array,val){minIndex=-1;maxIndex=array.length;while(maxIndex-minIndex>1){if(array[guess=maxIndex+minIndex>>1]<=val){minIndex=guess;}else{maxIndex=guess;}}return maxIndex;};}();this.x=x;this.y=y;this.lastIndex=x.length-1;// Given an x value (x2), return the expected y2 value:
// (x1,y1) is the known point before given value,
// (x3,y3) is the known point after given value.
var i1,i3;var l=this.x.length;this.interpolate=function(x2){if(!x2)return 0;// Get the indexes of x1 and x3 (the array indexes before and after given x2):
i3=binarySearch(this.x,x2);i1=i3-1;// We have our indexes i1 & i3, so we can calculate already:
// y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
return(x2-this.x[i1])*(this.y[i3]-this.y[i1])/(this.x[i3]-this.x[i1])+this.y[i1];};},//xxx: for now i will just save one spline function to to
getInterpolateFunction:function getInterpolateFunction(c){if(!s.controller.spline)s.controller.spline=s.params.loop?new s.controller.LinearSpline(s.slidesGrid,c.slidesGrid):new s.controller.LinearSpline(s.snapGrid,c.snapGrid);},setTranslate:function setTranslate(translate,byController){var controlled=s.params.control;var multiplier,controlledTranslate;function setControlledTranslate(c){// this will create an Interpolate function based on the snapGrids
// x is the Grid of the scrolled scroller and y will be the controlled scroller
// it makes sense to create this only once and recall it for the interpolation
// the function does a lot of value caching for performance
translate=c.rtl&&c.params.direction==='horizontal'?-s.translate:s.translate;if(s.params.controlBy==='slide'){s.controller.getInterpolateFunction(c);// i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
// but it did not work out
controlledTranslate=-s.controller.spline.interpolate(-translate);}if(!controlledTranslate||s.params.controlBy==='container'){multiplier=(c.maxTranslate()-c.minTranslate())/(s.maxTranslate()-s.minTranslate());controlledTranslate=(translate-s.minTranslate())*multiplier+c.minTranslate();}if(s.params.controlInverse){controlledTranslate=c.maxTranslate()-controlledTranslate;}c.updateProgress(controlledTranslate);c.setWrapperTranslate(controlledTranslate,false,s);c.updateActiveIndex();}if(Array.isArray(controlled)){for(var i=0;i<controlled.length;i++){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTranslate(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTranslate(controlled);}},setTransition:function setTransition(duration,byController){var controlled=s.params.control;var i;function setControlledTransition(c){c.setWrapperTransition(duration,s);if(duration!==0){c.onTransitionStart();c.wrapper.transitionEnd(function(){if(!controlled)return;if(c.params.loop&&s.params.controlBy==='slide'){c.fixLoop();}c.onTransitionEnd();});}}if(Array.isArray(controlled)){for(i=0;i<controlled.length;i++){if(controlled[i]!==byController&&controlled[i]instanceof Swiper){setControlledTransition(controlled[i]);}}}else if(controlled instanceof Swiper&&byController!==controlled){setControlledTransition(controlled);}}};/*=========================
          Parallax
          ===========================*/function setParallaxTransform(el,progress){el=$(el);var p,pX,pY;var rtlFactor=s.rtl?-1:1;p=el.attr('data-swiper-parallax')||'0';pX=el.attr('data-swiper-parallax-x');pY=el.attr('data-swiper-parallax-y');if(pX||pY){pX=pX||'0';pY=pY||'0';}else{if(s.isHorizontal()){pX=p;pY='0';}else{pY=p;pX='0';}}if(pX.indexOf('%')>=0){pX=parseInt(pX,10)*progress*rtlFactor+'%';}else{pX=pX*progress*rtlFactor+'px';}if(pY.indexOf('%')>=0){pY=parseInt(pY,10)*progress+'%';}else{pY=pY*progress+'px';}el.transform('translate3d('+pX+', '+pY+',0px)');}s.parallax={setTranslate:function setTranslate(){s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){setParallaxTransform(this,s.progress);});s.slides.each(function(){var slide=$(this);slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){var progress=Math.min(Math.max(slide[0].progress,-1),1);setParallaxTransform(this,progress);});});},setTransition:function setTransition(duration){if(typeof duration==='undefined')duration=s.params.speed;s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){var el=$(this);var parallaxDuration=parseInt(el.attr('data-swiper-parallax-duration'),10)||duration;if(duration===0)parallaxDuration=0;el.transition(parallaxDuration);});}};/*=========================
          Zoom
          ===========================*/s.zoom={// "Global" Props
scale:1,currentScale:1,isScaling:false,gesture:{slide:undefined,slideWidth:undefined,slideHeight:undefined,image:undefined,imageWrap:undefined,zoomMax:s.params.zoomMax},image:{isTouched:undefined,isMoved:undefined,currentX:undefined,currentY:undefined,minX:undefined,minY:undefined,maxX:undefined,maxY:undefined,width:undefined,height:undefined,startX:undefined,startY:undefined,touchesStart:{},touchesCurrent:{}},velocity:{x:undefined,y:undefined,prevPositionX:undefined,prevPositionY:undefined,prevTime:undefined},// Calc Scale From Multi-touches
getDistanceBetweenTouches:function getDistanceBetweenTouches(e){if(e.targetTouches.length<2)return 1;var x1=e.targetTouches[0].pageX,y1=e.targetTouches[0].pageY,x2=e.targetTouches[1].pageX,y2=e.targetTouches[1].pageY;var distance=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));return distance;},// Events
onGestureStart:function onGestureStart(e){var z=s.zoom;if(!s.support.gestures){if(e.type!=='touchstart'||e.type==='touchstart'&&e.targetTouches.length<2){return;}z.gesture.scaleStart=z.getDistanceBetweenTouches(e);}if(!z.gesture.slide||!z.gesture.slide.length){z.gesture.slide=$(this);if(z.gesture.slide.length===0)z.gesture.slide=s.slides.eq(s.activeIndex);z.gesture.image=z.gesture.slide.find('img, svg, canvas');z.gesture.imageWrap=z.gesture.image.parent('.'+s.params.zoomContainerClass);z.gesture.zoomMax=z.gesture.imageWrap.attr('data-swiper-zoom')||s.params.zoomMax;if(z.gesture.imageWrap.length===0){z.gesture.image=undefined;return;}}z.gesture.image.transition(0);z.isScaling=true;},onGestureChange:function onGestureChange(e){var z=s.zoom;if(!s.support.gestures){if(e.type!=='touchmove'||e.type==='touchmove'&&e.targetTouches.length<2){return;}z.gesture.scaleMove=z.getDistanceBetweenTouches(e);}if(!z.gesture.image||z.gesture.image.length===0)return;if(s.support.gestures){z.scale=e.scale*z.currentScale;}else{z.scale=z.gesture.scaleMove/z.gesture.scaleStart*z.currentScale;}if(z.scale>z.gesture.zoomMax){z.scale=z.gesture.zoomMax-1+Math.pow(z.scale-z.gesture.zoomMax+1,0.5);}if(z.scale<s.params.zoomMin){z.scale=s.params.zoomMin+1-Math.pow(s.params.zoomMin-z.scale+1,0.5);}z.gesture.image.transform('translate3d(0,0,0) scale('+z.scale+')');},onGestureEnd:function onGestureEnd(e){var z=s.zoom;if(!s.support.gestures){if(e.type!=='touchend'||e.type==='touchend'&&e.changedTouches.length<2){return;}}if(!z.gesture.image||z.gesture.image.length===0)return;z.scale=Math.max(Math.min(z.scale,z.gesture.zoomMax),s.params.zoomMin);z.gesture.image.transition(s.params.speed).transform('translate3d(0,0,0) scale('+z.scale+')');z.currentScale=z.scale;z.isScaling=false;if(z.scale===1)z.gesture.slide=undefined;},onTouchStart:function onTouchStart(s,e){var z=s.zoom;if(!z.gesture.image||z.gesture.image.length===0)return;if(z.image.isTouched)return;if(s.device.os==='android')e.preventDefault();z.image.isTouched=true;z.image.touchesStart.x=e.type==='touchstart'?e.targetTouches[0].pageX:e.pageX;z.image.touchesStart.y=e.type==='touchstart'?e.targetTouches[0].pageY:e.pageY;},onTouchMove:function onTouchMove(e){var z=s.zoom;if(!z.gesture.image||z.gesture.image.length===0)return;s.allowClick=false;if(!z.image.isTouched||!z.gesture.slide)return;if(!z.image.isMoved){z.image.width=z.gesture.image[0].offsetWidth;z.image.height=z.gesture.image[0].offsetHeight;z.image.startX=s.getTranslate(z.gesture.imageWrap[0],'x')||0;z.image.startY=s.getTranslate(z.gesture.imageWrap[0],'y')||0;z.gesture.slideWidth=z.gesture.slide[0].offsetWidth;z.gesture.slideHeight=z.gesture.slide[0].offsetHeight;z.gesture.imageWrap.transition(0);if(s.rtl)z.image.startX=-z.image.startX;if(s.rtl)z.image.startY=-z.image.startY;}// Define if we need image drag
var scaledWidth=z.image.width*z.scale;var scaledHeight=z.image.height*z.scale;if(scaledWidth<z.gesture.slideWidth&&scaledHeight<z.gesture.slideHeight)return;z.image.minX=Math.min(z.gesture.slideWidth/2-scaledWidth/2,0);z.image.maxX=-z.image.minX;z.image.minY=Math.min(z.gesture.slideHeight/2-scaledHeight/2,0);z.image.maxY=-z.image.minY;z.image.touchesCurrent.x=e.type==='touchmove'?e.targetTouches[0].pageX:e.pageX;z.image.touchesCurrent.y=e.type==='touchmove'?e.targetTouches[0].pageY:e.pageY;if(!z.image.isMoved&&!z.isScaling){if(s.isHorizontal()&&Math.floor(z.image.minX)===Math.floor(z.image.startX)&&z.image.touchesCurrent.x<z.image.touchesStart.x||Math.floor(z.image.maxX)===Math.floor(z.image.startX)&&z.image.touchesCurrent.x>z.image.touchesStart.x){z.image.isTouched=false;return;}else if(!s.isHorizontal()&&Math.floor(z.image.minY)===Math.floor(z.image.startY)&&z.image.touchesCurrent.y<z.image.touchesStart.y||Math.floor(z.image.maxY)===Math.floor(z.image.startY)&&z.image.touchesCurrent.y>z.image.touchesStart.y){z.image.isTouched=false;return;}}e.preventDefault();e.stopPropagation();z.image.isMoved=true;z.image.currentX=z.image.touchesCurrent.x-z.image.touchesStart.x+z.image.startX;z.image.currentY=z.image.touchesCurrent.y-z.image.touchesStart.y+z.image.startY;if(z.image.currentX<z.image.minX){z.image.currentX=z.image.minX+1-Math.pow(z.image.minX-z.image.currentX+1,0.8);}if(z.image.currentX>z.image.maxX){z.image.currentX=z.image.maxX-1+Math.pow(z.image.currentX-z.image.maxX+1,0.8);}if(z.image.currentY<z.image.minY){z.image.currentY=z.image.minY+1-Math.pow(z.image.minY-z.image.currentY+1,0.8);}if(z.image.currentY>z.image.maxY){z.image.currentY=z.image.maxY-1+Math.pow(z.image.currentY-z.image.maxY+1,0.8);}//Velocity
if(!z.velocity.prevPositionX)z.velocity.prevPositionX=z.image.touchesCurrent.x;if(!z.velocity.prevPositionY)z.velocity.prevPositionY=z.image.touchesCurrent.y;if(!z.velocity.prevTime)z.velocity.prevTime=Date.now();z.velocity.x=(z.image.touchesCurrent.x-z.velocity.prevPositionX)/(Date.now()-z.velocity.prevTime)/2;z.velocity.y=(z.image.touchesCurrent.y-z.velocity.prevPositionY)/(Date.now()-z.velocity.prevTime)/2;if(Math.abs(z.image.touchesCurrent.x-z.velocity.prevPositionX)<2)z.velocity.x=0;if(Math.abs(z.image.touchesCurrent.y-z.velocity.prevPositionY)<2)z.velocity.y=0;z.velocity.prevPositionX=z.image.touchesCurrent.x;z.velocity.prevPositionY=z.image.touchesCurrent.y;z.velocity.prevTime=Date.now();z.gesture.imageWrap.transform('translate3d('+z.image.currentX+'px, '+z.image.currentY+'px,0)');},onTouchEnd:function onTouchEnd(s,e){var z=s.zoom;if(!z.gesture.image||z.gesture.image.length===0)return;if(!z.image.isTouched||!z.image.isMoved){z.image.isTouched=false;z.image.isMoved=false;return;}z.image.isTouched=false;z.image.isMoved=false;var momentumDurationX=300;var momentumDurationY=300;var momentumDistanceX=z.velocity.x*momentumDurationX;var newPositionX=z.image.currentX+momentumDistanceX;var momentumDistanceY=z.velocity.y*momentumDurationY;var newPositionY=z.image.currentY+momentumDistanceY;//Fix duration
if(z.velocity.x!==0)momentumDurationX=Math.abs((newPositionX-z.image.currentX)/z.velocity.x);if(z.velocity.y!==0)momentumDurationY=Math.abs((newPositionY-z.image.currentY)/z.velocity.y);var momentumDuration=Math.max(momentumDurationX,momentumDurationY);z.image.currentX=newPositionX;z.image.currentY=newPositionY;// Define if we need image drag
var scaledWidth=z.image.width*z.scale;var scaledHeight=z.image.height*z.scale;z.image.minX=Math.min(z.gesture.slideWidth/2-scaledWidth/2,0);z.image.maxX=-z.image.minX;z.image.minY=Math.min(z.gesture.slideHeight/2-scaledHeight/2,0);z.image.maxY=-z.image.minY;z.image.currentX=Math.max(Math.min(z.image.currentX,z.image.maxX),z.image.minX);z.image.currentY=Math.max(Math.min(z.image.currentY,z.image.maxY),z.image.minY);z.gesture.imageWrap.transition(momentumDuration).transform('translate3d('+z.image.currentX+'px, '+z.image.currentY+'px,0)');},onTransitionEnd:function onTransitionEnd(s){var z=s.zoom;if(z.gesture.slide&&s.previousIndex!==s.activeIndex){z.gesture.image.transform('translate3d(0,0,0) scale(1)');z.gesture.imageWrap.transform('translate3d(0,0,0)');z.gesture.slide=z.gesture.image=z.gesture.imageWrap=undefined;z.scale=z.currentScale=1;}},// Toggle Zoom
toggleZoom:function toggleZoom(s,e){var z=s.zoom;if(!z.gesture.slide){z.gesture.slide=s.clickedSlide?$(s.clickedSlide):s.slides.eq(s.activeIndex);z.gesture.image=z.gesture.slide.find('img, svg, canvas');z.gesture.imageWrap=z.gesture.image.parent('.'+s.params.zoomContainerClass);}if(!z.gesture.image||z.gesture.image.length===0)return;var touchX,touchY,offsetX,offsetY,diffX,diffY,translateX,translateY,imageWidth,imageHeight,scaledWidth,scaledHeight,translateMinX,translateMinY,translateMaxX,translateMaxY,slideWidth,slideHeight;if(typeof z.image.touchesStart.x==='undefined'&&e){touchX=e.type==='touchend'?e.changedTouches[0].pageX:e.pageX;touchY=e.type==='touchend'?e.changedTouches[0].pageY:e.pageY;}else{touchX=z.image.touchesStart.x;touchY=z.image.touchesStart.y;}if(z.scale&&z.scale!==1){// Zoom Out
z.scale=z.currentScale=1;z.gesture.imageWrap.transition(300).transform('translate3d(0,0,0)');z.gesture.image.transition(300).transform('translate3d(0,0,0) scale(1)');z.gesture.slide=undefined;}else{// Zoom In
z.scale=z.currentScale=z.gesture.imageWrap.attr('data-swiper-zoom')||s.params.zoomMax;if(e){slideWidth=z.gesture.slide[0].offsetWidth;slideHeight=z.gesture.slide[0].offsetHeight;offsetX=z.gesture.slide.offset().left;offsetY=z.gesture.slide.offset().top;diffX=offsetX+slideWidth/2-touchX;diffY=offsetY+slideHeight/2-touchY;imageWidth=z.gesture.image[0].offsetWidth;imageHeight=z.gesture.image[0].offsetHeight;scaledWidth=imageWidth*z.scale;scaledHeight=imageHeight*z.scale;translateMinX=Math.min(slideWidth/2-scaledWidth/2,0);translateMinY=Math.min(slideHeight/2-scaledHeight/2,0);translateMaxX=-translateMinX;translateMaxY=-translateMinY;translateX=diffX*z.scale;translateY=diffY*z.scale;if(translateX<translateMinX){translateX=translateMinX;}if(translateX>translateMaxX){translateX=translateMaxX;}if(translateY<translateMinY){translateY=translateMinY;}if(translateY>translateMaxY){translateY=translateMaxY;}}else{translateX=0;translateY=0;}z.gesture.imageWrap.transition(300).transform('translate3d('+translateX+'px, '+translateY+'px,0)');z.gesture.image.transition(300).transform('translate3d(0,0,0) scale('+z.scale+')');}},// Attach/Detach Events
attachEvents:function attachEvents(detach){var action=detach?'off':'on';if(s.params.zoom){var target=s.slides;var passiveListener=s.touchEvents.start==='touchstart'&&s.support.passiveListener&&s.params.passiveListeners?{passive:true,capture:false}:false;// Scale image
if(s.support.gestures){s.slides[action]('gesturestart',s.zoom.onGestureStart,passiveListener);s.slides[action]('gesturechange',s.zoom.onGestureChange,passiveListener);s.slides[action]('gestureend',s.zoom.onGestureEnd,passiveListener);}else if(s.touchEvents.start==='touchstart'){s.slides[action](s.touchEvents.start,s.zoom.onGestureStart,passiveListener);s.slides[action](s.touchEvents.move,s.zoom.onGestureChange,passiveListener);s.slides[action](s.touchEvents.end,s.zoom.onGestureEnd,passiveListener);}// Move image
s[action]('touchStart',s.zoom.onTouchStart);s.slides.each(function(index,slide){if($(slide).find('.'+s.params.zoomContainerClass).length>0){$(slide)[action](s.touchEvents.move,s.zoom.onTouchMove);}});s[action]('touchEnd',s.zoom.onTouchEnd);// Scale Out
s[action]('transitionEnd',s.zoom.onTransitionEnd);if(s.params.zoomToggle){s.on('doubleTap',s.zoom.toggleZoom);}}},init:function init(){s.zoom.attachEvents();},destroy:function destroy(){s.zoom.attachEvents(true);}};/*=========================
          Plugins API. Collect all and init all plugins
          ===========================*/s._plugins=[];for(var plugin in s.plugins){var p=s.plugins[plugin](s,s.params[plugin]);if(p)s._plugins.push(p);}// Method to call all plugins event/method
s.callPlugins=function(eventName){for(var i=0;i<s._plugins.length;i++){if(eventName in s._plugins[i]){s._plugins[i][eventName](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}};/*=========================
          Events/Callbacks/Plugins Emitter
          ===========================*/function normalizeEventName(eventName){if(eventName.indexOf('on')!==0){if(eventName[0]!==eventName[0].toUpperCase()){eventName='on'+eventName[0].toUpperCase()+eventName.substring(1);}else{eventName='on'+eventName;}}return eventName;}s.emitterEventListeners={};s.emit=function(eventName){// Trigger callbacks
if(s.params[eventName]){s.params[eventName](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}var i;// Trigger events
if(s.emitterEventListeners[eventName]){for(i=0;i<s.emitterEventListeners[eventName].length;i++){s.emitterEventListeners[eventName][i](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);}}// Trigger plugins
if(s.callPlugins)s.callPlugins(eventName,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);};s.on=function(eventName,handler){eventName=normalizeEventName(eventName);if(!s.emitterEventListeners[eventName])s.emitterEventListeners[eventName]=[];s.emitterEventListeners[eventName].push(handler);return s;};s.off=function(eventName,handler){var i;eventName=normalizeEventName(eventName);if(typeof handler==='undefined'){// Remove all handlers for such event
s.emitterEventListeners[eventName]=[];return s;}if(!s.emitterEventListeners[eventName]||s.emitterEventListeners[eventName].length===0)return;for(i=0;i<s.emitterEventListeners[eventName].length;i++){if(s.emitterEventListeners[eventName][i]===handler)s.emitterEventListeners[eventName].splice(i,1);}return s;};s.once=function(eventName,handler){eventName=normalizeEventName(eventName);var _handler=function _handler(){handler(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);s.off(eventName,_handler);};s.on(eventName,_handler);return s;};// Accessibility tools
s.a11y={makeFocusable:function makeFocusable($el){$el.attr('tabIndex','0');return $el;},addRole:function addRole($el,role){$el.attr('role',role);return $el;},addLabel:function addLabel($el,label){$el.attr('aria-label',label);return $el;},disable:function disable($el){$el.attr('aria-disabled',true);return $el;},enable:function enable($el){$el.attr('aria-disabled',false);return $el;},onEnterKey:function onEnterKey(event){if(event.keyCode!==13)return;if($(event.target).is(s.params.nextButton)){s.onClickNext(event);if(s.isEnd){s.a11y.notify(s.params.lastSlideMessage);}else{s.a11y.notify(s.params.nextSlideMessage);}}else if($(event.target).is(s.params.prevButton)){s.onClickPrev(event);if(s.isBeginning){s.a11y.notify(s.params.firstSlideMessage);}else{s.a11y.notify(s.params.prevSlideMessage);}}if($(event.target).is('.'+s.params.bulletClass)){$(event.target)[0].click();}},liveRegion:$('<span class="'+s.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function notify(message){var notification=s.a11y.liveRegion;if(notification.length===0)return;notification.html('');notification.html(message);},init:function init(){// Setup accessibility
if(s.params.nextButton&&s.nextButton&&s.nextButton.length>0){s.a11y.makeFocusable(s.nextButton);s.a11y.addRole(s.nextButton,'button');s.a11y.addLabel(s.nextButton,s.params.nextSlideMessage);}if(s.params.prevButton&&s.prevButton&&s.prevButton.length>0){s.a11y.makeFocusable(s.prevButton);s.a11y.addRole(s.prevButton,'button');s.a11y.addLabel(s.prevButton,s.params.prevSlideMessage);}$(s.container).append(s.a11y.liveRegion);},initPagination:function initPagination(){if(s.params.pagination&&s.params.paginationClickable&&s.bullets&&s.bullets.length){s.bullets.each(function(){var bullet=$(this);s.a11y.makeFocusable(bullet);s.a11y.addRole(bullet,'button');s.a11y.addLabel(bullet,s.params.paginationBulletMessage.replace(/{{index}}/,bullet.index()+1));});}},destroy:function destroy(){if(s.a11y.liveRegion&&s.a11y.liveRegion.length>0)s.a11y.liveRegion.remove();}};/*=========================
          Init/Destroy
          ===========================*/s.init=function(){if(s.params.loop)s.createLoop();s.updateContainerSize();s.updateSlidesSize();s.updatePagination();if(s.params.scrollbar&&s.scrollbar){s.scrollbar.set();if(s.params.scrollbarDraggable){s.scrollbar.enableDraggable();}}if(s.params.effect!=='slide'&&s.effects[s.params.effect]){if(!s.params.loop)s.updateProgress();s.effects[s.params.effect].setTranslate();}if(s.params.loop){s.slideTo(s.params.initialSlide+s.loopedSlides,0,s.params.runCallbacksOnInit);}else{s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit);if(s.params.initialSlide===0){if(s.parallax&&s.params.parallax)s.parallax.setTranslate();if(s.lazy&&s.params.lazyLoading){s.lazy.load();s.lazy.initialImageLoaded=true;}}}s.attachEvents();if(s.params.observer&&s.support.observer){s.initObservers();}if(s.params.preloadImages&&!s.params.lazyLoading){s.preloadImages();}if(s.params.zoom&&s.zoom){s.zoom.init();}if(s.params.autoplay){s.startAutoplay();}if(s.params.keyboardControl){if(s.enableKeyboardControl)s.enableKeyboardControl();}if(s.params.mousewheelControl){if(s.enableMousewheelControl)s.enableMousewheelControl();}// Deprecated hashnavReplaceState changed to replaceState for use in hashnav and history
if(s.params.hashnavReplaceState){s.params.replaceState=s.params.hashnavReplaceState;}if(s.params.history){if(s.history)s.history.init();}if(s.params.hashnav){if(s.hashnav)s.hashnav.init();}if(s.params.a11y&&s.a11y)s.a11y.init();s.emit('onInit',s);};// Cleanup dynamic styles
s.cleanupStyles=function(){// Container
s.container.removeClass(s.classNames.join(' ')).removeAttr('style');// Wrapper
s.wrapper.removeAttr('style');// Slides
if(s.slides&&s.slides.length){s.slides.removeClass([s.params.slideVisibleClass,s.params.slideActiveClass,s.params.slideNextClass,s.params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-column').removeAttr('data-swiper-row');}// Pagination/Bullets
if(s.paginationContainer&&s.paginationContainer.length){s.paginationContainer.removeClass(s.params.paginationHiddenClass);}if(s.bullets&&s.bullets.length){s.bullets.removeClass(s.params.bulletActiveClass);}// Buttons
if(s.params.prevButton)$(s.params.prevButton).removeClass(s.params.buttonDisabledClass);if(s.params.nextButton)$(s.params.nextButton).removeClass(s.params.buttonDisabledClass);// Scrollbar
if(s.params.scrollbar&&s.scrollbar){if(s.scrollbar.track&&s.scrollbar.track.length)s.scrollbar.track.removeAttr('style');if(s.scrollbar.drag&&s.scrollbar.drag.length)s.scrollbar.drag.removeAttr('style');}};// Destroy
s.destroy=function(deleteInstance,cleanupStyles){// Detach evebts
s.detachEvents();// Stop autoplay
s.stopAutoplay();// Disable draggable
if(s.params.scrollbar&&s.scrollbar){if(s.params.scrollbarDraggable){s.scrollbar.disableDraggable();}}// Destroy loop
if(s.params.loop){s.destroyLoop();}// Cleanup styles
if(cleanupStyles){s.cleanupStyles();}// Disconnect observer
s.disconnectObservers();// Destroy zoom
if(s.params.zoom&&s.zoom){s.zoom.destroy();}// Disable keyboard/mousewheel
if(s.params.keyboardControl){if(s.disableKeyboardControl)s.disableKeyboardControl();}if(s.params.mousewheelControl){if(s.disableMousewheelControl)s.disableMousewheelControl();}// Disable a11y
if(s.params.a11y&&s.a11y)s.a11y.destroy();// Delete history popstate
if(s.params.history&&!s.params.replaceState){window.removeEventListener('popstate',s.history.setHistoryPopState);}if(s.params.hashnav&&s.hashnav){s.hashnav.destroy();}// Destroy callback
s.emit('onDestroy');// Delete instance
if(deleteInstance!==false)s=null;};s.init();// Return swiper instance
return s;};/*==================================================
        Prototype
    ====================================================*/Swiper.prototype={isSafari:function(){var ua=window.navigator.userAgent.toLowerCase();return ua.indexOf('safari')>=0&&ua.indexOf('chrome')<0&&ua.indexOf('android')<0;}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function isArray(arr){return Object.prototype.toString.apply(arr)==='[object Array]';},/*==================================================
        Browser
        ====================================================*/browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){// create temporary DIV
var div=document.createElement('div');// add content to tmp DIV which is wrapped into the IE HTML conditional statement
div.innerHTML='<!--[if lte IE 9]><i></i><![endif]-->';// return true / false value based on what will browser render
return div.getElementsByTagName('i').length===1;}()},/*==================================================
        Devices
        ====================================================*/device:function(){var ua=window.navigator.userAgent;var android=ua.match(/(Android);?[\s\/]+([\d.]+)?/);var ipad=ua.match(/(iPad).*OS\s([\d_]+)/);var ipod=ua.match(/(iPod)(.*OS\s([\d_]+))?/);var iphone=!ipad&&ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:ipad||iphone||ipod,android:android};}(),/*==================================================
        Feature Detection
        ====================================================*/support:{touch:window.Modernizr&&Modernizr.touch===true||function(){return!!('ontouchstart'in window||window.DocumentTouch&&document instanceof DocumentTouch);}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===true||function(){var div=document.createElement('div').style;return'webkitPerspective'in div||'MozPerspective'in div||'OPerspective'in div||'MsPerspective'in div||'perspective'in div;}(),flexbox:function(){var div=document.createElement('div').style;var styles='alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');for(var i=0;i<styles.length;i++){if(styles[i]in div)return true;}}(),observer:function(){return'MutationObserver'in window||'WebkitMutationObserver'in window;}(),passiveListener:function(){var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function get(){supportsPassive=true;}});window.addEventListener('testPassiveListener',null,opts);}catch(e){}return supportsPassive;}(),gestures:function(){return'ongesturestart'in window;}()},/*==================================================
        Plugins
        ====================================================*/plugins:{}};})();//# sourceMappingURL=framework7.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Badge = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueBadge,
    name: 'Badge',
    tag: 'f7-badge'
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.DataTableCell = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableCell,
    name: 'DataTableCell',
    tag: 'f7-table-cell',
    events: [
        'click'
    ]
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Icon = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueIcon,
    name: 'Icon',
    tag: 'f7-icon'
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var Badge_1 = __webpack_require__(8);
var Icon_1 = __webpack_require__(10);
var framework7_vue_2 = __webpack_require__(0);
exports.Link = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueLink,
    name: 'Link',
    tag: 'f7-link',
    events: [
        'click'
    ],
    instantiatedComponents: [
        Badge_1.Badge,
        Icon_1.Icon
    ],
    mixin: framework7_vue_2.VueLinkMixin
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports.no = exports.noCase = __webpack_require__(2)
exports.dot = exports.dotCase = __webpack_require__(112)
exports.swap = exports.swapCase = __webpack_require__(127)
exports.path = exports.pathCase = __webpack_require__(122)
exports.upper = exports.upperCase = __webpack_require__(3)
exports.lower = exports.lowerCase = __webpack_require__(5)
exports.camel = exports.camelCase = __webpack_require__(30)
exports.snake = exports.snakeCase = __webpack_require__(33)
exports.title = exports.titleCase = __webpack_require__(128)
exports.param = exports.paramCase = __webpack_require__(120)
exports.header = exports.headerCase = __webpack_require__(113)
exports.pascal = exports.pascalCase = __webpack_require__(121)
exports.constant = exports.constantCase = __webpack_require__(111)
exports.sentence = exports.sentenceCase = __webpack_require__(126)
exports.isUpper = exports.isUpperCase = __webpack_require__(115)
exports.isLower = exports.isLowerCase = __webpack_require__(114)
exports.ucFirst = exports.upperCaseFirst = __webpack_require__(16)
exports.lcFirst = exports.lowerCaseFirst = __webpack_require__(116)


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)

/**
 * Upper case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return upperCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.CardContent = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCardContent,
    name: 'CardContent',
    tag: 'f7-card-content'
});


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.CardFooter = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCardFooter,
    name: 'CardFooter',
    tag: 'f7-card-footer'
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.CardHeader = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCardHeader,
    name: 'CardHeader',
    tag: 'f7-card-header'
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var DataTableTitle_1 = __webpack_require__(22);
exports.DataTableHeader = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableHeader,
    name: 'DataTableHeader',
    tag: 'f7-table-header',
    instantiatedComponents: [
        DataTableTitle_1.DataTableTitle
    ]
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var DataTableCell_1 = __webpack_require__(9);
exports.DataTableRow = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableRow,
    name: 'DataTableRow',
    tag: 'f7-table-row',
    events: [
        'change'
    ],
    instantiatedComponents: [
        DataTableCell_1.DataTableCell
    ]
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.DataTableTitle = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableTitle,
    name: 'DataTableTitle',
    tag: 'f7-table-title'
});


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.FormRange = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFormRange,
    name: 'FormRange',
    tag: 'f7-range',
    events: [
        'input',
        'change',
        'click'
    ]
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.FormSwitch = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFormSwitch,
    name: 'FormSwitch',
    tag: 'f7-switch',
    events: [
        'input',
        'change',
        'click'
    ]
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var Badge_1 = __webpack_require__(8);
exports.ListItemContent = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListItemContent,
    name: 'ListItemContent',
    tag: 'f7-list-item-content',
    events: [
        'click',
        'change'
    ],
    instantiatedComponents: [
        Badge_1.Badge
    ]
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.NavCenter = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueNavCenter,
    name: 'NavCenter',
    tag: 'f7-nav-center'
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var Link_1 = __webpack_require__(11);
exports.NavLeft = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueNavLeft,
    name: 'NavLeft',
    tag: 'f7-nav-left',
    events: [
        'back-click',
        'click:back'
    ],
    instantiatedComponents: [
        Link_1.Link
    ]
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var NavLeft_1 = __webpack_require__(27);
var NavCenter_1 = __webpack_require__(26);
exports.Navbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueNavbar,
    name: 'Navbar',
    tag: 'f7-navbar',
    events: [
        'navbar:beforeinit',
        'navbar:init',
        'navbar:reinit',
        'navbar:beforeremove',
        'back-click',
        'click:back'
    ],
    instantiatedComponents: [
        NavLeft_1.NavLeft,
        NavCenter_1.NavCenter
    ],
    slots: [
        'before-inner',
        'after-inner'
    ]
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Pages = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePages,
    name: 'Pages',
    tag: 'f7-pages'
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)
var noCase = __webpack_require__(2)

/**
 * Camel case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  var result = noCase(value, locale)

  // Replace periods between numeric entities with an underscore.
  if (!mergeNumbers) {
    result = result.replace(/ (?=\d)/g, '_')
  }

  // Replace spaces between words with an upper cased character.
  return result.replace(/ (.)/g, function (m, $1) {
    return upperCase($1, locale)
  })
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(13);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(125)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(124)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Snake case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '_')
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Accordion = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueAccordion,
    name: 'Accordion',
    tag: 'f7-accordion'
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.AccordionContent = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueAccordionContent,
    name: 'AccordionContent',
    tag: 'f7-accordion-content'
});


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.AccordionItem = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueAccordionItem,
    name: 'AccordionItem',
    tag: 'f7-accordion-item',
    events: [
        'accordion:open',
        'accordion:opened',
        'accordion:close',
        'accordion:closed'
    ]
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.AccordionToggle = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueAccordionToggle,
    name: 'AccordionToggle',
    tag: 'f7-accordion-toggle'
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Actions = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueActions,
    name: 'Actions',
    tag: 'f7-actions',
    events: [
        'actions:open',
        'actions:opened',
        'actions:close',
        'actions:closed'
    ]
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ActionsButton = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueActionsButton,
    name: 'ActionsButton',
    tag: 'f7-actions-button',
    events: [
        'click'
    ]
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ActionsGroup = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueActionsGroup,
    name: 'ActionsGroup',
    tag: 'f7-actions-group'
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ActionsLabel = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueActionsLabel,
    name: 'ActionsLabel',
    tag: 'f7-actions-label',
    events: [
        'click'
    ]
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var Icon_1 = __webpack_require__(10);
var framework7_vue_2 = __webpack_require__(0);
exports.Button = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueButton,
    name: 'Button',
    tag: 'f7-button',
    events: [
        'click'
    ],
    instantiatedComponents: [
        Icon_1.Icon
    ],
    mixin: framework7_vue_2.VueLinkMixin
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ButtonsSegmented = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueButtonsSegmented,
    name: 'ButtonsSegmented',
    tag: 'f7-segmented'
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var framework7_vue_2 = __webpack_require__(0);
exports.Calendar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCalendar,
    name: 'Calendar',
    tag: 'f7-calendar',
    events: [
        'change',
        'monthAdd',
        'dayClick',
        'monthYearChangeStart',
        'monthYearChangeEnd',
        'open',
        'close'
    ],
    mixin: framework7_vue_2.VueCalendarDatePickerMixin
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var CardHeader_1 = __webpack_require__(19);
var CardFooter_1 = __webpack_require__(18);
var CardContent_1 = __webpack_require__(17);
exports.Card = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueCard,
    name: 'Card',
    tag: 'f7-card',
    instantiatedComponents: [
        CardHeader_1.CardHeader,
        CardFooter_1.CardFooter,
        CardContent_1.CardContent
    ]
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Chip = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueChip,
    name: 'Chip',
    tag: 'f7-chip',
    events: [
        'click',
        'delete'
    ]
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ContentBlock = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueContentBlock,
    name: 'ContentBlock',
    tag: 'f7-block',
    events: [
        'tab:show',
        'tab:hide'
    ]
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ContentBlockTitle = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueContentBlockTitle,
    name: 'ContentBlockTitle',
    tag: 'f7-list-block-title'
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var DataTableHeader_1 = __webpack_require__(20);
var DataTableCell_1 = __webpack_require__(9);
var DataTableRow_1 = __webpack_require__(21);
exports.DataTable = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTable,
    name: 'DataTable',
    tag: 'f7-table',
    instantiatedComponents: [
        DataTableHeader_1.DataTableHeader,
        DataTableCell_1.DataTableCell,
        DataTableRow_1.DataTableRow
    ],
    slots: [
        'before-table',
        'after-table'
    ]
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.DataTableActions = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableActions,
    name: 'DataTableActions',
    tag: 'f7-table-actions'
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.DataTableLinks = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDataTableLinks,
    name: 'DataTableLinks',
    tag: 'f7-table-links'
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var framework7_vue_2 = __webpack_require__(0);
exports.Datepicker = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueDatepicker,
    name: 'Datepicker',
    tag: 'undefined',
    events: [
        'change',
        'monthAdd',
        'dayClick',
        'monthYearChangeStart',
        'monthYearChangeEnd',
        'open',
        'close'
    ],
    mixin: framework7_vue_2.VueCalendarDatePickerMixin
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Fab = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFab,
    name: 'Fab',
    tag: 'f7-fab',
    events: [
        'click'
    ]
});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.FabSpeedDial = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFabSpeedDial,
    name: 'FabSpeedDial',
    tag: 'f7-fab-speed-dial'
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.FabSpeedDialAction = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFabSpeedDialAction,
    name: 'FabSpeedDialAction',
    tag: 'undefined',
    events: [
        'click'
    ]
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.FabSpeedDialActions = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFabSpeedDialActions,
    name: 'FabSpeedDialActions',
    tag: 'undefined'
});


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var FormSwitch_1 = __webpack_require__(24);
var FormRange_1 = __webpack_require__(23);
exports.FormInput = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFormInput,
    name: 'FormInput',
    tag: 'f7-input',
    events: [
        'input',
        'focus',
        'blur',
        'change',
        'click',
        'keypress',
        'keyup',
        'keydown',
        'beforeinput',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'focusin',
        'focusout',
        'dblclick',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'wheel',
        'select'
    ],
    instantiatedComponents: [
        FormSwitch_1.FormSwitch,
        FormRange_1.FormRange
    ]
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.FormLabel = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueFormLabel,
    name: 'FormLabel',
    tag: 'f7-label'
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.GridCol = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueGridCol,
    name: 'GridCol',
    tag: 'f7-col'
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.GridRow = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueGridRow,
    name: 'GridRow',
    tag: 'f7-grid'
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.List = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueList,
    name: 'List',
    tag: 'f7-list',
    events: [
        'sortable:open',
        'sortable:close',
        'sortable:sort',
        'tab:show',
        'tab:hide',
        'virtual:itembeforeinsert',
        'virtual:beforeclear',
        'virtual:itemsbeforeinsert',
        'virtual:itemsafterinsert'
    ]
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ListButton = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListButton,
    name: 'ListButton',
    tag: 'f7-list-button',
    events: [
        'click'
    ]
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ListGroup = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListGroup,
    name: 'ListGroup',
    tag: 'f7-list-group'
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var ListItemContent_1 = __webpack_require__(25);
exports.ListItem = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListItem,
    name: 'ListItem',
    tag: 'f7-list-item',
    events: [
        'click',
        'swipeout:deleted',
        'swipeout:delete',
        'swipeout:close',
        'swipeout:closed',
        'swipeout:open',
        'swipeout:opened',
        'swipeout',
        'accordion:close',
        'accordion:closed',
        'accordion:open',
        'accordion:opened',
        'input',
        'change'
    ],
    instantiatedComponents: [
        ListItemContent_1.ListItemContent
    ],
    slots: [
        'content-start',
        'media-start',
        'inner-start',
        'after-start',
        'root-start',
        'content',
        'media',
        'inner',
        'after',
        'root'
    ]
});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ListItemSwipeoutActions = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListItemSwipeoutActions,
    name: 'ListItemSwipeoutActions',
    tag: 'f7-swipeout-actions'
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ListItemSwipeoutButton = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListItemSwipeoutButton,
    name: 'ListItemSwipeoutButton',
    tag: 'f7-swipeout-button',
    events: [
        'click'
    ]
});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.ListLabel = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueListLabel,
    name: 'ListLabel',
    tag: 'f7-list-label'
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.LoginScreen = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueLoginScreen,
    name: 'LoginScreen',
    tag: 'f7-login-screen',
    events: [
        'loginscreen:open',
        'loginscreen:opened',
        'loginscreen:close',
        'loginscreen:closed'
    ]
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.LoginScreenTitle = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueLoginScreenTitle,
    name: 'LoginScreenTitle',
    tag: 'f7-login-screen-title'
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Message = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueMessage,
    name: 'Message',
    tag: 'f7-message',
    events: [
        'click',
        'click:name',
        'click:text',
        'click:avatar'
    ],
    slots: [
        'start',
        'end'
    ]
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var Link_1 = __webpack_require__(11);
exports.Messagebar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueMessagebar,
    name: 'Messagebar',
    tag: 'f7-messagebar',
    events: [
        'change',
        'input',
        'focus',
        'blur',
        'submit',
        'click'
    ],
    instantiatedComponents: [
        Link_1.Link
    ],
    slots: [
        'before-inner',
        'before-textarea',
        'after-textarea',
        'after-inner'
    ]
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Messages = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueMessages,
    name: 'Messages',
    tag: 'f7-messages'
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.NavRight = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueNavRight,
    name: 'NavRight',
    tag: 'f7-nav-right'
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Page = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePage,
    name: 'Page',
    tag: 'f7-page',
    events: [
        'ptr:pullstart',
        'ptr:pullmove',
        'ptr:pullend',
        'ptr:refresh',
        'ptr:done',
        'infinite',
        'page:beforeinit',
        'page:init',
        'page:reinit',
        'page:beforeanimation',
        'page:afteranimation',
        'page:beforeremove',
        'page:back',
        'page:afterback'
    ],
    slots: [
        'static',
        'fixed'
    ]
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.PageContent = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePageContent,
    name: 'PageContent',
    tag: 'f7-page-content',
    events: [
        'tab:show',
        'tab:hide'
    ]
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Panel = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePanel,
    name: 'Panel',
    tag: 'f7-panel',
    events: [
        'panel:open',
        'panel:opened',
        'panel:closed',
        'panel:overlay-click',
        'panel:swipe'
    ]
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.PhotoBrowser = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePhotoBrowser,
    name: 'PhotoBrowser',
    tag: 'f7-photo-browser',
    events: [
        'open',
        'close',
        'swipeToClose',
        'slideChangeStart',
        'slideChangeEnd',
        'transitionStart',
        'transitionEnd',
        'click',
        'tap',
        'doubleTap',
        'lazyImageLoad',
        'lazyImageReady'
    ]
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.PickerModal = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePickerModal,
    name: 'PickerModal',
    tag: 'f7-picker-modal',
    events: [
        'picker:open',
        'picker:opened',
        'picker:close',
        'picker:closed'
    ]
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Popover = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePopover,
    name: 'Popover',
    tag: 'f7-popover',
    events: [
        'popover:open',
        'popover:opened',
        'popover:close',
        'popover:closed'
    ]
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Popup = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePopup,
    name: 'Popup',
    tag: 'f7-popup',
    events: [
        'popup:open',
        'popup:opened',
        'popup:close',
        'popup:closed'
    ]
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Preloader = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VuePreloader,
    name: 'Preloader',
    tag: 'f7-preloader'
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Progressbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueProgressbar,
    name: 'Progressbar',
    tag: 'f7-progressbar'
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Searchbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueSearchbar,
    name: 'Searchbar',
    tag: 'f7-searchbar',
    events: [
        'change',
        'input',
        'focus',
        'blur',
        'submit',
        'searchbar:search',
        'searchbar:clear',
        'searchbar:enable',
        'searchbar:disable',
        'click:clear',
        'click:cancel'
    ],
    slots: [
        'before-input',
        'after-input'
    ]
});


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Statusbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueStatusbar,
    name: 'Statusbar',
    tag: 'undefined'
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Subnavbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueSubnavbar,
    name: 'Subnavbar',
    tag: 'f7-subnavbar'
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Swiper = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueSwiper,
    name: 'Swiper',
    tag: 'f7-swiper'
});


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.SwiperSlide = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueSwiperSlide,
    name: 'SwiperSlide',
    tag: 'f7-swiper-slide'
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Tab = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTab,
    name: 'Tab',
    tag: 'f7-tab',
    events: [
        'tab:show',
        'tab:hide'
    ]
});


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Tabs = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTabs,
    name: 'Tabs',
    tag: 'f7-tabs'
});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Template7Template = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTemplate7Template,
    name: 'Template7Template',
    tag: 'undefined'
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Timeline = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTimeline,
    name: 'Timeline',
    tag: 'f7-timeline'
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.TimelineItem = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTimelineItem,
    name: 'TimelineItem',
    tag: 'f7-timeline-item'
});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.TimelineItemChild = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTimelineItemChild,
    name: 'TimelineItemChild',
    tag: 'f7-timeline-item-child'
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.TimelineMonth = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTimelineMonth,
    name: 'TimelineMonth',
    tag: 'f7-timeline-month'
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.TimelineYear = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueTimelineYear,
    name: 'TimelineYear',
    tag: 'f7-timeline-year'
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Toolbar = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueToolbar,
    name: 'Toolbar',
    tag: 'f7-toolbar',
    slots: [
        'before-inner',
        'after-inner'
    ]
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
var Pages_1 = __webpack_require__(29);
var Navbar_1 = __webpack_require__(28);
exports.View = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueView,
    name: 'View',
    tag: 'f7-view',
    events: [
        'swipeback:move',
        'swipeback:beforechange',
        'swipeback:afterchange',
        'swipeback:beforereset',
        'swipeback:afterreset',
        'tab:show',
        'tab:hide'
    ],
    instantiatedComponents: [
        Pages_1.Pages,
        Navbar_1.Navbar
    ]
});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactifyF7Vue_1 = __webpack_require__(1);
var framework7_vue_1 = __webpack_require__(0);
exports.Views = ReactifyF7Vue_1.reactifyF7Vue({
    component: framework7_vue_1.VueViews,
    name: 'Views',
    tag: 'f7-views'
});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var prop_types_1 = __webpack_require__(32);
var router_1 = __webpack_require__(110);
var Framework7_1 = __webpack_require__(7);
var OverscrollFix_1 = __webpack_require__(103);
var Framework7App = (function (_super) {
    __extends(Framework7App, _super);
    function Framework7App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.framework7 = null;
        _this.framework7InitCallbacks = [];
        _this.routeChangeCallbacks = {};
        return _this;
    }
    Framework7App.prototype.getChildContext = function () {
        var _this = this;
        return {
            framework7AppContext: {
                getFramework7: this.getFramework7.bind(this),
                theme: {
                    ios: this.props.themeType === 'ios',
                    material: this.props.themeType === 'material'
                },
                onRouteChange: this.onRouteChange.bind(this),
                unregisterRouteChange: this.unregisterRouteChange.bind(this),
                getCurrentRoute: function () { return _this.currentRoute; },
                getRouter: function () { return _this.router; }
            }
        };
    };
    Framework7App.prototype.render = function () {
        return React.createElement("span", null, this.props.children);
    };
    Framework7App.prototype.componentDidMount = function () {
        this.handleOverscrollFix();
        this.initFramework7();
    };
    Framework7App.prototype.handleOverscrollFix = function () {
        if (this.props.applyOverscrollFix) {
            OverscrollFix_1.applyOverscrollFix();
        }
    };
    Framework7App.prototype.initFramework7 = function () {
        var _this = this;
        this.framework7 = new Framework7_1.Framework7(__assign({ material: this.props.themeType === 'material' }, this.props));
        var router = this.router = new router_1.default(this.props.routes, this.framework7, Framework7_1.Dom7);
        router.setRouteChangeHandler(function (route) {
            _this.currentRoute = route;
            if (_this.props.onRouteChange) {
                _this.props.onRouteChange(route);
            }
            Object.keys(_this.routeChangeCallbacks).forEach(function (componentId) {
                //Need this if statement in case a component gets unregistered during this forEach                
                if (_this.routeChangeCallbacks[componentId]) {
                    _this.routeChangeCallbacks[componentId](route);
                }
            });
            return false;
        });
        if (this.props.onFramework7Init) {
            this.props.onFramework7Init(this.framework7);
        }
        this.framework7InitCallbacks.forEach(function (callback) {
            callback(_this.framework7);
        });
        if (this.props.stateKernel) {
            Framework7_1.Dom7(document).on('click', 'a', function (e) { return e.preventDefault(); });
            this.props.stateKernel.setFramework7(this.framework7);
            this.props.stateKernel.setRouter(this.router);
        }
    };
    Framework7App.prototype.getFramework7 = function (callback) {
        if (this.framework7) {
            callback(this.framework7);
        }
        else {
            this.framework7InitCallbacks.push(callback);
        }
    };
    Framework7App.prototype.onRouteChange = function (componentId, callback) {
        this.routeChangeCallbacks[componentId] = callback;
    };
    Framework7App.prototype.unregisterRouteChange = function (componentId) {
        delete this.routeChangeCallbacks[componentId];
    };
    Framework7App.childContextTypes = {
        framework7AppContext: prop_types_1.object
    };
    return Framework7App;
}(React.Component));
exports.Framework7App = Framework7App;
;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Framework7App_1 = __webpack_require__(99);
exports.Framework7App = Framework7App_1.Framework7App;
var Framework7_1 = __webpack_require__(7);
exports.Framework7 = Framework7_1.Framework7;
var AccordionContent_1 = __webpack_require__(35);
exports.AccordionContent = AccordionContent_1.AccordionContent;
var AccordionItem_1 = __webpack_require__(36);
exports.AccordionItem = AccordionItem_1.AccordionItem;
var AccordionToggle_1 = __webpack_require__(37);
exports.AccordionToggle = AccordionToggle_1.AccordionToggle;
var Accordion_1 = __webpack_require__(34);
exports.Accordion = Accordion_1.Accordion;
var ActionsButton_1 = __webpack_require__(39);
exports.ActionsButton = ActionsButton_1.ActionsButton;
var ActionsGroup_1 = __webpack_require__(40);
exports.ActionsGroup = ActionsGroup_1.ActionsGroup;
var ActionsLabel_1 = __webpack_require__(41);
exports.ActionsLabel = ActionsLabel_1.ActionsLabel;
var Actions_1 = __webpack_require__(38);
exports.Actions = Actions_1.Actions;
var Badge_1 = __webpack_require__(8);
exports.Badge = Badge_1.Badge;
var Button_1 = __webpack_require__(42);
exports.Button = Button_1.Button;
var ButtonsSegmented_1 = __webpack_require__(43);
exports.ButtonsSegmented = ButtonsSegmented_1.ButtonsSegmented;
var Calendar_1 = __webpack_require__(44);
exports.Calendar = Calendar_1.Calendar;
var CardContent_1 = __webpack_require__(17);
exports.CardContent = CardContent_1.CardContent;
var CardFooter_1 = __webpack_require__(18);
exports.CardFooter = CardFooter_1.CardFooter;
var CardHeader_1 = __webpack_require__(19);
exports.CardHeader = CardHeader_1.CardHeader;
var Card_1 = __webpack_require__(45);
exports.Card = Card_1.Card;
var Chip_1 = __webpack_require__(46);
exports.Chip = Chip_1.Chip;
var ContentBlockTitle_1 = __webpack_require__(48);
exports.ContentBlockTitle = ContentBlockTitle_1.ContentBlockTitle;
var ContentBlock_1 = __webpack_require__(47);
exports.ContentBlock = ContentBlock_1.ContentBlock;
var DataTableActions_1 = __webpack_require__(50);
exports.DataTableActions = DataTableActions_1.DataTableActions;
var DataTableCell_1 = __webpack_require__(9);
exports.DataTableCell = DataTableCell_1.DataTableCell;
var DataTableHeader_1 = __webpack_require__(20);
exports.DataTableHeader = DataTableHeader_1.DataTableHeader;
var DataTableLinks_1 = __webpack_require__(51);
exports.DataTableLinks = DataTableLinks_1.DataTableLinks;
var DataTableRow_1 = __webpack_require__(21);
exports.DataTableRow = DataTableRow_1.DataTableRow;
var DataTableTitle_1 = __webpack_require__(22);
exports.DataTableTitle = DataTableTitle_1.DataTableTitle;
var DataTable_1 = __webpack_require__(49);
exports.DataTable = DataTable_1.DataTable;
var Datepicker_1 = __webpack_require__(52);
exports.Datepicker = Datepicker_1.Datepicker;
var FabSpeedDialAction_1 = __webpack_require__(55);
exports.FabSpeedDialAction = FabSpeedDialAction_1.FabSpeedDialAction;
var FabSpeedDialActions_1 = __webpack_require__(56);
exports.FabSpeedDialActions = FabSpeedDialActions_1.FabSpeedDialActions;
var FabSpeedDial_1 = __webpack_require__(54);
exports.FabSpeedDial = FabSpeedDial_1.FabSpeedDial;
var Fab_1 = __webpack_require__(53);
exports.Fab = Fab_1.Fab;
var FormInput_1 = __webpack_require__(57);
exports.FormInput = FormInput_1.FormInput;
var FormLabel_1 = __webpack_require__(58);
exports.FormLabel = FormLabel_1.FormLabel;
var FormRange_1 = __webpack_require__(23);
exports.FormRange = FormRange_1.FormRange;
var FormSwitch_1 = __webpack_require__(24);
exports.FormSwitch = FormSwitch_1.FormSwitch;
var GridCol_1 = __webpack_require__(59);
exports.GridCol = GridCol_1.GridCol;
var GridRow_1 = __webpack_require__(60);
exports.GridRow = GridRow_1.GridRow;
var Icon_1 = __webpack_require__(10);
exports.Icon = Icon_1.Icon;
var Link_1 = __webpack_require__(11);
exports.Link = Link_1.Link;
var ListButton_1 = __webpack_require__(62);
exports.ListButton = ListButton_1.ListButton;
var ListGroup_1 = __webpack_require__(63);
exports.ListGroup = ListGroup_1.ListGroup;
var ListItemContent_1 = __webpack_require__(25);
exports.ListItemContent = ListItemContent_1.ListItemContent;
var ListItemSwipeoutActions_1 = __webpack_require__(65);
exports.ListItemSwipeoutActions = ListItemSwipeoutActions_1.ListItemSwipeoutActions;
var ListItemSwipeoutButton_1 = __webpack_require__(66);
exports.ListItemSwipeoutButton = ListItemSwipeoutButton_1.ListItemSwipeoutButton;
var ListItem_1 = __webpack_require__(64);
exports.ListItem = ListItem_1.ListItem;
var ListLabel_1 = __webpack_require__(67);
exports.ListLabel = ListLabel_1.ListLabel;
var List_1 = __webpack_require__(61);
exports.List = List_1.List;
var LoginScreenTitle_1 = __webpack_require__(69);
exports.LoginScreenTitle = LoginScreenTitle_1.LoginScreenTitle;
var LoginScreen_1 = __webpack_require__(68);
exports.LoginScreen = LoginScreen_1.LoginScreen;
var Message_1 = __webpack_require__(70);
exports.Message = Message_1.Message;
var Messagebar_1 = __webpack_require__(71);
exports.Messagebar = Messagebar_1.Messagebar;
var Messages_1 = __webpack_require__(72);
exports.Messages = Messages_1.Messages;
var NavCenter_1 = __webpack_require__(26);
exports.NavCenter = NavCenter_1.NavCenter;
var NavLeft_1 = __webpack_require__(27);
exports.NavLeft = NavLeft_1.NavLeft;
var NavRight_1 = __webpack_require__(73);
exports.NavRight = NavRight_1.NavRight;
var Navbar_1 = __webpack_require__(28);
exports.Navbar = Navbar_1.Navbar;
var PageContent_1 = __webpack_require__(75);
exports.PageContent = PageContent_1.PageContent;
var Page_1 = __webpack_require__(74);
exports.Page = Page_1.Page;
var Pages_1 = __webpack_require__(29);
exports.Pages = Pages_1.Pages;
var Panel_1 = __webpack_require__(76);
exports.Panel = Panel_1.Panel;
var PhotoBrowser_1 = __webpack_require__(77);
exports.PhotoBrowser = PhotoBrowser_1.PhotoBrowser;
var PickerModal_1 = __webpack_require__(78);
exports.PickerModal = PickerModal_1.PickerModal;
var Popover_1 = __webpack_require__(79);
exports.Popover = Popover_1.Popover;
var Popup_1 = __webpack_require__(80);
exports.Popup = Popup_1.Popup;
var Preloader_1 = __webpack_require__(81);
exports.Preloader = Preloader_1.Preloader;
var Progressbar_1 = __webpack_require__(82);
exports.Progressbar = Progressbar_1.Progressbar;
var Searchbar_1 = __webpack_require__(83);
exports.Searchbar = Searchbar_1.Searchbar;
var Statusbar_1 = __webpack_require__(84);
exports.Statusbar = Statusbar_1.Statusbar;
var Subnavbar_1 = __webpack_require__(85);
exports.Subnavbar = Subnavbar_1.Subnavbar;
var SwiperSlide_1 = __webpack_require__(87);
exports.SwiperSlide = SwiperSlide_1.SwiperSlide;
var Swiper_1 = __webpack_require__(86);
exports.Swiper = Swiper_1.Swiper;
var Tab_1 = __webpack_require__(88);
exports.Tab = Tab_1.Tab;
var Tabs_1 = __webpack_require__(89);
exports.Tabs = Tabs_1.Tabs;
var Template7Template_1 = __webpack_require__(90);
exports.Template7Template = Template7Template_1.Template7Template;
var TimelineItemChild_1 = __webpack_require__(93);
exports.TimelineItemChild = TimelineItemChild_1.TimelineItemChild;
var TimelineItem_1 = __webpack_require__(92);
exports.TimelineItem = TimelineItem_1.TimelineItem;
var TimelineMonth_1 = __webpack_require__(94);
exports.TimelineMonth = TimelineMonth_1.TimelineMonth;
var TimelineYear_1 = __webpack_require__(95);
exports.TimelineYear = TimelineYear_1.TimelineYear;
var Timeline_1 = __webpack_require__(91);
exports.Timeline = Timeline_1.Timeline;
var Toolbar_1 = __webpack_require__(96);
exports.Toolbar = Toolbar_1.Toolbar;
var View_1 = __webpack_require__(97);
exports.View = View_1.View;
var Views_1 = __webpack_require__(98);
exports.Views = Views_1.Views;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(4);
var SelectableInput_1 = __webpack_require__(102);
exports.ManagedFormInput = function (props) {
    var renamedProps = {
        name: props.name,
        type: props.type,
        placeholder: props.placeholder,
        id: props.id,
        value: props.value || '',
        size: props.size,
        accept: props.accept,
        autoComplete: props.autocomplete,
        autoCorrect: props.autocorrect,
        autoCapitalize: props.autocapitalize,
        spellCheck: props.spellcheck,
        autoFocus: props.autofocus,
        autoSave: props.autosave,
        checked: props.checked,
        disabled: props.disabled,
        max: props.max,
        maxLength: props.maxlength,
        min: props.min,
        minLength: props.minlength,
        step: props.step,
        multiple: props.multiple,
        readOnly: props.readonly,
        required: props.required,
        color: props.color,
        pattern: props.pattern,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onInput: props.onInput,
        onChange: props.onChange,
        onClick: props.onClick,
        onKeyPress: props.onKeypress,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        onCompositionStart: props.onCompositionstart,
        onCompositionUpdate: props.onCompositionupdate,
        onCompositionEnd: props.onCompositionend,
        onDoubleClick: props.onDblclick,
        onMouseDown: props.onMousedown,
        onMouseEnter: props.onMouseenter,
        onMouseLeave: props.onMouseleave,
        onMouseMove: props.onMousemove,
        onMouseOut: props.onMouseout,
        onMouseOver: props.onMouseover,
        onMouseUp: props.onMouseup,
        onWheel: props.onWheel,
        onSelect: props.onSelect
    };
    switch (props.type.toLowerCase()) {
        case 'checkbox':
        case 'radio':
            return React.createElement(SelectableInput_1.SelectableInput, __assign({}, renamedProps));
        case 'textarea':
            return React.createElement("textarea", __assign({}, renamedProps));
        default:
            return React.createElement("input", __assign({}, renamedProps));
    }
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var SelectableInput = (function (_super) {
    __extends(SelectableInput, _super);
    function SelectableInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectableInput.prototype.saveRef = function (element) {
        this.element = element;
    };
    SelectableInput.prototype.componentDidMount = function () {
        this.element.checked = this.props.checked;
        this.element.addEventListener('change', this.props.onChange);
    };
    SelectableInput.prototype.componentDidUpdate = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.element) {
                _this.element.checked = _this.props.checked;
            }
        });
    };
    SelectableInput.prototype.render = function () {
        return React.createElement("input", __assign({ type: this.props.type, ref: this.saveRef.bind(this) }, this.props));
    };
    return SelectableInput;
}(React.Component));
exports.SelectableInput = SelectableInput;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenerateReactClass_1 = __webpack_require__(105);
exports.reactifyVue = function (reactifyVueArgs) {
    return GenerateReactClass_1.generateReactClass(reactifyVueArgs.instantiatedComponents, reactifyVueArgs.component, reactifyVueArgs.slots, reactifyVueArgs.name, reactifyVueArgs.tag, reactifyVueArgs.mixin, reactifyVueArgs.args);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var VueComponentClass_1 = __webpack_require__(107);
var ReactClassRuntime_1 = __webpack_require__(106);
exports.generateReactClass = function (instantiatedComponents, vueComponent, slots, name, tag, mixin, args) {
    var vueComponentClass = VueComponentClass_1.convertVueComponentToClass(vueComponent);
    ReactClassRuntime_1.copyMethodsToVueComponent(vueComponent);
    ReactClassRuntime_1.copyArgsToVueComponent(vueComponent, args);
    var reactClass = (function (_super) {
        __extends(reactClass, _super);
        function reactClass(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.vueComponent = new vueComponentClass(_this.props, _this);
            _this.createElement = ReactClassRuntime_1.generateCreateElementFunctionForClass(_this.vueComponent, instantiatedComponents, _this.vueComponent);
            ReactClassRuntime_1.copyPropsToVueComponent(_this.vueComponent, _this.props);
            ReactClassRuntime_1.copySlotsToVueComponent(_this.vueComponent, slots, _this.props);
            var state = ReactClassRuntime_1.initData(_this.vueComponent);
            ReactClassRuntime_1.handleComputedProperties(_this.vueComponent);
            ReactClassRuntime_1.addCompiledTemplateFunctionsToVueComponent(_this.vueComponent, _this.createElement);
            if (_this.props.__onInit) {
                _this.props.__onInit(_this);
            }
            _this.state = state;
            return _this;
        }
        reactClass.prototype.componentWillUpdate = function () {
            if (this.vueComponent.beforeUpdate)
                this.vueComponent.beforeUpdate();
        };
        reactClass.prototype.componentDidUpdate = function () {
            if (this.vueComponent.updated)
                this.vueComponent.updated();
        };
        reactClass.prototype.componentDidMount = function () {
            if (this.vueComponent.mounted)
                this.vueComponent.mounted();
            if (this.props.__onMount)
                this.props.__onMount(this);
            this.didMount = true;
        };
        reactClass.prototype.componentWillUnmount = function () {
            if (vueComponent.beforeDestroy)
                vueComponent.beforeDestroy();
        };
        reactClass.prototype.componentWillReceiveProps = function (nextProps) {
            ReactClassRuntime_1.handleWatchedProperties(this.vueComponent, this.props, nextProps);
        };
        reactClass.prototype.render = function () {
            if (this.hasRendered) {
                //Only do this after the first render, since it happens in getInitialState the first time
                ReactClassRuntime_1.copyPropsToVueComponent(this.vueComponent, this.props);
                ReactClassRuntime_1.copySlotsToVueComponent(this.vueComponent, slots, this.props);
                ReactClassRuntime_1.handleComputedProperties(this.vueComponent);
            }
            var reactElement = this.vueComponent.render(this.createElement.bind(this));
            this.hasRendered = true;
            if (reactElement) {
                return ReactClassRuntime_1.applyPropOverridesToTopLevelElement(reactElement, tag, this);
            }
            else {
                return null;
            }
        };
        reactClass.prototype.callVueMethod = function (methodName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this.vueComponent[methodName](args);
        };
        return reactClass;
    }(React.Component));
    reactClass.tag = tag;
    reactClass.vueComponent = vueComponent;
    reactClass.getVueComponentInstance = function () { return _this.vueComponent; };
    reactClass.displayName = name;
    var defaultProps = ReactClassRuntime_1.getDefaultProps(vueComponent);
    if (defaultProps)
        reactClass.defaultProps = defaultProps;
    return reactClass;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var change_case_1 = __webpack_require__(12);
var CreateReactElements_1 = __webpack_require__(108);
exports.copyMethodsToVueComponent = function (vueComponent) {
    if (vueComponent.methods) {
        Object.keys(vueComponent.methods)
            .forEach(function (methodName) { return vueComponent[methodName] = vueComponent.methods[methodName]; });
        delete vueComponent.methods;
    }
};
exports.copyPropsToVueComponent = function (vueComponent, props) {
    if (props) {
        Object.keys(props)
            .forEach(function (propName) {
            if (typeof vueComponent[propName] !== 'function' || typeof vueComponent[propName] === 'function' && !vueComponent[propName]) {
                vueComponent[propName] = props[propName];
            }
        });
    }
};
exports.getComponentTag = function (component) {
    if (component.type && component.type.tag) {
        return component.type.tag;
    }
    else if (component.type && typeof component.type === 'string') {
        return component.type;
    }
    else {
        return undefined;
    }
};
exports.copySlotsToVueComponent = function (vueComponent, slotMapping, props) {
    var reactChildrenArray = props && props.children && React.Children.toArray(props.children);
    var slots = {
        default: (reactChildrenArray && reactChildrenArray.length) ? reactChildrenArray : null
    };
    if (slotMapping && props) {
        Object.keys(slotMapping)
            .forEach(function (slotName) {
            slots[slotName] = props[slotMapping[slotName]] || [];
        });
    }
    Object.keys(slots)
        .forEach(function (slotName) {
        var slot = slots[slotName];
        if (Array.isArray(slot)) {
            slot.forEach(function (slotChild, index) {
                if (typeof slotChild !== 'string') {
                    slots[slotName][index] = __assign({}, slotChild, { tag: exports.getComponentTag(slotChild) });
                }
            });
        }
    });
    vueComponent.$slots = slots;
};
exports.copyArgsToVueComponent = function (vueComponent, args) {
    if (args) {
        Object.keys(args)
            .forEach(function (argName) { return vueComponent[argName] = args[argName]; });
    }
};
exports.handleWatchedProperties = function (vueComponent, currentProps, nextProps) {
    if (vueComponent.watch) {
        exports.copyPropsToVueComponent(vueComponent, nextProps);
        exports.handleComputedProperties(vueComponent);
        Object.keys(vueComponent.watch)
            .forEach(function (watchedProperty) {
            if (currentProps[watchedProperty] !== nextProps[watchedProperty]) {
                vueComponent.watch[watchedProperty].apply(vueComponent, [nextProps[watchedProperty]]);
            }
        });
    }
};
exports.handleComputedProperties = function (vueComponent) {
    if (vueComponent.computed) {
        Object.keys(vueComponent.computed)
            .forEach(function (propertyName) {
            vueComponent[propertyName] = vueComponent.computed[propertyName].apply(vueComponent, []);
        });
    }
};
exports.getDefaultProps = function (vueComponent) {
    if (vueComponent.props) {
        var defaultProps = Object.keys(vueComponent.props).reduce(function (defaultProps, propName) {
            var propDef = vueComponent.props[propName];
            if (propDef.default) {
                return __assign({}, defaultProps, (_a = {}, _a[change_case_1.camelCase(propName)] = propDef.default, _a));
            }
            else {
                return defaultProps;
            }
            var _a;
        }, {});
        return Object.keys(defaultProps).length ? defaultProps : null;
    }
    else {
        return null;
    }
};
exports.addCompiledTemplateFunctionsToVueComponent = function (vueComponent, createElement) {
    vueComponent._self = { _c: createElement.bind(vueComponent) };
    vueComponent._t = function (slotName, fallback) {
        var slotValue = vueComponent.$slots[slotName];
        if (fallback && (!slotValue || !slotValue.length)) {
            return fallback;
        }
        else {
            return slotValue;
        }
    };
    vueComponent._v = function (text) { return text || ''; };
    vueComponent._s = function (text) { return text || ''; };
    vueComponent._e = function () { return null; };
};
exports.generateCreateElementFunctionForClass = function (classVueComponentInstance, instantiatedComponents, vueComponent) {
    return function (element, args, children) {
        if (typeof args !== 'object' || Array.isArray(args)) {
            //Children passed in as second argument
            return CreateReactElements_1.createReactElement(element, {}, args, instantiatedComponents, vueComponent);
        }
        else {
            return CreateReactElements_1.createReactElement(element, args, children, instantiatedComponents, vueComponent);
        }
    };
};
exports.applyPropOverridesToTopLevelElement = function (reactElement, tag, self) {
    var refFunc = function (e) {
        reactElement.ref(e);
        self.element = e;
        self.nextTickCallbacks.forEach(function (callback) { return callback.apply(_this.vueComponent, []); });
        self.nextTickCallbacks = [];
        self.hasUnrenderedStateChanges = false;
    };
    var elementWithPropOverrides = __assign({}, reactElement, { props: __assign({}, reactElement.props), tag: tag, ref: refFunc });
    if (self.vueComponent.className) {
        var existingClassName = elementWithPropOverrides.props.className || '';
        elementWithPropOverrides.props.className = [existingClassName, ' ', self.vueComponent.className].join('');
    }
    if (self.vueComponent.style) {
        var existingStyles = elementWithPropOverrides.props.style || {};
        elementWithPropOverrides.props.style = __assign({}, existingStyles, self.vueComponent.style);
    }
    if (self.vueComponent.id) {
        elementWithPropOverrides.props.id = self.vueComponent.id;
    }
    return elementWithPropOverrides;
};
exports.initData = function (vueComponent) {
    var state = null;
    if (vueComponent.data) {
        state = vueComponent.data();
        Object.keys(state).forEach(function (stateKey) {
            vueComponent[stateKey] = state[stateKey];
        });
    }
    return state;
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(4);
var change_case_1 = __webpack_require__(12);
var handleStateSet = function (stateObject, key, value, vueComponent, self, deleteMode) {
    var stateKey = Object.keys(self.state).reduce(function (macthingStateKey, nextKey) {
        if (self.state[nextKey] === stateObject) {
            return nextKey;
        }
        else {
            return macthingStateKey;
        }
    }, null);
    var newState;
    if (deleteMode) {
        newState = __assign({}, self.state);
        delete newState[stateKey][key];
    }
    else {
        newState = __assign({}, self.state, (_a = {}, _a[stateKey] = __assign({}, self.state[stateKey], (_b = {}, _b[key] = value, _b)), _a));
    }
    if (deleteMode) {
        delete vueComponent[stateKey][key];
    }
    else {
        vueComponent[stateKey] = newState[stateKey];
    }
    self.setState(newState);
    var _a, _b;
};
var callPropOnEvent = function (eventName, eventArgs, props) {
    var eventNameCamelCase = change_case_1.camelCase('on-' + eventName.split(':').join('-'));
    if (props[eventNameCamelCase]) {
        props[eventNameCamelCase].apply(props, eventArgs);
    }
};
exports.convertVueComponentToClass = function (vueComponentObject) {
    var vueComponentClass = function (reactComponentProps, reactComponentInstance) {
        this.reactComponentProps = reactComponentProps;
        this.reactComponentInstance = reactComponentInstance;
        this.reactComponentInstance.nextTickCallbacks = [];
    };
    vueComponentClass.prototype = vueComponentObject;
    if (vueComponentObject.mixins) {
        vueComponentObject.mixins.forEach(function (mixin) {
            Object.keys(mixin).forEach(function (prop) {
                if (vueComponentClass.prototype[prop]) {
                    var existingPropertyValue_1 = vueComponentClass.prototype[prop];
                    var mixinPropertyValue_1 = mixin[prop];
                    Object.keys(mixinPropertyValue_1).forEach(function (mixinProp) {
                        existingPropertyValue_1[mixinProp] = mixinPropertyValue_1[mixinProp];
                    });
                }
                else {
                    vueComponentClass.prototype[prop] = mixin[prop];
                }
            });
        });
    }
    vueComponentClass.prototype.$emit = function (eventName) {
        var eventArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            eventArgs[_i - 1] = arguments[_i];
        }
        callPropOnEvent(eventName, eventArgs, this.reactComponentProps);
    };
    Object.defineProperty(vueComponentClass.prototype, '$el', {
        get: function () { return this.reactComponentInstance.element; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$parent', {
        get: function () { return this.reactComponentProps.parentVueComponent || {}; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$children', {
        get: function () {
            var parentElement = this.$el;
            return React.Children.toArray(this.children).map(function (element, index) {
                return __assign({}, element, { $el: parentElement.children[index] });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$options', {
        get: function () {
            return {
                propsData: __assign({}, this.reactComponentProps)
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(vueComponentClass.prototype, '$root', {
        get: function () {
            return {
                $el: document.querySelector('.framework7-root')
            };
        },
        enumerable: true,
        configurable: true
    });
    vueComponentClass.prototype.$nextTick = function (func) {
        if (this.reactComponentInstance.hasUnrenderedStateChanges) {
            this.reactComponentInstance.nextTickCallbacks.push(func);
        }
        else {
            func();
        }
    };
    vueComponentClass.prototype.$set = function (stateObject, key, value) {
        this.reactComponentInstance.hasUnrenderedStateChanges = true;
        handleStateSet(stateObject, key, value, this, this.reactComponentInstance, false);
    };
    vueComponentClass.prototype.$delete = function (stateObject, key) {
        this.reactComponentInstance.hasUnrenderedStateChanges = true;
        handleStateSet(stateObject, key, null, this, this.reactComponentInstance, true);
    };
    return vueComponentClass;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(4);
var PropsProcessor_1 = __webpack_require__(109);
var ManagedFormInput_1 = __webpack_require__(101);
var propsProcessor = new PropsProcessor_1.PropsProcessor();
var formElements = ['input', 'textarea'];
var resolveDependencyComponent = function (instantiatedComponents, componentToResolve) {
    if (instantiatedComponents && componentToResolve.indexOf('f7-') > -1) {
        //Is a Vue component that React does not know what to do with, so search for it by tag name so that we can pass the actual React component for rendering.
        var results = instantiatedComponents
            .filter(function (instantiatedComponent) {
            if (instantiatedComponent.tag) {
                return instantiatedComponent.tag === componentToResolve;
            }
            else {
                return false;
            }
        });
        if (results.length) {
            return results[0];
        }
    }
    else if (formElements.indexOf(componentToResolve) > -1) {
        //Is an input that we need to manage to control state 
        return ManagedFormInput_1.ManagedFormInput;
    }
    else {
        //Is just a plain html element like div, etc. so just return it.
        return componentToResolve;
    }
};
var flattenNestedArrayOfChildren = function (children, finalArray) {
    if (finalArray === void 0) { finalArray = []; }
    if (children && Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
            if (children[i] && children[i].constructor === Array) {
                flattenNestedArrayOfChildren(children[i], finalArray);
            }
            else {
                if (finalArray.indexOf(children[i]) === -1) {
                    finalArray.push(children[i]);
                }
            }
        }
        return finalArray;
    }
    else {
        return children;
    }
};
exports.createReactElement = function (componentOrComponentName, args, children, instantiatedComponents, vueComponent) {
    var reactElement;
    if (!componentOrComponentName)
        return null;
    var resolvedComponent;
    if (args.tag !== 'component') {
        resolvedComponent = resolveDependencyComponent(instantiatedComponents, componentOrComponentName);
    }
    children = flattenNestedArrayOfChildren(children);
    if (!resolvedComponent)
        resolvedComponent = componentOrComponentName;
    var props = propsProcessor.getProps(args, children, componentOrComponentName, resolvedComponent, vueComponent);
    reactElement = React.createElement(resolvedComponent, props);
    return reactElement;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

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
        this.convertVueDomProps(args, props);
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
        if (children && !((args.domProps && args.domProps.innerHTML) || (args.domProps && args.domProps.value))) {
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
    PropsProcessor.prototype.convertVueDomProps = function (args, props) {
        var dangerouslySetInnerHTML;
        if (args.domProps) {
            if (args.domProps.value) {
                props.value = args.domProps.value;
            }
            if (args.domProps.innerHTML) {
                props.dangerouslySetInnerHTML = { __html: args.domProps.innerHTML };
            }
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


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var combinePaths = function combinePaths() {
  for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  return paths.join('/').replace(/\/+/g, '/');
};

var flattenTabNestedRoutes = function flattenTabNestedRoutes(pageRoute, tabRoute, tabNestedRoutes) {
  return tabNestedRoutes.map(function (tabNestedRoute) {
    return {
      path: combinePaths(pageRoute.path, tabRoute.path, tabNestedRoute.path),
      pagePath: pageRoute.path,
      component: pageRoute.component,
      tab: {
        tabId: tabRoute.tabId,
        component: tabNestedRoute.component
      }
    };
  });
};

var flattenTabRoutes = function flattenTabRoutes(pageRoute, tabRoutes) {
  return tabRoutes.reduce(function (accumulatedFlattenedRoutes, nextTabRoute) {
    var flattenedTabRoutes = void 0;

    if (nextTabRoute.routes) {
      flattenedTabRoutes = flattenTabNestedRoutes(pageRoute, nextTabRoute, nextTabRoute.routes);
    } else {
      flattenedTabRoutes = [{
        path: combinePaths(pageRoute.path, nextTabRoute.path),
        pagePath: pageRoute.path,
        component: pageRoute.component,
        tab: {
          tabId: nextTabRoute.tabId,
          component: nextTabRoute.component
        }
      }];
    }

    return [].concat(_toConsumableArray(accumulatedFlattenedRoutes), _toConsumableArray(flattenedTabRoutes));
  }, []);
};

var flattenRoutes = function flattenRoutes() {
  var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return routes.reduce(function (accumulatedFlattenedRoutes, nextRoute) {
    var flattenedNextRoute = void 0;

    if (nextRoute.tabs) {
      flattenedNextRoute = flattenTabRoutes(nextRoute, nextRoute.tabs);
    } else {
      flattenedNextRoute = [Object.assign({}, nextRoute, {
        pagePath: nextRoute.path
      })];
    }

    return [].concat(_toConsumableArray(accumulatedFlattenedRoutes), _toConsumableArray(flattenedNextRoute));
  }, []);
};

var parseRoute = function parseRoute(str) {
  var parts = [];
  str.split('/').forEach(function (part) {
    if (part !== '') {
      if (part.indexOf(':') === 0) {
        parts.push({ name: part.replace(':', '') });
      } else parts.push(part);
    }
  });
  return parts;
};

function handleRouteChangeFromFramework7(view, options, changeRouteCallback) {
  if (!view.allowPageChange) return false;

  var url = options.url;
  var pageElement = options.pageElement;

  if (url && pageElement || !url || url === '#') {
    return true;
  }

  var inHistory = view.history.indexOf(url) >= 0;
  var inDomCache = view.pagesCache[url];

  if (inHistory && inDomCache) return true;

  return changeRouteCallback(url, view, options);
}

var Framework7Router = function () {
  function Framework7Router(originalRoutes, framework7, dom7) {
    var _this = this;

    _classCallCheck(this, Framework7Router);

    this.routeChangeHandler = null;
    this.routes = flattenRoutes(originalRoutes);
    this.framework7 = framework7;
    this.dom7 = dom7;

    //Hook router into Framework7 routing events
    var initialPreroute = framework7.params.preroute;

    framework7.params.routes = originalRoutes;
    framework7.params.routerRemoveTimeout = true;
    framework7.params.preroute = function (view, options) {
      var passToVueRouter = true;

      if (initialPreroute) {
        passToVueRouter = initialPreroute(view, options);
      }

      if (passToVueRouter) {
        return handleRouteChangeFromFramework7(view, options, _this.changeRoute.bind(_this));
      } else {
        return false;
      }
    };
  }

  _createClass(Framework7Router, [{
    key: 'setRouteChangeHandler',
    value: function setRouteChangeHandler(routeChangeHandler) {
      this.routeChangeHandler = routeChangeHandler;
    }
  }, {
    key: 'changeRoute',
    value: function changeRoute(url) {
      var _this2 = this;

      var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var options = arguments[2];

      var getMainView = function getMainView() {
        return _this2.framework7.views && _this2.framework7.views.reduce(function (mainView, nextView) {
          if (nextView.main) {
            return nextView;
          } else {
            return mainView;
          }
        }, null);
      };

      var matchingRoute = this.findMatchingRoute(url);

      if (!matchingRoute) return true;

      return this.routeChangeHandler(Object.assign({}, matchingRoute, {
        view: view || getMainView(),
        options: options,
        router: this
      }));
    }
  }, {
    key: 'findMatchingRoute',
    value: function findMatchingRoute(url) {
      var matchingRoute;
      if (!url) return matchingRoute;

      var routes = this.routes;
      var query = this.dom7.parseUrlQuery(url);
      var hash = url.split('#')[1];
      var params = {};
      var path = url.split('#')[0].split('?')[0];
      var urlParts = path.split('/').filter(function (part) {
        if (part !== '') return part;
      });

      var i, j, k;
      for (i = 0; i < routes.length; i++) {
        if (matchingRoute) continue;
        var route = routes[i];
        var parsedRoute = parseRoute(route.path);
        if (parsedRoute.length !== urlParts.length) continue;
        var matchedParts = 0;
        for (j = 0; j < parsedRoute.length; j++) {
          if (typeof parsedRoute[j] === 'string' && urlParts[j] === parsedRoute[j]) matchedParts++;
          if (_typeof(parsedRoute[j]) === 'object') {
            params[parsedRoute[j].name] = urlParts[j];
            matchedParts++;
          }
        }
        if (matchedParts === urlParts.length) {
          matchingRoute = {
            query: query,
            hash: hash,
            params: params,
            url: url,
            path: path,
            route: route
          };
        }
      }
      return matchingRoute;
    }
  }]);

  return Framework7Router;
}();

exports.default = Framework7Router;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)
var snakeCase = __webpack_require__(33)

/**
 * Constant case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCase(snakeCase(value, locale), locale)
}


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Dot case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '.')
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)
var upperCase = __webpack_require__(3)

/**
 * Header case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-').replace(/^.|-./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(5)

/**
 * Check if a string is lower case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return lowerCase(string, locale) === string
}


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)

/**
 * Check if a string is upper case.
 *
 * @param  {String}  string
 * @param  {String}  [locale]
 * @return {Boolean}
 */
module.exports = function (string, locale) {
  return upperCase(string, locale) === string
}


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var lowerCase = __webpack_require__(5)

/**
 * Lower case the first character of a string.
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  str = String(str)

  return lowerCase(str.charAt(0), locale) + str.substr(1)
}


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = /([a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A])/g


/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = /([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A]+)([A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0-\uA7B4\uA7B6\uFF21-\uFF3A][a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0561-\u0587\u13F8-\u13FD\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7B5\uA7B7\uA7FA\uAB30-\uAB5A\uAB60-\uAB65\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])/g


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = /[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Param case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '-')
}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var camelCase = __webpack_require__(30)
var upperCaseFirst = __webpack_require__(16)

/**
 * Pascal case a string.
 *
 * @param  {string}  value
 * @param  {string}  [locale]
 * @param  {boolean} [mergeNumbers]
 * @return {string}
 */
module.exports = function (value, locale, mergeNumbers) {
  return upperCaseFirst(camelCase(value, locale, mergeNumbers), locale)
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)

/**
 * Path case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale, '/')
}


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(14);
  var warning = __webpack_require__(31);
  var ReactPropTypesSecret = __webpack_require__(15);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(14);
var ReactPropTypesSecret = __webpack_require__(15);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(14);
var warning = __webpack_require__(31);

var ReactPropTypesSecret = __webpack_require__(15);
var checkPropTypes = __webpack_require__(123);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)
var upperCaseFirst = __webpack_require__(16)

/**
 * Sentence case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return upperCaseFirst(noCase(value, locale), locale)
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var upperCase = __webpack_require__(3)
var lowerCase = __webpack_require__(5)

/**
 * Swap the case of a string. Manually iterate over every character and check
 * instead of replacing certain characters for better unicode support.
 *
 * @param  {String} str
 * @param  {String} [locale]
 * @return {String}
 */
module.exports = function (str, locale) {
  if (str == null) {
    return ''
  }

  var result = ''

  for (var i = 0; i < str.length; i++) {
    var c = str[i]
    var u = upperCase(c, locale)

    result += u === c ? lowerCase(c, locale) : u
  }

  return result
}


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var noCase = __webpack_require__(2)
var upperCase = __webpack_require__(3)

/**
 * Title case a string.
 *
 * @param  {string} value
 * @param  {string} [locale]
 * @return {string}
 */
module.exports = function (value, locale) {
  return noCase(value, locale).replace(/^.| ./g, function (m) {
    return upperCase(m, locale)
  })
}


/***/ }),
/* 129 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=framework7-react.js.map