webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $('ul li')
// $('ul').children().text('Hey ;)');

document.querySelector('button').addEventListener('click', function () {
    // let attr = $('input').attr('type');
    (0, _jquery2.default)('input').attr({
        id: 'foo',
        class: 'bar',
        'data-fignja': 1111
    });

    /*console.log(
        $('input').val('asdasd')
    );*/
});

/*$('ul li').html (`
    <h1>Title</h1>
    <p>lorem</p>
    <p>ipsum</p>
    <p>dolor</p>
    <h2>dolor</h2>
`);*/

/*$('ul li').text(function(index, text){
    return `Hello world ${index}`;
});*/

/*let container = $('#container');
let section = $('section.bar');*/
// let firstChildInsideSection = $('#container p:first-child');
// let firstChildInsideSection = $('#container').children().first();
/*let firstChildInsideSection = $('#container').children().eq(0);
console.log(
    firstChildInsideSection.nextAll('p')
);

$('ul li').slice(3, 8).css('color', 'yellow');*/

/*
console.log(
    container.children('.bar').css('color', 'red')
);*/

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\js\\jquery\\node_modules\\jquery\\dist\\jquery.js'");

/***/ })
],[0]);