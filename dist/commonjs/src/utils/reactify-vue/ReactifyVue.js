"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenerateReactClass_1 = require("./react-class-creation-and-runtime/GenerateReactClass");
exports.reactifyVue = function (reactifyVueArgs) {
    return GenerateReactClass_1.generateReactClass(reactifyVueArgs.instantiatedComponents, reactifyVueArgs.component, reactifyVueArgs.slots, reactifyVueArgs.name, reactifyVueArgs.tag, reactifyVueArgs.mixin, reactifyVueArgs.args);
};

//# sourceMappingURL=ReactifyVue.js.map
