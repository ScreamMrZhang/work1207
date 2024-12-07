//切换元素的第二种方法
function setStyle() {
    var el = document.querySelector("#container");
    var originalClass = el.className;
    el.className ="a "+originalStyle;
}

function toggleClass(className) {
    var el = document.querySelector("#container");
    var originalClassNames = el.className.split(/\s+/);
    var paddingClassName = className.trim();
    var indexOf = originalClassNames.indexOf(paddingClassName);
    indexOf > -1 ? originalClassNames.splice(indexOf, 1) : originalClassNames.push(paddingClassName);
    el.className = originalClassNames.join(" ");
}


//移除指定样式
function removeClassName(className) {
    var el = document.querySelector("#container");
    var originalClassNames = el.className.split(/\s+/);
    var paddingClassName = className.trim();
    var indexOf = originalClassNames.indexOf(paddingClassName);
    if (indexOf > -1) originalClassNames.splice(indexOf, 1);
}

function addClass(className) {
    var el = document.querySelector("#container");
    el.classList.add(className);
}

function removeClass(className) {
    var el = document.querySelector("#container");
    el.classList.remove(className);
}

function toggleClazz(className) {
    var el = document.querySelector("#container");
    el.classList.toggle(className);
}

function replaceClassName(oldClassName, newClass) {
    var el = document.querySelector("#container");
    el.classList.replace(oldClassName, newClass);
}

function localReplace(oldClassName, newClassName) {

}