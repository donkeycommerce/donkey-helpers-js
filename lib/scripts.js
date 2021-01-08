"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addScript = void 0;
function addScript(src, onLoaded, onAlreadyLoaded) {
    if (onAlreadyLoaded === void 0) { onAlreadyLoaded = null; }
    if (!alreadyLoaded(src)) {
        loadScript(src, onLoaded);
    }
    else {
        if (onAlreadyLoaded == null) {
            onAlreadyLoaded = onLoaded;
        }
        onAlreadyLoaded();
    }
}
exports.addScript = addScript;
function loadScript(src, onLoaded) {
    var script = document.createElement('script');
    script.onload = function () {
        onLoaded();
    };
    script.setAttribute('src', src);
    script.async = true;
    document.head.appendChild(script);
}
function alreadyLoaded(src) {
    var scripts = document.querySelectorAll('script');
    var alreadyLoaded = false;
    scripts.forEach(function (element) {
        if (element.src === src) {
            alreadyLoaded = true;
        }
    });
    return alreadyLoaded;
}
exports.default = {
    addScript: addScript
};
