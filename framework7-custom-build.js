var fw7BasePath = './node_modules/framework7/';
var fw7ModulesConfig = require('framework7/modules.json');

//Include any component you wish to use in the app from Framework7.
//Listing of components can be found here...http://framework7.io/docs/custom-build.html.
var fw7ModulesBeingUsed = ['fast-clicks', 'modals', 'push-state', 'forms', 'sortable', 'swipeout', 'accordion'];

//Prefix framework7 file paths with base path because their files are listed as paths relative to the node module.
//For example: 'src/js/f7-intro.js'...needs to be node_modules/framework7/src/js/f7-intro.js instead so our build process will know where to find the files.
function prefixBasePath(valueBeingPrefixed) {
    return fw7BasePath + valueBeingPrefixed;
}

//All core scripts, module dependencies, etc. are listed in the Framework7 modules.json found here: node_modules/framework7/modules.json
function getFw7Scripts() {
    var fw7CoreIntroScripts = fw7ModulesConfig.core_intro.js.map(prefixBasePath);
    var fw7CustomScripts = getCustomFw7Scripts();
    var fw7CoreOutroScripts = fw7ModulesConfig.core_outro.js.map(prefixBasePath);

    return fw7CoreIntroScripts.concat(fw7CustomScripts, fw7CoreOutroScripts);
}

function getCustomFw7Scripts() {
    var fw7CustomModulesScripts = [];
    var fw7CustomModules = [];

    fw7CustomModules = getAllFw7ModulesAndDependenciesBeingUsed();

    fw7CustomModulesScripts = getCustomFw7ScriptsFor(fw7CustomModules);

    return fw7CustomModulesScripts;
}

function getCustomFw7ScriptsFor(modulesBeingUsed) {
    var allCustomScripts = [];
    var uniqueCustomScripts = [];

    //first, get all script names for all modules being used (this includes the dependency modules)
    for (var i = 0; i < modulesBeingUsed.length; i++) {
        var module = fw7ModulesConfig[modulesBeingUsed[i]];

        if (module.js.length > 0) {
            allCustomScripts.push.apply(allCustomScripts, module.js);
        }
    }

    //next, get rid of duplicate script names since dependencies could have been duplicated across modules.
    for (var a = 0; a < allCustomScripts.length; a++) {
        var fw7Script = fw7BasePath + allCustomScripts[a];
        if (uniqueCustomScripts.indexOf(fw7Script) < 0) {
            uniqueCustomScripts.push(fw7Script);
        }
    }

    return uniqueCustomScripts;
}

function getAllFw7ModulesAndDependenciesBeingUsed() {
    var allFw7ModulesAndDependencies = [];

    allFw7ModulesAndDependencies.push.apply(allFw7ModulesAndDependencies, fw7ModulesBeingUsed);
    allFw7ModulesAndDependencies.push.apply(allFw7ModulesAndDependencies, getFw7CustomDependencies());

    return allFw7ModulesAndDependencies;
}

function getFw7CustomDependencies() {
    var fw7CustomDependencies = [];

    for (let i = 0; i < fw7ModulesBeingUsed.length; i++) {
        var module = fw7ModulesConfig[fw7ModulesBeingUsed[i]];

        fw7CustomDependencies.push.apply(fw7CustomDependencies, module.dependencies);
    }

    return fw7CustomDependencies;
}

module.exports = function () {
    return getFw7Scripts();
}